const body = $("body");
const divMain = $("<div> </div>");
const logo = $("<h1> Book Store </h1>");
const divChart = $(`<div></div>`);
divChart.addClass('divChart');
// const icon = $(`<i class="fas fa-cart-plus"></i>`);
let add = 0;
let chart = $(`<span> ${add} </span>`);
chart.appendTo(body);
const cartContanier = $("<div> </div>");
cartContanier.addClass("cartContainer");
//icon.appendTo(divMain);
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
      price: "3$",
      add_to: "add to chart",
    },
    {
      img: "book.jpg",
      alt : 'book2',
      title: "book2",
      description: "aaaaaaaaaaa",
      price: "4$",
      add_to: "add to chart",
    },
    {
      img: "book.jpg",
      alt : 'book3',
      title: "book3",
      description: "Lorem ipsum dolor sit amet  corrupti et qui!",
      price: "5$",
      add_to: "add to chart",
    },
    //  ]
  ];
  //img
class Chart{
constructor(bookName,bookPrice){
  //this.img = img.attr('src',img);
  this.bookName = bookName;
  this.bookPrice = bookPrice;
}
getInfo(){
  //let quantity = 1;
  const img = $(`<img>`);
  const bookTitle = $(`<p></p>`);
  const book_price = $(`<span></span>`);
 // const q = $(`<span> ${quantity} </span>`);
  bookTitle.text(this.bookName);
  book_price.text(this.bookPrice);
  img.appendTo(divChart);
  bookTitle.appendTo(divChart);
  book_price.appendTo(divChart);
 // q.appendTo(divChart);
  divChart.appendTo(body);
}

}

book.forEach((obj, index) => {
  const divCart = $("<div> </div>");
  divCart.addClass(`cart${index}`);
  const img = $("<img />");
  const description = $(`<p>${obj.description}<p>`);
  const price = $(`<span> ${obj.price} </span>`);
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
  cartContanier.appendTo(body);
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
