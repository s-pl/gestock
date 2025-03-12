import React from 'react';
import Hero from '../components/Hero/Hero';
import Charts from '../components/Charts/Charts';
import Snippets from '../components/Snippets/Snippets';
import Reviews from '../components/Reviews/Reviews';

function Home() {
  return (
    <>
    <Hero></Hero>
    <Charts></Charts>
    <Snippets></Snippets>
    <Reviews></Reviews>
    </>
  )
}

export default Home;