export type CartItem = {
  service: string;
  name?: string;
  categoryId?: string;
  tier?: string;
  price?: string;
  quantity: number;
};

const STORAGE_KEY = 'fts_cart';

export function getCart(): CartItem[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

export function addCartItem(item: Omit<CartItem, 'quantity'>, qty = 1) {
  const cart = getCart();
  cart.push({ ...item, quantity: qty });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

export function clearCart() {
  localStorage.removeItem(STORAGE_KEY);
}



