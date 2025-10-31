"use client";

import { Button } from "@/components/ui/button";
import { FullscreenIcon, Minimize, PauseIcon, PlayIcon } from "lucide-react";
import React, { useRef, useState, useEffect, MouseEvent } from "react";
import { useTheme } from "next-themes";

const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export default function VideoPlayer({ videoUrl }: { videoUrl: string }) {
  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showControls, setShowControls] = useState(true);

  // Update progress bar as video plays
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (!isDragging) setCurrentTime(video.currentTime);
    };

    if (video.duration) {
      setDuration(video.duration);
    }

    const setVideoDuration = () => setDuration(video.duration);

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("loadedmetadata", setVideoDuration);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("loadedmetadata", setVideoDuration);
    };
  }, [isDragging]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const fullscreen = document.fullscreenElement === containerRef.current;
      setIsFullscreen(fullscreen);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const updateTimeFromEvent = (e: MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    const progressBar = progressBarRef.current;
    if (!video || !progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * video.duration;
    return Math.max(0, Math.min(newTime, video.duration));
  };

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeekClick = (e: MouseEvent<HTMLDivElement>) => {
    const newTime = updateTimeFromEvent(e);
    if (newTime === undefined) return;

    const video = videoRef.current;
    if (!video) return;

    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleSeekStart = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const newTime = updateTimeFromEvent(e);
    if (newTime !== undefined) setCurrentTime(newTime);
  };

  const handleSeekMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const newTime = updateTimeFromEvent(e);
    if (newTime !== undefined) setCurrentTime(newTime);
  };

  const handleSeekEnd = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const newTime = updateTimeFromEvent(e);
    if (newTime === undefined) return;

    const video = videoRef.current;
    if (!video) return;

    video.currentTime = newTime;
    setCurrentTime(newTime);
    setIsDragging(false);
  };

  const handleFullscreenToggle = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      ref={containerRef}
      className="relative max-w-full rounded-xl overflow-hidden bg-gray-800"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="h-full flex justify-center">
        <video
          ref={videoRef}
          className="rounded-lg w-full h-auto"
          src={videoUrl}
          loop
          playsInline
          muted
          onClick={handlePlayPause}
        />
      </div>

      {/* Controls */}
      <div
        className={`px-4 absolute inset-0 flex flex-col justify-end transition-opacity duration-300 bg-gradient-to-t from-black/60 via-black/20 to-transparent ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          ref={progressBarRef}
          className="relative h-2 w-full bg-gray-500 rounded-md mb-3 cursor-pointer group"
          onClick={handleSeekClick}
          onMouseDown={handleSeekStart}
          onMouseMove={handleSeekMove}
          onMouseUp={handleSeekEnd}
          onMouseLeave={handleSeekEnd}
        >
          <div
            className="absolute top-0 left-0 h-2 bg-black rounded-md transition-all duration-100 ease-linear"
            style={{ width: `${progressPercent}%` }}
          />
          <div
            className="absolute top-[-4px] h-4 w-4 bg-black rounded-full transform -translate-x-1/2 transition-opacity opacity-0 group-hover:opacity-100"
            style={{ left: `${progressPercent}%` }}
          />
        </div>

        <div className="flex items-center justify-between w-full text-gray-400 text-sm mb-2 px-4">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        <div className="flex items-center gap-3 w-full px-4 py-1 opacity-75 transition hover:opacity-100">
          <Button onClick={handlePlayPause}>
            {isPlaying ? (
              <PauseIcon fill="white" />
            ) : (
              <PlayIcon fill={theme === "dark" ? "black" : "white"} />
            )}
          </Button>

          <Button
            onClick={handleFullscreenToggle}
            className="ml-auto text-white px-3 py-2 rounded-md"
          >
            {isFullscreen ? (
              <Minimize stroke={theme === "dark" ? "black" : "white"} />
            ) : (
              <FullscreenIcon stroke={theme === "dark" ? "black" : "white"} />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
