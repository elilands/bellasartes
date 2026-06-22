"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./marble-surface.module.css";

export function MarbleSurface() {
  const { scrollYProgress } = useScroll();
  
  // Transformamos el scroll en el movimiento de una luz virtual (eje Y)
  const lightPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Hacemos que la luz se vuelva ligeramente más intensa al bajar
  const lightOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.4]);

  return (
    <div className={styles.surfaceContainer} aria-hidden="true">
      {/* Filtro de ruido estático por hardware (textura de mármol/piedra) */}
      <svg className={styles.noiseFilter}>
        <filter id="noise">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.8" 
            numOctaves="4" 
            stitchTiles="stitch" 
          />
          <feColorMatrix type="matrix" values="
            1 0 0 0 0,
            0 1 0 0 0,
            0 0 1 0 0,
            0 0 0 0.03 0
          " />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* Luz ambiental dinámica atada al scroll */}
      <motion.div 
        className={styles.ambientLight}
        style={{ 
          top: lightPosition,
          opacity: lightOpacity
        }}
      />
    </div>
  );
}