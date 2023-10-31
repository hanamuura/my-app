import './App.css';
import { Books } from './components/Books';
import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import axios from 'axios';

function App() {

  const [books, setBooks] = useState([]);

  const [options, setOptions] = useState([
    {id: 0, data: "value1"},
    {id: 1, data: "value2"},
    {id: 2, data: "value3"},
  ])

  const [query, setQuery] = useState("flowers");
  
  const searchBooks = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&key=AIzaSyDjJ0e_iIZTMOwJ-DKP8r0qKKofxY_4_Sk`)
      .then(res => {
        setBooks(res.data.items);
        setTimeout(() => {
          console.log(books);
        }, 0)
      })
      .catch(rej => console.log(rej))
  } 

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers:keyes&key=AIzaSyDjJ0e_iIZTMOwJ-DKP8r0qKKofxY_4_Sk`)
      .then(res => {
          setBooks(res.data.items);
          setLoading(false);
          console.log(books, res.data);
      })
      .catch(rej => console.log(rej));
    console.log(books.data);
  }, [])

  return (
    <div className="App">
      <Header query={query} setQuery={setQuery} options={options}>set of books 1</Header>
      <button onClick={searchBooks}>asdf</button>
      {loading? <>still loading...</> : <Books books={books}/>}
    </div>
  );
}

export default App;
