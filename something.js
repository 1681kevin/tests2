const links = [
  "<a href='https://w3schools.com'>Visit W3Schools</a>",
  "<a href='https://wwf.org'>Visit WWF</a>",
  "<a href='https://developer.mozilla.org'>Visit MDN</a>"
];

const text = links[Math.floor(Math.random() * links.length)];
document.getElementById("test").innerHTML = text;