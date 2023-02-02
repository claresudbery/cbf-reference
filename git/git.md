## To commit changed code

Do all the following commands, one at a time. Press Enter after each one. Below is an explanation of each one.

```
git status
git add .
git commit -m "Type your commit message here."
git push
```

1. Status. This tells you what new changes you have made. Like this: `git status`

2. Stage your files. This gets your changes ready to be committed. Like this: `git add .`

3. Commit your changes. Write a commit message that describes the changes. Like this: `git commit -m "Type your commit message here."`

4. Push your changes up to github.com, so that CBF staff can see them. Like this: `git push`

## To avoid tricky merges when merging pull requests

There are two strategies you can use to make merges easier:

### 1. Small branches

Keep branches small, simple and short-lived. Restrict them to single items of change, and merge them as quickly and frequently as possible. If everyone on your team does this, then all merges will be small and therefore easier. Communicate with each other if you think you might have two people impacting the same area of code. Work together to avoid merge problems.

### 2. Merge and test locally before issuing a pull request.

Merge changes locally, and fix any resulting merge issues, BEFORE issuing a pull request.

When you have work ready to merge, do the following:

1. Pull the latest version of the main branch: `git checkout main` and then `git pull`
2. Merge the main branch in with your branch: `git checkout name-of-your-branch` and then `git merge main`
3. If there are any merge conflicts, fix them on your machine. If there are any problems, ask for help! Maybe you will need to get another team member to work through it with you.
4. Once you've fixed any merge conflicts, test the code locally. Is everything ok? Is anything broken?
5. Has the main branch changed again while you did the above? Just to make sure, run steps 1 and 2 again. Fix any issues. Test the code again.
6. Now you're finally ready to issue a pull request and merge your code back into main. At this point, it should be simple and easy and nothing should get broken.
