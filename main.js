const body = $("body");
const navBar = $(`<div></div>`);
navBar.addClass("navBar");
const userName = $(`<h3></h3>`);
userName.addClass("useName");
const notMatch = $(`<p> Password and confirem not match </p>`);
notMatch.addClass("notMatch");
const iconLogOut = $(`<i class="fas fa-sign-out-alt"></i>`);
iconLogOut.addClass("iconLog");
const iconLog = $(`<div> </div>`);
iconLog.addClass("iconLog");
const accountLog = $(`<div> </div>`);
accountLog.addClass("account");
const logo = $(`<h1> Book Store </h1>`);
logo.addClass("logo");
logo.appendTo(navBar);
const icon = $(`<i class="fas fa-cart-plus icon"></i>`);
const infoLog = $(`<div> </div>`);
const bookStore = $(`<p>Book Store</p>`);
infoLog.addClass("sign");
///section Log in
const logIn = $(`<div>Login</div>`);
logIn.addClass("logIn");
const loginInfoEmail = $(`<input type="text" placeholder="Email">`);
loginInfoEmail.addClass("btn");
const loginInfoPass = $(`<input type="password" placeholder="Password">`);
loginInfoPass.addClass("btn");
const btnLog = $(`<button> Sign in</button>`);
btnLog.addClass("btnsign");
btnLog.addClass("btn");
const toSignUp = $(`<p>Don't have an acount?</p>`);
toSignUp.addClass("toSignUp");
////section Rigister
const infoRig = $(`<div> </div>`);
const rigister = $(`<p>Sign Up</p>`);
rigister.addClass("signup");
const fullName = $(`<input type = 'text' placeholder="Fullname">`);
fullName.addClass("btn");
const rigInfoEmail = $(`<input type="text" placeholder="Email">`);
rigInfoEmail.addClass("btn");
const rigInfoPass = $(`<input type="password" placeholder="password">`);
rigInfoPass.addClass("btn");
const rigInfoPassConf = $(
  `<input type="password" placeholder="conform passworrd">`
);
rigInfoPassConf.addClass("btn");
const btnRig = $(`<button> Sign up </button>`);
//// add var of body or his div
btnRig.addClass("btnsign");
btnRig.addClass("btn");
loginInfoEmail.appendTo(infoLog);
loginInfoPass.appendTo(infoLog);
btnLog.appendTo(infoLog);
toSignUp.appendTo(infoLog);
rigister.appendTo(infoLog);
infoLog.appendTo(accountLog);
fullName.appendTo(infoRig);
rigInfoEmail.appendTo(infoRig);
rigInfoPass.appendTo(infoRig);
rigInfoPassConf.appendTo(infoRig);
btnRig.appendTo(infoRig);
notMatch.appendTo(infoRig);
infoRig.appendTo(accountLog);
icon.appendTo(iconLog);
logIn.appendTo(iconLog);
iconLogOut.appendTo(iconLog);
userName.appendTo(iconLog);
iconLog.appendTo(navBar);
navBar.appendTo(body);
accountLog.appendTo(body);
icon.hide();
iconLogOut.hide();
userName.hide();
notMatch.hide();
/////get books from Api and show thim in the paige
const localStorage = window.localStorage;
const divBookContant = $(`<div></div>`);
divBookContant.addClass("divBookContant");
divBookContant.addClass("bookContant");
const divChart = $(`<div></div>`);
divChart.addClass("divChart");
const settings = {
  async: true,
  crossDomain: true,
  url: "https://www.googleapis.com/books/v1/volumes?q=2000",
  method: "GET",
};
let arr = [];
const price = [10, 5, 20, 35, 40, 15, 10, 25, 5, 10];
$.ajax(settings).done((response) => {
  let data = response.items;
  data.forEach((element, i) => {
    const divbook = $(`<div> </div>`);
    divbook.css({
      display: "grid",
      "align-content": "space-between",
      "margin-bottom": "10px",
      border: "2px solid rebeccapurple",
      width: "72%",
      padding: "20px",
      height: "350px",
    });
    divbook.addClass(`book${i}`);
    const img = $(`<img />`);
    const p = $(`<p>${element.volumeInfo.title}</p>`);
    p.css({
      width: "174px",
    });
    const parPrice = $(`<p></p>`);
    const btnAdd = $(`<button> Add To Chart </button>`);
    btnAdd.css({
      width: "80px",
      color: "#fff",
      "background-color": "rebeccapurple",
      border: "2px solid #000",
      "border-radius": "15%",
    });
    img.attr("src", `${element.volumeInfo.imageLinks.thumbnail}`);
    parPrice.text(`${price[i]}$`);
    parPrice.css({
      color: "red",
      "font-weight": "bolder",
    });
    /////start to use localStorage
    btnAdd.on("click", () => {
      arr = JSON.parse(localStorage.getItem("Books")) || [];
      arr.push(element);
      localStorage.setItem("Books", JSON.stringify(arr));
    });
    img.appendTo(divbook);
    p.appendTo(divbook);
    parPrice.appendTo(divbook);
    btnAdd.appendTo(divbook);
    divbook.appendTo(divBookContant);
    divBookContant.appendTo(body);
  });
});
/// to add books in shopping chart from localStorage
let sumPrice = 0;
const totalPrice = $(`<span> </span>`);
const cheakOutbtn = $(`<button> Cheak Out </button>`);
cheakOutbtn.addClass("cheakOutbtn");
const divFinal = $(`<div></div>`);
const finalPrice = $(`<p></p>`);
const thanks = $(`<p> Thank You </p>`);
thanks.appendTo(divFinal);
divFinal.appendTo(body);
divFinal.hide();
JSON.parse(localStorage.getItem("Books")).forEach((elementChart, i) => {
  const divBookChart = $(`<div> </div>`);
  divBookChart.addClass(`bookChart${i}`);
 // finalPrice.hide();
  divBookChart.css({
    display: "grid",
    "grid-template-columns": "200px 200px 200px",
    "justify-content": "center",
    "margin-bottom": "20px",
    "margin-top": "13%",
  });
  const imgChart = $(
    `<img src='${elementChart.volumeInfo.imageLinks.thumbnail}finalPrice'/>`
  );
  const pChart = $(`<p>${elementChart.volumeInfo.title}</p>`);
  const parPriceChart = $(`<p>${price[i]}$</p>`);
  sumPrice += price[i];
  totalPrice.text(`Your Total Price : ${sumPrice}$`);
  totalPrice.addClass("totalPrice");
  parPriceChart.css({
    color: "red",
    "font-weight": "bolder",
  });
  finalPrice.text(`${sumPrice}`);
  finalPrice.appendTo(divFinal);
  imgChart.appendTo(divBookChart);
  pChart.appendTo(divBookChart);
  parPriceChart.appendTo(divBookChart);
  divBookChart.appendTo(divChart);
  totalPrice.appendTo(divChart);
  cheakOutbtn.appendTo(divChart);
  /// event when click cheakOutbtn
  cheakOutbtn.on("click", () => {
    divChart.hide();
    divFinal.show();
  });
  divChart.appendTo(body);
});
divChart.hide();
infoLog.hide();
infoRig.hide();
logo.on("click", () => {
  divFinal.hide();
  divChart.hide();
  infoLog.hide();
  infoRig.hide();
  divBookContant.show();
});
/// event when click to icon shopping chart
icon.on("click", () => {
  divBookContant.hide();
  divFinal.hide();
  divChart.show();
});
/// event when click log in in navbar
logIn.on("click", () => {
  icon.hide();
  divFinal.hide();
  divBookContant.hide();
  infoRig.hide();
  infoLog.show();
});
/// event when click sign up in log in
rigister.on("click", () => {
  divBookContant.hide();
  divFinal.hide();
  infoLog.hide();
  infoRig.show();
});
/// event when click sign up in sign up
let userAccuont = [];
btnRig.on("click", () => {
  if (rigInfoPass === rigInfoPassConf) {
    userAccuont = JSON.parse(localStorage.getItem("userAccount")) || [];
    userAccuont.push({
      fullName: fullName.val(),
      email: rigInfoEmail.val(),
      pass: rigInfoPass.val(),
    });
    localStorage.setItem("userAccount", JSON.stringify(userAccuont));
    divFinal.hide();
    infoRig.hide();
    divBookContant.show();
  } else {
    notMatch.show();
  }
});
/// event when click sign in
btnLog.on("click", () => {
  let cheack = JSON.parse(localStorage.getItem("userAccount"));
  const wrongAccount = $(`<p>Your Email or password wrong</p>`);
  wrongAccount.css({
    width: "244px",
    "font-weight": "bold",
    color: "red",
  });
  /// cheak if user has account in local storage
  cheack.forEach((element) => {
    if (
      loginInfoEmail.val() === element.email &&
      loginInfoPass.val() === element.pass
    ) {
      divFinal.hide();
      infoLog.hide();
      infoRig.hide();
      wrongAccount.hide();
      logIn.hide();
      userName.text(element.fullName);
      icon.show();
      userName.show();
      iconLogOut.show();
      divBookContant.show();
    } else {
      wrongAccount.appendTo(infoLog);
    }
  });
});
/// event when click iconLogOut
iconLogOut.on("click", () => {
  loginInfoEmail.attr("value", "");
  loginInfoPass.attr("value", "");
  divFinal.hide();
  divChart.hide();
  iconLogOut.hide();
  userName.hide();
  icon.hide();
  divBookContant.hide();
  infoRig.hide();
  logIn.show();
  infoLog.show();
});
