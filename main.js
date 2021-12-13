const body = $("body");
const navBar = $(`<div></div>`);
navBar.css({
  display: "flex",
  "justify-content": "space-around",
});
const accountLog = $(`<div> </div>`);
const logo = $(`<h1> Book Store </h1>`);
const icon = $(`<i class="fas fa-cart-plus icon"></i>`);
const infoLog = $(`<div> </div>`);
const logIn = $(`<div> Sign In </div>`);
const loginInfoEmail = $(`<input type="text">`);
const loginInfoPass = $(`<input type="password">`);
const btnLog = $(`<button> Sign in</button>`);
const infoRig = $(`<div> </div>`);
const rigister = $(`<div>Sign Up</div>`);
const fullName = $(`<input type = 'text'>`);
const rigInfoEmail = $(`<input type="text">`);
const rigInfoPass = $(`<input type="password">`);
const rigInfoPassConf = $(`<input type="password">`);
const btnRig = $(`<button> Sign up </button>`);
loginInfoEmail.appendTo(infoLog);
loginInfoPass.appendTo(infoLog);
btnLog.appendTo(infoLog);
infoLog.appendTo(logIn);
fullName.appendTo(infoRig);
rigInfoEmail.appendTo(infoRig);
rigInfoPass.appendTo(infoRig);
rigInfoPassConf.appendTo(infoRig);
btnRig.appendTo(infoRig);
logIn.appendTo(accountLog);
rigister.appendTo(accountLog);
accountLog.appendTo(navBar);
infoRig.appendTo(rigister);
logo.appendTo(navBar);
navBar.appendTo(body);
const localStorage = window.localStorage;
icon.appendTo(body);
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
let q = 1;
$.ajax(settings).done(function (response) {
  const price = [10, 5, 20, 35, 40, 15, 10, 25, 5, 10];
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
      const count = $(`<span>${q}</span>`);
      arr = JSON.parse(localStorage.getItem('Books')) || [];
      arr.push(element);
      localStorage.setItem("Books", JSON.stringify(arr));  
      console.log(arr);  
      arr.map((elementChart, i) => {
        // if(elementChart.volumeInfo.title ===element.volumeInfo.title){
        //   count.text(`${q++}`);
        // }
        const divBookChart = $(`<div> </div>`);
        divBookChart.addClass(`bookChart${i}`);
        const imgChart = $(`<img />`);
        const pChart = $(`<p>${elementChart.volumeInfo.title}</p>`);
        const parPriceChart = $(`<p></p>`);
        imgChart.attr("src", `${elementChart.volumeInfo.imageLinks.thumbnail}`);
        parPriceChart.text(`${price[i]}$`);

        parPriceChart.css({
          color: "red",
          "font-weight": "bolder",
        });
        imgChart.appendTo(divBookChart);
        pChart.appendTo(divBookChart);
        parPriceChart.appendTo(divBookChart);
        count.appendTo(divBookChart);
        divBookChart.appendTo(divChart);
        divChart.appendTo(body);
      });
      divChart.hide();
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
});
infoLog.hide();
icon.on("click", () => {
  divBookContant.hide();
  divChart.show();
});
logIn.on('click',() => {
  divBookContant.hide();
  infoLog.show();
});
logo.on('click' , () => {
  divChart.hide();
  divBookContant.show();
})
