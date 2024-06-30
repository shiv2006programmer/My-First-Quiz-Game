const questions =  [{
    'que': 'By whom was the term Aid first adopted?',
    'a': "Red Cross",
    'b': "Lions club",
    'c': "St. John Ambulance Association of England",
    'd': "British Red Cross Society",
    'e': "Next Question",
    'f': "previous",
    'correct': 'd'

}
    ,
{
    'que': 'Should be among the persons providing First Aid?',
    'a': "Smpathy",
    'b': "Sharp Intelligence",
    'c': "Patience",
    'd': "All of the above",
    'e': "Next Question",
    'correct': 'd'
},

{
    'que': 'Is first aid nescessary?',
    'a': "for student",
    'b': "for teacher",
    'c': "for parent",
    'd': "for everyone",
    'e': "Next Question ",
    'correct': 'd'

},
{
    'que': 'The best rule of first Aid?',
    'a': "Prevention of disease or injury",
    'b': "To give Artificial breath",
    'c': "Taking the patiend to hospital",
    'd': "Taking the patiend to his home",
    'e': "Next Question",
    'correct': 'c'
},
{
    'que': 'What is first aid called?',
    'a': "Treatment done before the doctor's arrival",
    'b': "Treatment done after the doctor's arrival",
    'c': "Immediately taken to hospital and provided treatment",
    'd': "All of the above",
    'e': "Next Question",
    'correct': 'a'
},


//new questions

{
    'que': 'Is sprain an injury?',
    'a': "Lingament",
    'b': "Muscle",
    'c': "Bone",
    'd': "Cell",
    'e': "Next Question",
    'correct': 'a'
},

{
    'que': 'Which bondage is used for finger?',
    'a': "Roller bondage",
    'b': "Triangular bandage",
    'c': "Tourniquet bandage",
    'd': "crope bandage",
    'e': "Next Question",
    'correct': 'a'
},
{
    'que': 'Trifoliate valves are found?',
    'a': "in the heart",
    'b': "in the lungs",
    'c': "in the stomach",
    'd': "in the kidneys",
    'e': "Next Question",
    'correct': 'a'
},
{
    'que': 'which of the following is not a muscular injury?',
    'a': "Strain",
    'b': "Pull",
    'c': "Aberaision",
    'd': "All of the above",
    'e': "Next Question",
    'correct': 'c'
},
{
    'que': 'What is subluxatin injury related to?',
    'a': "Muscle",
    'b': "Nervous system",
    'c': "Joint",
    'd': "Skin",
    'e': "Submit",
    'correct': 'c'
},
]


let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll(".options")


const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    }
    reset();
    const data = questions[index]
    quesBox.innerText = ` ${index + 1})${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
    document.getElementById('btn').innerText = data.e;
}


const Nextque = () => {
    const data = questions[index]
    const ans = getAnswer()
    console.log(ans, data.correct)
    if (ans === data.correct) {
        right++;

    } else {
        wrong++;
    }
    index++;
    reset();
    loadQuestion();
    return;
   
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                console.log(input.value)
                answer = input.value;
                //    console.log("yes")
            }
            // console.log("no")



        }
    )
    return answer;
}


const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )

}

const endQuiz = () => {
    document.getElementById('box').innerHTML = `
    <div class="heading"<h3><span class="Thankheading">Thankyou</span><br><span class="Paragraph"> For Playing The quiz</span></h3><p class="result">Your Result</p>
    <h2>${right}/${total} are correct </h2><br><a class='nextRound' href="nextRound.html">Next Round</a>
    <h6 class="aboutme">-Developed by Shiv Kumar</h6>`
    document.getElementById('box').style.backgroundColor = '#33ff99';
    document.getElementById('box').style.boxShadow = '4px 3px 8px 2px black';
    document.getElementById('box').style.width = '100%';
    document.getElementById('box').style.height = '80vh';
    document.getElementById('box').style.margin = '0px';
    document.getElementById('box').style.padding = '0px';
    document.getElementById('box').style.display = 'flex';
    document.getElementById('box').style.justifyContent = 'center';
    document.getElementById('box').style.alignItems = 'center';
    document.getElementById('btn').style.display = 'none';
}

loadQuestion();




