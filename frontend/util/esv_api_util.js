export const fetchVerse = (passage) => {
    return $.ajax({
      url: `https://fierce-dawn-41077.herokuapp.com/https://api.esv.org/v3/passage/text/${passage}`,
      method: "GET",
      headers: {
        Authorization: `Token ${window.esvAPIKey}`,
      }
    });

};