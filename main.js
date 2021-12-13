const body = $("body");
const navBar = $(`<div></div>`);
const userName = $(`<h3></h3>`);
navBar.css({
  display: "flex",
  "justify-content": "space-around",
});
const accountLog = $(`<div> </div>`);
accountLog.addClass("account");
const logo = $(`<h1> Book Store </h1>`);
logo.appendTo(navBar);
const icon = $(`<i class="fas fa-cart-plus icon"></i>`);
const infoLog = $(`<div> </div>`);
infoLog.addClass("sign");
accountLog.css({
  margin: "auto",
  width: "10%",
  position: "relative",
  top: "260px",
});
const logIn = $(`<div> Sign In </div>`);
const loginInfoEmail = $(`<input type="text" placeholder="Email">`);
const loginInfoPass = $(`<input type="password" placeholder="Password">`);
const btnLog = $(`<button> Sign in</button>`);
const toSignUp = $(`<p>Don't have an acount?</p>`);
const infoRig = $(`<div> </div>`);
infoLog.addClass("signin");
const rigister = $(`<div>Sign Up</div>`);
const fullName = $(`<input type = 'text' placeholder="Fullname">`);
const rigInfoEmail = $(`<input type="text" placeholder="Email">`);
const rigInfoPass = $(`<input type="password" placeholder="password">`);
const rigInfoPassConf = $(
  `<input type="password" placeholder="conform passworrd">`
);
const btnRig = $(`<button> Sign up </button>`);
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
logIn.appendTo(navBar);
infoRig.appendTo(accountLog);
accountLog.appendTo(body);
icon.appendTo(navBar);
navBar.appendTo(body);
const localStorage = window.localStorage;
const divBookContant = $(`<div></div>`);
divBookContant.addClass("bookContant");
const divChart = $(`<div></div>`);
divBookContant.css({
  display: "grid",
  "grid-template-columns": "200px 200px 200px",
  width: "35%",
  margin: "auto",
});
const settings = {
  async: true,
  crossDomain: true,
  url: "https://www.googleapis.com/books/v1/volumes?q=2000",
  method: "GET",
  // "headers": {
  // 	"x-rapidapi-host": "superhero-search.p.rapidapi.com",
  // 	"x-rapidapi-key": "cbe162d99fmsh97c38d07b9366d7p14bbbbjsn82c93be7cc5c"
  // }
};
let arr = [];
const price = [10, 5, 20, 35, 40, 15, 10, 25, 5, 10];
// let q = 1;
$.ajax(settings).done(function (response) {
  let data = response.items;
  data.forEach((element, i) => {
    const divbook = $(`<div> </div>`);
    divbook.addClass(`book${i}`);
    const img = $(`<img />`);
    const p = $(`<p>${element.volumeInfo.title}</p>`);
    const parPrice = $(`<p></p>`);
    const btnAdd = $(`<button> Add To Chart </button>`);
    img.attr("src", `${element.volumeInfo.imageLinks.thumbnail}`);
    parPrice.text(`${price[i]}$`);
    parPrice.css({
      color: "red",
      "font-weight": "bolder",
    });
    btnAdd.on("click", () => {
      // const count = $(`<span>${q}</span>`);
      arr = JSON.parse(localStorage.getItem("Books")) || [];
      arr.push(element);
      localStorage.setItem("Books", JSON.stringify(arr));
      //console.log(arr);
    });
    img.appendTo(divbook);
    p.appendTo(divbook);
    parPrice.appendTo(divbook);
    btnAdd.appendTo(divbook);
    divbook.appendTo(divBookContant);
    divBookContant.appendTo(body);
    // console.log(`${element.volumeInfo}`);
    // console.log(element.volumeInfo.imageLinks.smallThumbnail);
  });
  // console.log(arr);
});
JSON.parse(localStorage.getItem("Books")).forEach((elementChart, i) => {
  const divBookChart = $(`<div> </div>`);
  divBookChart.addClass(`bookChart${i}`);
  const imgChart = $(
    `<img src='${elementChart.volumeInfo.imageLinks.thumbnail}'/>`
  );
  const pChart = $(`<p>${elementChart.volumeInfo.title}</p>`);
  const parPriceChart = $(`<p>${price[i]}$</p>`);
  // imgChart.attr("src", `}`);
  // parPriceChart.text(``);

  parPriceChart.css({
    color: "red",
    "font-weight": "bolder",
  });
  imgChart.appendTo(divBookChart);
  pChart.appendTo(divBookChart);
  parPriceChart.appendTo(divBookChart);
  // count.appendTo(divBookChart);
  divBookChart.appendTo(divChart);
  divChart.appendTo(body);
});
divChart.hide();
infoLog.hide();
infoRig.hide();
logo.on("click", () => {
  divChart.hide();
  infoLog.hide();
  infoRig.hide();
  divBookContant.show();
});
icon.on("click", () => {
  divBookContant.hide();
  divChart.show();
});
logIn.on("click", () => {
  icon.hide();
  // logIn.hide();
  divBookContant.hide();
  infoRig.hide();
  infoLog.show();
});
rigister.on("click", () => {
  divBookContant.hide();
  infoLog.hide();
  infoRig.show();
});
let userAccuont = [];
btnRig.on("click", () => {
  userAccuont = JSON.parse(localStorage.getItem("userAccount")) || [];
  userAccuont.push({
    fullName: fullName.val(),
    email: rigInfoEmail.val(),
    pass: rigInfoPass.val(),
  });
  localStorage.setItem("userAccount", JSON.stringify(userAccuont));
  infoRig.hide();
  // userName.text(userAccuont.fullName);
  divBookContant.show();
});
btnLog.on("click", () => {
  let cheack = JSON.parse(localStorage.getItem("userAccount"));
  const wrongAccount = $(`<p>Your Email or password wrong</p>`);
  cheack.forEach((element) => {
    if (
      loginInfoEmail.val() === element.email &&
      loginInfoPass.val() === element.pass
    ) {
      infoLog.hide();
      infoRig.hide();
      wrongAccount.hide();
      userName.text(element.fullName);
      userName.appendTo(navBar);
      divBookContant.show();
    } else {
      wrongAccount.appendTo(infoLog);
      // wrongAccount.show();
    }
    // wrongAccount.hide();
  });
});
