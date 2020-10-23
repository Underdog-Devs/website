# Git Workflow

## Why This Exists
When working in a collaborative environment it is important that we don't actively hinder the effort of those working along side us. In a Git environment that means avoiding merge conflicts.

Merge conflicts occur when two versions of the same file are merged. There is an easy method to avoid this from happening.

# Workflow Steps
1. When starting your work, checkout to 'MAIN' branch.
2. In your terminal use the command ``git pull origin main``
3. Create your own branch to work on with ``git checkout -b <branch name>``
4. After you have completed your work, make sure that you have the most recent version of the project with the command ``git pull origin main``. If there are conflicts you can resolve them within your code editor. Provided you were working on a selected task assigned to you, there aren't likely to be many if any at all.
5. Commit and push your work to GitHub
6. Open a pull request and enjoy. Be sure to delete branches as they are merged into the main project as the branches will become out of date. Always begin a new feature on a new branch.

### Suggestions
If you feel like this document can be improved, make modifications and open a pull request and make them! This is a living, collaborative project.