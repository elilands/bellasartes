"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Passport } from "@/components/passport/passport";
import { CollectionDrawer } from "@/components/navigation/collection-drawer";
import { MarbleSurface } from "@/components/effects/marble-surface";
import { SculpturalText } from "@/components/effects/sculptural-text";
import { AudioPlayer } from "@/components/media/audio-player";
import { collectionData } from "@/data/collections";
import styles from "./artwork.module.css";


interface ArtworkPageProps {
  params: Promise<{
    collection: string;
    artwork: string;
  }>;
}


const contentFadeVariant: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    filter: "blur(0px)",
    transition: { 
      duration: 1.2, 
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number], 
      delay: 0.4 
    }
  }
};


export default function ArtworkPage({ params }: ArtworkPageProps) {
  const { collection, artwork } = use(params);

  const currentCollection = collectionData.filter(
    (item) => item.collection === collection
  );

  const painting = currentCollection.find((item) => item.id === artwork);

  if (!painting) {
    notFound();
  }

  const formatDescription = (text: string) => {
    return text.split('\n').map((paragraph, index) => (
      paragraph.trim() !== '' ? <p key={index}>{paragraph}</p> : null
    ));
  };

  return (
    <Passport pageNumber={painting.id.substring(0, 2).toUpperCase()}>
      <MarbleSurface />
      
      <CollectionDrawer 
        collectionData={currentCollection} 
        currentArtworkId={painting.id} 
      />

      <article className={styles.editorialLayout}>
        
        <header className={styles.artworkHeader}>
          <SculpturalText 
            text={painting.title} 
            as="h1" 
            className={styles.title} 
          />
          <motion.div 
            className={styles.metaHeader}
            initial="hidden"
            animate="visible"
            variants={contentFadeVariant}
          >
            <span>{painting.artist}</span>
            <span>&bull;</span>
            <span>{painting.year}</span>
          </motion.div>
        </header>

        <motion.figure 
          className={styles.galleryWall}
          initial="hidden"
          animate="visible"
          variants={contentFadeVariant}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={painting.image}
              alt={painting.alt}
              width={1600}
              height={1200}
              priority
              className={styles.artworkImage}
              sizes="(max-width: 1600px) 100vw, 1600px"
            />
          </div>
        </motion.figure>

        <div className={styles.contentGrid}>
          <motion.aside 
            className={styles.utilityColumn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={contentFadeVariant}
          >
            {painting.audio && (
              <AudioPlayer src={painting.audio} />
            )}

            <div className={styles.techSheet}>
              {painting.medium && (
                <div className={styles.techItem}>
                  <span className={styles.techLabel}>Técnica</span>
                  <span className={styles.techValue}>{painting.medium}</span>
                </div>
              )}
              {painting.dimensions && (
                <div className={styles.techItem}>
                  <span className={styles.techLabel}>Dimensiones</span>
                  <span className={styles.techValue}>{painting.dimensions}</span>
                </div>
              )}
              {painting.location && (
                <div className={styles.techItem}>
                  <span className={styles.techLabel}>Ubicación original</span>
                  <span className={styles.techValue}>{painting.location}</span>
                </div>
              )}
            </div>
          </motion.aside>

          <section className={styles.readingColumn}>
            <motion.div 
              className={styles.longDescription}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={contentFadeVariant}
            >
              {formatDescription(painting.description)}
            </motion.div>

            {painting.curiousFacts && painting.curiousFacts.length > 0 && (
              <motion.div 
                className={styles.curiousFactsSection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={contentFadeVariant}
              >
                <SculpturalText 
                  text="Observación guiada" 
                  as="h3" 
                  className={styles.sectionTitle} 
                />
                <ul className={styles.factsList}>
                  {painting.curiousFacts.map((fact, index) => (
                    <li key={index} className={styles.factItem}>
                      {fact}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </section>
        </div>
      </article>
    </Passport>
  );
}