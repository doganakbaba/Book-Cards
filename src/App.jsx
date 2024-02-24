import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Books from './Books';
import Loading from './Loading';

function App() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const deleteBook = (id) => {
    const afterDeletedBooks = books.filter((book) => book.id !== id);
    setBooks(afterDeletedBooks);
  }
  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/books');
      setBooks(response.data);
      setLoading(false);
    }
    catch (error) {
      setLoading(false);

    }


  };

  useEffect(() => {
    fetchBooks();
  }, [])


  return (
    <div className='App'>
      {loading ? (
        <Loading />
      ) : (
        <>
          {books.length === 0 ? (
            <div className='refreshDiv'>
              <h2>Deleted All Books</h2>
              <button className='cardDeleteBtn' onClick={() => { fetchBooks() }}>Retry</button>
            </div>
          ) : (

            <Books books={books} removeBook={deleteBook} />
          )}
        </>

      )}

    </div>
  )
}

export default App
