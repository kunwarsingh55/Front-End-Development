var username = "";
var main = document.getElementById("d2");
var usernameTag = document.getElementById("usernameText");
var repocountTag = document.getElementById("rCount");
var avatarTag = document.getElementById("avt");
var repolistTag = document.getElementById("repos");

d2.style.display = "none";

function handelSubmit(event){
 // console.log(event);
 event.preventDefault();
 var fData = new FormData(document.getElementById('getUsernameForm'));
 username = fData.get('username');
 

 request = new XMLHttpRequest();
 let url = "https://api.github.com/users/"+ username +"/repos"
 request.open("GET",url)
 //console.log(url);
 request.send();
 request.addEventListener("load",function(){
   gitResponse = JSON.parse(request.responseText);
   //console.log(gitResponse);
   showResults(gitResponse);
 })

 
}

function showResults(data){
 console.log(data);
 // let fullName = data.

  let repoCount =data.length-1;
  repocountTag.innerHTML = repoCount;

  usernameTag.innerHTML = data[0].owner.login;

  for(i=0;i<=repoCount;i++){
    console.log(data[i].name);
    let repo = document.createElement('div');
    
    repo.innerHTML = data[i].name;

    repo.addEventListener('click',function(data){
      console.log(data[i].html_url);
    });

    repolistTag.appendChild(repo);

  }
  //let gg= data[0].html_url;
  //console.log(gg);

  let avatar = data[0].owner.avatar_url;
  avatarTag.setAttribute("src",avatar);

  console.log(avatar);
  
 
  let followers = data[0].owner.followers_url;
  console.log(followers);

  let following = data[0].owner.following_url;
  console.log(following);

  
d2.style.display = "block";
  
  
}


