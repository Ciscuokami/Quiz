# Quiz
Quiz con POO Javascript
EL GRAN QUIZ

    El gran proyecto ha llegado, esta vez en forma de Quiz, para ello has de estar preparad@ porque la cosa comienza a complicarse

Descripción

La aplicación deberá mostrar una pantalla de bienvenida, en ella un botón que de paso al juego, este será de preguntas y respuestas. Para ello, deberás pintar un formulario con una pregunta y 4 posibles respuestas, solo una de ellas será la correcta.

Cuando el jugador seleccione una pregunta, deberás mostrar si esta es la correcta, en caso de haber acertado deberás mostrar la siguiente pregunta. Si la respuesta has fallado, deberás decidir la funcionalidad, ya sea pasar a la siguiente pregunta o dar otro intento al jugador.

Una vez el juego haya terminado una pantalla de fin se deberá mostrar, en esta, la puntuación deberá aparecer, en el caso de que te atrevas, tambien un top 10 la acompañará.
Especificaciones

    El código deberá de hacerse en Programación Orientada a Objetos.
    Las preguntas deben provenir de un json (abajo tienes varios ejemplos)
    Se deben pintar tantas preguntas como vengan en el json, en su defecto, se puede preguntar al jugador cuantas quiere ver
    Actualmente tan solo van a existir 4 respuestas, pero puedes adaptar el código por si el día de mañana vienen más o menos
    Actualmente solo hay una respuesta correcta, pero puedes adaptar el código por si el día de mañana hay más (las respuestas correctas serían un array)

Clases que te recomiendo crear

    Clase PantallaIncio
    Clase Juego (por si el día de mañana quieres varios juegos a la vez)
    Clase Pregunta
    Clase PantallaFinal

Bonus

    Añadir el tiempo que lleva el jugador de juego
    Poner un tiempo máximo por pregunta
    Guardar puntuación del jugador (localStorage)
    Hacer un top10 jugadores
    Añadir opción de volver a jugar

Clases recomendadas para el bonus

    Clase Tiempo
    Clase Top10

