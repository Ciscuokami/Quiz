// class PantallaJuego {
//     constructor (questions) {

//     }

//     paintQuestions(questions) {
//         const body = document.querySelector("body");

//         const divJuego = document.createElement("div")
//         const container = document.createElement("div");

//         divJuego.id = "divJuego";
//         container.id = "divInicio2"
        // let contentQuestion = this.questions[this.questionNumber];
//         questions.map(preguntas => {
//             const containerPregunta = document.createElement("div");
//             const containerRespuestas = document.createElement("div");
//             const preguntaP = document.createElement("p");
//             const respuestasP = document.createElement("p");
            // console.log(preguntas)
//             containerPregunta.id = "question";
//             containerRespuestas.id = "answers"

//             preguntaP.innerText = preguntas.question;
//             respuestasP.innerText = preguntas.answers;

//             container.appendChild(containerPregunta);
//             container.appendChild(containerRespuestas);
//             containerPregunta.appendChild(preguntaP);
//             containerRespuestas.appendChild(respuestasP);

//             for (i = 0; i <= length; i++) {
//                 const length = preguntas.answers.length;
//                 const btnAnswer = document.createElement("button");
//                 btnAnswer.className = "btnAns";
//                 btnAnswer.innerText = preguntas.answer[i];
//                 btnAnswer.addEventListener("click", () => responseValidator(preguntas.correctAnswer, btnAnswer.id));
//                 btnAnswer.id = `btnAnswer${i}`;
//                 divAnswers.appendChild(btnAnswer);
//             }
//             return containerPregunta;
//         })

//         body.appendChild(divJuego);
//         divJuego.appendChild(container);
//     };
// };

let questions = null;
let currentQuestion = 0;
// La útltima que funciona
function paintQuestion(question) {
    const body = document.querySelector("body");

    const container = document.createElement("div");

    container.id = "divInicio2"

            const containerPregunta = document.createElement("div");
            const containerRespuestas = document.createElement("div");
            const preguntaP = document.createElement("p");
            console.log( "pregunta:", question)
            containerPregunta.id = "question";
            containerRespuestas.id = "answer";

            preguntaP.innerText = question.question;

            containerPregunta.appendChild(preguntaP);

            question.answers.map((answer) => {
                const respuestaP = document.createElement("p");
                respuestaP.innerText = answer;
                containerRespuestas.appendChild(respuestaP);
                respuestaP.addEventListener("click", ()=>{
                    container.remove();
                    paintQuestion(questions[++currentQuestion]);
                })
            })
            container.appendChild(containerPregunta);
            container.appendChild(containerRespuestas);
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
        questions = data.questions;
        paintQuestion(questions[currentQuestion]);
    });
};

getQuestions();



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
        // this.body = document.querySelector("body");
        // this.DivInicio;
        // this.PantallaInicio;
        // this.divInicio();
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






// Esto ejecuta pantalla Inicio

// let Inicio = new PantallaInicio();
// Inicio.divInicio();


// class Juego; Pantalla con la pregunta y las posibles respuestas.




// class Pregunta;
// class PantallaFinal;