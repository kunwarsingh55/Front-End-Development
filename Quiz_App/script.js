
var score = 0;
var questions = [];
var optionsArea = document.getElementById("options");
var questionArea = document.getElementById("question");
var current = 0;

var s = document.getElementById("status");

var correctTXT = document.createElement("span");
correctTXT.innerText = "CORRECT";
s.appendChild(correctTXT);
correctTXT.style.display = "none";

var incorrectTXT = document.createElement("span");
incorrectTXT.innerText = "INCORRECT";
s.appendChild(incorrectTXT);
incorrectTXT.style.display = "none";



//DATA
q1={};
q1.id = 1;
q1.title = "A complete graph can have";
q1.options = ["gsdads","graph","asdasd","asdasd"];
q1.correct = "graph";
q1.score = 10;

q2={}
q2.id = 2;
q2.title="What is full form of css ?";
q2.options = ["adssad","asdasdasd","css","asasdasd"];
q2.correct = "css";
q2.score = 5;


questions.push(q1);
questions.push(q2);

//console.log(questions);



function printOptions(id){
  optionsArea.innerHTML = "";
  correctTXT.style.display = "none";
  incorrectTXT.style.display = "none";

  let qoptions = questions[id].options;

  let s1 = document.createElement("span");
  let o1 = document.createElement("input");
  o1.setAttribute("type","radio");
  o1.setAttribute("name","optionss");
  o1.id = qoptions[0];
  o1.innerHTML = qoptions[0];
  s1.appendChild(o1);
  let l1 = document.createElement("label");
  l1.setAttribute("for",qoptions[0])
  l1.innerHTML= qoptions[0];
  s1.appendChild(l1);
  optionsArea.appendChild(s1);


  let s2 = document.createElement("span");
  let o2 = document.createElement("input");
  o2.setAttribute("type","radio");
  o2.setAttribute("name","optionss");
  o2.id = qoptions[1];
  o2.innerHTML = qoptions[1];
  s2.appendChild(o2);
  let l2 = document.createElement("label");
  l2.innerHTML = qoptions[1];
  s2.appendChild(l2);
  optionsArea.appendChild(s2)

  let s3 = document.createElement("span");
  let o3 = document.createElement("input");
  o3.setAttribute("type", "radio");
  o3.setAttribute("name","optionss");
  o3.id = qoptions[2];
  o3.innerHTML = qoptions[2];
  s3.appendChild(o3);
  let l3 = document.createElement("label");
  l3.innerHTML = qoptions[2];
  s3.appendChild(l3);
  optionsArea.appendChild(s3);

  let s4 = document.createElement("span");
  let o4 = document.createElement("input");
  o4.setAttribute("type", "radio");
  o4.setAttribute("name","optionss");
  o4.id = qoptions[3];
  o4.innerHTML = qoptions[3];
  s4.appendChild(o4);
  let l4 = document.createElement("label");
  l4.innerHTML = qoptions[3];
  s4.appendChild(l4);
  optionsArea.appendChild(s4);


  let submit = document.createElement("button");
  submit.id = "submitbtn";
  submit.innerHTML = "SUBMIT"
  submit.setAttribute("onclick", "checkAns()");
  optionsArea.appendChild(submit);
  
  
}


// Output is available in console for now..
function checkAns(){
  let correct = questions[current].correct;

  let radios = document.querySelectorAll('input[name="optionss"]');
  for( let radioButton of radios){
    
    if(radioButton.checked){
      //console.log(radioButton.checked);
      if(radioButton.id == correct){
        console.log("CORRECT");
        correctTXT.style.display = "block";
        incorrectTXT.style.display = "none";
        score += questions[current].score;
        current++;
        let next = document.createElement("button");
        next.setAttribute("onclick", "printQuestion()");
        next.innerText = "NEXT";
        optionsArea.appendChild(next)
        //printQuestion();
      }
      else{
        correctTXT.style.display = "none";
        incorrectTXT.style.display = "block";
        console.log("INCORRECT");
      }
      break;
    }
    
  }


  }
  //console.log(radios);




//Initializiing page with first question


function printQuestion(){
  questionArea.innerHTML = questions[current].title;
  printOptions(current);
}

printQuestion();




