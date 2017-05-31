on('issues.opened')
   .comment(`Hello @{{ sender.login }}. Thanks for opening up an issue.`)
   .createCard({project:'myProject', column:'New'})
