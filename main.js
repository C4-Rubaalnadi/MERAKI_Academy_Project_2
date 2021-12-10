const body = $("body");
const divMain = $("<div> </div>");
const finalText = $(`<div> </div>`);
const logo = $("<h1> Book Store </h1>");
const divChart = $(`<div></div>`);
const cont_chart = $(`<div> </div>`);
cont_chart.addClass('chart');
divChart.addClass('divChart');
 const icon = $(`<i class="fas fa-cart-plus"></i>`);
 const home = $(`<h3> Home </h3>`);
 home.appendTo(body);
let add = 0;
let total = 0;
let chart = $(`<span> ${add} </span>`);
chart.appendTo(body);
const cartContanier = $("<div> </div>");
cartContanier.addClass("cartContainer");
icon.appendTo(body);
logo.appendTo(divMain);
divMain.appendTo(body);
const book =
  //{} to fo each
  [
    //  category : 'categoryAllBook',
    // cart  [
    {
      img: "book.jpg",
      alt : 'book1',
      title: "book1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, rem. Minimavoluptatibus corrupti et qui!",
      price: 3 ,
      add_to: "add to chart",
    },
    {
      img: "book.jpg",
      alt : 'book2',
      title: "book2",
      description: "aaaaaaaaaaa",
      price: 4 ,
      add_to: "add to chart",
    },
    {
      img: "book.jpg",
      alt : 'book3',
      title: "book3",
      description: "Lorem ipsum dolor sit amet  corrupti et qui!",
      price: 5,
      add_to: "add to chart",
    },
    //  ]
  ];
  //img
  const btnFinsh = $(`<button> cheak out  </button>`);
  const totalChart = $(`<h4> </h4>`);
  const thankYou = $(`<h5> </h5>`);
  const final_total = $(`<p> </p>`);
  class Chart{
constructor(bookName,bookPrice){
  //this.img = img.attr('src',img);
  this.bookName = bookName;
  this.bookPrice = bookPrice;
}
getInfo(){
  //let quantity = 1;
   total += this.bookPrice;
  //const img = $(`<img>`);
  const bookTitle = $(`<p></p>`);
  const book_price = $(`<span></span>`);
 // const q = $(`<span> ${quantity} </span>`);
  totalChart.text(`Total is :  ${total}$`);
  bookTitle.text(this.bookName);
  book_price.text(`${this.bookPrice}$`);
  //img.appendTo(divChart);
  bookTitle.appendTo(divChart);
  book_price.appendTo(divChart);
  totalChart.appendTo(divChart);
  btnFinsh.appendTo(divChart);
 // q.appendTo(divChart);
  divChart.appendTo(body);
  btnFinsh.on('click',() => {
    finalText.show();
    divChart.hide();
    thankYou.text(`Thank you`);
    final_total.text(` Your Final   Total is : ${total}`);
    thankYou.appendTo(finalText);
    final_total.appendTo(finalText);
    finalText.appendTo(body)

  })
  finalText.hide();
  divChart.hide();
  // thankYou.hide();
  
  
}

}
icon.on('click', () => {
 cont_chart.hide();
 divChart.show();
 
});
home.on('click',() => {
  divChart.hide();
  finalText.hide();
  cont_chart.show();
});
book.forEach((obj, index) => {
  const divCart = $("<div> </div>");
  divCart.addClass(`cart${index}`);
  const img = $("<img />");
  const description = $(`<p>${obj.description}<p>`);
  const price = $(`<span> ${obj.price}$ </span>`);
  const title = $(`<h3> ${obj.title} </h3>`);
  const btn = $(`<button> ${obj.add_to} </button>`);
  img.attr("src", obj.img ).attr('alt',obj.alt);
  //alt.attr('alt',obj.alt); 
  img.appendTo(divCart);
  title.appendTo(divCart);
  description.appendTo(divCart);
  price.appendTo(divCart);
  btn.appendTo(divCart);
  divCart.appendTo(cartContanier);
  cartContanier.appendTo(cont_chart);
  cont_chart.appendTo(body);
  btn.on('click',() => {
    add++;
    chart.text(add);
  //  let imgg =  obj.img ;
    let titl = obj.title;
    let pric = obj.price;
    const addChart = new Chart(titl,pric);
   addChart.getInfo();
    });
});
// cartContanier.css('display','flex');
// cartContanier.css('gap','5px');
