// const questionsPack = {
//     "questions": [
//         {
//             "question": "What is the correct JavaScript syntax to change the content of the HTML element below?",
//             "answers": [
//                 "document.getElementByName(\"p\").innerHTML = \"Hello World!\";",
//                 "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
//                 "#demo.innerHTML = \"Hello World!\";",
//                 "document.getElement(\"p\").innerHTML = \"Hello World!\";"
//             ],
//             "correctAnswer": 2
//         },
//         {
//             "question": "Which event occurs when the user clicks on an HTML element?",
//             "answers": [
//                 "onmouseover",
//                 "onmouseclick",
//                 "onclick",
//                 "onchange"
//             ],
//             "correctAnswer": 3
//         },
//         {
//             "question": "Where is the correct place to insert a JavaScript?",
//             "answers": [
//                 "Both the <head> section and the <body> section are correct",
//                 "The <footer>",
//                 "The <body> section",
//                 "The <head> section"
//             ],
//             "correctAnswer": 3
//         },
//         {
//             "question": "Inside which HTML element do we put the JavaScript?",
//             "answers": [
//                 "<script>",
//                 "<js>",
//                 "<javascript>",
//                 "<scripting>"
//             ],
//             "correctAnswer": 2
//         },
//         {
//             "question": "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
//             "answers": [
//                 "if i =! 5 then",
//                 "if (i <> 5)",
//                 "if i <> 5",
//                 "if (i != 5)"
//             ],
//             "correctAnswer": 3
//         },
//         {
//             "question": "How does a FOR loop start?",
//             "answers": [
//                 "for (i <= 5; i++)",
//                 "for i = 1 to 5",
//                 "for (i = 0; i <= 5; i++)",
//                 "for (i = 0; i <= 5)"
//             ],
//             "correctAnswer": 1
//         },
//         {
//             "question": "Which operator is used to assign a value to a variable?",
//             "answers": [
//                 "x",
//                 "*",
//                 "-",
//                 "="
//             ],
//             "correctAnswer": 0
//         }
//     ]
// }

function paintQuestions(questions) {
    const body = document.querySelector("body");

    const container = document.createElement("div");

    container.id = "divInicio2"

    questions.map(preguntas => {
        const containerPregunta = document.createElement("div");
        const containerRespuestas = document.createElement("div");
        const preguntaP = document.createElement("p");
        const respuestasP = document.createElement("p");
        console.log(preguntas)
        containerPregunta.id = "question";

        preguntaP.innerText = preguntas.question;
        respuestasP.innerText = preguntas.answers;

        container.appendChild(containerPregunta);
        container.appendChild(containerRespuestas);
        containerPregunta.appendChild(preguntaP);
        containerRespuestas.appendChild(respuestasP);
    })
    body.appendChild(container);
};

function getQuestions() {
const API_KEY = "U5QAVxNrA6nMzvi9KAm29DS2Pg7pL2R5DMlcdB7w";

fetch(`https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&category=code&difficulty=Easy&limit=10&tags=JavaScript`).then(res => res.json()).then(d => ({
		questions: d.map(question => {
			let answers = Object.entries(question.answers).filter(([k, v]) => v).sort(() => Math.random() - 0.5);
            return (
				{
                    question: question.question,
					answers: answers.map(([,v]) => v),
					correctAnswer: answers.map(([k]) => k).indexOf(question.correct_answer)

                }
			)
		})
    })
).then(data => {
        console.log("data: ", data)
        const {questions} = data;
        paintQuestions(questions);
    });
};

getQuestions();


class PantallaJuego {
    constructor (questions) {

    }

    divPreguntas() {
        const divJuego = document.createElement("div")
        const divInicio = document.createElement("div");
        const divTitle = document.createElement("div");
        const divAnswers = document.createElement("div");
        // let contentQuestion = this.questions[this.questionNumber];

        divJuego.id = "divJuego";
        divInicio.id = "divInicio2";
        divTitle.id = "question";
        divAnswers.id = "answers";

        body.appendChild(divJuego);
        divJuego.appendChild(divInicio);
        divInicio.appendChild(divTitle);
        divInicio.appendChild(divAnswers);

        for (i = 0; 1 <= 3; i++) {
            const btnAnswer = document.createElement("button");
            btnAnswer.className = "btnAns";
            btnAnswer.innerText = contentQuestion.answer[i];
            btnAnswer.addEventListener("click", () => responseValidator(contentQuestion.correctAnswer, btnAnswer.id));
            btnAnswer.id = `btnAnswer${i}`;
            divAnswers.appendChild(btnAnswer);
        }
        return div;
    };
};

// let Juego = new PantallaJuego();
// Juego.divPreguntas();

//     divPreguntas() {
//         this.responseChecked = false;
//         divTitle.innerText = this.question;


//     };

//     responseValidator(a, b) {
//         if(!responseChecked) {
//             responseChecked = true;
//             questionNumber++;
//             selected = parseInt(b.substring(6, 7), 10);
//             console.log(a, selected);
//             if (a === selected) {
//                 document.getElementById(b).className = "btnResponse ok";
//             } else {
//                 document.getElementById(b).className = "btnResponse error";
//             }
//             if(questionNumber === totalQuestions) {
//                 const finishTitle = document.createElement("div");
//                 finishTitle.innerText = "¡Juego Terminado! Has acertado " + this.hits + " preguntas";
//                 finishTitle.id = "hits";
//                 const where = document.getElementById("answers");
//                 where.appendChild(finishTitle);
//                 console.log("Se han acabado las preguntas");
//             } else {
//                 const btContiue = document.createElement("button");
//                 btContiue.innerText = "continuar";
//                 btContiue.id = "btnContinue";
//                 btContiue.addEventListener("click", () => removeQuestions());
//                 const where = document.getElementById("answers");
//                 where.appendChild(btContiue);
//             }
//         }
//     };

//     removeQuestions() {
//         questions.remove();
//     }




// class PantallaInicio {
//     constructor() {
//         // this.body = document.querySelector("body");
//         // this.DivInicio;
//         // this.PantallaInicio;
//         // this.divInicio();
//     }

//     divInicio() {
//         const DivInicio = document.createElement("div");
//         const imgInicio = document.createElement("img");
//         const PantallaInicio = document.createElement("div");

//         body.appendChild(PantallaInicio);
//         PantallaInicio.appendChild(DivInicio);
//         DivInicio.appendChild(imgInicio);

//         PantallaInicio.id = "PantallaInicio";
//         DivInicio.id = "divInicio";
//         imgInicio.id = "imgInicio";
//         imgInicio.src = "../Assets/Imagenes/quiz.jpeg";
//         imgInicio.alt = "";

//         const btncomenzar = document.createElement("button");
//         DivInicio.appendChild(btncomenzar);
//         btncomenzar.innerText = "Play Game";
//         btncomenzar.id = "btnComenzar";

//         btncomenzar.addEventListener("click", () => {
//                 if ("click") {
//                     divInicio.remove();
//                     let Juego = new PantallaJuego();
//                     Juego.divPreguntas();

//                 };
//                 });
//     }
// };






// // Esto ejecuta pantalla Inicio

// let Inicio = new PantallaInicio();
// Inicio.divInicio();


// class Juego; Pantalla con la pregunta y las posibles respuestas.




// class Pregunta;
// class PantallaFinal;