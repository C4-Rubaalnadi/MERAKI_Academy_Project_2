const body = $("body");
// const divMain = $("<div> </div>");

// const imgGirl = $(`<img />`);
// imgGirl.attr("src", "girl.png");
// imgGirl.css({
//   width: "137px",
//   position: "absolute",
//   left: "20px",
//   top: "-4px",
// });
// iconAdd.addClass("iconAdd");
// divMain.addClass("main");
// divMain.css({
//   display: "flex",
//   gap: "60%",
//   "margin-top": "100px",
// });
// const div_chart = $(`<div> </div>`);
// const finalText = $(`<div> </div>`);
// const logo = $("<h1> Book Store </h1>");
// logo.addClass("logo");
// const cont_chart = $(`<div> </div>`);
// cont_chart.addClass("chart");
// cont_chart.css({
//   " margin-top": "20px",
// });
// const icon = $(`<i class="fas fa-cart-plus icon"></i>`);
// const home = $(`<h3> Home </h3>`);
// home.addClass("home");
// //let add = 0;
// let total = 0;
// //let chart = $(`<span> ${add} </span>`);
// const cartContanier = $("<div> </div>");
// cartContanier.addClass("cartContainer");
// cartContanier.css({
//   display: "flex",
//   margin: "auto",
//   gap: "30px",
//   " text-align": "start",
// });
// logo.appendTo(divMain);
// home.appendTo(divMain);

// divMain.appendTo(body);
// imgGirl.appendTo(body);
// /////////////////////data of book ///////////////////
// const book = [
//   {
//     img: "book1.jpg",
//     alt: "book1",
//     title: "The Book Thief",
//     description:
//       "The Book Thief is a story narrated by a compassionate Death who tells us about Liesel, a girl growing up in Germany during World War II She steals books, learns to read, and finds comfort in words. ",
//     price: 10,
//     add_to: "add to chart",
//     id: 0,
//     q: 0,
//   },
//   {
//     img: "book.jpg",
//     alt: "book3",
//     title: "Harry Potter",
//     description:
//       " Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger",
//     price: 15,
//     add_to: "add to chart",
//     id: 1,
//     q: 0,
//   },
//   {
//     img: "book22.jpg",
//     alt: "book2",
//     title: "Dan Brown",
//     description:
//       "The Lost Symbol is a masterstroke of storytellinga deadly race through a real-world labyrinth of codes, secrets, and unseen truths all under the watchful eye",
//     price: 20,
//     add_to: "add to chart",
//     id: 2,
//     q: 0,
//   },
// ];
// /////////////////////////////////////////////////////////////////////////
// const btnFinsh = $(`<button> cheak out  </button>`);
// finalText.css({
//   "font-size": "20px",
//   display: "flex",
//   "flex-direction": "column",
//   "justify-content": "center",
//   "align-items": "center",
//   border: "1px solid #000",
//   background: "#fff",
//   height: "160px",
//   width: "40%",
//   margin: "auto",
//   "border-radius": "12%",
//   "background-color": "#000",
//   color: "#fff",
//   "font-weight": "bolder",
// });
// btnFinsh.css({
//   position: "relative",
//   left: "86%",
//   border: "1px solid #000",
//   width: "8%",
//   height: "30px",
//   "text-align": "center",
//   padding: "3px",
//   " padding-top": "10px",
//   "border-radius": "15%",
//   "background-color": "#000",
//   color: "#fff",
//   "font-size": "20px",
//   "margin-top": "-7px",
// });
// const totalChart = $(`<h4> </h4>`);
// totalChart.css({
//   position: "relative",
//   left: "86%",
//   border: "1px solid #000",
//   width: "8%",
//   height: "30px",
//   "text-align": "center",
//   padding: "3px",
//   " padding-top": "10px",
//   background: "#fff",
//   "border-radius": "15%",
//   "background-color": "#000",
//   color: "#fff",
// });
// const thankYou = $(`<h5> </h5>`);
// const final_total = $(`<p> </p>`);
// final_total.css({
//   "margin-top": "-10px",
// });

// ////////////////OPP//////////////////
// class Chart {
//   constructor(img, bookName, bookPrice, count) {
//     this.img = img;
//     this.bookName = bookName;
//     this.bookPrice = bookPrice;
//     this.count = count;
//   }
//   getInfo() {
//     const inner_divchart = $(`<div> </div>`);
//     inner_divchart.css({
//       display: "flex",
//       gap: "15%",
//       "margin-left": "3%",
//       "margin-bottom": "2%",
//     });
//     total += this.bookPrice;
//     const img = $(`<img>`);
//     img.attr("src", this.img);
//     img.css("width", "95px");
//     const bookTitle = $(`<p></p>`);
//     bookTitle.css({
//       padding: "0",
//       margin: "0",
//     });
//     const book_price = $(`<span></span>`);
//     const count = $(`<span></span>`);
//     // const q = $(`<span> ${quantity} </span>`);
//     totalChart.text(`Total is :  ${total}$`);
//     bookTitle.text(this.bookName);
//     book_price.text(`${this.bookPrice}$`);
//     count.text(`${this.count}`);
//     img.appendTo(inner_divchart);
//     bookTitle.appendTo(inner_divchart);
//     book_price.appendTo(inner_divchart);
//     count.appendTo(inner_divchart);
//     // q.appendTo(divChart);
//     inner_divchart.appendTo(div_chart);
//     totalChart.appendTo(div_chart);
//     btnFinsh.appendTo(div_chart);
//     div_chart.appendTo(body);
//     btnFinsh.on("click", () => {
//       finalText.show();
//       div_chart.hide();
//       thankYou.text(`Thank you`);
//       final_total.text(`Your Final Total is :${total}`);
//       thankYou.appendTo(finalText);
//       final_total.appendTo(finalText);
//       finalText.appendTo(body);
//     });
//     finalText.hide();
//     div_chart.hide();
//     localStorage.setItem("getInfo", JSON.stringify(this.getInfo));
//     console.log(this.getInfo);
//   }
// }

// //////////////// add book of main page//////////////////////
// book.forEach((obj, index) => {
//   const divCart = $("<div> </div>");
//   divCart.addClass(`${index}`);
//   const img = $("<img />");
//   const description = $(`<p>${obj.description}<p>`);
//   const price = $(`<span> ${obj.price}$ </span>`);
//   const title = $(`<h3> ${obj.title} </h3>`);
//   const btn = $(`<button> Add to Chart </button>`);
//   btn.addClass("btnChart");
//   btn.css({
//     display: "block",
//     border: "solid 1px #000",
//     "margin-top": "55px",
//     "text-align": "center",
//     "background-color": "#fff",
//     color: "#000",
//     "border-radius": "20%",
//     height: "45px",
//   });
//   btn.attr("id", `${index}`);
//   img.attr("src", obj.img).attr("alt", obj.alt);
//   img.appendTo(divCart);
//   title.appendTo(divCart);
//   description.appendTo(divCart);
//   price.appendTo(divCart);
//   btn.appendTo(divCart);
//   divCart.appendTo(cartContanier);
//   cartContanier.appendTo(cont_chart);
//   cont_chart.appendTo(body);

////////////////////////////////////////////////////////////////////
const localStorage = window.localStorage;
let arr = [];
const icon = $(`<i class="fas fa-cart-plus icon"></i>`);
icon.appendTo(body);
const divBookContant = $(`<div></div>`);
divBookContant.addClass("bookContant");
const divChart = $(`<div></div>`);
divBookContant.css({
  display: "grid",
  "grid-template-columns": "200px 200px 200px",
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
      arr.push(element);
      localStorage.setItem("Books", JSON.stringify(arr));
      arr.map((elementChart, i) => {
        // arr = [];
        const divBookChart = $(`<div> </div>`);
        divBookChart.addClass(`bookChart${i}`);
        const imgChart = $(`<img />`);
        const pChart = $(`<p>${elementChart.volumeInfo.title}</p>`);
        const parPriceChart = $(`<p></p>`)
        imgChart.attr("src", `${elementChart.volumeInfo.imageLinks.thumbnail}`);
        parPriceChart.text(`${price[i]}$`);
        parPriceChart.css({
          color: "red",
          "font-weight": "bolder",
        });
        imgChart.appendTo(divBookChart);
        pChart.appendTo(divBookChart);
        parPriceChart.appendTo(divBookChart);
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

















///////////////////////////
//   ///////// when click add book to local storage //////////
//   btn.on("click", () => {
//     arr.push(obj);
//     btn.css({
//       "background-color": "#dec573", //"#8B4513"
//       color: "#000",
//     });
//     localStorage.setItem("cart", JSON.stringify(arr));
//   });
// });
// icon.on("click", () => {
//   cont_chart.hide();
//   finalText.hide();
//   divLocal.show();
//   totalChart.show();
//   btnFinsh.show();
// });
// home.on("click", () => {
//   divLocal.hide();
//   finalText.hide();
//   totalChart.hide();
//   btnFinsh.hide();
//   cont_chart.show();
// });
// let arr = [];
// const divLocal = $("<div> </div>");
// let storge = JSON.parse(localStorage.getItem("cart"));
// storge.forEach((element, i) => {
//   const inerChart = $(`<div> </div>`);
//   inerChart.css({
//     display: "flex",
//     "justify-content": "space-evenly",
//     "margin-top": "20px",
//   });
//   divLocal.css({
//     border: "1px solid #000",
//     width: "70%",
//     margin: "auto",
//     "background-color": "#fff",
//     "border-radius": "5%",
//   });
//   const imgLocal = $("<img />");
//   const titleLocal = $(`<h3> ${element.title} </h3>`);
//   const priceLocal = $(`<span> ${element.price}$ </span>`);
//   priceLocal.css({
//     "margin-top": "20px",
//   });
//   imgLocal.attr("src", element.img);
//   imgLocal.css({
//     width: "95px",
//     "margin-bottom": "20px",
//   }); //
//   total += element.price;
//   totalChart.text(`Total is :  ${total}$`);
//   imgLocal.appendTo(inerChart);
//   titleLocal.appendTo(inerChart);
//   priceLocal.appendTo(inerChart);
//   inerChart.appendTo(divLocal);
//   divLocal.appendTo(body);
//   totalChart.appendTo(body);
//   btnFinsh.appendTo(body);
//   btnFinsh.on("click", () => {
//     divLocal.hide();
//     totalChart.hide();
//     btnFinsh.hide();
//     finalText.show();
//     thankYou.text(`Thank you`);
//     final_total.text(` Your Final   Total is : ${total}$`);
//     thankYou.appendTo(finalText);
//     final_total.appendTo(finalText);
//     finalText.appendTo(body);
//   });
// });
// divLocal.hide();
// totalChart.hide();
// btnFinsh.hide();
