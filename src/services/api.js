export async function getCategories() {
  try {
    const endPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
    const response = await fetch(endPoint);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  if (!categoryId) endPoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  if (!query) endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;

  try {
    const response = await fetch(endPoint);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
}
