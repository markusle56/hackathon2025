import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";



export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Require post id" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();
    const postsCollection = db.collection("post");

    const updated = await postsCollection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { terminate: true } },
      { returnDocument: "after" } 
    );

    if (!updated.value) {
      return NextResponse.json(
        { error: "Cannot find the post!" },
        { status: 404 }
      );
    }

    return NextResponse.json({ status: 200, message: "Post updated" });
  } catch (err) {
    const message = err instanceof Error ? err.message : "SERVER ERROR";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
