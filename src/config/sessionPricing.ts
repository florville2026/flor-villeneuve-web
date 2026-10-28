import type { SessionPrice, SessionPricingId } from '../types';

// amountUsd es el importe visible en las tarjetas. amountEur es el cobro de PayPal en Cal.com:
// no se publica en la web y no es una conversión de amountUsd.
export const sessionPricing: Record<SessionPricingId, SessionPrice> = {
  pareja: {
    sessionType: 'pareja',
    amountUsd: 110,
    amountEur: 110,
  },
  'crianza-familia': {
    sessionType: 'crianza',
    amountUsd: 125,
    amountEur: 130,
  },
  'proceso-vincular': {
    sessionType: 'individual',
    amountUsd: 95,
    amountEur: 95,
  },
};
