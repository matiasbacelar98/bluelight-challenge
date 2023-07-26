import { Fragment } from 'react';

export default function Show({ when, fallback, children }) {
  if (when) return <Fragment>{children}</Fragment>;
  return fallback;
}
