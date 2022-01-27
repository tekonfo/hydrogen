import {CART_LINE} from '../../CartLineProvider/tests/fixtures';
import {getPrice} from '../../../utilities/tests/price';
import {flattenConnection} from '../../../utilities';
import type {CartWithActions} from '../types';

export const CART = {
  id: 'abc',
  checkoutUrl: 'https://shopify.com/checkout',
  attributes: [],
  buyerIdentity: {},
  discountCodes: [],
  estimatedCost: {
    subtotalAmount: getPrice(),
    totalAmount: getPrice(),
    totalTaxAmount: getPrice(),
    totalDutyAmount: getPrice(),
  },
  lines: {edges: []},
};

export const CART_WITH_LINES = {
  ...CART,
  lines: {edges: [{node: CART_LINE}]},
};

export const CART_WITH_LINES_FLATTENED = {
  ...CART,
  lines: flattenConnection(CART_WITH_LINES.lines),
};

export const CART_WITH_ACTIONS: CartWithActions = {
  ...CART_WITH_LINES_FLATTENED,
  status: 'idle',
  cartCreate: () => {},
  linesAdd: () => {},
  linesRemove: () => {},
  linesUpdate: () => {},
  noteUpdate: () => {},
  buyerIdentityUpdate: () => {},
  cartAttributesUpdate: () => {},
  discountCodesUpdate: () => {},
  cartLinesTotalQuantity: CART_WITH_LINES_FLATTENED.lines.reduce(
    (prev, curr) => {
      return prev + curr.quantity;
    },
    0
  ),
};
