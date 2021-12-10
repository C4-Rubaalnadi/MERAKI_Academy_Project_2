const body = $("body");
const divMain = $("<div> </div>");
divMain.addClass('main');
divMain.css({
  display: 'flex',
  gap: '60%',

})
const divchart = $(`<div> </div>`);
const finalText = $(`<div> </div>`);
const logo = $("<h1> Book Store </h1>");
logo.css('margin-left', '30px');
const divChart = $(`<div></div>`);

const cont_chart = $(`<div> </div>`);
cont_chart.addClass('chart');

cont_chart.css({
 ' margin-top': '20px',
  'margin-left': '15%',
});
divChart.addClass('divChart');
 const icon = $(`<i class="fas fa-cart-plus"></i>`);
 const home = $(`<h3> Home </h3>`);
 home.appendTo(body);
let add = 0;
let total = 0;
let chart = $(`<span> ${add} </span>`);
const cartContanier = $("<div> </div>");
cartContanier.addClass("cartContainer");
cartContanier.css({
  display: 'flex',
  width: '30%',
  gap: '30px',
  ' text-align': 'start',
  // 'flex-wrap': 'wrap',
});
logo.appendTo(divMain);
chart.appendTo(icon);
icon.appendTo(divMain);
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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, rem. Minimavoluptatibus corrupti et qui!1",
      price: 3 ,
      add_to: "add to chart",
      q : 0,
      
    },
    {
      img: "book.jpg",
      alt : 'book2',
      title: "book2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, rem. Minimavoluptatibus corrupti et qui!2",
      price: 4 ,
      add_to: "add to chart",
      q : 0,
     
    },
    {
      img: "book.jpg",
      alt : 'book3',
      title: "book3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, rem. Minimavoluptatibus corrupti et qui!3",
      price: 5,
      add_to: "add to chart",
      q : 0,
      
    },
    //  ]
  ];
  //img
  const btnFinsh = $(`<button> cheak out  </button>`);
  const totalChart = $(`<h4> </h4>`);
  const thankYou = $(`<h5> </h5>`);
  const final_total = $(`<p> </p>`);
  class Chart{
constructor(img,bookName,bookPrice,count){
  //this.img = img.attr('src',img);
  this.img = img;
  this.bookName = bookName;
  this.bookPrice = bookPrice;
  this.count = count;
}
getInfo(){
  const inner_divchart = $(`<div> </div>`);
  inner_divchart.css({
    display: 'flex',
    gap: '15%',
    'margin-left': '3%',
    'margin-bottom': '2%',
  })
   total += this.bookPrice;
  const img = $(`<img>`);
  img.attr('src',this.img);
  img.css('width','95px')
  const bookTitle = $(`<p></p>`);
  bookTitle.css({
    padding: '0',
    margin:'0',
  })
  const book_price = $(`<span></span>`);
 // const q = $(`<span> ${quantity} </span>`);
  totalChart.text(`Total is :  ${total}$`);
  bookTitle.text(this.bookName);
  book_price.text(`${this.bookPrice}$`);
  //img.appendTo(divChart);
  img.appendTo(inner_divchart);
  bookTitle.appendTo(inner_divchart);
  book_price.appendTo(inner_divchart);
 // q.appendTo(divChart);
 inner_divchart.appendTo(divChart);
 totalChart.appendTo(divChart);
 btnFinsh.appendTo(divChart);
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
 finalText.hide();
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
   let imgg =  obj.img ;
  let count = obj.count
  count++;
  let titl = obj.title;
  let pric = obj.price;
  if(count === 1){
    const addChart = new Chart(imgg,titl,pric,count);
   addChart.getInfo();
  }

   
    });
});






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