const TABLET = {
  min: '48rem',
  max: '64rem',
};

const MOBILE = {
  max: '48rem',
};

export const MEDIA_QUERIES = {
  tabletAndDesktop: `@media (max-width: ${TABLET.min})`,
  mobileAndTablet: `@media (max-width: ${TABLET.max}) and (min-width: ${TABLET.min}) `,
  onlyMobile: `@media (max-width: ${MOBILE.max})`,
};
