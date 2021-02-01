import BOOK from "motifs-js/_motifs/book/book.motif.js";

export default () =>

  new Promise(resolve =>
    
    BOOK.get(
      BOOK,
      'highbs-bok'
    )
      .then(book =>
        
        resolve({ book })))