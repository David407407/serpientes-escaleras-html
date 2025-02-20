import React, { useEffect, useState, useRef } from 'react'
import { useJuegoStore } from '../store/juegoStore'

const Card = () => {
    const { dado, carta, cartas,  animationCard, setAnimationCard } = useJuegoStore( state => state )
    const [card, setCard] = useState({})
    const videoRef = useRef(null);

    const questions = [
        { id: 1, question: "¿Con qué etiqueta se crea un enlace?", answer: "<a> (Etiqueta para crear hipervínculos)." },
        { id: 2, question: "¿Qué atributo se usa para definir la dirección de un enlace?", answer: "href (Especifica la URL del enlace)." },
        { id: 3, question: "¿Con qué etiqueta se define un encabezado de nivel 1?", answer: "<h1> (Encabezado principal, el más grande)." },
        { id: 4, question: "¿Qué etiqueta se usa para párrafos?", answer: "<p> (Define un párrafo de texto)." },
        { id: 5, question: "¿Cómo se define una lista ordenada?", answer: "<ol> (Lista con números o letras)." },
        { id: 6, question: "¿Cómo se define una lista no ordenada?", answer: "<ul> (Lista con viñetas)." },
        { id: 7, question: "¿Qué etiqueta se usa para un elemento de lista?", answer: "<li> (Elemento dentro de una lista)." },
        { id: 8, question: "¿Con qué etiqueta se inserta una imagen?", answer: "<img> (Muestra imágenes en la página)." },
        { id: 9, question: "¿Qué atributo se usa para definir la URL de una imagen?", answer: "src (Indica la ubicación de la imagen)." },
        { id: 10, question: "¿Qué atributo se usa para texto alternativo en imágenes?", answer: "alt (Texto que aparece si la imagen no se carga)." },
        { id: 11, question: "¿Con qué etiqueta se crea una tabla?", answer: "<table> (Crea una tabla en HTML)." },
        { id: 12, question: "¿Qué etiqueta se usa para una fila de tabla?", answer: "<tr> (Define una fila dentro de la tabla)." },
        { id: 13, question: "¿Qué etiqueta se usa para una celda de tabla?", answer: "<td> (Crea una celda normal en una tabla)." },
        { id: 14, question: "¿Qué etiqueta se usa para el encabezado de una tabla?", answer: "<th> (Crea una celda de encabezado)." },
        { id: 15, question: "¿Qué etiqueta define un formulario?", answer: "<form> (Agrupa campos para enviar datos)." },
        { id: 16, question: "¿Qué atributo de <form> define la URL a la que se envían los datos?", answer: "action (Especifica el destino del formulario)." },
        { id: 17, question: "¿Qué etiqueta se usa para un campo de texto?", answer: "<input> (Crea un campo de entrada)." },
        { id: 18, question: "¿Qué atributo se usa para especificar el tipo de un <input>?", answer: "type (Define el tipo de entrada, como texto o contraseña)." },
        { id: 19, question: "¿Qué etiqueta se usa para un botón de envío?", answer: "<button> (Crea un botón interactivo)." },
        { id: 20, question: "¿Cómo se define un comentario en HTML?", answer: "<!-- comentario --> (Texto ignorado por el navegador)." },
        { id: 21, question: "¿Qué etiqueta se usa para negritas?", answer: "<strong> (Resalta texto con importancia)." },
        { id: 22, question: "¿Qué etiqueta se usa para cursiva?", answer: "<em> (Texto con énfasis o cursiva)." },
        { id: 23, question: "¿Qué etiqueta define un enlace a un archivo CSS externo?", answer: "<link> (Conecta el HTML con un archivo CSS)." },
        { id: 24, question: "¿Qué atributo de <link> define la relación del archivo?", answer: "rel (Indica que es una hoja de estilo)." },
        { id: 25, question: "¿Qué atributo de <link> define la ubicación del archivo?", answer: "href (Especifica la URL del archivo CSS)." },
        { id: 26, question: "¿Qué etiqueta se usa para agregar JavaScript en HTML?", answer: "<script> (Incorpora código JavaScript)." },
        { id: 27, question: "¿Qué etiqueta define el cuerpo del documento?", answer: "<body> (Contiene el contenido visible)." },
        { id: 28, question: "¿Qué etiqueta contiene la metadata del documento?", answer: "<head> (Incluye información no visible como título y enlaces)." },
        { id: 29, question: "¿Qué etiqueta define el título de la página?", answer: "<title> (Texto que aparece en la pestaña del navegador)." },
        { id: 30, question: "¿Qué etiqueta se usa para dividir contenido en secciones?", answer: "<div> (Crea un contenedor genérico en bloque)." },
        { id: 31, question: "¿Qué etiqueta se usa para un bloque genérico en línea?", answer: "<span> (Crea un contenedor en línea)." },
        { id: 32, question: "¿Cómo se define un enlace que abre en una nueva pestaña?", answer: "target=\"_blank\" (Atributo que abre un enlace en una nueva ventana)." },
        { id: 33, question: "¿Qué etiqueta se usa para resaltar texto?", answer: "<mark> (Resalta texto con color)." },
        { id: 34, question: "¿Qué atributo se usa para agregar un identificador único a un elemento?", answer: "id (Identifica un elemento de forma única)." },
        { id: 35, question: "¿Qué atributo se usa para agregar una clase a un elemento?", answer: "class (Agrupa elementos con un nombre común)." },
        { id: 36, question: "¿Qué etiqueta define un video en HTML?", answer: "<video> (Muestra un archivo de video)." },
        { id: 37, question: "¿Qué atributo de <video> habilita la reproducción automática?", answer: "autoplay (Hace que el video se reproduzca al cargar)." },
        { id: 38, question: "¿Qué etiqueta se usa para un archivo de audio?", answer: "<audio> (Incorpora un archivo de audio)." },
        { id: 50, question: "¿Qué etiqueta define un elemento semántico genérico?", answer: "<section> (Agrupa contenido relacionado)." }
    ];

    
    useEffect(() => {
        if(animationCard) {
            randomNum()
            if (videoRef.current) {
                videoRef.current.load(); // Recarga el video con la nueva fuente
                videoRef.current.play();
            }
        } else {
            if (videoRef.current) {
                videoRef.current.load(); // Recarga el video con la nueva fuente
                videoRef.current.pause();
            }
        }
    }, [animationCard])

    const animarSalida = () => {
        setTimeout(() => {
            setAnimationCard(!animationCard)
        }, 500)
    }

    const randomNum = () => {
        const num = Math.floor((Math.random() * 38) + 1)
        setCard({
            ...questions[num], video: `video${num}.mp4`
        })
        videoRef.current.src = `/videos/video${num}.mp4`

        console.log(card)
    }

  return (
    <div className='my-8'>
        <div className='mx-auto w-52 h-72 rounded-md bg-[url(/imgs/card.jpg)] bg-center bg-no-repeat bg-cover  '>
    </div>

        <div className={`absolute flex ${ animationCard ? 'opacity-100 z-10' : 'opacity-0 z-[-100]'}  flex-col gap-8 justify-center items-center  min-w-full h-screen bg-black/80 top-0 left-0  transition-all duration-300 `}>

            <div className="cursor-pointer bg-[#FF4600] px-2 py-2 lg:px-5 lg:py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300 w-48 outfit text-center">
                <p>Salió el número: {dado.cara}</p>
            </div>
            <video ref={videoRef} width="320">
                <source src={`/videos/video1.mp4`} type="video/mp4" />
            </video>
            <div className='flex gap-2'>
                <div className='mx-auto w-40 h-64 rounded-md  bg-[url(/imgs/cardQuestion.jpg)] bg-center bg-no-repeat bg-cover  '>
                    <div className='bg-black/30 w-40 h-64 flex items-center justify-center'>
                        <p className='text-xl text-center font-bold outfit'>
                            {card.question}
                        </p>
                    </div>
                </div>

                <div className='mx-auto w-40 h-64 rounded-md bg-[url(/imgs/cardAnswer.jpg)] bg-center bg-no-repeat bg-cover  '>
                    <div className='bg-black/30 w-40 h-64 flex items-center justify-center'>
                        <p className='text-xl text-center font-bold outfit'>
                            {card.answer}
                        </p>
                    </div>
                </div>
            </div>

            <button onClick={() => animarSalida()} className="cursor-pointer bg-[#FF4600] px-2 py-2 lg:px-5 lg:py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300 w-30 outfit">
                <p>Salir</p>
            </button>
        </div>
        
    </div>
  )
}

export default Card