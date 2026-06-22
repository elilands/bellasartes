"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Camera, Download, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePassportProfile } from "@/hooks/use-passport-profile";
import { Passport } from "@/components/passport/passport";
import styles from "./page.module.css";

// Definición de las 4 colecciones clave para obtener el pasaporte completo
const PASSPORT_COLLECTIONS = [
  { id: "murales", name: "Muralismo", location: "segundo y tercer piso" },
  { id: "escultura", name: "Escultura", location: "planta baja y exteriores" },
  { id: "pintura", name: "Pintura de caballete", location: "salas de exhibición temporales" },
  { id: "arquitectura", name: "Historia del edificio", location: "fachada principal y vestíbulo" }
];

export default function LandingPage() {
  const { isMounted, profile, updateName, updatePhoto } = usePassportProfile();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Estado para el modal de sugerencia
  const [hintModal, setHintModal] = useState<{ isOpen: boolean; collectionName: string; location: string }>({
    isOpen: false,
    collectionName: "",
    location: "",
  });

  if (!isMounted) return null;

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      updatePhoto(e.target.files[0]);
    }
  };

  const handleStampClick = (collectionId: string, collectionName: string, location: string) => {
    const hasStamp = profile.earnedStamps.includes(collectionId);
    
    if (hasStamp) {
      // Si ya la tiene, no hacemos nada o podríamos mostrar el detalle de la estampa
      return;
    }

    // Si no la tiene, mostramos la instrucción
    setHintModal({
      isOpen: true,
      collectionName,
      location,
    });
  };

  const handleDownload = () => {
    // Aquí puedes disparar window.print() o generar un canvas/PDF
    window.print();
  };

  const hasCompletedPassport = profile.earnedStamps.length === PASSPORT_COLLECTIONS.length;

  return (
    <Passport pageNumber="00">
      <main className={styles.landingContainer}>
        
        <header className={styles.header}>
          <h1 className={styles.title}>Pasaporte digital</h1>
          <p className={styles.subtitle}>Palacio de Bellas Artes</p>
        </header>

        <section className={styles.profileSection}>
          <div className={styles.photoUploader} onClick={handlePhotoClick}>
            {profile.photo ? (
              <img src={profile.photo} alt="Perfil del visitante" className={styles.avatarImage} />
            ) : (
              <div className={styles.uploadPlaceholder}>
                <Camera size={24} strokeWidth={1.5} />
                <span className={styles.uploadText}>Añadir foto</span>
              </div>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="image/*" 
              className={styles.hiddenInput} 
            />
          </div>

          <div className={styles.nameInputContainer}>
            <label htmlFor="visitor-name" className={styles.nameLabel}>Titular del pasaporte</label>
            <input
              id="visitor-name"
              type="text"
              value={profile.name}
              onChange={(e) => updateName(e.target.value)}
              placeholder="Escribe tu nombre"
              className={styles.nameInput}
              spellCheck="false"
            />
          </div>
        </section>

        <section className={styles.stampsSection}>
          <h2 className={styles.sectionTitle}>Tus colecciones</h2>
          
          <div className={styles.stampsGrid}>
            {PASSPORT_COLLECTIONS.map((collection) => {
              const hasStamp = profile.earnedStamps.includes(collection.id);
              
              return (
                <div 
                  key={collection.id} 
                  className={styles.stampCard}
                  onClick={() => handleStampClick(collection.id, collection.name, collection.location)}
                >
                  <div className={styles.stampImageWrapper}>
                    {/* Reemplazar src con las URL de los PNGs transparentes de las estampas */}
                    <Image
                      src={`https://via.placeholder.com/140x140.png?text=${collection.name.substring(0,3)}`}
                      alt={`Estampa de ${collection.name}`}
                      fill
                      className={`${styles.stampImage} ${hasStamp ? styles.stampUnlocked : styles.stampLocked}`}
                    />
                    {!hasStamp && (
                      <Lock size={24} color="var(--text-secondary)" style={{ position: 'absolute', opacity: 0.5 }} />
                    )}
                  </div>
                  <span className={styles.stampName}>{collection.name}</span>
                </div>
              );
            })}
          </div>
        </section>

        <div className={styles.downloadSection}>
          <button 
            className={styles.downloadButton} 
            disabled={!hasCompletedPassport || !profile.name}
            onClick={handleDownload}
          >
            <Download size={18} />
            <span>Descargar documento oficial</span>
          </button>
        </div>

      </main>

      <AnimatePresence>
        {hintModal.isOpen && (
          <div className={styles.modalOverlay} onClick={() => setHintModal({ ...hintModal, isOpen: false })}>
            <motion.div 
              className={styles.modalContent}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className={styles.modalTitle}>Estampa bloqueada</h3>
              <p className={styles.modalText}>
                Para obtener la estampa de <strong>{hintModal.collectionName}</strong>, dirígete a la zona de <strong>{hintModal.location}</strong>. 
                Escanea el código QR junto a alguna de las obras, explora el contenido y completa el quiz final de la colección.
              </p>
              <p className={styles.modalText} style={{ fontSize: '0.8rem', marginTop: '-0.5rem' }}>
                Pregunta a un encargado del recinto en caso de no encontrarla.
              </p>
              <button 
                className={styles.modalClose}
                onClick={() => setHintModal({ ...hintModal, isOpen: false })}
              >
                Entendido
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Passport>
  );
}