"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import type { ViewState, ViewStateChangeEvent } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { SuggestionsBox } from "@/components/SuggestionsBox";
import { Map, Marker, Popup } from 'react-map-gl/maplibre';
import { Post } from "@/lib/utilis";
import { LuCircleUserRound } from "react-icons/lu";
import { CreateSessionCard } from "@/components/CreateSessionCard";
import SessionCard from "@/components/SessionCard";
import { MdMyLocation } from 'react-icons/md';

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
  const [longitude, setLongitude] = useState<number>(138.60470581054688)
  const [latitude, setLatitude] = useState<number>(-34.9196319580078)
  useEffect(() => {
    (async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const lon = position.coords.longitude;
              const lat = position.coords.latitude;
              setLongitude(lon);
              setLatitude(lat);

              const params = new URLSearchParams();
              if (id) {
                params.set("id", id);
              } else {
                params.set("longitude", String(lon));
                params.set("latitude", String(lat));
              }

              const res = await fetch(`/api/post/suggestion?${params.toString()}`);
              if (!res.ok) throw new Error(`Fetch failed (${res.status})`);
              const { status, data } = await res.json();
              setPosts(data ?? []);
            }
          );
        } else {
          const params = new URLSearchParams();
          if (id) params.set("id", id);
          const res = await fetch(`/api/post/suggestion?${params.toString()}`);
          if (!res.ok) throw new Error(`Fetch failed (${res.status})`);
          const { data } = await res.json();
          setPosts(data ?? []);
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [id, latitude, longitude]);

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

  // const getSessionData = (post: Post) => ({
  //   title: post.title,
  //   description: post.description,
  //   icons: ["/img/users-round.svg", "/img/clock.svg"],
  //   people: post.people,
  //   capacity: post.capacity,
  //   start_time: post.start_time,
  //   end_time: post.end_time,
  //   tags: post.tags
  // });

  const handleMarkerClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handlePopupClose = () => {
    setSelectedPost(null);
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
            <LuCircleUserRound 
              className="text-white text-2xl cursor-pointer" 
              onClick={(e) => {
                e.stopPropagation();
                handleMarkerClick(post);
              }}
            />
          </Marker>
        ))}
        <Marker anchor='center' longitude={longitude} latitude={latitude}>
            <MdMyLocation
              className="text-blue text-2xl" 
            />
        </Marker>

        

        {selectedPost && (
          <Popup
            longitude={selectedPost.long}
            latitude={selectedPost.lat}
            anchor="left"
            closeOnClick={true}
            onClose={handlePopupClose}
            className="custom-popup"
            closeButton={false}
          >
            <SessionCard session={selectedPost} id={id} setId={setId} />
          </Popup>
        )}
      </Map>

      <div className="absolute top-5 left-5 z-5">
        <SuggestionsBox posts={posts} selectedPost={selectedPost} setSelectedPost={setSelectedPost} />
      </div>
      <div className="absolute bottom-12 right-5 z-5">
        <CreateSessionCard/>
      </div>
    </main>
  );
}