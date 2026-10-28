import type { SessionPrice, SessionPricingId } from '../types';

export const sessionPricing: Record<SessionPricingId, SessionPrice> = {
  pareja: {
    sessionType: 'pareja',
    amountUsd: 110,
    amountEur: null,
  },
  'crianza-familia': {
    sessionType: 'crianza',
    amountUsd: 125,
    amountEur: null,
  },
  'proceso-vincular': {
    sessionType: 'individual',
    amountUsd: 95,
    amountEur: null,
  },
};
