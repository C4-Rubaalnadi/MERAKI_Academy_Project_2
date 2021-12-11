const body = $("body");
const divMain = $("<div> </div>");
const iconAdd = $("<div></div>");
iconAdd.addClass("iconAdd");
divMain.addClass("main");
divMain.css({
  display: "flex",
  gap: "60%",
});
const div_chart = $(`<div> </div>`);
const divContLocal = $(`<div></div>`);
divContLocal.css({
  display: "flex",
  "flex-direction": " column",
  gap: "15%",
  "margin-left": "3%",
  "margin-bottom": "2%",
});
const finalText = $(`<div> </div>`);
const logo = $("<h1> Book Store </h1>");
logo.addClass("logo");
logo.css({
  "margin-left": "30px",
});
//const divChart = $(`<div></div>`);

const cont_chart = $(`<div> </div>`);
cont_chart.addClass("chart");

cont_chart.css({
  " margin-top": "20px",
  // "margin-left": "15%",
});
const icon = $(`<i class="fas fa-cart-plus icon"></i>`);
const home = $(`<h3> Home </h3>`);
home.addClass("home");
let add = 0;
let total = 0;
let chart = $(`<span> ${add} </span>`);
const cartContanier = $("<div> </div>");
cartContanier.addClass("cartContainer");
cartContanier.css({
  display: "flex",
 margin : 'auto',
  gap: "30px",
  " text-align": "start",
  // 'flex-wrap': 'wrap',
});
logo.appendTo(divMain);
home.appendTo(divMain);
chart.appendTo(icon);
icon.appendTo(iconAdd);
iconAdd.appendTo(body);
divMain.appendTo(body);
/////////////////////////////////////////data of book ///////////////////////////////////////////////////////////////////
const book =
  //{} to fo each
  [
    //  category : 'categoryAllBook',
    // cart  [
    {
      img: "book1.jpg",
      alt: "book1",
      title: "The Book Thief",
      description:
        "The Book Thief is a story narrated by a compassionate Death who tells us about Liesel, a girl growing up in Germany during World War II",
      price: 10,
      add_to: "add to chart",
      q: 0,
    },
    {
      img: "book.jpg",
      alt: "book3",
      title: "Harry Potter",
      description:" Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley",
      price: 15,
      add_to: "add to chart",
      q: 0,
    },
    {
      img: "book22.jpg",
      alt: "book2",
      title: "Dan Brown",
      description:
        "The Lost Symbol is a masterstroke of storytellinga deadly race through a real-world labyrinth of codes, secrets, and unseen truths all under the watchful eye",
      price: 20,
      add_to: "add to chart",
      q: 0,
    },
  ];
/////////////////////////////////////////////////////////////////////////
const btnFinsh = $(`<button> cheak out  </button>`);
const totalChart = $(`<h4> </h4>`);
const thankYou = $(`<h5> </h5>`);
const final_total = $(`<p> </p>`);

//////////////////////////////////OPP
class Chart {
  constructor(img, bookName, bookPrice, count) {
    //this.img = img.attr('src',img);
    this.img = img;
    this.bookName = bookName;
    this.bookPrice = bookPrice;
    this.count = count;
  }
  getInfo() {
    const inner_divchart = $(`<div> </div>`);
    inner_divchart.css({
      display: "flex",
      gap: "15%",
      "margin-left": "3%",
      "margin-bottom": "2%",
    });
    total += this.bookPrice;
    const img = $(`<img>`);
    img.attr("src", this.img);
    img.css("width", "95px");
    const bookTitle = $(`<p></p>`);
    bookTitle.css({
      padding: "0",
      margin: "0",
    });
    const book_price = $(`<span></span>`);
    const count = $(`<span></span>`);
    // const q = $(`<span> ${quantity} </span>`);
    totalChart.text(`Total is :  ${total}$`);
    bookTitle.text(this.bookName);
    book_price.text(`${this.bookPrice}$`);
    count.text(`${this.count}`);
    img.appendTo(inner_divchart);
    bookTitle.appendTo(inner_divchart);
    book_price.appendTo(inner_divchart);
    count.appendTo(inner_divchart);
    // q.appendTo(divChart);
    inner_divchart.appendTo(div_chart);
    totalChart.appendTo(div_chart);
    btnFinsh.appendTo(div_chart);
    div_chart.appendTo(body);
    btnFinsh.on("click", () => {
      finalText.show();
      div_chart.hide();
      thankYou.text(`Thank you`);
      final_total.text(` Your Final   Total is : ${total}`);
      thankYou.appendTo(finalText);
      final_total.appendTo(finalText);
      finalText.appendTo(body);
    });
    finalText.hide();
    div_chart.hide();
    localStorage.setItem("getInfo", JSON.stringify(this.getInfo));
    // console.log(arr);
  }
}
// const addChart = new Chart(imgg, titl, pric, count);
let retrievedObject = localStorage.getItem("getInfo");
// let gg = { imgg, titl, pric, count };
// let arr = [];
//arr.push(gg);
// retrievedObject.map((e, i) => {
// console.log(retrievedObject.length);
// console.log(false);
// console.log(e);
// let item = JSON.parse(localStorage.getItem("itemname"))
// console.log(item);
// let product = JSON.parse(retrievedObject.getItem(i));
// console.log(product);

// });
// localStorage.setItem("cart", JSON.stringify(arr));

///////////////////////////////////////////// add book of main page/////////////////////////////////////////////////////
book.forEach((obj, index) => {
  const divCart = $("<div> </div>");
  divCart.addClass(`${index}`);
  const img = $("<img />");
  const description = $(`<p>${obj.description}<p>`);
  const price = $(`<span> ${obj.price}$ </span>`);
  const title = $(`<h3> ${obj.title} </h3>`);
  const btn = $(`<button> ${obj.add_to} </button>`);
  btn.addClass("btnChart");
  btn.css({
    display: "block",
    border: "solid 1px #000",
    // width: "30%",
    "margin-top": "55px",
    "text-align": "center",
    "background-color": "#fff",
     color: "#DB641A",
    "border-radius": "20%",
    height : '45px',
    // margin : 'auto',
  });
  btn.attr("id", `${index}`);
  img.attr("src", obj.img).attr("alt", obj.alt);
  img.appendTo(divCart);
  title.appendTo(divCart);
  description.appendTo(divCart);
  price.appendTo(divCart);
  btn.appendTo(divCart);
  divCart.appendTo(cartContanier);
  cartContanier.appendTo(cont_chart);
  cont_chart.appendTo(body);

  ////////////////////////////////////////////add chart in shopping chart /////////////////////////////////////////////
  btn.on("mouseover", () => {
    btn.css({
      "background-color": "#000",
    });
  });
  btn.on("mouseout", () => {
    btn.css({
      "background-color": "#fff",
    });
  });

  //localStorage.setItem("getInfo", JSON.stringify(this.getInfo));
  //const addChart = new Chart(imgg, titl, pric, count);
  let retrievedObject = localStorage.getItem("getInfo");
  const divLocal = $("<div> </div>");
  ///////// when click add book from local storage /////////////////////////////////////////////////////////////////////
  btn.on("click", () => {
    const retrievedObject = JSON.parse(localStorage.getItem("cart"));
    let item = `${index}`;
    console.log(item);
    for (let i = 0; i < retrievedObject.length; i++) {
      if (item == i) {
        add++;
        chart.text(add);
        //  console.log(true);
        divLocal.addClass(`cart${i}`);
        divLocal.css({
          display: "inline-flex",
          gap: "20%",
        });
        const imgLocal = $("<img />");
        const titleLocal = $(`<h3> ${retrievedObject[i].titl} </h3>`);
        const priceLocal = $(`<span> ${retrievedObject[i].pric}$ </span>`);
        const countLocal = $(`<span></span>`);
        imgLocal.attr("src", retrievedObject[i].imgg);
        imgLocal.css({
          width: "95px",
          "margin-bottom": "20px",
        }); //
        total += retrievedObject[i].pric;
        totalChart.text(`Total is :  ${total}$`);
        countLocal.text(`${retrievedObject[i].count}`);
        imgLocal.appendTo(divLocal);
        titleLocal.appendTo(divLocal);
        priceLocal.appendTo(divLocal);
        divLocal.appendTo(divContLocal);
        divContLocal.appendTo(body);
        totalChart.appendTo(body);
        btnFinsh.appendTo(body);
        btnFinsh.on("click", () => {
          divContLocal.hide();
          totalChart.hide();
          btnFinsh.hide();
          finalText.show();
          thankYou.text(`Thank you`);
          final_total.text(` Your Final   Total is : ${total}`);
          thankYou.appendTo(finalText);
          final_total.appendTo(finalText);
          finalText.appendTo(body);
        });
      }

      divContLocal.hide();
      totalChart.hide();
      btnFinsh.hide();
    }
  });
});
////////////////////////////////////////////////////

// book.forEach((e, i) => {
//  // console.log(e);
//  //let imgg = e.img;
//  //let titl = e.title;
//  //let pric = e.price;
//  //let count = e.q;
//   const divLocal = $("<div> </div>");
//   divLocal.addClass(`cart${i}`);
//   const imgLocal = $("<img />");
//   const titleLocal = $(`<h3> ${e.title} </h3>`);
//   const priceLocal = $(`<span> ${e.price}$ </span>`);
//   const countLocal = $(`<span></span>`);
//   imgLocal.attr("src", e.img);
//   countLocal.text(`${e.count}`);
//   imgLocal.appendTo(divLocal);
//   titleLocal.appendTo(divLocal);
//   priceLocal.appendTo(divLocal);
//   divLocal.appendTo(divContLocal);
//   divContLocal.appendTo(body);
//   //cont_chart.appendTo(body);

// });
/////////////////////////////////////////////////////////
icon.on("click", () => {
  cont_chart.hide();
  finalText.hide();
  divContLocal.show();
  totalChart.show();
  btnFinsh.show();
});
home.on("click", () => {
  divContLocal.hide();
  finalText.hide();
  totalChart.hide();
  btnFinsh.hide();
  cont_chart.show();
  // body.css('background-color','red')
});
///////////////////////////////////////////////////////////////////////////////////////////////////
// console.log(retrievedObject);
// retrievedObject.forEach((e, i) => {
//  // console.log(e);
//   const divLocal = $("<div> </div>");
//   divLocal.addClass(`cart${i}`);
//   const imgLocal = $("<img />");
//   const titleLocal = $(`<h3> ${e.title} </h3>`);
//   const priceLocal = $(`<span> ${e.price}$ </span>`);
//   const countLocal = $(`<span></span>`);
//   imgLocal.attr("src", e.imgg);
//   countLocal.text(`${e.count}`);
//   imgLocal.appendTo(divLocal);
//   titleLocal.appendTo(divLocal);
//   priceLocal.appendTo(divLocal);
//   divLocal.appendTo(divContLocal);
//   divContLocal.appendTo(body);
//   //cont_chart.appendTo(body);

// });
//});

// add++;
// chart.text(add);
// let imgg = obj.img;
// let titl = obj.title;
// let pric = obj.price;
// let count = obj.q;
// count++;

//cont_chart.appendTo(body);

// if (this.title == titl) {
//   console.log(count);
//   count++;
// }
// const addChart = new Chart(imgg, titl, pric, count);
// let gg = { imgg, titl, pric, count };
// // arr = [];
// arr.push(gg);

// console.log(arr);
// localStorage.setItem("cart", JSON.stringify(arr));

// console.log(addChart);
// addChart.getInfo();

// getInfo(){
//   //let quantity = 1;
//    total += this.bookPrice;
//   //const img = $(`<img>`);
//   const bookTitle = $(`<p></p>`);
//   const book_price = $(`<span></span>`);
//  // const q = $(`<span> ${quantity} </span>`);
//   totalChart.text(`Total is :  ${total}$`);
//   bookTitle.text(this.bookName);
//   book_price.text(`${this.bookPrice}$`);
//   //img.appendTo(divChart);
//   bookTitle.appendTo(divChart);
//   book_price.appendTo(divChart);
//   totalChart.appendTo(divChart);
//   btnFinsh.appendTo(divChart);
//  // q.appendTo(divChart);
//   divChart.appendTo(body);
//   btnFinsh.on('click',() => {
//     finalText.show();
//     divChart.hide();
//     thankYou.text(`Thank you`);
//     final_total.text(` Your Final   Total is : ${total}`);
//     thankYou.appendTo(finalText);
//     final_total.appendTo(finalText);
//     finalText.appendTo(body)

//   })
//   finalText.hide();
//   divChart.hide();
//   // thankYou.hide();

// }
// retrievedObject.map((e, i) => {
// console.log(retrievedObject.length);

// console.log(false);
// console.log(e);
// let item = JSON.parse(localStorage.getItem("itemname"))
// console.log(item);
//let product = JSON.parse(retrievedObject.getItem(i));
// console.log(product);

// });
