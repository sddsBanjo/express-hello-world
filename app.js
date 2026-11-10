const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => res.type('html').send(html));

app.get('/req', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

// Exercício 1
app.get('/meunome', (req, res) => {
  res.send('Meu nome é Guilherme H. Marques');
})

// Exercício 2
app.get('/tico', (req, res) => {
  res.send('Teco');
})

// Exercício 3
const pokemons = [
  { 'Posição': 1, 'Pokémon': 'Caterpie' },
  { 'Posição': 2, 'Pokémon': 'Pidgeotto' },
  { 'Posição': 3, 'Pokémon': 'Bulbasaur' },
  { 'Posição': 4, 'Pokémon': 'Charmander' },
  { 'Posição': 5, 'Pokémon': 'Squirtle' },
  { 'Posição': 6, 'Pokémon': 'Krabby' },
  { 'Posição': 7, 'Pokémon': 'Primeape' },
  { 'Posição': 8, 'Pokémon': 'Muk' },
  { 'Posição': 9, 'Pokémon': 'Tauros' },
  { 'Posição': 10, 'Pokémon': 'Mr. Mime' }
];

app.get('/pokemons', (req, res) => {
  res.json(pokemons);
})

// Exercício 4
let series = [
  {
    "nome": "LEGO Ninjago: Masters of Spinjitzu",
    "anoEstreia": 2011,
    "avaliacaoIMDB": 7.5
  },
  {
    "nome": "La Casa de Papel",
    "anoEstreia": 2017,
    "avaliacaoIMDB": 8.2
  },
  {
    "nome": "American Horror Story",
    "anoEstreia": 2011,
    "avaliacaoIMDB": 8.0
  }
];

app.get('/series', (req, res) => {
  res.json(series);
})

app.post('/series', (req, res) => {
  const { nome, anoEstreia, avaliacaoIMDB } = req.body;
  
  const novaSerie = {
    nome,
    anoEstreia,
    avaliacaoIMDB
  };

  series.push(novaSerie);

  res.status(201).json(novaSerie);
})

// Exercício 5
app.get('/erro', (req, res) => {
  throw new Error('Erro simulado em produção!');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello Express API 
    </section>
  </body>
</html>
`