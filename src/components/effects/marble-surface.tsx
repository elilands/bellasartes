"use client";

import { motion } from "framer-motion";
import styles from "./sculptural-text.module.css";

interface SculpturalTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "span";
  className?: string;
  delay?: number;
}

export function SculpturalText({
  text,
  as: Component = "h1",
  className = "",
  delay = 0,
}: SculpturalTextProps) {
  const words = text.split(" ");

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay,
      },
    },
  };

  const wordVariant = {
    hidden: { y: "120%", rotate: 2 },
    visible: {
      y: "0%",
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <Component className={`${styles.textContainer} ${className}`}>
      <motion.span
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className={styles.wordWrapper}
      >
        {words.map((word, index) => (
          <span key={index} className={styles.wordMask}>
            <motion.span variants={wordVariant} className={styles.word}>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}