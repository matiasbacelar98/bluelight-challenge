import { Fragment } from 'react';
import Head from '../Head';

import Header from '../UI/Header';
import Footer from '../UI/Footer';
import DesktopImg from '../UI/DesktopImg';

import Hero from '../layouts/Hero';
import Info from '../layouts/Info';
import Articles from '../layouts/Articles';

export default function Home() {
  return (
    <Fragment>
      <Head
        title="Easybank"
        description="Easebank is the next generation digital banking. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more."
      />

      <div className="layout">
        <Header />
        <main>
          <DesktopImg />
          <Hero />
          <Info />
          <Articles />
        </main>

        <Footer />
      </div>
    </Fragment>
  );
}
