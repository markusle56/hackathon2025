import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const lat = parseFloat(formData.get("lat") as string);
    const long = parseFloat(formData.get("long") as string);
    const start_time = new Date(parseInt(formData.get("start_time") as string));
    const end_time = new Date(parseInt(formData.get("end_time") as string));
    const capacity = parseInt(formData.get("slots") as string);

    if (!title || !description || isNaN(lat) || isNaN(long)) {
      return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
    }

    const file = formData.get("file") as File | null;
    let imageUrl: string | null = null;

    if (file) {
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
      start_time,
      end_time,
      capacity: capacity,
      people: 1,
      terminate: false,
    });

    return NextResponse.json({
      success: true,
      postId: newPost.insertedId,
      img: imageUrl,
    });
  } catch (err) {
    console.error("Error creating post:", err);
    const message = err instanceof Error ? err.message : "SERVER ERROR";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}