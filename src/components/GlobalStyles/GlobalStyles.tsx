import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
/*
 CSS reset from https://www.joshwcomeau.com/css/custom-css-reset/
 */
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  height: 100%;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}


#root {
  height: 100%;
}

:root {
  //https://www.happyhues.co/palettes/13
  
  --background: #0f0e17;
  --success: #80b918;
  --success-darker: #6c9913;
  --primary: #ff8906;
  --primary-darker: #d07106;
  --secondary: #f25f4c;
  --secondary-darker: #c44c3e;
  --tertiary: #e53170;
  --tertiary-darker: #b52758;
  
  --main: #fffffe;
  --gray: #a7a9be;
}

body {
  background-color: var(--background);
  color: var(--main);
  
  a:visited {
  color: var(--main);
  }
  
}


`;

export default GlobalStyles;
