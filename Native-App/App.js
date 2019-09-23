import React from 'react';

import BackgroundImageGallery from './components/BackgroundImageGallery/BackgroundImageGallery';
import backgroundImages from './utils/backgroundImages';

/** This is the main component of the App */
export default function App() {
  return (
    <BackgroundImageGallery images={backgroundImages} />
  );
}
