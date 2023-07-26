import { Fragment } from 'react';
import Head from '../Head';

import Header from '../UI/Header';

export default function Home() {
  return (
    <Fragment>
      <Head
        title="Easybank"
        description="Easebank is the next generation digital banking. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more."
      />

      <Header />
      <main>Home page</main>
    </Fragment>
  );
}
