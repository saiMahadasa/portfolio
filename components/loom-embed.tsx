"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa";

type LoomEmbedProps = {
  videoId: string;
  title: string;
  thumbnailUrl?: string;
};

export default function LoomEmbed({ videoId, title, thumbnailUrl }: LoomEmbedProps) {
  const [playing, setPlaying] = useState(false);

  const embedUrl = `https://www.loom.com/embed/${videoId}?autoplay=1&hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`;
  const thumbnail = thumbnailUrl || `https://cdn.loom.com/sessions/thumbnails/${videoId}-with-play.gif`;

  if (playing) {
    return (
      <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
        <iframe
          src={embedUrl}
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          allow="autoplay; fullscreen"
          title={title}
        />
      </div>
    );
  }

  return (
    <div
      className="relative w-full rounded-xl overflow-hidden cursor-pointer group"
      style={{ paddingTop: "56.25%" }}
      onClick={() => setPlaying(true)}
      role="button"
      aria-label={`Play demo: ${title}`}
    >
      <img
        src={thumbnail}
        alt={`${title} demo preview`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 to-gray-900/40 group-hover:from-gray-900/70 group-hover:to-gray-900/50 transition-all duration-300 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-white transition-all duration-300">
            <FaPlay className="text-gray-900 text-lg ml-1" />
          </div>
          <span className="text-white/90 text-sm font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
            Watch Demo
          </span>
        </div>
      </div>
    </div>
  );
}
