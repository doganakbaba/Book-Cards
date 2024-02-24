function Book({id,content,title,author,category,removeBooks}) {
   
    return ( 
        <div className="book">
            <div className="bookTitleAuthor">
                <h2 className="bookTitle">{title}</h2>
                <h4 className="bookAuthor">{author}</h4>
                <h4 className="bookCategory">{category}</h4>

            </div>
            <p>{content}</p>
            <button className="cardDeleteBtn" onClick={()=>removeBooks(id)}>DELETE </button>
        </div>
     );
}

export default Book;