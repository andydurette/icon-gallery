import React from 'react';
import Lightbox from 'react-lightbox-component';
import "react-lightbox-component/build/css/index.css";
import './App.css';

const App = () => (
  <div>
    <header>
      <h1>30 Day Icon Challenge</h1>
      <p>A personal project where I designed an icon daily for a month</p>
    </header>
    <Lightbox images={ [
      {
        src: 'images/xlarge/camera.svg',
        title: 'Camera',
      },
      {
        src: 'images/xlarge/eggs-benedict.jpg',
        title: 'Eggs Benedict',
      },
      {
        src: 'images/xlarge/glasses.jpg',
        title: 'Full Rim Glasses',
      },
      {
        src: 'images/xlarge/bluejay.jpg',
        title: 'Blue Jay',
      },
      {
        src: 'images/xlarge/business-bag.jpg',
        title: 'Business Bag',
      },
      {
        src: 'images/xlarge/violin.jpg',
        title: 'Violin',
      },
      {
        src: 'images/xlarge/nigiri.jpg',
        title: 'Nigiri',
      },
      {
        src: 'images/xlarge/milk.jpg',
        title: 'Milk',
      },
      {
        src: 'images/xlarge/television.jpg',
        title: 'Television',
      },
      {
        src: 'images/xlarge/pancakes.svg',
        title: 'Pancakes',
      },
      {
        src: 'images/xlarge/california-roll.jpg',
        title: 'California Roll',
      },
      {
        src: 'images/xlarge/softserve.svg',
        title: 'Soft Serve',
      },
      {
        src: 'images/xlarge/blender.jpg',
        title: 'Blender',
      },
      {
        src: 'images/xlarge/tardis.svg',
        title: 'Tardis',
      },
      {
        src: 'images/xlarge/ps4-controller.jpg',
        title: 'PS4 Controller',
      },
      {
        src: 'images/xlarge/liberty-bell.jpg',
        title: 'Liberty Bell',
      },
      {
        src: 'images/xlarge/satellite.jpg',
        title: 'Satellite',
      },
      {
        src: 'images/xlarge/chess-queen.svg',
        title: 'Chess Queens',
      },
      {
        src: 'images/xlarge/cast-iron-pan.svg',
        title: 'Cast Iron Pan',
      },
      {
        src: 'images/xlarge/cell-phone.jpg',
        title: 'Cell Phone',
      },
      {
        src: 'images/xlarge/mixer.svg',
        title: 'Mixer',
      },
      {
        src: 'images/xlarge/headphones.svg',
        title: 'Headphone',
      },
      {
        src: 'images/xlarge/lightbulb.svg',
        title: 'Lightbulb',
      },
      {
        src: 'images/xlarge/taco.svg',
        title: 'Taco',
      },
      {
        src: 'images/xlarge/pinwheels.svg',
        title: 'Pin Wheels',
      },
      {
        src: 'images/xlarge/moon-and-stars.svg',
        title: 'Pin Wheels',
      },
      {
        src: 'images/xlarge/tie-fighter.svg',
        title: 'Tie Fighter',
      },
      {
        src: 'images/xlarge/bowler-hat.svg',
        title: 'Bowler Hat',
      },
      {
        src: 'images/xlarge/ramen.svg',
        title: 'Ramen',
      },
      {
        src: 'images/xlarge/raven.svg',
        title: 'Raven',
      },
      
    ] }/>
  </div>
);

export default App;
