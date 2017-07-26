var chalk = require("chalk");
var lorem = process.argv[2];
for (var x=0; x<lorem.length; x++){
	console.log(chalk.rgb(Math.random()*255,Math.random()*255,Math.random()*255).bold(lorem.charAt(x)));
}
