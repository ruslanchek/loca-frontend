import * as React from 'react';
import { useTranslation } from 'react-i18next';

export function Locale({ id, values }) {
  const { t, i18n } = useTranslation();
  const html = t(id, values);

  return (
    <span
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}
