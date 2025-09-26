import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { calculateScore, Post, } from "@/lib/utilis";



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
            if (!ObjectId.isValid(id)) throw Error("Invalid id");
            const currPost = await postsCollection.findOne({_id: new ObjectId(id)})
            if (!currPost) {
                throw Error("Cannot find the post")
            }
            const curr: Post = {
                _id: String(currPost._id),
                title: String(currPost.title ?? ''),
                description: String(currPost.description ?? ''),
                img: String(currPost.img ?? ''),
                tags: Array.isArray(currPost.tags) ? currPost.tags.map(String) : [],
                lat: Number(currPost.lat ?? 0),
                long: Number(currPost.long ?? (currPost.longtitude ?? 0)),
                start_time: currPost.start_time ? new Date(currPost.start_time) : new Date(0),
                end_time: currPost.end_time ? new Date(currPost.end_time) : new Date(0),
                capacity: Number(currPost.slots ?? 0),
                people: Number(currPost.people ?? 0),
                terminate: Boolean(currPost.terminate ?? false),
            };
            const postsDocs = await postsCollection
                .find({
                    terminate: false,
                    end_time: { $gt: now },
                    _id: { $ne: currPost._id }
                })
                .toArray();
            const posts: Post[] = postsDocs.map((p: any) => ({
                _id: String(p._id),
                title: String(p.title ?? ''),
                description: String(p.description ?? ''),
                img: String(p.img ?? ''),
                tags: Array.isArray(p.tags) ? p.tags.map(String) : [],
                lat: Number(p.lat ?? 0),
                long: Number(p.long ?? (p.longtitude ?? 0)),
                start_time: p.start_time ? new Date(p.start_time) : new Date(0),
                end_time: p.end_time ? new Date(p.end_time) : new Date(0),
                capacity: Number(p.slots ?? 0),
                people: Number(p.people ?? 0),
                terminate: Boolean(p.terminate ?? false),
            }));

            const topMatch = calculateScore(curr, posts);

            return NextResponse.json(
                {status: 200, data: topMatch}
            );
        } else if (longitude && latitude) {
            const curr: Post = {
                _id: String(''),
                title: String(''),
                description: String(''),
                img: String(''),
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
                .find({
                    terminate: false,
                    end_time: { $gt: now }
                })
                .toArray();
            const posts: Post[] = postsDocs.map((p: any) => ({
                _id: String(p._id),
                title: String(p.title ?? ''),
                description: String(p.description ?? ''),
                img: String(p.img ?? ''),
                tags: Array.isArray(p.tags) ? p.tags.map(String) : [],
                lat: Number(p.lat ?? 0),
                long: Number(p.long ?? (p.longtitude ?? 0)),
                start_time: p.start_time ? new Date(p.start_time) : new Date(0),
                end_time: p.end_time ? new Date(p.end_time) : new Date(0),
                capacity: Number(p.slots ?? 0),
                people: Number(p.people ?? 0),
                terminate: Boolean(p.terminate ?? false),
            }));

            const topMatch = calculateScore(curr, posts);

            return NextResponse.json(
                {status: 200, data: topMatch}
            );
        } else {
            const postsDocs = await postsCollection
                .find({
                    terminate: false,
                    end_time: { $gt: now }
                })
                .toArray();
            const suggest: Post[] = postsDocs.slice(0, 10).map((p: any) => ({
                _id: String(p._id),
                title: String(p.title ?? ''),
                description: String(p.description ?? ''),
                img: String(p.img ?? ''),
                tags: Array.isArray(p.tags) ? p.tags.map(String) : [],
                lat: Number(p.lat ?? 0),
                long: Number(p.long ?? (p.longtitude ?? 0)),
                start_time: p.start_time ? new Date(p.start_time) : new Date(0),
                end_time: p.end_time ? new Date(p.end_time) : new Date(0),
                capacity: Number(p.slots ?? 0),
                people: Number(p.people ?? 0),
                terminate: Boolean(p.terminate ?? false),
            }));
            return NextResponse.json({ status: 200, data: suggest });
         }
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message || 'SERVER ERROR' },
            { status: 500 }
        );
    }
}