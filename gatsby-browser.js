import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';

// custom typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

// normalize CSS across browsers
import './src/styles/css/normalize.css';

// custom CSS styles
import './src/styles/css/style.css';

// custom SCSS styles
import './src/styles/scss/style.scss';

// Tailwind CSS
import './src/styles/global.css';

// export const wrapRootElement = ({ element }: { element: React.ReactNode }) => (
//   <Provider store={store}>{element}</Provider>
// );

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>{element}</Provider>
);
