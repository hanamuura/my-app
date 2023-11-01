import './App.css';
import { Books } from './components/Books';
import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import axios from 'axios';

function App() {

  const [books, setBooks] = useState([]);

  const [options, setOptions] = useState([
    {id: 0, data: "relevance"},
    {id: 1, data: "newest"},
  ])

  const [count, setCount] = useState(0);

  const [query, setQuery] = useState(
    {filter: "", order: "", search: "qwer"}
  );
  
  const searchBooks = (e) => {
    if(e.code === "Enter"){
      console.log(query);
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query.search}&orderBy=${query.order}&key=AIzaSyDjJ0e_iIZTMOwJ-DKP8r0qKKofxY_4_Sk`)
      .then(res => {
        setBooks(res.data.items);
      })
      .catch(rej => console.log(rej));
    }
  } 

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers:keyes&key=AIzaSyDjJ0e_iIZTMOwJ-DKP8r0qKKofxY_4_Sk`)
      .then(res => {
          setBooks(res.data.items);
          console.log(res);
          setLoading(false);
          setCount(res.data.totalItems)
      })
      .catch(rej => console.log(rej));
  }, [])


  return (
    <div className="App">
      <Header query={query} setQuery={setQuery} options={options} search={searchBooks}>{count? `total Items: ${count}` : null}</Header>
      {loading && !books.length? <>still loading...</> : <Books books={books}/>} 
    </div>
  );
}

export default App;
