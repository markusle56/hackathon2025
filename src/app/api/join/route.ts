import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(request: Request) {
  try {
    const { postId } = await request.json();

    if (!postId || typeof postId !== "string") {
      return NextResponse.json({ error: "Invalid postId" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();
    const postsCollection = db.collection("post");

    const result = await postsCollection.updateOne(
      { _id: new ObjectId(postId) },
      { $inc: { joined: 1 } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "SERVER ERROR";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}