// src/components/navigation/collection-drawer.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Check, BookOpenCheck, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePassportProgress } from "@/hooks/use-passport-progress";
import { Painting } from "@/data/collections";
import styles from "./collection-drawer.module.css";

interface CollectionDrawerProps {
  collectionData: Painting[];
  currentArtworkId: string;
}

export function CollectionDrawer({ collectionData, currentArtworkId }: CollectionDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { isMounted, markAsVisited, hasVisited } = usePassportProgress();

  useEffect(() => {
    if (currentArtworkId) {
      markAsVisited(currentArtworkId);
    }
  }, [currentArtworkId, markAsVisited]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const collectionId = collectionData.length > 0 ? collectionData[0].collection : "";
  const rawCollectionName = collectionId.replace(/-/g, " ");
  
  const hasVisitedAll = isMounted && collectionData.every((artwork) => hasVisited(artwork.id));

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={styles.triggerButton}
        aria-label="Abrir recorrido de la colección"
      >
        <Menu size={20} strokeWidth={1.5} />
        <div className={styles.buttonLabel}>
          <span className={styles.buttonSubtitle}>Explorando</span>
          <span>{rawCollectionName || "Índice"}</span>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className={styles.drawerPortal}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={styles.backdrop}
              onClick={() => setIsOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={styles.drawerPanel}
            >
              <div className={styles.drawerHeader}>
                <div className={styles.headerText}>
                  <span className={styles.drawerSubtitle}>Recorrido actual</span>
                  <h2 className={styles.drawerTitle}>{rawCollectionName}</h2>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className={styles.closeButton}
                  aria-label="Cerrar índice"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>
              
              <nav className={styles.drawerNav}>
                <ul className={styles.artworkList}>
                  {collectionData.map((artwork) => {
                    const isActive = artwork.id === currentArtworkId;
                    const isVisited = isMounted ? hasVisited(artwork.id) : false;

                    return (
                      <li key={artwork.id}>
                        <Link 
                          href={`/${artwork.collection}/${artwork.id}`}
                          className={styles.artworkItem}
                          data-active={isActive}
                          onClick={() => setIsOpen(false)}
                          prefetch={true}
                        >
                          <div 
                            className={styles.stampContainer} 
                            data-visited={isVisited}
                            data-active={isActive}
                          >
                            {isVisited && <Check size={14} strokeWidth={3} />}
                          </div>
                          
                          <div className={styles.itemText}>
                            <span className={styles.artworkTitle}>{artwork.title}</span>
                            <span className={styles.artworkAuthor}>{artwork.artist}</span>
                          </div>
                        </Link>
                      </li>
                    );
                  })}

                  {collectionId && (
                    <li className={styles.quizSection}>
                      {hasVisitedAll ? (
                        <Link 
                          href={`/${collectionId}/quiz`}
                          className={styles.artworkItem}
                          onClick={() => setIsOpen(false)}
                          prefetch={true}
                        >
                          <div className={styles.stampContainer} style={{ borderColor: 'var(--accent-gold)' }}>
                            <BookOpenCheck size={14} color="var(--accent-gold)" strokeWidth={2} />
                          </div>
                          <div className={styles.itemText}>
                            <span className={styles.artworkTitle} style={{ color: 'var(--accent-gold)' }}>Quiz de la colección</span>
                            <span className={styles.artworkAuthor}>Pon a prueba tus conocimientos</span>
                          </div>
                        </Link>
                      ) : (
                        <div className={styles.lockedItem}>
                          <div className={styles.lockStamp}>
                            <Lock size={12} strokeWidth={2} />
                          </div>
                          <div className={styles.itemText}>
                            <span className={styles.artworkTitle}>Quiz de la colección</span>
                            <span className={styles.lockedMessage}>Visita todas las obras para desbloquear</span>
                          </div>
                        </div>
                      )}
                    </li>
                  )}
                </ul>
              </nav>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}