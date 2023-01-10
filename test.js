// const container = document.querySelector('#container');

// const content = document.createElement('p');
// const cont = document.createElement('h3');
// cont.classList.add('cont');
// cont.textContent = 'i am blue h3'
// content.classList.add('content');
// content.textContent = 'I am red';
// content.backgroundColor = 'red';
// container.appendChild(content);
// container.appendChild(cont);

// const div = document.createElement('div');
// const h1 = document.createElement('h1');
// h1.textContent = 'hey yo i am in a div';
// const p = document.createElement('p');
// p.textContent = 'yes mf, me too'
// container.appendChild(div);
// div.appendChild(h1);
// div.appendChild(p);
/* <button onclick="alert('Hello World')">Click Me</button> */
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});