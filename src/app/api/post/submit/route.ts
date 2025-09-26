import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const { title, description, img, lad, long, tags, start_time, end_time, slots } =
      await request.json();

    const client = await clientPromise;
    const db = client.db();

    const postsCollection = db.collection("post");

    const newPost = await postsCollection.insertOne({
        title, 
        description,
        img,
        tags,
        lad,
        long,
        start_time,
        end_time,
        slots,
        terminate: false,
    });

    return NextResponse.json({ status: 200, postId: newPost.insertedId });
  } catch (err) {
    const message = err instanceof Error ? err.message : "SERVER ERROR";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
