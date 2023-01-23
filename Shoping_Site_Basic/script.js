console.log("Running");

var users = [];
var products = [];
var productList = document.getElementById("productList");

let product1 = {};
product1.name = "Hoddie";
product1.price = 3000;
product1.image = "https://img2.exportersindia.com/product_images/bc-full/2020/10/7778165/hoddie-1602655516-5608850.png";

let product2 = {};
product2.name = "Mechnical Keyboard";
product2.price = 3000;
product2.image = "https://techcrunch.com/wp-content/uploads/2022/02/am_hatsu_top.jpg";

let product3 = {};
product3.name = "Gaming Mouse";
product3.price = 3000;
product3.image = "https://www.howtogeek.com/wp-content/uploads/2017/03/shutterstock_723052858.jpg";

let product4 = {};
product4.name = "TV";
product4.price = 3000;
product4.image = "https://www.lg.com/uk/images/tvs/MD05809745/gallery/49_43LJ51_D_Desktop_01.jpg";

products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);
localStorage.setItem("procunts", JSON.stringify(products));


function addProducts() {

  products.forEach(function (p) {
    let newProduct = document.createElement("div");
    let productImg = document.createElement("img");
    productImg.setAttribute("src", p.image);
    productImg.setAttribute("width", "200");
    productImg.setAttribute("hight", "200");
    let productName = document.createElement("p");
    productName.innerHTML = p.name;
    let productPrice = document.createElement("p");
    productPrice.innerHTML = p.price;
    newProduct.appendChild(productImg);
    newProduct.appendChild(productName);
    newProduct.appendChild(productPrice);
    productList.appendChild(newProduct);
  })


}

addProducts();



function store() {
  console.log("Called");

  var name = document.getElementById('name').value;
  var pw = document.getElementById('pw').value;

  //Chack for valif Input
  if (name.length == 0) {
    alert("Please enter Username");
  }
  if (pw.length < 8) {
    alert("Please enter valid Password (Min 8 Char)");
  }

  //Check If user Exists Already
  let found = 0;
  let usersDetails = JSON.parse(localStorage.getItem("users"));
  usersDetails.forEach(function (e) {
    if (e.userName == name) {
      found = 1;
    }
    console.log(e);
  });
  if (found == 1)
    alert("Username Exists Already !");

  //If valid details add user to local storage
  else {
    let user = {};

    user.userName = name;
    user.userPassword = pw;

    users.push(user);
    console.log(users);

    localStorage.setItem("users", JSON.stringify(users));
  }


}


function check() {


  // entered data from the login-form
  var userNamee = document.getElementById('userName').value;
  var userPw = document.getElementById('userPw').value;
  console.log(userNamee, userPw);


  //Match Login Details
  let found = 0;
  let usersDetails = JSON.parse(localStorage.getItem("users"));
  usersDetails.forEach(function (e) {
    if (e.userName == userNamee) {
      if (e.userPassword == userPw) {
        location.href = "home.html";
        found = 1;
      }
    }
    console.log(e);
  });

  if (found == 0) {
    alert("user not found");
  }

}