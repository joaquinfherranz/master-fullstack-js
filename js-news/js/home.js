const home = (() => {
  const renderBody = element => {
    let divDOM = document.createElement("div");
    divDOM.classList.add("home-body");
    element.appendChild(divDOM);
  }
  const renderSetionHeader = section => {
    const markup = `
      <img class="main-image" src="../assets/${section.image}">
      <h1>${section.title}</h1>
      ${section.loadingData ? '<img class="loading-image" src="../assets/loading-'+section.image+'">' : ''}
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
      title: 'Top JavaScript projects on github',
      loadingData: true
    });
    projects.renderProjectList(3);
  }
  const renderArticles = () => {
    renderSetionHeader({
      className: 'home-articles',
      image: 'articles.png',
      title: 'DEV JavaScript articles',
      loadingData: true
    });
  }
  const renderAppTests = () => {
    renderSetionHeader({
      className: 'home-tests',
      image: 'tests.png',
      title: 'App tests'
    });
  }
  const renderAppDocumentation = () => {
    renderSetionHeader({
      className: 'home-documentation',
      image: 'documentation.png',
      title: 'App JSDoc'
    });
  }
  return {
    render: element => {
      element.innerHTML = '';
      renderBody(element);
      renderProjects();
      renderArticles();
      renderAppTests();
      renderAppDocumentation();
    }
  }
})();
