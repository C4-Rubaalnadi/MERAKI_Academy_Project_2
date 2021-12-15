const body = $("body");
const navBar = $(`<div></div>`);
const closeBook = $(`<i class="fal fa-lightbulb-on"></i>
`);
closeBook.addClass("bookLight left");
const openBook = $(`<i class="fas fa-lightbulb-slash"></i>`);
openBook.on("click", () => {
  body.css({
    background: "#000",
    color: "#fff",
    opacity: "0.8",
  });
});
closeBook.on("click", () => {
  body.css({
    background: "#fff",
    color: "#000",
    opacity: "1",
  });
});
openBook.addClass("bookLight");
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
closeBook.appendTo(navBar);
openBook.appendTo(navBar);
logo.appendTo(navBar);
const icon = $(`<i class="fas fa-cart-plus icon"></i>`);
icon.addClass("iconChart");
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
accountLog.hide();
/////get books from Api and show thim in the paige
const localStorage = window.localStorage;
const divBookContant = $(`<div></div>`);
divBookContant.addClass("divBookContant");
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
    divbook.addClass("books");
    const img = $(`<img />`);
    const p = $(`<p>${element.volumeInfo.title}</p>`);
    p.css({
      width: "174px",
    });
    const parPrice = $(`<span></span>`);
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
//// cheak out peage
const cheakOutbtn = $(`<button> Cheak Out </button>`);
cheakOutbtn.addClass("cheakOutbtn");
const divFinal = $(`<div></div>`);
divFinal.addClass("final");
const finalPrice = $(`<p>Payment</p>`);
finalPrice.addClass("totalPill");
const payment = $(`<p> Payment </p>`);
payment.addClass("paymentText");
const imgVisa = $(`<img  alt="visa">`);
imgVisa.addClass("imgFinal");
imgVisa.attr("src", "img/visa.png");
const imgPaypal = $(`<img alt="payple">`);
imgPaypal.addClass("imgFinal");
imgPaypal.attr("src", "img/paypal.png");
const cardInput = $(`<input type="text" placeholder="Card number">`);
cardInput.addClass("btn");
const cardName = $(`<input type="text" placeholder="Card Holder name">`);
cardName.addClass("btn");
const accept = $(`<button> accept </button>`);
accept.addClass("accept");
const divServ = $(`<div></div>`);
divServ.addClass("divServ");
const service = $(`<img alt ='service' />`);
service.attr("src", "img/dilevery.png");
service.appendTo(divServ);
divServ.appendTo(body);
divServ.hide();
/// event when click accept in shop Chart
accept.on("click", () => {
  divFinal.hide();
  divServ.show();
});
payment.appendTo(divFinal);
imgVisa.appendTo(divFinal);
imgPaypal.appendTo(divFinal);
cardInput.appendTo(divFinal);
cardName.appendTo(divFinal);
accept.appendTo(divFinal);
divFinal.appendTo(body);
divFinal.hide();
//// get book from localStorage and show it in Shopping chart
JSON.parse(localStorage.getItem("Books")).forEach((elementChart, i) => {
  const divBookChart = $(`<div> </div>`);
  divBookChart.addClass(`bookChart`);
  // finalPrice.hide();
  divBookChart.css({
    display: "grid",
    "grid-template-columns": "200px 200px 200px 1px",
    "justify-content": "center",
    "margin-bottom": "20px",
    "margin-top": "13%",
  });
  const imgChart = $(
    `<img src='${elementChart.volumeInfo.imageLinks.thumbnail}finalPrice'/>`
  );
  const pChart = $(`<h5>${elementChart.volumeInfo.title}</h5>`);
  const parPriceChart = $(`<p>${price[i]}$</p>`);
  const remov = $(`<i class="far fa-trash-alt"></i>`);
  ///event when click to remove
  remov.on("click", () => {
    divBookChart.remove();
  });
  sumPrice += price[i];
  totalPrice.text(`Your Total Price : ${sumPrice}$`);
  totalPrice.addClass("totalPrice");
  parPriceChart.css({
    color: "red",
    "font-weight": "bolder",
  });
  remov.on("click", () => {
    divBookChart.remove();
    sumPrice -= price[i];
    totalPrice.text(`Your Total Price : ${sumPrice}$`);
    finalPrice.text(`Your bill is: ${sumPrice}$`);
  });

  finalPrice.appendTo(divFinal);
  imgChart.appendTo(divBookChart);
  pChart.appendTo(divBookChart);
  parPriceChart.appendTo(divBookChart);
  remov.appendTo(divBookChart);
  divBookChart.appendTo(divChart);
  totalPrice.appendTo(divChart);
  cheakOutbtn.appendTo(divChart);
  /// event when click cheakOutbtn
  cheakOutbtn.on("click", () => {
    divServ.hide();
    divChart.hide();
    divFinal.show();
  });
  divChart.appendTo(body);
});
divChart.hide();
infoLog.hide();
infoRig.hide();
logo.on("click", () => {
  // accountLog.hide()
  infoLog.hide();
  divServ.hide();
  divFinal.hide();
  divChart.hide();
  infoRig.hide();
  divBookContant.show();
});
/// event when click to icon shopping chart
icon.on("click", () => {
  divServ.hide();
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
  divServ.hide();
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
      loginInfoEmail.value = ' '; 
      loginInfoPass.value = ' ';
      divServ.hide();
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
  divServ.hide();
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
