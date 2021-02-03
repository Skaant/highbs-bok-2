import colorsData from "../../../../_data/colors/colors.data.js"
import erasData from "../../../../_data/eras/eras.data.js"
import glossaryData from "../../../../_data/glossary/glossary.data.js"
import highbsBokBook from "../../../../_data/highbs-bok/highbs-bok.book.js"

export default () =>

  new Promise(resolve =>
        
    resolve({
      book: highbsBokBook,
      eras: erasData,
      glossary: glossaryData,
      colors: colorsData
    }))