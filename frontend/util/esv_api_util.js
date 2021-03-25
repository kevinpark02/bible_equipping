export const fetchVerse = (passage) => {
    return $.ajax({
      url: `https://fierce-dawn-41077.herokuapp.com/https://api.esv.org/v3/passage/text/?q=${passage}&include-footnotes=false&include-verse-numbers=false&include-headings=false&include-passage-references=false&indent-paragraphs=0`,
      method: "GET",
      headers: {
        Authorization: `Token ${window.esvAPIKey}`,
      },
    });

};