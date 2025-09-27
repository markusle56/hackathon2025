"use client";

import { useState, useEffect, useRef } from "react";
import type { ViewState, ViewStateChangeEvent } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { SuggestionsBox } from "@/components/SuggestionsBox";
import { Map, Marker, Popup } from 'react-map-gl/maplibre';
import {Post}  from "@/lib/utilis";
import { GiPlasticDuck } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { CreateSessionCard } from "@/components/CreateSessionCard";
import SessionCard from "@/components/SessionCard";
import { Button } from "@/components/ui/button";

import { FAQ } from '@/components/FAQ';

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
  const [mySession, setMySession] = useState("");
  const [myPost, setMyPost] = useState<Post | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [longitude, setLongitude] = useState<number>(138.60470581054688)
  const [latitude, setLatitude] = useState<number>(-34.9196319580078)
  const [suggestionBox, setSuggestionBox] = useState(false)
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
              if (mySession) {
                params.set("id", mySession);
              } else {
                params.set("longitude", String(lon));
                params.set("latitude", String(lat));
              }

              const res = await fetch(`/api/post/suggestion?${params.toString()}`);
              if (!res.ok) throw new Error(`Fetch failed (${res.status})`);
              const { data } = await res.json();
              setPosts(data ?? []);
            }
          );
        } else {
          const params = new URLSearchParams();
          if (mySession) params.set("id", mySession);
          const res = await fetch(`/api/post/suggestion?${params.toString()}`);
          if (!res.ok) throw new Error(`Fetch failed (${res.status})`);
          const { data } = await res.json();
          setPosts(data ?? []);
        }
        if (mySession) {
          try {
            const params = new URLSearchParams()
            params.set("id", mySession);
            const res = await fetch(`api/post?${params.toString()}`);
            if (!res.ok) throw new Error('Fetch my session failed');
            const { data } = await res.json();
            setMyPost(data);
          } catch (err) {
            console.error(err);
          }
        } else {
          setMyPost(null)
        }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [mySession, latitude, longitude]);

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
      padding: viewState.padding ?? { left: 0, right: 0, top: 0, bottom: 0 },
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

  // const offsetLatitude = (delta: number) => {
  //   const safeLat = viewState.latitude ?? 0; 
  //   return safeLat + delta; 
  // };

  // const moveNorth = () => {
  //   if (!mapRef.current) return;
  //   const map = mapRef.current.getMap();
  //   if (!map) return;

  //   map.easeTo({
  //     center: [viewState.longitude, viewState.latitude + 0.01],
  //     duration: 500,
  //   });
  // };

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
        {posts.map((post, idx) => 
          (  
              <Marker key={post._id ?? idx} anchor='center' longitude={post.long} latitude={post.lat}>
                <GiPlasticDuck 
                  className="text-yellow-500 text-3xl cursor-pointer text-shadow-4 text-shadow-blue-800" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMarkerClick(post);
                  }}
                />
              </Marker>
            )
        )}
        { myPost && (
          <Marker anchor='center' longitude={myPost.long} latitude={myPost.lat}>
            <GiPlasticDuck 
              className="text-orange-500 text-5xl cursor-pointer text-shadow-4 text-shadow-blue-800" 
              onClick={(e) => {
                    e.stopPropagation();
                    handleMarkerClick(myPost);
                  }}
            />
          </Marker>

        )}
        <Marker anchor='center' longitude={longitude} latitude={latitude}>
            <FaLocationDot
              className="text-red-500 text-3xl " 
            />
        </Marker>

        
        {selectedPost &&  (
           <Popup
            longitude={selectedPost.long}
            latitude={selectedPost.lat}
            anchor="left"
            closeOnClick={true}
            onClose={handlePopupClose}
            className="custom-popup"
            closeButton={false}
          >
            <SessionCard session={selectedPost} mySession={mySession} setMySession={setMySession} handlePopupClose={handlePopupClose} />
          </Popup>
        )}
      </Map>
      <div className="absolute left-5 top-20 md:hidden flex flex-col" onClick={() => setSuggestionBox(!suggestionBox)}>
        {!suggestionBox && (
          <Button
          className="bg-black text-white"
          onClick={() => setSuggestionBox(!suggestionBox)}
            >Suggest</Button>
        )}
          {suggestionBox && (
            <SuggestionsBox posts={posts} selectedPost={selectedPost} setSelectedPost={setSelectedPost}/>
          )}
      </div>
      <div className="absolute top-5 left-5 z-5 md:flex hidden">
        <SuggestionsBox posts={posts} selectedPost={selectedPost} setSelectedPost={setSelectedPost} />
      </div>
      <div className="absolute sm:bottom-1 left-1/2 -translate-x-1/2 bottom-1 z-50 w-15 sm:max-w-20">
        <img src="/NexusS_blue.svg" className="w-full" alt="Logo"></img>
      </div>
      <div className="absolute  z-5 top-6 left-5 sm:bottom-12 sm:right-5 sm:top-auto sm:left-auto">
        <CreateSessionCard longitude={longitude} latitude={latitude} setMySession={setMySession}/>
      </div>

      <div className="absolute top-4 right-3 z-8">
        <FAQ></FAQ>
      </div>
    </main>
  );
}