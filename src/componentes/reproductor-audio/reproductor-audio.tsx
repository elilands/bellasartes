"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Headphones } from "lucide-react";
import styles from "./reproductor-audio.module.css";

interface Props {
  rutaAudio: string;
}

export function ReproductorAudio({ rutaAudio }: Props) {
  const [estaReproduciendo, setEstaReproduciendo] = useState(false);
  const [progreso, setProgreso] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Evitamos hydration errors inicializando el audio solo en cliente
    audioRef.current = new Audio(rutaAudio);
    
    const audio = audioRef.current;
    
    const actualizarProgreso = () => {
      if (audio.duration) {
        setProgreso((audio.currentTime / audio.duration) * 100);
      }
    };

    const manejarFin = () => {
      setEstaReproduciendo(false);
      setProgreso(0);
    };

    audio.addEventListener("timeupdate", actualizarProgreso);
    audio.addEventListener("ended", manejarFin);

    return () => {
      audio.removeEventListener("timeupdate", actualizarProgreso);
      audio.removeEventListener("ended", manejarFin);
      audio.pause();
    };
  }, [rutaAudio]);

  const alternarReproduccion = () => {
    if (!audioRef.current) return;

    if (estaReproduciendo) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Manejo silencioso si el navegador bloquea autoplay o falla la carga
      });
    }
    setEstaReproduciendo(!estaReproduciendo);
  };

  return (
    <div className={styles.contenedor}>
      <button 
        onClick={alternarReproduccion}
        className={styles.botonPrincipal}
        aria-label={estaReproduciendo ? "Pausar audio curatorial" : "Reproducir audio curatorial"}
      >
        {estaReproduciendo ? (
          <Pause fill="currentColor" size={20} />
        ) : (
          <Play fill="currentColor" size={20} className={styles.iconoPlay} />
        )}
      </button>
      
      <div className={styles.info}>
        <div className={styles.etiqueta}>
          <Headphones size={14} />
          <span>Audio curatorial</span>
        </div>
        <div className={styles.barraProgresoFondo}>
          <div 
            className={styles.barraProgresoLlena} 
            style={{ width: `${progreso}%` }}
          />
        </div>
      </div>
    </div>
  );
}