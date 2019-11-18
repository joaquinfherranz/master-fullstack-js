// https://developer.nytimes.com/docs/books-product/1/overview

//https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=4asfaw345qafaw34q234fa

const urlRoot = "https://api.nytimes.com/svc/books/v3";
const urlListData = "/lists/current/hardcover-fiction.json"
const APIKey = "2UE6kH2TmsmhRtDofdsG8m7P9CIgVCOI";
const url = urlRoot + urlListData + "?api-key=" + APIKey;


function getBooks (url) {
  function renderBook(book) {
    console.log(book);
    const markup = `
      <article>
        <p class="rank">#${book.rank} ${book.title}</p>
        <img src="${book.book_image}">
        <p class="weeks-on-list">Weeks on list: ${book.weeks_on_list}</p>
        <p class="description">${book.description}</p>
        <a class="buy" href="${book.amazon_product_url}" target="_blank">BUY AT AMAZON</a>
      </article>
      `;
    let bookDOM = document.createElement("li");
    bookDOM.innerHTML = markup;
    document.getElementById("booksId").appendChild(bookDOM);
  }
  
  (function (url) {
    let xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState === 4) {
        document.getElementById("loading").style.display="none";
      }
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        let respuesta = JSON.parse(xmlHttp.responseText);
        console.info(respuesta);
        respuesta.results.books.forEach(renderBook);
      } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
        console.error("ERROR! 404");
        console.info(JSON.parse(xmlHttp.responseText));
      }
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send();   
  })(url);
}

getBooks(url);