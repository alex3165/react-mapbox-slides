import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// CodeMirror
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';

// Prism JS
import 'prism-themes/themes/prism-atom-dark.css';
import 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
