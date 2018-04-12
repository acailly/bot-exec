const execSync = require("child_process").execSync;

module.exports = function(vorpal) {
  vorpal
    .command("exec <command>")
    .option("-p, --path", "Path the command is executed in")
    .description("Execute a command")
    .action(function(args, callback) {
      let opts = {};
      if (args.options.path) {
        opts.cwd = args.options.path;
      }
      try {
        const stdio = execSync(args.command, opts);
        console.log(stdio.toString());
      } catch (e) {}
      callback();
    });
};
