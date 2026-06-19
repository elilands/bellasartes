import { Obra } from "../../tipos/obra";
import styles from "./ficha-tecnica.module.css";

interface Props {
  obra: Obra;
}

export function FichaTecnica({ obra }: Props) {
  return (
    <section className={styles.contenedor}>
      <h2 className={styles.tituloSecundario}>Ficha Técnica</h2>
      <dl className={styles.lista}>
        <div className={styles.item}>
          <dt>Técnica</dt>
          <dd>{obra.tecnica}</dd>
        </div>
        <div className={styles.item}>
          <dt>Año</dt>
          <dd>{obra.fecha}</dd>
        </div>
        <div className={styles.item}>
          <dt>Dimensiones</dt>
          <dd>{obra.dimensiones}</dd>
        </div>
        <div className={styles.item}>
          <dt>Ubicación actual</dt>
          <dd>{obra.ubicacion}</dd>
        </div>
      </dl>
    </section>
  );
}