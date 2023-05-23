const products = [
  'preto-PP',
  'preto-M',
  'preto-G',
  'preto-GG',
  'preto-GG',
  'branco-PP',
  'branco-G',
  'vermelho-M',
  'azul-XG',
  'azul-XG',
  'azul-XG',
  'azul-P',
];

module.exports = () => {
  const newProducts = {};

  for (const product of products) {
    const [color, size] = product.split('-');
    if (newProducts[color]) {
      if (newProducts[color][size]) {
        newProducts[color][size] += 1;
      } else {
        newProducts[color][size] = 1;
      }
    } else {
      newProducts[color] = {
        [size]: 1,
      };
    }
  }
  return newProducts;
};
