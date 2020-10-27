const SelectedProduct = {
  get: () => localStorage.getItem('selectedProduct'),
  set: (product) => localStorage.setItem('selectedProduct', product),
  pop: () => localStorage.removeItem('selectedProduct'),
}

export default SelectedProduct
