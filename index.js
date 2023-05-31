// Your code here
var questionsArr = [
    {
        question: 'This is a true or false quiz. Click "OK" for true and "Cancel" for false. Are you ready to begin?',
        answer: true
    },
    {
        question: 'It is 2023.',
        answer: true
    },
    {
        question: 'There are 30 days in June.',
        answer: true
    },
    {
        question: 'There are 100 minutes in an hour.',
        answer: false
    },
    {
        question: 'A dozen means 12.',
        answer: true
    },
    {
        question: '75 is an even number.',
        answer: false
    },
    {
        question: 'Web design rocks!',
        answer: true
    },
    {
        question: 'UF is the best school!',
        answer: true
    },
]

var numOfCorrect = 0

function runQuiz(){
    for (var i=0; i<questionsArr.length; i++){
        if(confirm(questionsArr[i].question) == questionsArr[i].answer){
            numOfCorrect++
        }
    }
    
    var Percent = Math.round ((numOfCorrect/questionsArr.length)*100)

    if (numOfCorrect > Math.round(questionsArr.length / 1.5)) {
        alert ("You got a " + Percent + "%. Good job. Keep it up!")
        } else {
            alert ("You got a "+ Percent + "%. Great effort!")
        }
    numOfCorrect = 0
}