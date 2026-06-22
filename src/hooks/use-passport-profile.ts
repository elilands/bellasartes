// src/hooks/use-passport-profile.ts
"use client";

import { useState, useEffect } from "react";

const PROFILE_KEY = "bellas_artes_profile";

interface UserProfile {
  name: string;
  photo: string | null;
  earnedStamps: string[];
}

const defaultProfile: UserProfile = {
  name: "",
  photo: null,
  earnedStamps: [],
};

export function usePassportProfile() {
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(PROFILE_KEY);
      if (stored) {
        setProfile(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Error al leer el perfil", error);
    }
    setIsMounted(true);
  }, []);

  const saveProfile = (newProfile: UserProfile) => {
    try {
      localStorage.setItem(PROFILE_KEY, JSON.stringify(newProfile));
      setProfile(newProfile);
    } catch (error) {
      console.error("Error al guardar el perfil (posible límite de tamaño)", error);
      alert("La imagen es demasiado grande. Por favor, intenta con una más pequeña.");
    }
  };

  const updateName = (name: string) => {
    saveProfile({ ...profile, name });
  };

  const updatePhoto = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      saveProfile({ ...profile, photo: base64String });
    };
    reader.readAsDataURL(file);
  };

  // Esta función simula la adición de una estampa (se llamaría desde el final del quiz)
  const addStamp = (collectionId: string) => {
    if (!profile.earnedStamps.includes(collectionId)) {
      saveProfile({
        ...profile,
        earnedStamps: [...profile.earnedStamps, collectionId],
      });
    }
  };

  return {
    isMounted,
    profile,
    updateName,
    updatePhoto,
    addStamp,
  };
}