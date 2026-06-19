import { Obra } from "../tipos/obra";

export const obras: Obra[] = [
  {
    coleccionId: "robertomontenegro",
    obraId: "elpescador",
    titulo: "El Pescador",
    autor: "Roberto Montenegro",
    fecha: "1923",
    tecnica: "Fresco sobre bastidor transportable",
    dimensiones: "250 x 180 cm",
    ubicacion: "Sala Diego Rivera",
    imagen: "/imagenes/robertomontenegro-elpescador.jpg", 
    audio: "/audios/guia-elpescador.mp3",
    descripcionCorta: "Una obra que marca la transición del simbolismo hacia el muralismo mexicano, destacando por su composición alegórica.",
    contextoCuratorial: [
      "Esta pieza es fundamental para entender los primeros esfuerzos del movimiento muralista en México. Montenegro, influenciado por sus viajes a Europa, integra elementos del Art Nouveau con motivos profundamente nacionales.",
      "La figura central no solo representa el trabajo físico, sino que se erige como un símbolo de la nueva identidad mexicana post-revolucionaria, donde el trabajador se convierte en el héroe clásico moderno."
    ],
    observacion: "Nota la manera en que el artista utiliza la línea sinuosa en el agua, un eco directo de la ilustración europea de fin de siglo, pero aplicada a una narrativa local."
  }
];

export function obtenerObra(coleccionId: string, obraId: string): Obra | undefined {
  return obras.find(
    (obra) => obra.coleccionId === coleccionId && obra.obraId === obraId
  );
}