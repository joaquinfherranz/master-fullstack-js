'use strict';
const Generator = require('yeoman-generator');
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log('Initializing...');
  }
  start() {
    this.log('Creando carpeta...');
    this.prompt([
      {
        type    : 'input',
        name    : 'name',
        message : 'Introduzca nombre carpeta: '
      }
    ]).then( (answers) => {
      // create destination folder
      this.destinationRoot(answers.name);
      this.fs.copyTpl(
        this.templatePath('index.html'),
        this.destinationPath(answers.name + '.html'),
        { message: 'Bienvenido a mi superweb!!' }
      );
      this._mensaje();
    });
  }
  _mensaje() {
    this.log('FIN...');
  }
  writing() {
    const pkgJson = {
      devDependencies: {
        eslint: '^3.15.0'
      },
      dependencies: {
        react: '^16.2.0'
      }
    };

    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  }

  install() {
    this.npmInstall();
  }

};