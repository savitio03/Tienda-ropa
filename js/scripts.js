let products = [];
let total = 0;

function add(product, price) {
  console.log(product, price);
  products.push(product);
  total = total + price;
  document.getElementById("check").innerHTML = `pagar $${total}`;
}

function pay() {
  window.alert(products.join(", \n"));
}
