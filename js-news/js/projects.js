const projects = (() => {
  const getProjects = (json, topRanking) => {
    let projects = json.items
      .filter((project, index) => topRanking ? index<topRanking : true)
      .map((project, index) => {project.ranking=index+1; return project;})
      .map(project => setProjectLogo (project));
    return projects;
  }
  const projectLogos = {
    'react': 'react-logo-512.png'
  }
  const setProjectLogo = (project) => {
    const logoUrl = projectLogos[project.name] ? '../assets/' + projectLogos[project.name] : project.owner.avatar_url;
    project.logo_url = logoUrl;
    return project;
  }
  const renderProjectArticle = project => {
    const markup = `
      <div class="article-ranking">${project.ranking.toString().padStart(2,'0')}</div>
      <div class="article-description">
        <h2>${project.name}</h2>
        <div>${project.description}</div>
        <div>${project.stargazers_count} <img class="star" src="../assets/icons8-star-15.png"></div>
      </div>
      <div class="article-image">
        <img class="logo-image" src="${project.logo_url}">
      </div>
    `;
    let articleDOM = document.createElement("article");
    articleDOM.innerHTML = markup;
    document.querySelector('.home-projects').appendChild(articleDOM);
  }
  return {
    render: element => {
      const projectTemplate = project => {
        return `
          project
        `
      }
      element.innerHTML = projectsTemplates
    },
    renderProjectList: topRanking => {
      const origin = "https://api.github.com";
      const url = origin + "/search/repositories?q=stars:>10000+topic:javascript"  
      const renderProjects = json => {
        document.querySelector('.home-projects .loading-image').remove();
        let projects = getProjects(json, topRanking)
          .map(project => renderProjectArticle(project));
      }
      dataHandler.get(url, renderProjects);
    }
  }
})();

/*
// Si puede consultar consulta
// Si no puede consultar y no tiene datos espera
// Si no puede consultar y tiene datos muestra esos datos

// Consulta de proyectos
// https://api.github.com/search/repositories?q=stars:%3E10000+topic:javascript
// https://api.github.com/search/repositories?q=stars:>10000+topic:javascript
{
  "message": "API rate limit exceeded for 95.122.229.239. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
  "documentation_url": "https://developer.github.com/v3/#rate-limiting"
}
// repositories.json consultado el 27/11/2019 00:50


//https://developer.github.com/v3/#rate-limiting
//Increasing the unauthenticated rate limit for OAuth applications



// Sin restricciones podemos consultar nuestro rate_limit
https://api.github.com/rate_limit

resources.search.remaining > me quedan 9 consultas
resources.search.reset > 1574813258
new Date(1574813258 * 1000)
Wed Nov 27 2019 01:07:38 GMT+0100 (hora estándar de Europa central)

{
  "resources": {
    "core": {
      "limit": 60,
      "remaining": 60,
      "reset": 1574816361
    },
    "search": {
      "limit": 10,
      "remaining": 9,
      "reset": 1574813099
    },
    "graphql": {
      "limit": 0,
      "remaining": 0,
      "reset": 1574816361
    },
    "integration_manifest": {
      "limit": 5000,
      "remaining": 5000,
      "reset": 1574816361
    }
  },
  "rate": {
    "limit": 60,
    "remaining": 60,
    "reset": 1574816361
  }
}

Consulto rate_limit,
si no puedo > espiner y timer con el tiempo q me queda
si puedo > adelante


*/