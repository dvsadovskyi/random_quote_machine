const App = () => {
  const [quotes, setQuotes] = React.useState("");
  const [randQuote, setRandQuote] = React.useState("");
  const [color, setColor] = React.useState("black")
  const [isFadingIn, setIsFadingIn] = React.useState(false);

  React.useEffect(() => {
    async function getQuotes() {
      let response = await fetch("https://type.fit/api/quotes");
      let data = await response.json();
      setQuotes(data);

      let randInd = Math.floor(Math.random() * data.length)
      setRandQuote(data[randInd])

    }
    getQuotes();


  }, [])




  let colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

  function handleClick() {
    let randInd = Math.floor(Math.random() * quotes.length)
    let randColorInd = Math.floor(Math.random() * colors.length)
    setColor(colors[randColorInd])
    setIsFadingIn(true)
    setTimeout(() => {
      setIsFadingIn(false);
      setRandQuote(quotes[randInd]);
    }, 800)
  }



  return (
    <div style={{ "backgroundColor": color }} className="container" >
      <div id="quote-box">
        <div style={{ "color": color }} className={isFadingIn ? "content fade-in" : "content"}>
          <p id="text" >{randQuote.text}</p>
          <p id="author">{randQuote.author ? "- " + randQuote.author : "No author"}</p>
        </div>
        <div className="buttons">
          <button style={{ "backgroundColor": color }} className="button" onClick={handleClick} id="new-quote">Next quote</button>
          <a style={{ "backgroundColor": color }} className="button" target="_top" href="https://twitter.com/intent/tweet" id="tweet-quote"><i className="bi bi-twitter"></i></a>
        </div>

      </div >
    </div >
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)