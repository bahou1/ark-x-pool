function groupByGenre() {
    const groupedByGenre = {};
    
  
    for (let i = 0; i < books.length; i++) {
      const booksgenre = books[i].genres;
      for (let j = 0; j < booksgenre.length; j++) {
        const genre = booksgenre[j];
        if (groupedByGenre[genre] === undefined) {
          groupedByGenre[genre] = [];
        }
        let l = groupedByGenre[genre].length ;
  
    groupedByGenre[genre][l] = books[i];
  
    }
  }
  return groupedByGenre;
  }