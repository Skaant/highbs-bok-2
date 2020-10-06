import BOOK from "../../../../kami.js/_shrine/book/book.kami.js";

export default () =>

  new Promise(resolve =>
    
    BOOK.get(
      BOOK,
      'highbs-bok'
    )
      .then(book => resolve({ book })))