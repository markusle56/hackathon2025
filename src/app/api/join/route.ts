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

    const post = await postsCollection.findOne({ _id: new ObjectId(postId) });
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    if (typeof post.capacity === "number" && typeof post.people === "number") {
      if (post.people >= post.capacity) {
        return NextResponse.json({ error: "No slots available" }, { status: 403 });
      }
    }

    const result = await postsCollection.findOneAndUpdate(
      { _id: new ObjectId(postId) },
      { $inc: { people: 1 } },
      { returnDocument: "after" } // return updated doc
    );

    if (!result) {
      return NextResponse.json({ error: "Failed to update" }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      updatedPost: result.value,
    });
  } catch (err) {
    console.error("Join route error:", err);
    const message = err instanceof Error ? err.message : "SERVER ERROR";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}