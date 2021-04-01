import { useState, useEffect } from "react";

function App() {

    const [quotes, setQuotes] = useState("");
    const [author, setAuthor] = useState("");

    function getRandomQuotes() {
        setQuotes("Loading");
        setAuthor("Loading");
        fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1', {
            method: "GET",
            mode: "cors",
        })
            .then(res => res.json())
            .then(data => {
                var quotes = data.quotes[0];
                setQuotes(quotes.text);
                setAuthor(quotes.author);
            });
    }

    useEffect(() => {
        getRandomQuotes();
    }, [])

    return (
        <div className="main-container center-all">
            <div className="main-paper center-all">
                <h3 className="quotes">{quotes}</h3>
                <p className="author">{author}</p>
                <div className="btn-group">
                    <button className="btn" onClick={() => getRandomQuotes()}>Random Quotes</button>
                    <a className="btn" href={`https://twitter.com/intent/tweet?text="${quotes}" -${author}`}>Tweet this Quote</a>
                </div>
                <div className="attr">
                    Quotes provided by <a href="https://goquotes.docs.apiary.io/" target="_blank">Go Quotes API</a>
                </div>
            </div>
        </div>
    );
}

export default App;
