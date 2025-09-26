import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { distanceMeasure, overlapTime, tagSimilarScore } from "@/lib/ultis";



export async function GET(req: Request) {
    try { 
        const now = new Date();
        const url = new URL(req.url);
        const id = url.searchParams.get("id");

        if (!id) {
            throw Error("No id found!")
        }
        const client = await clientPromise;
        const db = client.db();
        const postsCollection = db.collection("post");
        
        const currPost = await postsCollection.findOne({_id: new ObjectId(id)})

        return NextResponse.json(
            {status: 200}
        );
    } catch (err: any) {
        return NextResponse.json(
            { error: err.message || 'SERVER ERROR' },
            { status: 500 }
        );
    }
}