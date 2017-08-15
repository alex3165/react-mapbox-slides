import { defaultTheme } from 'extravaganza'
import { css } from 'styled-components'

const prismLight = css`
.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #898ea4;
}

.token.punctuation {
  color: #5e6687;
}

.token.namespace {
  opacity: .7;
}

.token.operator,
.token.boolean,
.token.number {
  color: #c76b29;
}
.token.property {
  color: #c08b30;
}
.token.tag {
  color: #3d8fd1;
}
.token.string {
  color: #f25a55;
}
.token.selector {
  color: #6679cc;
}
.token.attr-name {
  color: #c76b29;
}
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #22a2c9;
}

.token.attr-value,
.token.keyword,
.token.control,
.token.directive,
.token.unit {
  color: #ac9739;
}

.token.statement,
.token.regex,
.token.atrule {
  color: #22a2c9;
}

.token.placeholder,
.token.variable {
  color: #3d8fd1;
}

.token.deleted {
  text-decoration: line-through;
}

.token.inserted {
  border-bottom: 1px dotted #202746;
  text-decoration: none;
}

.token.italic {
  font-style: italic;
}

.token.important,
.token.bold {
  font-weight: bold;
}

.token.important {
  color: #c94922;
}

.token.entity {
  cursor: help;
}
`

export default {
  ...defaultTheme,
  googleFont: {
    name: 'Averia Serif Libre',
    weights: [400, 700]
  },
  colors: {
    background: '#fbe4e4',
    secondaryBackground: '#6b5c53 url(/static/polka-dots.svg) repeat',
    primary: '#6b5c53',
    secondary: '#fbe4e4'
  },
  codeBlockTheme: prismLight,
  transitions: ['fade']
}
