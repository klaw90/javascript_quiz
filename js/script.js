
    let currentQuestionIndex = 0
    let score = 0
    let totalTime = 2 * 60;
    let remainingTime = 2 * 60;


    const questions = [
        {   
        question:"What type of animal is a koala?:", 
        answer:"Marsupial", 
        options:['Amphibian','Marsupial','Insect'],
        id:'towns',
    },
        {
        question:"Who is president?:", 
        answer:"Biden", 
        options:['Trump','Biden','Obama'],
        id:'presidents'
    },    {   
        question:"What color is the sky?:", 
        answer:"Blue", 
        options:['Pink','Blue','Yellow'],
        id:'colors'
    },    {   
        question:"What's the capital of the US?:", 
        answer:"DC", 
        options:['Atlanta','DC','NYC'],
        id:'capitals'
    },    {   
        question:"How many states in the US?:", 
        answer:"50", 
        options:['45','50','52'],
        id:'cities'
    },
];


function displayTime(){
    document.getElementById("remaining_time").innerHTML = 'Remaining Time:' + remainingTime
}

function subtractTime(){
    return remainingTime = remainingTime - 10;
}

function subtractSecond(){
    return remainingTime = remainingTime - 1;
}

function countDown() {
    setInterval(function(){ 
        console.log("decfreasing")
        subtractSecond()
        displayTime()

    }, 1000);
  }

function addElapsedTime(){
    console.log("hanlde")
}

function incrementScore(){
    return ++score

}

    function checkAnswer(answer,currentQuestion){
        // if anwer is correct
        if(answer === currentQuestion.answer){
        
             ++currentQuestionIndex
            incrementScore()
            return displayForm()

        } else {
            ++currentQuestionIndex
            subtractTime()
            return displayForm()
        //    addTimeFunction()
        }

        
    }

 


    function increaseQuestionIndex(){
        checkAnswer( getSelectedValue(),questions[currentQuestionIndex] ) 
    }
       
        // ++currentQuestionIndex

    function getSelectedValue(){
        var sel = document.getElementById(questions[currentQuestionIndex].id);
        console.log( sel.value );
        return sel.value
     
    }

    

  

function displayForm (){

    let currentQuestion = questions[currentQuestionIndex];
    values = currentQuestion.options;

  // var values = ["dog", "cat", "parrot", "rabbit"];
 
  var select = document.createElement("select");
  select.name = "pets";
  select.id = currentQuestion.id;
 
  for (const val of values) {
    var option = document.createElement("option");
    option.value = val;
    option.text = val.charAt(0).toUpperCase() + val.slice(1);
    select.appendChild(option);
  }
 
  var label = document.createElement("label");
  label.innerHTML = `${currentQuestion.question}`
  label.htmlFor = "pets";


  document.getElementById("score").innerHTML = 'Score: ' + score
  document.getElementById("container").appendChild(label).appendChild(select);



}

document.getElementById('start').onclick = function() {
    
displayForm();
countDown();
  }