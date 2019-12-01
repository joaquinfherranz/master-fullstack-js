const home = (() => {
  const renderBody = element => {
    let divDOM = document.createElement("div");
    divDOM.classList.add("home-body");
    element.appendChild(divDOM);
  }
  const renderSetionHeader = section => {
    const markup = `
      <img src="../assets/${section.image}">
      <h1>${section.title}</h1>
    `;
    let sectionDOM = document.createElement("section");
    sectionDOM.classList.add('home', section.className);
    sectionDOM.innerHTML = markup;
    document.querySelector('.home-body').appendChild(sectionDOM);
  }
  const renderProjects = () => {
    renderSetionHeader({
      className: 'home-projects',
      image: 'projects.png',
      title: 'Top JavaScript projects on github'
    });
    projects.renderProjectList(3);
  }
  const renderArticles = () => {
    renderSetionHeader({
      className: 'home-articles',
      image: 'articles.png',
      title: 'DEV JavaScript articles'
    });
    //projects.renderProjectList(3);
  }
  return {
    render: element => {
      element.innerHTML = '';
      renderBody(element);
      renderProjects();
      renderArticles();
      // renderAppTests();
      // renderAppDocumentation();
    }
  }
})();
