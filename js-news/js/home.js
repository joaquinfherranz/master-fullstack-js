const home = (() => {
  const renderBody = element => {
    let divDOM = document.createElement("div");
    divDOM.classList.add("home-body");
    divDOM.innerHTML=`<div></div>`
    element.appendChild(divDOM);
  }
  const renderSetionHeader = section => {
    const markup = `
      <img src="../assets/${section.image}">
      <div class="section-contents">
        <h1>${section.title}</h1>
      </div>
    `;
    let sectionDOM = document.createElement("section");
    sectionDOM.classList.add(section.className);
    sectionDOM.innerHTML = markup;
    document.querySelector('.home-body > div').appendChild(sectionDOM);
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
