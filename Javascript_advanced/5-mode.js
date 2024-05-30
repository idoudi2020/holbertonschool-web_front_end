function createMode(size, weight, transform, background, color) {
    return function() {
      document.body.style.fontSize = size;
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
    }
  }
  
  function main() {
      let spookyMode = createMode(9, 'bold', 'uppercase', 'pink', 'green');
      let darkMode = createMode(12, 'bold', 'capitalize', 'black', 'white');
      let screamMode = createMode(12, 'normal', 'lowercase', 'white', 'black');
      let body = document.body;
      let p = document.createElement('p');
      p.innerHTML = 'Welcome Holberton!';
      body.appendChild(p);
      let button1 = document.createElement('button');
      button1.innerHTML = 'Spooky';
      button1.onclick = spookyMode;
      body.appendChild(button1);
      let button2 = document.createElement('button');
      button2.innerHTML = 'Dark mode';
      button2.onclick = darkMode;
      body.appendChild(button2);
      let button3 = document.createElement('button');
      button3.innerHTML = 'Scream mode';
      button3.onclick = screamMode;
      body.appendChild(button3);
  }
  
  main();
