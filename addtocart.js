const product = [
  {
    id:0,
    image:'img1.jpg',
    title:'xiomi 12 pro',
    price:120,
  },
  {
    id:1,
    image:'img2.jpg',
    title:'vivo Y100',
    price:120,
  },
  {
    id:2,
    image:'img3.webp',
    title:'Samsung F13',
    price:120,
  },
  {
    id:3,
    image:'img4.jpeg',
    title:'OPPO A57',
    price:120,
  } 
];
const categories = [...new Set(product.map((item)=>
{ return item }))]
let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
  {
    var {image, title, price} = item;
    return(
      `<div class='box'>
        <div class='img-box'>
          <img class='images' src=${image}></img>
          </div> 
      <div class='bottom'>
      <p>${title}</p>
      <h2>${price}.00</h2>`+
      "<button onclick='addtocart("+(i++)+")'>Add To Cart</button>"+
      `</div>
      </div>`
    )
  }).join(' ')

  var cart =[];

  //Add Product//
  function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
  }

  //delete product//
function delElement(a){
  cart.splice(a,1);
  displaycart();
}

  function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
      document.getElementById('cartItem').innerHTML = "your cart is empty";
      document.getElementById("total").innerHTML= "$"+0+".00";
    }
    else{
      document.getElementById('cartItem').innerHTML = cart.map((items)=>
      {
        var {image, title , price} =items;
        total=total+price;
        document.getElementById("total").innerHTML="$"+total+".00";
        return(
          `<div class='cart-item'>
            <div class='row-img'>
              <img class='rowing' src=${image}>
             </div>
             <p style='font-size:12px;'>${title}</p>
             <h2 style='font-size:15px;'>${price}.00</h2>`+
             "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
        );
    }).join(' ');
  }
}