"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import type { ViewState, ViewStateChangeEvent } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { SuggestionsBox } from "@/components/SuggestionsBox";
import { Map, Marker } from 'react-map-gl/maplibre';
import { Post } from "@/lib/utilis";
import { LuCircleUserRound } from "react-icons/lu";

const PICKEDZOOM: number = 15;

export default function HomePage() {
  const mapRef = useRef<React.ElementRef<typeof Map>>(null);
  const [viewState, setViewState] = useState<ViewState>({
    longitude: 138.60470581054688,
    latitude: -34.91963195800781,
    zoom: 14,
    bearing: 0,
    pitch: 0,
    padding: { left: 0, right: 0, top: 0, bottom: 0 },
  });
  const [id, setId] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/post");
        if (!res.ok) throw new Error(`Fetch failed (${res.status})`);
        const { status, data } = await res.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [id]);

  useEffect(() => {
    if (!selectedPost?.long || !selectedPost?.lat || !mapRef.current) {
      console.warn('selectedPost missing coords or map not ready:', selectedPost);
      return;
    }

    const map = mapRef.current.getMap();
    if (!map) return;

    const newViewState: ViewState = {
      longitude: selectedPost.long,
      latitude: selectedPost.lat,
      zoom: PICKEDZOOM,
      bearing: 0,
      pitch: 0,
    };

    console.log('Flying map to:', newViewState);
    map.flyTo({
      center: [newViewState.longitude, newViewState.latitude],
      zoom: newViewState.zoom,
      bearing: newViewState.bearing,
      pitch: newViewState.pitch,
      duration: 1000,
    });
  }, [selectedPost]);

  const mapStyle = `https://api.maptiler.com/maps/019984ee-14dd-7faa-b27e-af15bfe1bed2/style.json?key=${process.env.NEXT_PUBLIC_MAP_API}`;

  const handleMoveEnd = (evt: ViewStateChangeEvent) => {
    setViewState(evt.viewState);
  };

  const offsetLatitude = (delta: number) => {
    const safeLat = viewState.latitude ?? 0; 
    return safeLat + delta; 
  };

  const moveNorth = () => {
    if (!mapRef.current) return;
    const map = mapRef.current.getMap();
    if (!map) return;

    map.easeTo({
      center: [viewState.longitude, viewState.latitude + 0.01],
      duration: 500,
    });
  };

  return (
    <main className="top-0 left-0 w-screen h-screen m-0 p-0 overflow-hidden relative">
      <Map
        ref={mapRef}
        initialViewState={viewState}
        onMoveEnd={handleMoveEnd}
        mapStyle={mapStyle}>
        {posts.map((post, idx) => (
          <Marker key={post._id ?? idx} anchor='center' longitude={post.long} latitude={post.lat}>
            <LuCircleUserRound />
          </Marker>
        ))}
      </Map>

      <div className="absolute top-5 left-5 z-5">
        <SuggestionsBox posts={posts} selectedPost={selectedPost} setSelectedPost={setSelectedPost} />
      </div>
    </main>
  );
}