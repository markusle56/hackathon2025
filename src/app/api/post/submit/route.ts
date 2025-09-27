import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { supabase } from "@/lib/supabase";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const lat = parseFloat(formData.get("lat") as string);
    const long = parseFloat(formData.get("long") as string);
    function buildDateFromTime(timeStr: string) {
      const [hours, minutes] = timeStr.split(":").map(Number);
      const now = new Date();
      now.setHours(hours, minutes, 0, 0); // set h, m, s, ms
      return now;
    }
    const start_time = buildDateFromTime(formData.get("start_time") as string);
    const end_time = buildDateFromTime(formData.get("end_time") as string);
    const capacity = parseInt(formData.get("capacity") as string);
    // Split tags by commas and trim whitespace
    const tags = (formData.get("tags") as string)
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    if (!title || !description || isNaN(lat) || isNaN(long)) {
      return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
    }

    const file = formData.get("file") as File | null;
    let imageUrl: string | null = null;

    if (file && file.size > 0) {
      const fileName = `${Date.now()}-${file.name}`;
      const arrayBuffer = await file.arrayBuffer();
      const { error } = await supabase.storage
        .from("post-images")
        .upload(fileName, new Uint8Array(arrayBuffer), {
          contentType: file.type,
        });

      if (error) throw error;

      const { data: urlData } = supabase.storage
        .from("post-images")
        .getPublicUrl(fileName);

      imageUrl = urlData.publicUrl;
    }

    const client = await clientPromise;
    const db = client.db();
    const postsCollection = db.collection("post");

    const newPost = await postsCollection.insertOne({
      title,
      description,
      img: imageUrl,
      lat,
      long,
      tags,
      start_time,
      end_time,
      capacity: capacity,
      people: 1,
      terminate: false,
    });

    const response = NextResponse.json({
      success: true,
      postId: newPost.insertedId,
      img: imageUrl,
    });
    const cookieStore = await cookies();
    const existingCookie = cookieStore.get("postIds")?.value;

    let postIds: string[] = [];
    if (existingCookie) {
      try {
        postIds = JSON.parse(existingCookie);
      } catch {
        postIds = [];
      }
    }

    // Add new postId
    postIds.push(newPost.insertedId.toString());

    // Save back to cookies with expiry = end_time
    response.cookies.set("postIds", JSON.stringify(postIds), {
      httpOnly: false,
      path: "/",
      expires: end_time,
    });

    return response;
  } catch (err) {
    console.error("Error creating post:", err);
    const message = err instanceof Error ? err.message : "SERVER ERROR";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}