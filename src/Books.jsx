import Book from './Book'

function Books({ books, removeBook }) {
    //console.log(books);
    return (
        <div className='bookMainDiv'>
            <div>
                <h2>10 WORLD CLASSIC BOOKS</h2>
            </div>
            <div className="cardDiv">
                {
                    books.map((book) => {
                        return (
                            <Book key={book.id} {...book} removeBooks = {removeBook}/>
                            
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Books;