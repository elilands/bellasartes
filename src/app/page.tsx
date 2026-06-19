import { Search } from "lucide-react";
import styles from "./page.module.css";

// Esta vista es intencionalmente pasiva. No permite navegación.
// Solo se llega aquí si el usuario entra a la URL raíz sin un QR.
export default function PaginaInicio() {
  return (
    <main className={styles.contenedor}>
      <div className={styles.contenido}>
        <Search className={styles.icono} size={32} strokeWidth={1.5} />
        <h1 className={styles.titulo}>Experiencia en sala</h1>
        <p className={styles.texto}>
          Esta plataforma está diseñada para acompañar tu recorrido presencial. 
          Por favor, escanea el código QR ubicado junto a la obra que deseas explorar.
        </p>
      </div>
    </main>
  );
}