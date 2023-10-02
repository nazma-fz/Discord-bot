const quotes = [
    'blok, goblok',
    'bapak kau makan bubur pake tangan',
    'gos gos tonggos'
  ]
  const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)]

 module.exports = {randomQuote};
