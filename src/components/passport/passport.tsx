// src/components/passport/passport.tsx

import React from "react";
import styles from "./passport.module.css";

interface PassportProps {
  children: React.ReactNode;
  pageNumber?: string;
}

export function Passport({ children, pageNumber = "00" }: PassportProps) {
  return (
    <main className={styles.passportContainer}>
      <div className={styles.decorativeFrame}>
        <div className={styles.bookContent}>
          {children}
        </div>
      </div>
      
      <footer className={styles.passportFooter}>
        <span className={styles.institution}>Palacio de Bellas Artes</span>
        <div className={styles.pageIndicator}>
          {pageNumber !== "00" ? `Estampa No. ${pageNumber}` : "Acceso General"}
        </div>
      </footer>
    </main>
  );
}