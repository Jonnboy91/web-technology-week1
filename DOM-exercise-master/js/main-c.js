// Put code of task C here
'use strict';

const main = document.querySelector('main');

const article = document.createElement('article');
const header = document.createElement('header');
const h2 = document.createElement('h2');
const figure = document.createElement('figure');
const img = document.createElement('img');
const figcaption = document.createElement('figcaption');
const p = document.createElement('p');

h2.innerHTML = "Article header";
figcaption.innerHTML = "Caption";
p.innerHTML = "Here is some text. Here is some text. Here is some text. Here is some text.";

img.src = "http://placekitten.com/320/160";
img.alt = "title";

header.appendChild(h2);
figure.appendChild(img);
figure.appendChild(figcaption);

article.appendChild(header);
article.appendChild(figure);
article.appendChild(p);

main.appendChild(article);