/** A value is "empty" when the CV left it as null / 'null.' / '-'. We never invent replacement data. */
export const isEmptyValue = (value) =>
  value === null || value === undefined || value === 'null.' || value === '-';

/** Placeholder links look like <linkedin>, <github>, <portfoliolink>. */
export const isPlaceholderLink = (value) =>
  typeof value === 'string' && /^<[^>]+>$/.test(value.trim());

/** True for periods that run until now ("Sekarang" / "Present"). */
export const isOngoing = (period = '') => /sekarang|present/i.test(period);
