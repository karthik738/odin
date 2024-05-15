const container=document.querySelector('#container');
const p=document.createElement('p');
p.innerText="Hey I’m red!";
p.style.color="red";

const h3=document.createElement('h3');
h3.innerText="Hey I’m blue!";
h3.style.color="blue";

const div=document.createElement('div');
div.setAttribute("style", "border: 1px solid black; background-color: pink");

// div.style.cssText = "color: blue; background: white;";

const h1=document.createElement('h1');
h1.innerText="I’m in a div";

const p2=document.createElement('p');
p2.innerText="ME TOO!";

container.appendChild(p);
container.appendChild(h3);

div.appendChild(h1);
div.appendChild(p2);

container.appendChild(div);



