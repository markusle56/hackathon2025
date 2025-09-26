"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import type { ViewState, ViewStateChangeEvent } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { SuggestionsBox } from "@/components/SuggestionsBox";
import {Map} from 'react-map-gl/maplibre'

export default function HomePage() {
  const [viewState, setViewState] = useState<MapViewState>({
    longitude: 138.60470581054688,
    latitude: -34.91963195800781,
    zoom: 14,
  });

  const mapStyle = `https://api.maptiler.com/maps/019984ee-14dd-7faa-b27e-af15bfe1bed2/style.json?key=${process.env.NEXT_PUBLIC_MAP_API}`

  const handleMove = (evt: ViewStateChangeEvent) => {
    const newView = evt.viewState || {};
    setViewState({
      longitude: newView.longitude ?? viewState.longitude,
      latitude: newView.latitude ?? viewState.latitude,
      zoom: newView.zoom ?? viewState.zoom,
    });
  };

  const offsetLatitude = (delta: number) => {
    const safeLat = viewState.latitude ?? 0; 
    return safeLat + delta; 
  };

  const moveNorth = () => {
    setViewState({
      ...viewState,
      latitude: offsetLatitude(0.01),
    });
  };

  return (
    <main className="top-0 left-0 w-screen h-screen m-0 p-0 overflow-hidden relative">
      <Map
        className="w-full h-full"
        initialViewState={viewState}
        mapStyle={mapStyle}
        onMove={handleMove}>

          
        </Map>

      <div className="absolute top-0 left-0 z-5">
        <SuggestionsBox/>
      </div>
    </main>
  );
}