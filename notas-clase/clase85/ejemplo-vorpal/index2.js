// http://vorpal.js.org/
const vorpal = require('vorpal')();

vorpal
  .command('order pizza')
  .option('--anchovies')
  .action(function (args, cb) {
    const self = this;
    this.prompt({
      type: 'input',
      name: 'time',
      message: 'When would you like your pizza?'
    }, function (result) {
      self.log(`Okay, ${result.time} it is!`);
      cb();
    });
  });

vorpal
  .delimiter('vorpal$')
  .show();
            