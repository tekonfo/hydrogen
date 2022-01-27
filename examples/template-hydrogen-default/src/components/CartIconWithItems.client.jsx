import {useCart} from '@shopify/hydrogen/client';

import CartIcon from './CartIcon';

/**
 * A client component that specifies the icon to use if a cart contains merchandise
 */
export default function CartIconWithItems() {
  const {cartLinesTotalQuantity} = useCart();

  return (
    <>
      <div className="relative">
        <CartIcon />

        <div
          className={`bg-blue-700 text-xs rounded-full leading-none text-white absolute bottom-3 right-1 flex items-center justify-center transform translate-y-1/2 transition-all ${
            cartLinesTotalQuantity > 0 ? 'h-4 w-4' : 'h-0 w-0 overflow-hidden'
          }`}
          aria-hidden
        >
          {cartLinesTotalQuantity > 0 ? cartLinesTotalQuantity : null}
        </div>
      </div>
      <span className="sr-only">Cart, {cartLinesTotalQuantity} items</span>
    </>
  );
}
