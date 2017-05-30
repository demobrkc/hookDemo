on('issues.opened')
   .comment(`
   Hello @{{ sender.login }}. Thanks for inviting me to your project.`)
