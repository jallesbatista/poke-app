<template>
  <PokeHome />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TestPage from "./components/TestPage.vue";
// import FormTodo from "./components/FormTodo.vue";
// import CommentsTodo from "./components/CommentsTodo.vue";
import PokeHome from "./components/PokeHome.vue";
export default {
  name: "app",
  components: {
    PokeHome,
  },
};
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
/* RESET CSS */
html,
button,
input,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  font-family: "Inter", sans-serif;
  vertical-align: baseline;
  box-sizing: border-box;
  text-decoration: none;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
  background-color: #a3a3a31c;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* OTHER CLASSES */

.container {
  width: 90%;
  margin: 0 auto;
  max-width: 1200px;
}
.input-group {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}
.input-group input {
  width: 100%;
  padding: 12px;
}

button {
  transition: 0.5s;
  cursor: pointer;
}

.btn-search {
  position: absolute;
  right: 10px;
}
.btn-search:active {
  scale: 0.9;
}
.btn-primary {
  background-color: white;
  border-radius: 4px;
  padding: 4px;
}
.input-default {
  border-radius: 8px;
  outline: none;
  border: none;
}
</style>
