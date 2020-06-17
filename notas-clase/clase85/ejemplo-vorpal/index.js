// https://www.telerik.com/blogs/creating-node-js-command-line-utilities-improve-workflow
var vorpal = require('vorpal')(),
    duckCount = 0,
    wabbitCount = 0;

// duck
vorpal
      .command('duck', 'Outputs "rabbit"')
      .action(function(args, callback) {
        this.log('Wabbit');
        callback();
      });
vorpal
  .command('duck season', 'Outputs "rabbit season"')
  .action(function(args, callback) {
    duckCount++;
    this.log('Wabbit season');
    callback();
  });

// wabbit
vorpal
    .command('wabbit', 'Outputs "duck"')
    .action(function(args, callback) {
      this.log('Duck');
      callback();
    });
vorpal
    .command('wabbit season', 'Outputs "duck season"')
    .action(function(args, callback) {
      // no cheating
      if (duckCount < 2) {
        duckCount = 0;
        this.log('You\'re despicable');
        callback();
      }
      else if (wabbitCount === 0) {
        wabbitCount++;
        this.log('Duck season');
        callback();
      }
      // doh!
      else {
        this.log('I say it\'s duck season. And I say fire!');
        vorpal.ui.cancel();
      }
    });

vorpal
  .delimiter('daffy$')
  .show();