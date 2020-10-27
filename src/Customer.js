const Customer = {
  getId: () => localStorage.getItem('customer'),
  setId: (customer) => localStorage.setItem('customer', customer),
  isSet: () => Customer.getId() !== null && Customer.getId() !== '',
  delId: () => localStorage.removeItem('customer'),
}

export default Customer
