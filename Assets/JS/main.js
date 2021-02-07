const body = document.querySelector("body");

const containerGeneral = document.createElement("div");

body.appendChild(containerGeneral);

containerGeneral.id = "divInicio2"

let questions = null;
// let currentQuestion = 0;
let respuestasOK = 0;
let respuestasKO = 0;

/*
===========================================
    Corregir preguntas
===========================================
*/
function resetMarcador (respuestasOK, respuestasKO) {
    if (respuestasOK + respuestasKO === 10) {
        let respuestasOK = 0;
        let respuestasKO = 0;
    };
};


function validarQuestion(question, rightAnswer, answer, respuestaP) {

    if (answer === question.answers[rightAnswer]) {
        respuestaP.id = "right";
        respuestasOK++;
        // alert("¡Has acertado!");
    } else {
        respuestaP.id = "wrong";
        alert("La repuesta correcta era: " + question.answers[rightAnswer]);
        respuestasKO++;
        // alert("¡Fallaste!");
    };
};

/*
===========================================
    Pintar preguntas
===========================================
*/

function paintQuestion(question) {


    const container = document.createElement("div");

    container.id = "divJuego"


    const containerPregunta = document.createElement("div");
    const containerRespuestas = document.createElement("div");
    const preguntaP = document.createElement("p");
    preguntaP.id = "question";
    containerPregunta.id = "divQuestion";
    containerRespuestas.id = "divAnswer";

    preguntaP.innerText = question.question;

    containerPregunta.appendChild(preguntaP);

    const rightAnswer = question.correctAnswer;

    question.answers.map((answer) => {
        const respuestaP = document.createElement("p");
        respuestaP.id = "respuesta";
        respuestaP.innerText = answer;

        containerRespuestas.appendChild(respuestaP);
        respuestaP.addEventListener("click", ()=>{
            validarQuestion(question, rightAnswer, answer, respuestaP);
            container.remove();
            if (currentQuestion < 9){
            paintQuestion(questions[++currentQuestion]);
            } else {
                marcador();
            }
        })
    })
    containerGeneral.appendChild(container);
    container.appendChild(containerPregunta);
    container.appendChild(containerRespuestas);
    body.appendChild(container);
};


/*
===========================================
    Pedir preguntas
===========================================
*/

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
        currentQuestion = 0;
        questions = data.questions;
        paintQuestion(questions[currentQuestion]);
    });
};

// getQuestions();




/*
===========================================
    Marcador
===========================================
*/

function marcador() {
    containerGeneral.remove();

    const container2 = document.createElement("div");
    const respuestasOKP = document.createElement("p");
    const respuestasKOP = document.createElement("p");


    respuestasOKP.innerText = "RESPUESTAS ACERTADAS: " + respuestasOK;
    respuestasKOP.innerText = "RESPUESTAS FALLADAS: " + respuestasKO;

    respuestasOKP.id = "RespuestasOK";
    respuestasKOP.id = "RespuestasKO";
    container2.id = "divMarcador"

    body.appendChild(container2);
    container2.appendChild(respuestasOKP);
    container2.appendChild(respuestasKOP);
    Restart(container2);

};

/*
===========================================
    Reiniciar Juego
===========================================
*/

function Restart(container2) {
    const DivRestart = document.createElement("div");
    const btnRestart = document.createElement("button");
    btnRestart.innerText = "Restart";
    btnRestart.id = "btnRestart";
    body.appendChild(container2);
    container2.appendChild(DivRestart);
    DivRestart.appendChild(btnRestart);

    btnRestart.addEventListener("click", () => {
            containerGeneral.remove();
            // let Juego = new PantallaJuego();
            // Juego.divPreguntas();
            getQuestions();
    });
};

/*
===========================================
    Pantalla inicio
===========================================
*/
function pantallaInicio() {

    const DivInicio = document.createElement("div");
    const imgInicio = document.createElement("img");
    const PantallaInicio = document.createElement("div");

    body.appendChild(PantallaInicio);
    PantallaInicio.appendChild(DivInicio);
    DivInicio.appendChild(imgInicio);

    PantallaInicio.id = "PantallaInicio";
    DivInicio.id = "divInicio";
    imgInicio.id = "imgInicio";
    imgInicio.src = "../Assets/Imagenes/quiz.jpeg";
    imgInicio.alt = "";

    const btncomenzar = document.createElement("button");
    DivInicio.appendChild(btncomenzar);
    btncomenzar.innerText = "Play Game";
    btncomenzar.id = "btnComenzar";

    btncomenzar.addEventListener("click", () => {
        PantallaInicio.remove();
        getQuestions();
    });
};

pantallaInicio();