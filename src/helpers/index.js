const toCurrency = (value, unit = "USD", dir = "right") => {
  if (dir === "right") return `${value} ${unit}`;
  else return `${unit} ${value}`;
};
// Kiểm tra xem string ep về int có hợp lệ hay không? - Check quantity > 1 hay không?
const validateQuantity = function(quantity) {
  let num = parseInt(quantity);
  console.log(num);
  console.log(isNaN(num));
  if (num == quantity && !isNaN(num)) {
    return true;
  }
  return false;
};

export { toCurrency, validateQuantity };
