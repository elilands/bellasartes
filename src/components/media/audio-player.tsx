// src/components/media/audio-player.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./audio-player.module.css";

interface AudioPlayerProps {
  src: string;
  label?: string;
}

export function AudioPlayer({ src, label = "Escuchar relato" }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // Dimensiones matemáticas para el anillo de progreso SVG
  const circleRadius = 26;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circleCircumference - (progress / 100) * circleCircumference;

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const current = audioRef.current.currentTime;
    const total = audioRef.current.duration;
    
    if (total > 0) {
      setProgress((current / total) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  // Limpieza del evento al desmontar
  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  return (
    <div className={styles.playerContainer}>
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        preload="metadata"
      />

      <button 
        className={styles.playButton} 
        onClick={togglePlay}
        aria-label={isPlaying ? "Pausar relato" : "Reproducir relato"}
      >
        {/* Anillo base (riel) */}
        <svg className={styles.progressRing} width="60" height="60">
          <circle
            className={styles.ringTrack}
            cx="30"
            cy="30"
            r={circleRadius}
            strokeWidth="2"
            fill="transparent"
          />
          {/* Anillo animado de progreso */}
          <circle
            className={styles.ringIndicator}
            cx="30"
            cy="30"
            r={circleRadius}
            strokeWidth="2"
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={isNaN(strokeDashoffset) ? circleCircumference : strokeDashoffset}
          />
        </svg>

        <div className={styles.iconWrapper}>
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="pause"
                initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <Pause size={20} fill="currentColor" strokeWidth={0} />
              </motion.div>
            ) : (
              <motion.div
                key="play"
                initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                transition={{ duration: 0.2 }}
                style={{ marginLeft: "3px" }} /* Corrección óptica para el ícono de play */
              >
                <Play size={20} fill="currentColor" strokeWidth={0} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>

      <div className={styles.labelContainer}>
        <span className={styles.audioLabel}>{label}</span>
        {/* Opcional: mostrar tiempo. Se oculta si no ha cargado */}
        {duration > 0 && (
          <span className={styles.timeIndicator}>
            {isPlaying ? 'Reproduciendo...' : `${Math.ceil(duration / 60)} min`}
          </span>
        )}
      </div>
    </div>
  );
}