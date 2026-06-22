// src/data/collections.ts

export type Painting = {
  id: string;
  collection: string;
  title: string;
  artist: string;
  year: string;
  description: string;
  medium?: string;
  dimensions?: string;
  location?: string;
  image: string;
  alt: string;
  audio?: string;
  tags?: string[];
  curiousFacts?: string[];
};

export const collectionData: Painting[] = [
  {
    id: "hombreEnLaEncrucijada",
    collection: "murales",
    title: "El hombre en la encrucijada",
    artist: "Diego Rivera",
    year: "1933-1934",
    description: "Rivera sitúa a un obrero en el centro de una compleja estructura de máquinas, engranes y ejes que parecen conectar el mundo microscópico con el cosmos.\n\nEl personaje sostiene una palanca que simboliza la capacidad humana de dirigir el rumbo de la historia y decidir entre distintos caminos posibles.\n\nA un lado aparecen escenas de ocio burgués, policías montados y la violencia asociada al capitalismo industrial; al otro, la organización obrera, la ciencia, la exploración espacial y las luchas sociales por un mundo más justo.\n\nLa composición se organiza de manera radial, como si todo el movimiento del mural convergiera hacia el protagonista, reforzando la idea de que la humanidad se encuentra en una auténtica encrucijada ideológica.\n\nEn la versión del Palacio de Bellas Artes, Rivera retoma el contenido político que provocó la destrucción del mural original en el Rockefeller Center, insistiendo en el conflicto entre poder económico, tecnología y emancipación social.",
    medium: "Fresco sobre bastidor metálico transportable",
    dimensions: "4.80 x 11.45 m",
    location: "Museo del Palacio de Bellas Artes, Ciudad de México",
    image: "/assets/images/rivera-hombre-encrucijada.jpeg",
    alt: "Mural El hombre en la encrucijada o El hombre controlador del universo de Diego Rivera",
    audio: "/audio/rivera-hombre-encrucijada.mp3",
    tags: [
      "Muralismo",
      "Diego Rivera",
      "Capitalismo y socialismo",
      "Tecnología",
      "Bellas Artes"
    ],
    curiousFacts: [
      "El mural original fue encargado para el Rockefeller Center en Nueva York, pero fue destruido debido a sus referencias explícitas al comunismo y a la figura de Lenin.",
      "Rivera rehízo la obra en 1934 para el Palacio de Bellas Artes, reintroduciendo y reforzando las escenas que habían sido consideradas polémicas.",
      "La obra también se conoce como El hombre controlador del universo, subrayando la idea de que la humanidad puede orientar el desarrollo científico y social hacia distintos destinos."
    ]
  },
  {
    id: "revolucionRusa",
    collection: "murales",
    title: "Revolución rusa",
    artist: "Diego Rivera",
    year: "1933",
    description: "En este mural, Rivera presenta a obreros y campesinos de diferentes orígenes reunidos alrededor de dirigentes revolucionarios, reflejando el carácter internacional de la Revolución rusa.\n\nLas figuras centrales, identificables como líderes de la revolución, se ubican en un plano ligeramente elevado, mientras una multitud de trabajadores escucha, discute y se organiza en torno a ellos.\n\nLa escena transmite la idea de una asamblea pública en la que se decide el rumbo de la sociedad, con banderas, maquinaria y estructuras industriales que sugieren un nuevo orden construido sobre el trabajo colectivo.\n\nEl tratamiento de los rostros, la variedad de atuendos y la presencia de distintas etnias refuerzan el mensaje de solidaridad de clase más allá de fronteras nacionales.\n\nDe esta manera, el mural funciona como una declaración visual a favor del internacionalismo obrero y del proyecto socialista impulsado por la Tercera Internacional.",
    medium: "Fresco sobre bastidor metálico transportable",
    dimensions: "4.80 x 11.45 m",
    location: "Museo del Palacio de Bellas Artes, Ciudad de México",
    image: "/assets/images/rivera-revolucion-rusa.jpeg",
    alt: "Mural Revolución rusa o Tercera Internacional de Diego Rivera",
    audio: "/audio/rivera-revolucion-rusa.mp3",
    tags: [
      "Muralismo",
      "Diego Rivera",
      "Revolución rusa",
      "Internacionalismo",
      "Obreros"
    ],
    curiousFacts: [
      "El título alternativo Tercera Internacional hace referencia a la organización comunista que coordinaba movimientos revolucionarios en distintos países.",
      "Rivera viajó a la Unión Soviética y quedó impactado por el uso del arte como herramienta política, influencia que se percibe en la composición y el contenido del mural.",
      "El formato transportable permitió que la obra se trasladara y se integrara posteriormente a la colección del Palacio de Bellas Artes."
    ]
  },
  {
    id: "mexicoFolkloricoTuristico",
    collection: "murales",
    title: "México folklórico y turístico",
    artist: "Diego Rivera",
    year: "1936",
    description: "Este panel muestra un México lleno de color, danzas y trajes típicos, pero visto a través del filtro del turismo y del espectáculo.\n\nRivera dispone a músicos, bailarines, vendedores y personajes enmascarados como si participaran en un gran carnaval, donde lo popular se convierte en una atracción exótica para visitantes nacionales y extranjeros.\n\nLa fiesta, sin embargo, no es inocente: en medio de la algarabía aparecen gestos, miradas y detalles que insinúan desigualdades sociales y tensiones económicas que se ocultan detrás de la imagen folklórica.\n\nLos elementos arquitectónicos, los paisajes y los objetos decorativos refuerzan la idea de un México convertido en escenografía, en el que la cultura tradicional se empaqueta y se vende como experiencia turística.\n\nEl panel funciona así como una reflexión crítica sobre cómo el país proyecta una imagen pintoresca mientras persisten problemas estructurales en la vida cotidiana.",
    medium: "Fresco sobre tablero",
    dimensions: "Aproximadamente 3.89 x 2.11 m",
    location: "Museo del Palacio de Bellas Artes, Ciudad de México",
    image: "/assets/images/rivera-mexico-folklorico.jpeg",
    alt: "Panel México folklórico y turístico del políptico Carnaval de la vida mexicana de Diego Rivera",
    audio: "/audio/rivera-mexico-folklorico.mp3",
    tags: [
      "Muralismo",
      "Diego Rivera",
      "Folklore mexicano",
      "Turismo",
      "Carnaval de la vida mexicana"
    ],
    curiousFacts: [
      "Este panel forma parte del conjunto Carnaval de la vida mexicana, una serie de tableros que combinan crítica social y escenas festivas.",
      "La obra fue encargada originalmente para un contexto ligado a la modernización urbana y al auge del turismo en la Ciudad de México durante los años treinta.",
      "Rivera se inspiró en carnavales y festividades populares reales, pero los reorganizó para enfatizar la tensión entre autenticidad cultural y consumo comercial."
    ]
  },
  {
    id: "laDictadura",
    collection: "murales",
    title: "La dictadura",
    artist: "Diego Rivera",
    year: "1936",
    description: "En este panel, Rivera pasa de la fiesta al comentario político directo, mostrando a figuras militares y autoridades que encarnan la represión y el autoritarismo.\n\nLos personajes aparecen con uniformes, medallas y rostros casi caricaturescos, como si fueran máscaras grotescas dentro de un teatro del poder.\n\nFrente a ellos, o a sus espaldas, se insinúan cuerpos de manifestantes, símbolos de protesta y figuras anónimas que representan al pueblo sometido, creando un contraste entre la rigidez de la autoridad y la fragilidad de los gobernados.\n\nEl ambiente recuerda a un desfile o a una ceremonia oficial, pero la mirada crítica del pintor convierte esa solemnidad en una denuncia visual de la violencia estatal y de la continuidad de prácticas dictatoriales en la vida mexicana.\n\nEl panel dialoga con los otros tablones del Carnaval de la vida mexicana, mostrando que detrás de la aparente alegría nacional subsiste una estructura de control y abuso de poder.",
    medium: "Fresco sobre tablero",
    dimensions: "Aproximadamente 3.89 x 2.11 m",
    location: "Museo del Palacio de Bellas Artes, Ciudad de México",
    image: "/assets/images/rivera-la-dictadura.jpeg",
    alt: "Panel La dictadura del políptico Carnaval de la vida mexicana de Diego Rivera",
    audio: "/audio/rivera-la-dictadura.mp3",
    tags: [
      "Muralismo",
      "Diego Rivera",
      "Política",
      "Autoritarismo",
      "Carnaval de la vida mexicana"
    ],
    curiousFacts: [
      "La dictadura se concibió como un panel inseparable del resto del conjunto, reforzando la lectura de la obra como crítica global a la vida política del país.",
      "Rivera recurre al recurso de los uniformes y las poses rígidas para evidenciar el carácter teatral y, al mismo tiempo, intimidante del poder.",
      "El tono satírico del mural conecta con la tradición mexicana de la caricatura política y de las imágenes anticlericales y antiautoritarias del siglo XIX."
    ]
  },
  {
    id: "danzaDeLosHuichilobos",
    collection: "murales",
    title: "Danza de los Huichilobos",
    artist: "Diego Rivera",
    year: "1936",
    description: "Danza de los Huichilobos presenta una escena que mezcla referencias al México prehispánico con la teatralidad del carnaval contemporáneo.\n\nRivera recurre a personajes ataviados con tocados, plumajes y elementos inspirados en antiguas deidades guerreras, pero los coloca en un contexto escénico donde se percibe la presencia de público y de un entorno urbano moderno.\n\nLa danza se convierte en un espectáculo que alude tanto a la resistencia cultural indígena como a su apropiación por parte de proyectos nacionalistas y turísticos.\n\nLos cuerpos en movimiento, las diagonales de la composición y la energía de los colores buscan transmitir la intensidad de la danza, mientras los detalles en los rostros sugieren una mezcla de orgullo, disciplina y, en algunos casos, cierto desgaste.\n\nEl panel invita a reflexionar sobre cómo los rituales ancestrales se transforman en performances contemporáneos, sometidos a nuevas formas de control y consumo cultural.",
    medium: "Fresco sobre tablero",
    dimensions: "Aproximadamente 3.89 x 2.11 m",
    location: "Museo del Palacio de Bellas Artes, Ciudad de México",
    image: "/assets/images/rivera-danza-huichilobos.jpeg",
    alt: "Panel Danza de los Huichilobos del políptico Carnaval de la vida mexicana de Diego Rivera",
    audio: "/audio/rivera-danza-huichilobos.mp3",
    tags: [
      "Muralismo",
      "Diego Rivera",
      "México prehispánico",
      "Rituales",
      "Carnaval de la vida mexicana"
    ],
    curiousFacts: [
      "El título del panel hace referencia a Huitzilopochtli, deidad mexica asociada a la guerra y al sol, reinterpretada aquí dentro de una puesta en escena moderna.",
      "Rivera combina investigación histórica e imaginación plástica para crear trajes y coreografías que no son reconstrucciones literales, sino lecturas simbólicas del pasado.",
      "La pieza dialoga con el resto del ciclo al mostrar cómo lo sagrado y lo festivo pueden convertirse también en espectáculo para la mirada urbana y turística."
    ]
  },
  {
    id: "agustinLorenzo",
    collection: "murales",
    title: "Agustín Lorenzo",
    artist: "Diego Rivera",
    year: "1936",
    description: "Este panel narra la leyenda de Agustín Lorenzo, un bandido justiciero del siglo XIX que se enfrenta a las tropas francesas durante la intervención en México.\n\nRivera lo presenta como una figura heroica y casi monumental que avanza entre el fuego y el humo, machete en alto, abriéndose paso entre la balacera.\n\nAlrededor, soldados franceses disparan sus fusiles, mientras cuerpos y fragmentos de arquitectura insinúan el caos de la batalla y la devastación del pueblo.\n\nLa escena combina elementos históricos con una construcción casi teatral, enfatizando la transformación del bandido en símbolo popular de resistencia campesina.\n\nEl panel funciona como cierre del ciclo Carnaval de la vida mexicana, mostrando que, frente a la opresión y la invasión extranjera, la respuesta del pueblo se encarna en figuras rebeldes que se vuelven mito.",
    medium: "Fresco sobre tablero",
    dimensions: "3.89 x 2.11 m",
    location: "Museo del Palacio de Bellas Artes, Ciudad de México",
    image: "/assets/images/rivera-agustin-lorenzo.jpeg",
    alt: "Panel Agustín Lorenzo del políptico Carnaval de la vida mexicana de Diego Rivera",
    audio: "/audio/rivera-agustin-lorenzo.mp3",
    tags: [
      "Muralismo",
      "Diego Rivera",
      "Intervención francesa",
      "Bandido justiciero",
      "Carnaval de la vida mexicana"
    ],
    curiousFacts: [
      "Agustín Lorenzo es presentado como un bandido generoso que termina encabezando la lucha de campesinos contra las tropas francesas.",
      "El panel se inspiró en el carnaval de Huejotzingo, en Puebla, donde se recrean combates históricos con personajes disfrazados.",
      "A diferencia de los otros tres tableros del ciclo, este pertenece a la colección del Instituto Nacional de Antropología e Historia."
    ]
  },
  {
    id: "katharsis",
    collection: "murales",
    title: "Katharsis",
    artist: "José Clemente Orozco",
    year: "1934-1935",
    description: "Katharsis presenta una escena tumultuosa donde cuerpos, armas y símbolos de guerra se entrelazan en una especie de montaña humana, creando una imagen de caos extremo.\n\nOrozco muestra soldados, prostitutas, trabajadores y figuras anónimas atrapados en un torbellino de violencia y desintegración moral, sin héroes ni triunfadores claros.\n\nEn la parte superior aparecen elementos que evocan máquinas, cañones y estructuras industriales, mientras abajo se amontonan cuerpos y rostros deformados por el miedo, la rabia o la indiferencia.\n\nLa obra funciona como una crítica feroz a la guerra, a la modernidad violenta y a las sociedades que normalizan la destrucción, sugiriendo que la humanidad entera participa en esta tragedia colectiva.\n\nEl título alude a la idea de catarsis, pero Orozco la plantea de forma ambigua: en lugar de una purificación clara, lo que vemos es una explosión de contradicciones que obliga al espectador a enfrentarse a su propia posición frente a la violencia.",
    medium: "Fresco sobre tablero",
    dimensions: "11.46 x 4.46 m aproximadamente",
    location: "Museo del Palacio de Bellas Artes, extremo oriente del tercer piso, Ciudad de México",
    image: "/assets/images/orozco-katharsis.jpeg",
    alt: "Mural Katharsis de José Clemente Orozco",
    audio: "/audio/orozco-katharsis.mp3",
    tags: [
      "Muralismo",
      "José Clemente Orozco",
      "Guerra",
      "Realismo social",
      "Expresionismo"
    ],
    curiousFacts: [
      "Katharsis fue concebido como una alegoría del clima internacional de entreguerras, marcado por conflictos, dictaduras y violencia masiva.",
      "El mural se caracteriza por una paleta intensa y formas dinámicas que refuerzan la sensación de orgía de destrucción y descontrol.",
      "Orozco rompe con las visiones heroicas de la guerra y se enfoca en las víctimas, la brutalidad y el absurdo del conflicto armado."
    ]
  },
  {
    id: "nuevaDemocracia",
    collection: "murales",
    title: "Nueva democracia",
    artist: "David Alfaro Siqueiros",
    year: "1944-1945",
    description: "En el panel central del tríptico, Siqueiros representa a una figura femenina de proporciones colosales, con el torso desnudo y los brazos extendidos, rompiendo cadenas mientras emerge de un espacio volcánico.\n\nLa mujer porta una antorcha en una mano y una flor en la otra, combinando la idea de lucha y destrucción con la de renacimiento y esperanza.\n\nDetrás de ella se insinúan restos de soldados, símbolos revolucionarios y planos inclinados que crean una perspectiva dramática, haciendo que la figura parezca avanzar hacia el espectador.\n\nLa obra funciona como una alegoría de la libertad, la democracia y la independencia, no solo en relación con la Revolución mexicana, sino también con el triunfo sobre los regímenes fascistas en la Segunda Guerra Mundial.\n\nLa energía de las diagonales, el uso de la piroxilina y la estructura poliangular típica de Siqueiros refuerzan la sensación de que la nueva democracia es una fuerza que irrumpe violentamente en la historia para romper con la opresión.",
    medium: "Piroxilina sobre celotex y masonite, recubierto con plástico sintético",
    dimensions: "5.50 x 11.98 m",
    location: "Muro oriente, tercer piso, Museo del Palacio de Bellas Artes, Ciudad de México",
    image: "/assets/images/siqueiros-democracia.jpg", // Placeholder estético
    alt: "Mural Nueva democracia de David Alfaro Siqueiros",
    audio: "/audio/siqueiros-nueva-democracia.mp3",
    tags: [
      "Muralismo",
      "David Alfaro Siqueiros",
      "Segunda Guerra Mundial",
      "Democracia",
      "Alegoría"
    ],
    curiousFacts: [
      "El título original del mural era México por la democracia y la independencia, subrayando su vínculo con la Revolución mexicana.",
      "El panel central se inauguró el 20 de noviembre de 1944, coincidiendo con la conmemoración del inicio de la Revolución de 1910.",
      "Posteriormente Siqueiros añadió los dos paneles laterales, Víctimas de la guerra y Víctimas del fascismo, conformando el tríptico conocido hoy como Nueva democracia."
    ]
  },
  {
    id: "victimasDeLaGuerra",
    collection: "murales",
    title: "Víctimas de la guerra",
    artist: "David Alfaro Siqueiros",
    year: "1945",
    description: "En el panel lateral izquierdo, Siqueiros muestra los estragos directos de la guerra a través de cuerpos mutilados y fragmentados dispuestos sobre lo que parece ser una escalinata o estructura arquitectónica.\n\nUn cuerpo masculino yace cercenado entre restos humanos, armas y elementos que evocan ruinas, generando una imagen cruda y frontal del costo humano de los conflictos bélicos.\n\nLa composición dirige la mirada hacia las diagonales del pavimento y los escalones, donde se enfatiza la caída y la vulnerabilidad del cuerpo, contrapuesta a la fría geometría del entorno.\n\nA diferencia del carácter alegórico del panel central, aquí el énfasis está en el testimonio casi documental de la violencia, como si el espectador se encontrara frente a una escena posterior a una masacre.\n\nEl mural denuncia la deshumanización que acompaña a la guerra moderna y exige que la memoria de las víctimas forme parte de cualquier proyecto de democracia verdadera.",
    medium: "Piroxilina sobre celotex y masonite, recubierto con plástico sintético",
    dimensions: "5.50 x 6.00 m aproximadamente",
    location: "Muro oriente, tercer piso, Museo del Palacio de Bellas Artes, Ciudad de México",
    image: "/assets/images/siqueiros-victimas-guerra.jpg", // Placeholder estético
    alt: "Mural Víctimas de la guerra de David Alfaro Siqueiros",
    audio: "/audio/siqueiros-victimas-guerra.mp3",
    tags: [
      "Muralismo",
      "David Alfaro Siqueiros",
      "Guerra",
      "Segunda Guerra Mundial",
      "Violencia"
    ],
    curiousFacts: [
      "Este panel se añadió en 1945, después de la victoria de los Aliados en la Segunda Guerra Mundial, como parte de la ampliación del conjunto Nueva democracia.",
      "Siqueiros utiliza encuadres drásticos y puntos de vista oblicuos para acentuar la sensación de cuerpos arrojados y despojados de identidad.",
      "La obra se ha interpretado como un llamado a no olvidar a quienes pagaron con su vida las decisiones de los poderes políticos y militares."
    ]
  },
  {
    id: "victimasDelFascismo",
    collection: "murales",
    title: "Víctimas del fascismo",
    artist: "David Alfaro Siqueiros",
    year: "1945",
    description: "En el panel lateral derecho, Siqueiros representa a un hombre maniatado y con evidentes signos de tortura, tendido sobre un escalón rojo que recuerda tanto un altar como un peldaño de ejecución.\n\nEl cuerpo aparece sometido, con la cabeza inclinada y los músculos tensos, mientras en torno a él se sugieren sombras, figuras y estructuras que remiten a cárceles, campos de concentración o espacios de castigo.\n\nEl uso del color rojo y de planos angulados intensifica la sensación de violencia sistemática, asociada específicamente a los regímenes fascistas y a sus prácticas de represión y exterminio.\n\nA diferencia de Víctimas de la guerra, donde la destrucción es más anónima y masiva, aquí la atención se centra en un individuo, condensando en su cuerpo la experiencia de millones de personas perseguidas y torturadas.\n\nEl mural funciona como advertencia visual sobre los peligros del autoritarismo y como recordatorio de que la democracia solo puede sostenerse si se condenan y se evitan estas formas extremas de violencia política.",
    medium: "Piroxilina sobre celotex y masonite, recubierto con plástico sintético",
    dimensions: "5.50 x 6.00 m aproximadamente",
    location: "Muro oriente, tercer piso, Museo del Palacio de Bellas Artes, Ciudad de México",
    image: "/assets/images/siqueiros-victimas-fascismo.jpg", // Placeholder estético
    alt: "Mural Víctimas del fascismo de David Alfaro Siqueiros",
    audio: "/audio/siqueiros-victimas-fascismo.mp3",
    tags: [
      "Muralismo",
      "David Alfaro Siqueiros",
      "Fascismo",
      "Tortura",
      "Derechos humanos"
    ],
    curiousFacts: [
      "El panel se concibió como complemento de Víctimas de la guerra, de modo que ambos flanquean a Nueva democracia y le dan un contexto histórico concreto.",
      "La figura central suele interpretarse como símbolo de todas las personas sometidas a la maquinaria represiva de los regímenes fascistas en Europa y otros lugares.",
      "Siqueiros buscó que el espectador se sintiera interpelado directamente, como testigo incómodo de la escena, mediante el uso de perspectivas extremas y proximidad al cuerpo representado."
    ]
  },
  {
    id: "tormentoDeCuauhtemoc",
    collection: "murales",
    title: "Tormento de Cuauhtémoc",
    artist: "David Alfaro Siqueiros",
    year: "1950-1951",
    description: "Este mural capta el momento en que Cuauhtémoc, último tlatoani mexica, es sometido a tortura por los conquistadores para obligarlo a revelar el paradero de los tesoros de Tenochtitlan.\n\nSiqueiros presenta al gobernante indígena desnudo de cintura para arriba, atado y suspendido sobre un brasero encendido, mientras sus pies se acercan al fuego, enfatizando el dolor físico y la humillación.\n\nAlrededor de él aparecen figuras de soldados españoles y aliados indígenas, configurando un espacio tenso en el que la violencia colonizadora se hace plenamente visible.\n\nLa composición utiliza diagonales agresivas, planos inclinados y un dramatismo lumínico que subraya la brutalidad del suplicio, colocando al espectador casi dentro de la escena.\n\nEl mural no solo narra un episodio histórico, sino que plantea una reflexión sobre la tortura, la dominación y la resistencia, mostrando a Cuauhtémoc como símbolo de dignidad frente a la barbarie.",
    medium: "Piroxilina sobre celotex",
    dimensions: "4.49 x 7.95 m aproximadamente",
    location: "Museo del Palacio de Bellas Artes, Ciudad de México",
    image: "/assets/images/siqueiros-tormento-cuauhtemoc.jpeg",
    alt: "Mural Tormento de Cuauhtémoc de David Alfaro Siqueiros",
    audio: "/audio/siqueiros-tormento-cuauhtemoc.mp3",
    tags: [
      "Muralismo",
      "David Alfaro Siqueiros",
      "Cuauhtémoc",
      "Conquista de México",
      "Tortura"
    ],
    curiousFacts: [
      "Tormento de Cuauhtémoc forma la primera parte de un díptico dedicado a la figura de Cuauhtémoc dentro del Palacio de Bellas Artes.",
      "El mural enfatiza la violencia colonial al mostrar el momento exacto del suplicio, en lugar de una escena heroica o idealizada.",
      "Siqueiros se interesó por vincular este episodio histórico con reflexiones contemporáneas sobre la opresión y la resistencia de los pueblos originarios."
    ]
  },
  {
    id: "apoteosisDeCuauhtemoc",
    collection: "murales",
    title: "Apoteosis de Cuauhtémoc",
    artist: "David Alfaro Siqueiros",
    year: "1950-1951",
    description: "Apoteosis de Cuauhtémoc funciona como contraparte del tormento: aquí el líder mexica aparece glorificado, transformado en símbolo de resistencia y dignidad para la nación mexicana.\n\nSiqueiros imagina una escena ficticia donde Cuauhtémoc, revestido con una armadura resplandeciente, conduce a su pueblo con determinación frente a un enemigo representado de forma alegórica.\n\nLas figuras avanzan en bloque, con el líder al frente, mientras al fondo se sugieren estructuras modernas y elementos tecnológicos, creando un puente entre la lucha indígena y las batallas políticas del siglo XX.\n\nLa composición utiliza perspectivas extremas y planos poliangulares que dan la sensación de que el grupo irrumpe fuera del muro, reforzando la idea de una marcha imparable hacia la liberación.\n\nEl mural reinterpreta a Cuauhtémoc no solo como héroe del pasado, sino como emblema de las luchas contemporáneas contra el imperialismo y las políticas de dominación extranjera.",
    medium: "Piroxilina sobre celotex",
    dimensions: "4.49 x 7.95 m",
    location: "Museo del Palacio de Bellas Artes, Ciudad de México",
    image: "/assets/images/siqueiros-apoteosis-cuauhtemoc.jpg",
    alt: "Mural Apoteosis de Cuauhtémoc de David Alfaro Siqueiros",
    audio: "/audio/siqueiros-apoteosis-cuauhtemoc.mp3",
    tags: [
      "Muralismo",
      "David Alfaro Siqueiros",
      "Cuauhtémoc",
      "Resistencia",
      "Nacionalismo"
    ],
    curiousFacts: [
      "Este mural es la segunda parte del díptico sobre Cuauhtémoc en Bellas Artes y complementa la escena del tormento con una visión de exaltación heroica.",
      "Siqueiros establece un paralelismo entre la resistencia indígena y la necesidad de que México se libere de la influencia política de potencias extranjeras en la posguerra.",
      "La imagen de Cuauhtémoc se convierte aquí en un icono moderno, que deja de ser solo ‘el águila que cae’ para convertirse en símbolo de dignidad y futuro."
    ]
  },
  {
    id: "nacimientoDeNuestraNacionalidad",
    collection: "murales",
    title: "Nacimiento de nuestra nacionalidad",
    artist: "Rufino Tamayo",
    year: "1952",
    description: "En este mural, Tamayo aborda el tema de la conquista y el surgimiento de una nueva identidad mexicana a partir del encuentro violento entre culturas indígenas y europeas.\n\nLa escena se articula en varios planos: en la parte superior destaca un caballo de estilo cubista, símbolo de la irrupción del poder español y de la fuerza militar que transformó el territorio.\n\nDebajo, figuras humanas mestizas e indígenas se entrelazan en una composición que sugiere tanto conflicto como fusión, con cuerpos que se superponen y se funden en un ambiente cargado de tensión.\n\nUn pilar de inspiración clásica al lado de elementos prehispánicos refuerza la idea de choque y mezcla entre lo occidental y lo indígena, dando lugar a una nueva realidad cultural.\n\nTamayo no ilustra una narración lineal, sino un mito de origen: el nacimiento de la nación mexicana como resultado de un proceso doloroso, complejo y, al mismo tiempo, generador de una identidad propia.",
    medium: "Pintura vinílica (vinelita) sobre soporte mural",
    dimensions: "Dimensiones murales, aproximadamente 6.00 x 4.00 m",
    location: "Museo del Palacio de Bellas Artes, Ciudad de México",
    image: "/assets/images/tamayo-nacimiento-nacionalidad.jpeg",
    alt: "Mural Nacimiento de nuestra nacionalidad de Rufino Tamayo",
    audio: "/audio/tamayo-nacimiento-nacionalidad.mp3",
    tags: [
      "Muralismo",
      "Rufino Tamayo",
      "Conquista de México",
      "Identidad nacional",
      "Mestizaje"
    ],
    curiousFacts: [
      "Tamayo empleó pintura vinílica, conocida como vinelita, una técnica relativamente moderna para la época en el contexto del muralismo.",
      "El caballo en la parte superior se ha interpretado como símbolo de la violencia fundacional y del ‘pecado original’ del nacimiento de la nación.",
      "El mural propone una visión más simbólica y menos literal de la conquista, alejándose de las composiciones narrativas tradicionales del muralismo clásico."
    ]
  },
  {
    id: "mexicoDeHoy",
    collection: "murales",
    title: "México de hoy",
    artist: "Rufino Tamayo",
    year: "1953",
    description: "México de hoy presenta una visión del país en el siglo XX, marcada por la modernización, la vida urbana y las tensiones entre tradición y progreso.\n\nTamayo organiza la composición con figuras humanas estilizadas, edificios, máquinas y símbolos que aluden a la ciudad moderna, al trabajo industrial y a los cambios en la vida cotidiana.\n\nEl uso de colores intensos y contrastes fuertes crea una atmósfera vibrante, donde la energía de la modernidad convive con sombras y zonas de ambigüedad.\n\nMás que ofrecer una celebración optimista, el mural sugiere un México en tránsito, donde la identidad se redefine constantemente frente a la presión del desarrollo económico y tecnológico.\n\nLas formas y recursos plásticos de Tamayo, ligados a la vanguardia internacional, aportan una lectura distinta del muralismo, menos didáctica y más enfocada en la experiencia sensorial y simbólica del espectador.",
    medium: "Pintura vinílica (vinelita) sobre soporte mural",
    dimensions: "Dimensiones murales, aproximadamente 6.00 x 4.00 m",
    location: "Museo del Palacio de Bellas Artes, Ciudad de México",
    image: "/assets/images/tamayo-mexico-hoy.jpeg",
    alt: "Mural México de hoy de Rufino Tamayo",
    audio: "/audio/tamayo-mexico-de-hoy.mp3",
    tags: [
      "Muralismo",
      "Rufino Tamayo",
      "Modernidad",
      "Ciudad",
      "Identidad mexicana"
    ],
    curiousFacts: [
      "Este mural dialoga con Nacimiento de nuestra nacionalidad, al proponer una continuidad entre el origen de la nación y su realidad contemporánea.",
      "Tamayo se distancia del muralismo de corte político explícito y apuesta por una síntesis entre lenguaje moderno y temas nacionales.",
      "La obra fue clave para consolidar la presencia de Tamayo en el Palacio de Bellas Artes como una voz distinta dentro del muralismo mexicano."
    ]
  },
  {
    id: "liberacion",
    collection: "murales",
    title: "Liberación",
    artist: "Jorge González Camarena",
    year: "1963",
    description: "Liberación propone una lectura plástica de la historia de México y de la humanidad a través de una composición organizada en tres grandes secciones que muestran la esclavitud, el acto de liberarse y la búsqueda de una libertad espiritual.\n\nEn la primera parte aparece un campesino anónimo dentro de un ataúd, acompañado de una figura femenina desnuda con la espalda tatuada, signos de prejuicios, prohibiciones y cadenas invisibles que representan la opresión histórica.\n\nEn la sección central, varios hombres rompen sus ataduras y se incorporan, simbolizando el momento en que la humanidad decide despojarse de las estructuras que la mantienen sometida.\n\nFinalmente, una mujer mestiza sostiene una semilla de maíz, símbolo de vida, sabiduría y continuidad, avanzando hacia un espacio más luminoso que sugiere una libertad no solo material, sino también interior.\n\nEl mural combina elementos figurativos y simbólicos, recurriendo a una paleta intensa y a diagonales dinámicas para transmitir que la liberación es un proceso continuo, que va de la denuncia de la injusticia a la construcción de una nueva conciencia.",
    medium: "Acrílico sobre muro",
    dimensions: "4.50 x 9.93 m aproximadamente",
    location: "Museo del Palacio de Bellas Artes, Ciudad de México",
    image: "/assets/images/gonzalez-camarena-liberacion.jpg",
    alt: "Mural Liberación de Jorge González Camarena",
    audio: "/audio/gonzalez-camarena-liberacion.mp3",
    tags: [
      "Muralismo",
      "Jorge González Camarena",
      "Libertad",
      "Historia de México",
      "Derechos humanos"
    ],
    curiousFacts: [
      "El mural fue inaugurado en julio de 1963 y se concibió como una reflexión sobre las políticas agrarias posrevolucionarias y las formas de opresión persistentes.",
      "La figura femenina tatuada se ha leído como metáfora de las marcas que dejan la censura, los prejuicios y el control social sobre los cuerpos.",
      "La mujer mestiza con la semilla de maíz al final del mural simboliza la posibilidad de una liberación no solo económica, sino también cultural y espiritual."
    ]
  },
  {
    id: "laPiedadEnElDesierto",
    collection: "murales",
    title: "La piedad en el desierto",
    artist: "Manuel Rodríguez Lozano",
    year: "1942",
    description: "Este mural reinterpreta el tema clásico de la Piedad en un paisaje árido y desolado, alejándolo de la escena tradicional cristiana para situarlo en un contexto mexicano contemporáneo.\n\nRodríguez Lozano se autorretrata como una figura pálida y languideciente, sostenida por una mujer indígena envuelta en rebozo, que asume el rol maternal y protector en medio del desierto.\n\nEl entorno casi vacío, de tonos fríos y terrosos, refuerza la sensación de abandono, soledad y sufrimiento, como si ambos personajes estuvieran condenados a una especie de exilio emocional y físico.\n\nLa relación entre el artista-personaje y la mujer indígena sugiere una lectura compleja sobre dependencia, cuidado y culpa, en la que la figura indígena soporta el peso del dolor ajeno.\n\nLa obra combina un lenguaje moderno, simplificado y casi escultórico, con un profundo contenido simbólico, convirtiendo la escena en una reflexión sobre la marginalidad, el sacrificio y la maternidad como fuerza que sostiene la vida incluso en las condiciones más adversas.",
    medium: "Pintura al fresco trasladada a soporte mural",
    dimensions: "Aproximadamente 3.00 x 5.00 m",
    location: "Museo del Palacio de Bellas Artes, Ciudad de México",
    image: "/assets/images/rodriguez-lozano-piedad-desierto.jpg",
    alt: "Mural La piedad en el desierto de Manuel Rodríguez Lozano",
    audio: "/audio/rodriguez-lozano-piedad-desierto.mp3",
    tags: [
      "Muralismo",
      "Manuel Rodríguez Lozano",
      "Piedad",
      "Desierto",
      "Identidad indígena"
    ],
    curiousFacts: [
      "El mural fue pintado originalmente en 1942 en el entonces Palacio de Lecumberri, que funcionaba como prisión, y posteriormente fue trasladado al Palacio de Bellas Artes.",
      "La composición se inspira en La Piedad de Miguel Ángel, pero Rodríguez Lozano se coloca a sí mismo en el lugar del Cristo muerto, generando una lectura autobiográfica y confesional.",
      "La obra ha sido interpretada también desde claves de disidencia y vulnerabilidad, aludiendo a la condición marginal del propio artista en su contexto social."
    ]
  },
  {
    id: "alegoriaDelViento",
    collection: "murales",
    title: "Alegoría del viento",
    artist: "Roberto Montenegro",
    year: "1926-1928",
    description: "Alegoría del viento, también conocida como El ángel de la paz, presenta una gran figura alada que domina la composición, símbolo del viento como fuerza espiritual y ordenadora.\n\nEl personaje, de rasgos serenos y cuerpo estilizado, sostiene elementos simbólicos que sugieren equilibrio y armonía, mientras su túnica y sus alas parecen moverse con una ráfaga invisible.\n\nAlrededor de la figura central se organizan formas geométricas y arquitectónicas que recuerdan vitrales o mosaicos, creando un ambiente casi litúrgico en el que el viento se asocia con la paz y la renovación.\n\nLa solidez de las formas y cierta rigidez en las poses le dan al mural una presencia monumental, cercana a la tradición bizantina y al arte sacro, pero reinterpretada desde un lenguaje moderno.\n\nEl resultado es una imagen que combina espiritualidad, orden decorativo y un sentido sereno de movimiento, invitando al espectador a leer el viento no solo como fenómeno natural, sino como metáfora de calma y reconciliación.",
    medium: "Fresco sobre muro (trasladado a soporte en Bellas Artes)",
    dimensions: "3.26 x 3.21 m aproximadamente",
    location: "Museo del Palacio de Bellas Artes, Ciudad de México",
    image: "/assets/images/montenegro-alegoria-viento.jpeg",
    alt: "Mural Alegoría del viento de Roberto Montenegro",
    audio: "/audio/montenegro-alegoria-viento.mp3",
    tags: [
      "Muralismo",
      "Roberto Montenegro",
      "Ángel de la paz",
      "Espiritualidad",
      "Decorativismo"
    ],
    curiousFacts: [
      "El mural fue realizado originalmente para el claustro del Colegio Máximo de San Pedro y San Pablo y posteriormente integrado a la colección del Palacio de Bellas Artes.",
      "También se le conoce como El ángel de la paz, subrayando su carácter simbólico y espiritual.",
      "La pieza destaca dentro del muralismo temprano por su fuerte componente decorativo y su diálogo con tradiciones religiosas y artesanales."
    ]
  },
  {
    id: "xibalbaElInframundoDeLosMayas",
    collection: "murales",
    title: "Xibalbá, el inframundo de los mayas",
    artist: "Rina Lazo",
    year: "2019",
    description: "Este mural representa el Xibalbá, el inframundo de la mitología maya-quiché, inspirado en los relatos del Popol Vuh y en la memoria personal de la artista.\n\nLa escena se desarrolla dentro de una gran cueva, iluminada por un ambiente sorprendentemente vivo y festivo, donde la muerte y la enfermedad no se presentan como castigo, sino como parte natural del ciclo de la vida.\n\nEn diferentes planos se observan seres humanos, animales y figuras míticas realizando actividades como el juego de pelota, el cultivo del maíz, el tejido y diversos rituales, mostrando la continuidad entre el mundo de los vivos y el de los muertos.\n\nEl tránsito del Sol, el nacimiento del maíz desde el inframundo y la presencia de los héroes gemelos Hunahpú e Ixbalanqué articulan el relato visual, integrando símbolos centrales de la cosmovisión maya.\n\nRina Lazo incluye incluso su propio autorretrato en la entrada de la cueva, acompañada por animales y deidades, como si se preparara para emprender un viaje hacia ese espacio sagrado, haciendo del mural una despedida personal y, al mismo tiempo, un homenaje a la sabiduría ancestral.",
    medium: "Pintura mural acrílica sobre soporte",
    dimensions: "Más de 2.00 m de alto por 5.00 m de largo",
    location: "Área de murales, segundo piso, Museo del Palacio de Bellas Artes, Ciudad de México",
    image: "/assets/images/rina-lazo-xibalba.jpeg",
    alt: "Mural Xibalbá, el inframundo de los mayas de Rina Lazo",
    audio: "/audio/rina-lazo-xibalba.mp3",
    tags: [
      "Muralismo",
      "Rina Lazo",
      "Mundo maya",
      "Popol Vuh",
      "Inframundo"
    ],
    curiousFacts: [
      "Xibalbá, el inframundo de los mayas es la última gran obra mural de Rina Lazo y la convirtió en la primera mujer muralista con un mural en la colección permanente de Bellas Artes.",
      "La artista se inspiró en recuerdos de su infancia en Guatemala, especialmente en las cuevas de Candelaria cercanas a Cobán, para diseñar la geografía del inframundo.",
      "El mural fue donado al patrimonio artístico de México y se integró a la colección permanente del Museo del Palacio de Bellas Artes en el marco de las celebraciones por los 90 años del recinto."
    ]
  },
];