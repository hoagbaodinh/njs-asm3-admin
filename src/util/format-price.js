const formatPrice = (price) => {
  // Dinh dang tien theo menh gia vnd
  let VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  return VND.format(price)
    .replace('₫', '')
    .replace(/&nbsp;/g, '')
    .replace(/\u00A0/g, '');
};
export default formatPrice;
