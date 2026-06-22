// src/hooks/use-passport-progress.ts
"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "bellas_artes_passport_progress";

export function usePassportProgress() {
  const [visitedArtworks, setVisitedArtworks] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Leer del localStorage solo cuando el componente se monta en el cliente
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setVisitedArtworks(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Error reading passport progress", error);
    }
    setIsMounted(true);
  }, []);

  const markAsVisited = useCallback((artworkId: string) => {
    setVisitedArtworks((prev) => {
      if (prev.includes(artworkId)) return prev;
      
      const updated = [...prev, artworkId];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (error) {
        console.error("Error saving passport progress", error);
      }
      return updated;
    });
  }, []);

  const hasVisited = useCallback((artworkId: string) => {
    return visitedArtworks.includes(artworkId);
  }, [visitedArtworks]);

  return {
    isMounted,
    visitedArtworks,
    markAsVisited,
    hasVisited
  };
}