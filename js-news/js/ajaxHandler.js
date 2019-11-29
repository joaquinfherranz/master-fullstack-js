const ajaxHandler = {
  // getData: async url => {
  //   await fetch(url)
  //     .then(response => response.json())
  //     .then( data => data)
  //     .catch( error => console.log(error));
  // }
  getData: async url => {
    let response = await fetch(url);
    let json = await response.json();
    return json;
  }
}