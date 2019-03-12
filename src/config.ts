export const CONFIG = {
  DEFAULT_LOCALE: 'en',
  STORAGE: {
    PREFIX: 'LOCA',
    COOKIES: {
      OPTIONS: {
        domain: `.local`,
        path: '/',
        expires: new Date(
          new Date().setFullYear(new Date().getFullYear() + 10),
        ),
      },
    },
  },
};
