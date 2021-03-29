
var productArray = [];
var productObj = {};

// const itemImage = get('item-image').src;
// const itemName = get('item-name').innerHTML;
// const itemPrice = get('item-price').innerHTML;


const updateCartNumber = () => {
  cartItemNum.innerHTML = productArray[0].length;
}

const addToCart = id => {
  if (!localStorage) {
    return alert("local storage not supported");
  }
  let thisClicked = document.getElementById(id);
  let itemImage = thisClicked.closest('.prod').querySelector('.item-image').src;
  let itemName = thisClicked.closest('.prod').querySelector('.item-name').innerHTML;
  let itemPrice = thisClicked.closest('.prod').querySelector('.item-price').innerHTML;

  
  productObj.image = itemImage;
  productObj.name = itemName;
  productObj.itemPrice = itemPrice;

  for (let prod in productArray) {
    if (productArray[prod].name == itemName) {
      return alert("product already in the cart")
    }
  }
  // get current product array
  const prodArray = JSON.parse(localStorage.getItem("lale:productArray"));
  productArray = prodArray;
  productArray.push(productObj);
  localStorage.setItem("lale:productArray", JSON.stringify(productArray));
  alert("Item added to cart");
  updateCartNumber();
}
