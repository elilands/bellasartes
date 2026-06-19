import Link from "next/link";
import styles from "./page.module.css"; // Reutilizamos los estilos de reposo

export default function NoEncontrado() {
  return (
    <main className={styles.contenedor}>
      <div className={styles.contenido}>
        <h1 className={styles.titulo}>Obra no encontrada</h1>
        <p className={styles.texto}>
          No hemos podido localizar la pieza que buscas. Es posible que el enlace 
          haya cambiado o la obra no esté en exhibición actualmente.
        </p>
      </div>
    </main>
  );
}