// src/data/quizzes.ts
export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
  correctOptionId: string;
  justification: string;
}

export interface CollectionQuiz {
  collectionId: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const quizzesData: CollectionQuiz[] = [
  {
  collectionId: "murales",
  title: "Quiz: murales",
  description: "Pon a prueba lo que aprendiste sobre las historias, símbolos y tensiones representadas en los murales de la colección.",
  questions: [
    {
      id: "q1",
      text: "En 'El hombre en la encrucijada', el obrero que sostiene la palanca está rodeado por escenas opuestas de ocio burgués y organización obrera. Si tuvieras que explicarle a alguien qué representa esa palanca, ¿cuál sería la interpretación más coherente con la obra?",
      options: [
        { id: "o1", text: "La capacidad de la humanidad de decidir el rumbo entre distintos proyectos de sociedad" },
        { id: "o2", text: "Un simple detalle decorativo sin relación con el resto del mural" },
        { id: "o3", text: "Una herramienta para medir el tiempo de trabajo" },
        { id: "o4", text: "Un dispositivo científico que solo simboliza progreso tecnológico" }
      ],
      correctOptionId: "o1",
      justification: "En el mural, la palanca condensa la idea de encrucijada histórica: el trabajador puede orientar el curso entre capitalismo, ciencia, lucha obrera y distintos futuros posibles."
    },
    {
      id: "q2",
      text: "En 'Revolución rusa', Rivera reúne a trabajadores de distintas nacionalidades alrededor de líderes revolucionarios. Si un visitante te dijera que eso solo es una escena local sin dimensión internacional, ¿qué detalle de la obra usarías para mostrar que la intención es otra?",
      options: [
        { id: "o1", text: "La diversidad de rostros, vestimentas y banderas que apuntan a un movimiento obrero más allá de un solo país" },
        { id: "o2", text: "La ausencia de cualquier símbolo político en la escena" },
        { id: "o3", text: "La repetición del mismo tipo de personaje en toda la composición" },
        { id: "o4", text: "La falta de líderes visibles al centro del mural" }
      ],
      correctOptionId: "o1",
      justification: "La reunión de figuras de distintos orígenes y la presencia de líderes como Lenin y Trotsky subrayan el carácter internacionalista de la Revolución, no un hecho aislado."
    },
    {
      id: "q3",
      text: "En los paneles de 'Carnaval de la vida mexicana', como 'México folklórico y turístico' y 'La dictadura', Rivera combina fiesta, máscaras, uniformes y escenas de poder. ¿Qué lectura te ayuda más a conectar esos elementos sin reducirlos solo a \"alegría mexicana\"?",
      options: [
        { id: "o1", text: "Que el carnaval funciona como metáfora de un país donde la fiesta oculta desigualdades, autoritarismo y teatralidad del poder" },
        { id: "o2", text: "Que todo se organiza únicamente para mostrar trajes bonitos" },
        { id: "o3", text: "Que el objetivo es representar un carnaval completamente apolítico" },
        { id: "o4", text: "Que las máscaras se usan solo por razones técnicas de composición" }
      ],
      correctOptionId: "o1",
      justification: "Rivera usa la estructura del carnaval para evidenciar cómo la vida mexicana mezcla celebración, turismo, ritual y crítica a la autoridad."
    },
    {
      id: "q4",
      text: "En 'Nueva democracia', Siqueiros coloca a una figura femenina monumental rompiendo cadenas, con una antorcha y una flor. Si tuvieras que relacionar esta imagen con sus paneles laterales 'Víctimas de la guerra' y 'Víctimas del fascismo', ¿qué conclusión se ajusta mejor a la lógica del tríptico?",
      options: [
        { id: "o1", text: "La nueva democracia se construye a partir del sufrimiento y la memoria de quienes fueron víctimas de la guerra y del fascismo" },
        { id: "o2", text: "La figura central niega la existencia de cualquier conflicto previo" },
        { id: "o3", text: "Los paneles laterales no tienen conexión con el mensaje del mural central" },
        { id: "o4", text: "El tríptico solo pretende mostrar escenas aisladas sin relación entre sí" }
      ],
      correctOptionId: "o1",
      justification: "El cuerpo liberado del centro se entiende plenamente al ver que las tablas laterales muestran el costo humano de la violencia que esa democracia pretende superar."
    },
    {
      id: "q5",
      text: "Al observar 'Tormento de Cuauhtémoc' y 'Apoteosis de Cuauhtémoc' juntos, ¿qué tipo de experiencia narrativa ofrecen en conjunto sobre el personaje?",
      options: [
        { id: "o1", text: "Un recorrido que va del suplicio y la tortura a la transformación del líder indígena en símbolo heroico y contemporáneo de resistencia" },
        { id: "o2", text: "Una simple repetición de la misma escena desde dos ángulos diferentes" },
        { id: "o3", text: "Una historia que se centra únicamente en la vida cotidiana de los conquistadores" },
        { id: "o4", text: "Dos murales sin conexión temática, solo unidos por el mismo autor" }
      ],
      correctOptionId: "o1",
      justification: "El díptico muestra primero la violencia de la conquista y luego la resignificación de Cuauhtémoc como emblema moderno de dignidad y lucha anticolonial."
    },
    {
      id: "q6",
      text: "En 'La piedad en el desierto', Manuel Rodríguez Lozano se autorretrata sostenido por una mujer indígena en un paisaje árido. Si quisieras explicar por qué esta escena es más que una cita religiosa, ¿qué aspecto enfatizarías?",
      options: [
        { id: "o1", text: "La relación simbólica donde la figura indígena sostiene el peso del dolor y la vulnerabilidad del artista en un contexto de marginación" },
        { id: "o2", text: "Que se trata solo de una copia literal de la Piedad de Miguel Ángel" },
        { id: "o3", text: "Que el desierto funciona únicamente como fondo neutral sin significado" },
        { id: "o4", text: "Que el autorretrato busca borrar cualquier referencia a México" }
      ],
      correctOptionId: "o1",
      justification: "El traslado de la Piedad al desierto, con el artista sostenido por una mujer indígena, abre lecturas sobre dependencia, culpa, maternidad y la carga impuesta sobre los cuerpos indígenas."
    },
    {
      id: "q7",
      text: "En 'Nacimiento de nuestra nacionalidad' y 'México de hoy', Tamayo relaciona conquista, mestizaje y modernidad. Si alguien te pregunta qué ganan estos murales al usar símbolos (como el caballo, las figuras mestizas o la ciudad) en lugar de escenas lineales, ¿qué responderías?",
      options: [
        { id: "o1", text: "Que permiten entender el origen y la transformación de México como procesos abiertos, llenos de tensiones, más que como una historia fija y cerrada" },
        { id: "o2", text: "Que su único propósito es evitar cualquier referencia a la realidad" },
        { id: "o3", text: "Que así se descartan por completo los temas nacionales" },
        { id: "o4", text: "Que hacen imposible conectar la obra con la experiencia actual del país" }
      ],
      correctOptionId: "o1",
      justification: "El lenguaje simbólico de Tamayo apunta a una lectura crítica y poética de la identidad mexicana, desde su origen violento hasta su presente urbano y contradictorio."
    },
    {
      id: "q8",
      text: "En 'Xibalbá, el inframundo de los mayas', Rina Lazo llena la cueva de escenas de vida, rituales y maíz, e incluso se autorretrata entrando al inframundo. Si quisieras explicar por qué esta representación cambia la forma tradicional de pensar el 'más allá', ¿qué idea sintetiza mejor esa aportación?",
      options: [
        { id: "o1", text: "Que el inframundo se concibe como parte de un ciclo vital y comunitario, donde muerte, memoria y naturaleza siguen conectadas con la vida cotidiana" },
        { id: "o2", text: "Que el inframundo es un espacio vacío sin personajes ni símbolos" },
        { id: "o3", text: "Que la obra niega cualquier relación con la cosmovisión maya" },
        { id: "o4", text: "Que solo se trata de un paisaje de cuevas sin significado espiritual" }
      ],
      correctOptionId: "o1",
      justification: "La artista muestra Xibalbá como un ámbito lleno de ritual, maíz, juego de pelota y memoria, subrayando que, en la visión maya, la muerte forma parte de un tejido continuo con la vida."
    }
  ]
}
];