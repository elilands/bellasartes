import { notFound } from "next/navigation";
import { Metadata } from "next";
import { obtenerObra } from "../../../datos/obras";
import { HeroObra } from "../../../componentes/hero-obra/hero-obra";
import { ReproductorAudio } from "../../../componentes/reproductor-audio/reproductor-audio";
import { FichaTecnica } from "../../../componentes/ficha-tecnica/ficha-tecnica";
import styles from "./obra.module.css";

interface Props {
  params: {
    coleccion: string;
    obra: string;
  };
}

// Generamos metadata dinámica para que, si alguien comparte el link, se vea profesional
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const obra = obtenerObra(params.coleccion, params.obra);
  
  if (!obra) {
    return { title: "Obra no encontrada | Palacio de Bellas Artes" };
  }

  return {
    title: `${obra.titulo} de ${obra.autor} | Palacio de Bellas Artes`,
    description: obra.descripcionCorta,
  };
}

export default function PaginaObra({ params }: Props) {
  // En Next.js 14+ los params de servidor están disponibles directamente, 
  // buscamos la obra en nuestra base mockeada
  const obra = obtenerObra(params.coleccion, params.obra);

  // Si no existe, Next.js renderiza automáticamente app/not-found.tsx
  if (!obra) {
    notFound();
  }

  return (
    <main className={styles.layoutPrincipal}>
      <article className={styles.articuloContenedor}>
        <HeroObra obra={obra} />
        
        {obra.audio && <ReproductorAudio rutaAudio={obra.audio} />}

        <div className={styles.cuerpoTexto}>
          <p className={styles.descripcionCorta}>{obra.descripcionCorta}</p>
          
          <div className={styles.contextoCuratorial}>
            {obra.contextoCuratorial.map((parrafo, indice) => (
              <p key={indice}>{parrafo}</p>
            ))}
          </div>

          {obra.observacion && (
            <aside className={styles.cajaObservacion}>
              <h3 className={styles.tituloObservacion}>Punto de observación</h3>
              <p>{obra.observacion}</p>
            </aside>
          )}
        </div>

        <FichaTecnica obra={obra} />
      </article>
    </main>
  );
}