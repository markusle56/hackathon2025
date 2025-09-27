import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId, WithId } from "mongodb";
import { calculateScore, Post } from "@/lib/utilis";

type RawPost = {
  _id?: ObjectId | string;
  title?: string;
  description?: string;
  img?: string;
  tags?: string[] | string;
  lat?: number | string;
  long?: number | string;
  longtitude?: number | string;
  start_time?: string | Date | number;
  end_time?: string | Date | number;
  capacity?: number | string;
  people?: number | string;
  terminate?: boolean | string | number;
};

const toPost = (p: WithId<RawPost>): Post => {
  const tags = Array.isArray(p.tags)
    ? p.tags.map(String)
    : typeof p.tags === "string"
    ? p.tags.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  const parseDate = (v?: string | Date | number) => {
    if (v instanceof Date) return v;
    if (typeof v === "number" && Number.isFinite(v)) return new Date(v);
    if (typeof v === "string" && v.trim() !== "") {
      const d = new Date(v);
      if (!Number.isNaN(d.getTime())) return d;
    }
    return new Date(0);
  };

  return {
    _id: String(p._id ?? ""),
    title: String(p.title ?? ""),
    description: String(p.description ?? ""),
    img: String(p.img ?? ""),
    tags,
    lat: Number(p.lat ?? 0),
    long: Number(p.long ?? p.longtitude ?? 0),
    start_time: parseDate(p.start_time),
    end_time: parseDate(p.end_time),
    capacity: Number(p.capacity ?? 0),
    people: Number(p.people ?? 0),
    terminate: Boolean(p.terminate ?? false),
  };
};

export async function GET(req: Request) {
  try {
    const now = new Date();
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    const longitude = url.searchParams.get("longitude");
    const latitude = url.searchParams.get("latitude");

    const client = await clientPromise;
    const db = client.db();
    const postsCollection = db.collection("post");

    if (id) {
      if (!ObjectId.isValid(id)) {
        return NextResponse.json({ error: "Invalid id" }, { status: 400 });
      }

      const currDoc = (await postsCollection.findOne({ _id: new ObjectId(id) })) as WithId<RawPost> | null;
      if (!currDoc) {
        return NextResponse.json({ error: "Cannot find the post" }, { status: 404 });
      }

      const curr = toPost(currDoc);

      const postsDocs = await postsCollection
        .find<RawPost>({
          terminate: false,
          end_time: { $gt: now },
          _id: { $ne: currDoc._id as ObjectId },
        })
        .toArray();

      const posts: Post[] = postsDocs.map((d) => toPost(d as WithId<RawPost>));
      const topMatch = calculateScore(curr, posts);

      return NextResponse.json({ status: 200, data: topMatch });
    } else if (longitude && latitude) {
      const curr: Post = {
        _id: "",
        title: "",
        description: "",
        img: "",
        tags: [],
        lat: Number(latitude),
        long: Number(longitude),
        start_time: new Date(0),
        end_time: new Date(0),
        capacity: 0,
        people: 0,
        terminate: false,
      };

      const postsDocs = await postsCollection
        .find<RawPost>({
          terminate: false,
          end_time: { $gt: now },
        })
        .toArray();

      const posts: Post[] = postsDocs.map((d) => toPost(d as WithId<RawPost>));
      const topMatch = calculateScore(curr, posts);

      return NextResponse.json({ status: 200, data: topMatch });
    } else {
      const postsDocs = await postsCollection
        .find<RawPost>({
          terminate: false,
          end_time: { $gt: now },
        })
        .toArray();

      const suggest: Post[] = postsDocs.slice(0, 10).map((d) => toPost(d as WithId<RawPost>));
      return NextResponse.json({ status: 200, data: suggest });
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}