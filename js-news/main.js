const routesList = [
  { path: '/', name: 'home', render: home.render, default: true },
  { path: '/projects', name: 'projects', render: projects.render },
  { path: '/projects/:id', name: 'project' },
  { path: '/articles', name: 'articles'},
  { path: '/tests', name: 'tests' },
  { path: '/documentation', name: 'documentation' }
];

router.initialize(routesList);
router.navigate('/');