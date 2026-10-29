/** A value is "empty" when the CV left it as null / 'null.' / '-'. We never invent replacement data. */
export const isEmptyValue = (value) =>
  value === null || value === undefined || value === 'null.' || value === '-';

/** Placeholder links look like <linkedin>, <github>, <portfoliolink>. */
export const isPlaceholderLink = (value) =>
  typeof value === 'string' && /^<[^>]+>$/.test(value.trim());

/** Pulls the podium rank out of titles such as "Juara II ..." -> 2. */
export const getRank = (title = '') => {
  const match = title.match(/Juara\s+(I{1,3}|IV|V)\b/i);
  if (!match) return null;
  return { I: 1, II: 2, III: 3, IV: 4, V: 5 }[match[1].toUpperCase()] ?? null;
};

export const isOngoing = (period = '') => /sekarang/i.test(period);

