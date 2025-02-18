const quizData = [
    {
        question: "Care este autorul romanului „Ion”?",
        options: ["Liviu Rebreanu", "Mihai Eminescu", "George Coșbuc", "Ion Creangă"],
        answer: "Liviu Rebreanu"
    },
    {
        question: "Care este autorul romanului „Maitreyi”?",
        options: ["Mircea Eliade", "Marin Preda", "Lucian Blaga", "Gheorghe Călinescu"],
        answer: "Mircea Eliade"
    },
    {
        question: "Ce este o bibliotecă publică?",
        options: ["O bibliotecă accesibilă tuturor cititorilor", "O bibliotecă privată", "O colecție de cărți științifice", "O arhivă de documente istorice"],
        answer: "O bibliotecă accesibilă tuturor cititorilor"
    },
    {
        question: "Care este cel mai cunoscut roman al lui Mihai Eminescu?",
        options: ["„Luceafărul”", "„Scrisoarea III”", "„Memento Mori”", "„Sărmanul Dionis”"],
        answer: "„Sărmanul Dionis”"
    },
    {
        question: "Ce temă principală explorează romanul „Ion”?",
        options: ["Dragostea și pământul", "Războiul și sacrificiul", "Trădarea și loialitatea", "Pierderea idealurilor"],
        answer: "Dragostea și pământul"
    },
    {
        question: "Care dintre aceste lucrări a fost scrisă de Charles Dickens?",
        options: ["„David Copperfield”", "„Micul prinț”", "„Don Quijote”", "„Căpcăunul”"],
        answer: "„David Copperfield”"
    },
    {
        question: "Ce este Biblioteca Națională a României?",
        options: ["Un loc unde sunt stocate cărți și documente istorice", "Un muzeu al literaturii române", "O bibliotecă de literatură științifică", "O bibliotecă destinată exclusiv studenților"],
        answer: "Un loc unde sunt stocate cărți și documente istorice"
    },
    {
        question: "Ce autor român este cunoscut pentru romanul „Moromeții”?",
        options: ["Marin Preda", "Liviu Rebreanu", "Ion Luca Caragiale", "Mihail Sadoveanu"],
        answer: "Marin Preda"
    },
    {
        question: "Care este tema principală din romanul „Enigma Otiliei” de George Călinescu?",
        options: ["Dragostea și moștenirea", "Misterele unei crime", "Destrămarea unei familii", "Tragedia unui individ"],
        answer: "Destrămarea unei familii"
    },
    {
        question: "Ce autor român a scris „Baltagul”?",
        options: ["Mihail Sadoveanu", "Mircea Eliade", "Liviu Rebreanu", "George Călinescu"],
        answer: "Mihail Sadoveanu"
    },
    {
        question: "Care este numele celei mai importante lucrări ale lui Tudor Arghezi?",
        options: ["„Cuvinte potrivite”", "„Flori de mucigai”", "„O scrisoare pierdută”", "„Zdrelea”"],
        answer: "„Flori de mucigai”"
    },
    {
        question: "Cine a scris „Mihail”?",
        options: ["Lucian Blaga", "Camil Petrescu", "Liviu Rebreanu", "Ion Luca Caragiale"],
        answer: "Camil Petrescu"
    },
    {
        question: "Care dintre aceste lucrări este scrisă de Mihai Eminescu?",
        options: ["„Doina”", "„Pădurea spânzuraților”", "„Ion”", "„Scrisoarea I”"],
        answer: "„Doina”"
    },
    {
        question: "Care este tema centrală a romanului „Pădurea spânzuraților” de Liviu Rebreanu?",
        options: ["Războiul și conflictele interne", "Pierderea idealurilor", "Dragostea imposibilă", "Înfruntarea destinului"],
        answer: "Războiul și conflictele interne"
    },
    {
        question: "Ce autor român a scris „Ion”?",
        options: ["Liviu Rebreanu", "Mihail Sadoveanu", "Camil Petrescu", "Mircea Eliade"],
        answer: "Liviu Rebreanu"
    },
    {
        question: "Care este autorul romanului „Căpcăunul”?",
        options: ["Marin Preda", "Ion Luca Caragiale", "Gheorghe Călinescu", "Nicolae Filimon"],
        answer: "Nicolae Filimon"
    },
    {
        question: "Care este autorul piesei „O scrisoare pierdută”?",
        options: ["Ion Luca Caragiale", "Mihail Sadoveanu", "Mircea Eliade", "Liviu Rebreanu"],
        answer: "Ion Luca Caragiale"
    },
    {
        question: "Care dintre următoarele lucrări a fost scrisă de Camil Petrescu?",
        options: ["„Ultima noapte de dragoste”", "„Pădurea spânzuraților”", "„Ion”", "„Moromeții”"],
        answer: "„Ultima noapte de dragoste”"
    },
    {
        question: "Ce autor a scris „Luceafărul”?",
        options: ["Mihai Eminescu", "Liviu Rebreanu", "George Coșbuc", "Ion Creangă"],
        answer: "Mihai Eminescu"
    },
    {
        question: "Care este autorul piesei „Căpcăunul”?",
        options: ["Ion Luca Caragiale", "Camil Petrescu", "Mihail Sadoveanu", "George Coșbuc"],
        answer: "Ion Luca Caragiale"
    },
    {
        question: "Ce lucrare a fost scrisă de Mihail Sadoveanu?",
        options: ["„Fratii Jderi”", "„Ion”", "„Mihail”", "„Luceafărul”"],
        answer: "„Fratii Jderi”"
    },
    {
        question: "Care este tema centrală a romanului „Ultima noapte de dragoste”?",
        options: ["Conflicte interioare și iubire", "Războiul și suferința", "Politica și trădarea", "Idealuri și valori"],
        answer: "Conflicte interioare și iubire"
    },
    {
        question: "Care este numele celui mai cunoscut roman al lui George Coșbuc?",
        options: ["„Răscoala”", "„Ion”", "„Moromeții”", "„La Medeleni”"],
        answer: "„Răscoala”"
    },
    {
        question: "Care autor român a scris „Fata din vis”?",
        options: ["Ion Creangă", "Mircea Eliade", "Camil Petrescu", "Liviu Rebreanu"],
        answer: "Mircea Eliade"
    },
    {
        question: "Ce autor român a scris „Căpcăunul”?",
        options: ["Nicolae Filimon", "Liviu Rebreanu", "Mihail Sadoveanu", "Mircea Eliade"],
        answer: "Nicolae Filimon"
    },
    {
        question: "Ce autor român este cunoscut pentru lucrările sale pe teme istorice?",
        options: ["Mihail Sadoveanu", "Ion Luca Caragiale", "George Coșbuc", "Lucian Blaga"],
        answer: "Mihail Sadoveanu"
    },
    {
        question: "Care este lucrarea semnată de George Coșbuc?",
        options: ["„Răscoala”", "„Mihail”", "„Ion”", "„La Medeleni”"],
        answer: "„Răscoala”"
    },
    {
        question: "Care este autorul romanului „Mihail”?",
        options: ["Camil Petrescu", "Mircea Eliade", "Liviu Rebreanu", "Ion Creangă"],
        answer: "Camil Petrescu"
    },
    {
        question: "Care autor român a scris „La Medeleni”?",
        options: ["Ionel Teodoreanu", "Liviu Rebreanu", "Ion Luca Caragiale", "Gheorghe Călinescu"],
        answer: "Ionel Teodoreanu"
    },
    {
        question: "Care lucrare a fost scrisă de Camil Petrescu?",
        options: ["„Ultima noapte de dragoste”", "„Răscoala”", "„La Medeleni”", "„Ion”"],
        answer: "„Ultima noapte de dragoste”"
    },
    {
        question: "Care este autorul romanului „Sărmanul Dionis”?",
        options: ["Mihai Eminescu", "Marin Preda", "Ion Luca Caragiale", "Mircea Eliade"],
        answer: "Mihai Eminescu"
    }
];
function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizData.forEach((item, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerText = item.question;

        const optionsElement = document.createElement('div');
        optionsElement.classList.add('options');

        item.options.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.innerText = option;
            optionElement.onclick = () => selectOption(index, option);
            optionsElement.appendChild(optionElement);
        });

        quizContainer.appendChild(questionElement);
        quizContainer.appendChild(optionsElement);
    });
}

const userAnswers = [];

function selectOption(questionIndex, selectedOption) {
    userAnswers[questionIndex] = selectedOption;
    const options = document.querySelectorAll('.options')[questionIndex].children;
    Array.from(options).forEach(option => {
        option.style.backgroundColor = '';
    });
    const selectedElement = Array.from(options).find(option => option.innerText === selectedOption);
    selectedElement.style.backgroundColor = '#D95F45';
}

function submitQuiz() {
    let score = 0;
    const optionsElements = document.querySelectorAll('.options');
    userAnswers.forEach((answer, index) => {
        if (answer === quizData[index].answer) {
            score++;
            optionsElements[index].children[quizData[index].options.indexOf(answer)].style.backgroundColor = 'green'; // corect
        } else {
            optionsElements[index].children[quizData[index].options.indexOf(answer)].style.backgroundColor = 'red'; // greșit
            optionsElements[index].children[quizData[index].options.indexOf(quizData[index].answer)].style.backgroundColor = 'green'; // arata raspunsul corect
        }
    });

    const resultElement = document.getElementById('result');
    resultElement.innerText = `Scorul tău: ${score} din ${quizData.length}`;
    resultElement.style.display = 'block';

    document.querySelector('.btn-try-again').style.display = 'inline-block'; // arata butonul de încercare din nou
}

function tryAgain() {
    userAnswers.length = 0; // reseteaza raspunsurile
    document.getElementById('quiz').innerHTML = ''; // sterge quiz-ul
    document.getElementById('result').innerText = '';
    document.getElementById('result').style.display = 'none'; // ascunde rezultatul
    document.querySelector('.btn-try-again').style.display = 'none'; // ascunde butonul de încercare din nou
    loadQuiz(); // reincarca quiz-ul
}

loadQuiz();