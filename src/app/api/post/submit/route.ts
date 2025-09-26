import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const { title, description, img, lat, long, tags, start_time, end_time, capacity } =
      await request.json();

    const client = await clientPromise;
    const db = client.db();

    const postsCollection = db.collection("post");

    const newPost = await postsCollection.insertOne({
        title, 
        description,
        img,
        tags,
        lat,
        long,
        start_time: new Date(start_time),
        end_time: new Date(end_time),
        slots,
        people:1,
        terminate: false,
    });

    return NextResponse.json({ status: 200, postId: newPost.insertedId });
  } catch (err) {
    const message = err instanceof Error ? err.message : "SERVER ERROR";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
