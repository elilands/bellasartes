import Image from "next/image";
import styles from "./hero-obra.module.css";
import { Obra } from "../../tipos/obra";

interface Props {
  obra: Obra;
}

export function HeroObra({ obra }: Props) {
  return (
    <header className={styles.hero}>
      <div className={styles.contenedorImagen}>
        {/* Usamos un div con color de superficie por si la imagen no carga rápido */}
        <div className={styles.placeholderImagen}>
          <Image
            src={obra.imagen}
            alt={`Fotografía de la obra ${obra.titulo} por ${obra.autor}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.imagen}
          />
        </div>
      </div>
      <div className={styles.encabezado}>
        <p className={styles.autor}>{obra.autor}</p>
        <h1 className={styles.titulo}>{obra.titulo}</h1>
      </div>
    </header>
  );
}