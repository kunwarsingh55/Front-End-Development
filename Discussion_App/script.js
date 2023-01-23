var leftDiv = document.getElementById("left");
var rightDiv = document.getElementById("right");
var welcome = document.getElementById("welcome");

function addQuestion(){

  subject = document.getElementById("subject").value;
  question = document.getElementById("question").value;
  
  var newQuestion = document.createElement("div");
  newQuestion.className = "commanFormat";
  newQuestion.id = "newQ";
  newQuestion.addEventListener("click",showResponses);
  
  var subjectSpan = document.createElement("p");
  subjectSpan.innerHTML = subject;
  var questionSpan = document.createElement("p");
  questionSpan.innerHTML = question;

  newQuestion.appendChild(subjectSpan);
  newQuestion.appendChild(questionSpan);
  leftDiv.appendChild(newQuestion);

  //rightDiv.removeChild(welcome);
  welcome.style.display = "none";


  
  


  addResponseDiv();


}

function addResponseDiv(){  
  


  var responseDiv = document.createElement("div");
  responseDiv.id = "resDiv";

  let questionHeading = document.createElement("p");
  questionHeading.innerHTML = "Question";

  responseDiv.appendChild(questionHeading);

  var subjectSpan1 = document.createElement("p");
  subjectSpan1.innerHTML = subject;
  var questionSpan1 = document.createElement("p");
  questionSpan1.innerHTML = question;


  responseDiv.appendChild(subjectSpan1);
  responseDiv.appendChild(questionSpan1);
  responseDiv.className = "commanFormat";
  responseDiv.id = "responseDiv";

  


  var respDiv = document.createElement("div");
  respDiv.id = "respDiv";
  
  var h3 = document.createElement("h3");
  h3.innerHTML = "Responses";

  var commentDiv = document.createElement("div");
  commentDiv.id = "commentDiv";
  
  
  respDiv.appendChild(h3);
  respDiv.appendChild(commentDiv);
 

  var h2 = document.createElement("h2");
  h2.innerHTML = "Add Response"

  respDiv.appendChild(h2);

  var nameInput = document.createElement("input");
  nameInput.setAttribute("type","text");
  nameInput.setAttribute("id","nameInput");
  nameInput.setAttribute("value","Name");
  
  respDiv.appendChild(nameInput);
   
  var commentText = document.createElement("textarea");
  commentText.id = "comment";
  commentText.setAttribute("value","Your comment...");

  respDiv.appendChild(commentText);


  var commentSubmit = document.createElement("input");
  commentSubmit.setAttribute("type","button");
  commentSubmit.setAttribute("value","Submit");
  commentSubmit.setAttribute("onClick","addComment()");
  commentSubmit.id = "commentButton";

   respDiv.appendChild(commentSubmit);

   

   responseDiv.appendChild(respDiv);

   rightDiv.appendChild(responseDiv);
}



function addComment(){
  var commentList = document.getElementById("commentDiv");
  var name = document.getElementById("nameInput").value;
  var commentText = document.getElementById("comment").value;
  
  
  var comment = document.createElement("div");
  comment.className = "commanFormat";
  
  var cName = document.createElement("p");
  cName.innerHTML = name;
  var cText = document.createElement("p");
  cText.innerHTML = commentText;

  comment.appendChild(cName);
  comment.appendChild(cText);
  commentList.appendChild(comment);
}


function showResponses(){
  
}

function showQuestionForm(){
  //let redponseDiv = document.getElementById("resDiv");
 // responseDiv.style.display = "none";
  
  
  welcome.style.display = "block";

}

