import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";


export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    const client = await clientPromise;
    const db = client.db();
    const postsCollection = db.collection("post");

    if (id) {
      const post = await postsCollection.findOne({ _id: new ObjectId(id) });
      if (!post) {
        return NextResponse.json(
          { error: "Cannot find post!" },
          { status: 404 }
        );
      }
      return NextResponse.json({ status: 200, data: post });
    }

    const now = new Date();

    const posts = await postsCollection
      .find({
        terminate: false,
        end_time: { $gt: now }
      })
      .toArray();

    return NextResponse.json({ status: 200, data: posts });
  } catch (err) {
    const message = err instanceof Error ? err.message : "SERVER ERROR";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
