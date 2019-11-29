const projects = (() => {
  let projectList = [];
  const getProjects = async (renderProjects) => {
    const origin = "https://api.github.com";
    const projectsUrl = origin + "/search/repositories?q=stars:>10000+topic:javascript"
    let response = await fetch(projectsUrl);
    let json = await response.json();
    let items = json.items;      
    let projects = 
      items
        .map((item, index)=>{item.ranking=index+1; return item;})
        .map(item => {
          item.name=='react' ? item.owner.avatar_url="../assets/react-logo-512.png": null;
          return item;
        });
    renderProjects(projects);
    }
  const renderProjectArticle = project => {
    const markup = `
      <div class="home-ranking">${project.ranking.toString().padStart(2,'0')}</div>
      <h2>${project.name}</h2>
      <h3>${project.description}</h3>
      <div>${project.stargazers_count} <img src="../assets/icons8-star-15.png"></div>
      <img src="${project.owner.avatar_url}">        
    `;
    let articleDOM = document.createElement("article");
    articleDOM.innerHTML = markup;
    document.querySelector('.home-projects > div').appendChild(articleDOM);
  }
  return {
    setProjects: projects => {
      projectList = projects;
    },
    render: element => {
      const projectTemplate = project => {
        return `
          project
        `
      }
      element.innerHTML = projectsTemplates
    },
    renderProjectList: topRanking => {
      const renderProjects = projects => {
        projects
          .filter(project => topRanking ? project.ranking<topRanking+1 : true)
          .map(project => renderProjectArticle(project));
      }
      getProjects(renderProjects);
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