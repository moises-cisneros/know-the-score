// App Constants

// Prediction outcomes
export const PREDICTION_OUTCOMES = {
  HOME: 'home',
  AWAY: 'away',
  DRAW: 'draw'
} as const;

export type PredictionOutcome = typeof PREDICTION_OUTCOMES[keyof typeof PREDICTION_OUTCOMES];

// Match statuses
export const MATCH_STATUSES = {
  UPCOMING: 'upcoming',
  LIVE: 'live',
  FINISHED: 'finished',
  CANCELLED: 'cancelled'
} as const;

export type MatchStatus = typeof MATCH_STATUSES[keyof typeof MATCH_STATUSES];

// Challenge statuses
export const CHALLENGE_STATUSES = {
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  RESOLVED: 'resolved',
  EXPIRED: 'expired',
  CANCELLED: 'cancelled'
} as const;

export type ChallengeStatus = typeof CHALLENGE_STATUSES[keyof typeof CHALLENGE_STATUSES];

// Pool statuses
export const POOL_STATUSES = {
  ACTIVE: 'active',
  RESOLVED: 'resolved',
  CANCELLED: 'cancelled'
} as const;

export type PoolStatus = typeof POOL_STATUSES[keyof typeof POOL_STATUSES];

// Badge types
export const BADGE_TYPES = {
  STREAK_5: 'streak_5',
  STREAK_10: 'streak_10',
  PERFECT_WEEK: 'perfect_week',
  HIGH_ROLLER: 'high_roller',
  EARLY_ADOPTER: 'early_adopter'
} as const;

export type BadgeType = typeof BADGE_TYPES[keyof typeof BADGE_TYPES];

// API Constants
export const API_ENDPOINTS = {
  SPORTS_API: process.env.SPORTS_API_URL || 'https://api.sports.com',
  FARCASTER_HUB: process.env.FARCASTER_HUB_URL || 'https://hub.farcaster.xyz',
  SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  BASE_RPC: process.env.BASE_RPC_URL || 'https://mainnet.base.org'
} as const;

// Contract Addresses (Base Network)
export const CONTRACT_ADDRESSES = {
  PUBLIC_POOL: process.env.PUBLIC_POOL_ADDRESS as `0x${string}` || '0x0000000000000000000000000000000000000000',
  CHALLENGE: process.env.CHALLENGE_ADDRESS as `0x${string}` || '0x0000000000000000000000000000000000000000',
  BADGE: process.env.BADGE_ADDRESS as `0x${string}` || '0x0000000000000000000000000000000000000000'
} as const;

// Time constants
export const TIME_CONSTANTS = {
  CHALLENGE_EXPIRY_HOURS: 24,
  MATCH_RESOLVE_BUFFER_MINUTES: 30,
  CACHE_EXPIRY_MINUTES: 15,
  SESSION_TIMEOUT_HOURS: 24
} as const;

// Fee constants
export const FEE_CONSTANTS = {
  PUBLIC_POOL_FEE_PERCENT: 5, // 5%
  CHALLENGE_FEE_PERCENT: 3,   // 3%
  BADGE_MINT_FEE_ETH: 0.01   // 0.01 ETH
} as const;

// UI Constants
export const UI_CONSTANTS = {
  MAX_PREDICTION_AMOUNT_ETH: 1.0,
  MIN_PREDICTION_AMOUNT_ETH: 0.001,
  DEFAULT_PAGE_SIZE: 20,
  MAX_STREAK_DISPLAY: 100,
  ANIMATION_DURATION_MS: 300
} as const;

// Error messages
export const ERROR_MESSAGES = {
  WALLET_NOT_CONNECTED: 'Por favor conecta tu wallet para continuar',
  INSUFFICIENT_BALANCE: 'Saldo insuficiente para esta transacción',
  INVALID_PREDICTION: 'Selección de predicción inválida',
  MATCH_ALREADY_STARTED: 'El partido ya ha comenzado',
  CHALLENGE_EXPIRED: 'El desafío ha expirado',
  NETWORK_ERROR: 'Error de conexión. Inténtalo de nuevo',
  CONTRACT_ERROR: 'Error en el contrato inteligente'
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  PREDICTION_PLACED: '¡Predicción realizada exitosamente!',
  CHALLENGE_CREATED: 'Desafío creado exitosamente',
  PRIZE_CLAIMED: 'Premio reclamado exitosamente',
  BADGE_MINTED: 'Insignia minteada exitosamente'
} as const;
