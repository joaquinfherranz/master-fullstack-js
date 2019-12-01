const dataHandler = (() => {
  return {
    get: async (url, cb) => {
      let response = await fetch(url);
      let json = await response.json();
      cb(json);    
    }
  }
})();