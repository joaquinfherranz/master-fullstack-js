const vorpal = require('vorpal')();

const foods = ['burgers', 'chinese', 'pizza', 'sushi'];
const methods = ['a la carte', 'table d\'hote'];
const commandHelp = 'Order a type of food';
const optionHelp = 'How you want your meal served';

vorpal
  .command('order ', commandHelp)
  .option('--method [method]', optionHelp, methods)
  .autocomplete(foods)
  .action(function (args, cb) {
    const food = args.food;
    const method = args.options.method;
    this.log(`You ordered ${food} ${method}.`);
    cb();
  });

vorpal
  .delimiter('vorpal$')
  .show();