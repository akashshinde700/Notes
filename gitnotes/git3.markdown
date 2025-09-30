# Git Basics Guide

This document provides an overview of essential Git concepts and commands, based on common Git operations and terminology.

## HEAD in Git
- **Definition**: HEAD represents your current position in the Git project history, pointing to the latest commit on the current branch.
- **Usage**:
  - View the current commit: `git show HEAD`
  - Move to the previous commit temporarily: `git checkout HEAD~1`
  - Navigate further back: `git checkout HEAD~2` (2 commits back, etc.)

## git restore
- **Purpose**: Reverts changes in files to their last committed or staged state.
- **Use Case**: Undo unwanted changes in a file to restore it to the last commit.
- **Command**: `git restore --source=<commit-id> <filename>`
  - Removes all uncommitted changes in the specified file.

## git commit -am
- **Function**: Combines adding modified (tracked) files to staging and committing them in one step.
- **Command**: `git commit -am "commit message"`
  - Stages and commits only tracked files that have been modified.

## .gitignore
- **Purpose**: A file that tells Git which files or folders to ignore (e.g., temporary files, secrets, or build outputs like `node_modules/`).
- **Why Use It**: Prevents irrelevant or sensitive files from being tracked.
- **Key Points**:
  - Only ignores untracked files; already tracked files need to be untracked using `git rm --cached <filename>`.
  - Restore `.gitignore` to its last committed state: `git restore .gitignore`

## Branches in Git
- **Definition**: A branch is a separate workspace for developing features, fixing bugs, or experimenting without affecting the main codebase.
- **Default Branch**: Usually `main` or `master`.
- **Commands**:
  - List branches: `git branch`
  - Create a branch: `git branch <new-branch-name>`
  - Switch to a branch: `git checkout <branch-name>` or `git switch <branch-name>`
  - Create and switch: `git checkout -b <new-branch>` or `git switch -c <new-branch>`
  - Delete a branch: `git branch -d <branch-name>`

## git merge
- **Purpose**: Combines changes from one branch into another.
- **Basic Syntax**: `git merge <branch-name>`
- **Example**:
  ```bash
  git checkout main
  git merge feature1
  ```
  Merges `feature1` changes into `main`.
- **Handling Conflicts**:
  - Git pauses if conflicts occur, marking them in files (e.g., `CONFLICT (content): Merge conflict in file.txt`).
  - Resolve manually, then run:
    ```bash
    git add file.txt
    git commit
    ```

## Tags in Git
- **Definition**: A tag is a label pointing to a specific commit, often used for releases or milestones.
- **Types**:
  - **Lightweight**: `git tag v1.0` (simple pointer to a commit)
  - **Annotated**: `git tag -a v1.0 -m "Version 1.0 release"` (includes metadata like author and date)
- **Commands**:
  - List tags: `git tag`
  - Show tag details: `git show v1.0`
  - Tag an old commit: `git tag -a v1.0 <commit-id> -m "Tagging old version"`
  - Delete a tag: `git tag -d v1.0`
  - Push tags to remote: `git push origin v1.0` or `git push origin --tags`

## git stash
- **Purpose**: Temporarily saves uncommitted changes, allowing you to switch branches or pull updates without losing work.
- **Commands**:
  - Save changes: `git stash`
  - View stash list: `git stash list`
  - Apply latest stash: `git stash apply`
  - Remove stash after applying: `git stash drop` or `git stash pop`
- **Use Case**: Switch branches without committing incomplete changes.

## Upstream in Git
- **Definition**: The remote branch your local branch tracks (e.g., `origin/main`).
- **Purpose**: Simplifies `git push` and `git pull` by linking local and remote branches.
- **Commands**:
  - Set upstream: `git push --set-upstream origin <branch-name>` or `git push -u origin <branch-name>`
  - Check upstream: `git branch -vv`
- **Example**:
  ```bash
  git checkout -b feature-login
  git push -u origin feature-login
  ```

## Undoing Commits
- **Soft Reset**: `git reset --soft HEAD~1`
  - Removes the last commit but keeps changes staged.
- **Mixed Reset (default)**: `git reset HEAD~1`
  - Removes the last commit and unstages changes.
- **Hard Reset**: `git reset --hard HEAD~1`
  - Deletes the last commit and all changes (use with caution).
- **Revert (Safe for Shared Repos)**: `git revert <commit-id>`
  - Creates a new commit that reverses the specified commit's changes.

## git commit --amend
- **Purpose**: Modifies the last commit to change the message or include additional files.
- **Use Case**: Fix a commit message or add forgotten files.

## Git GUIs
For users who prefer graphical interfaces over terminal commands:
- **GitHub Desktop**: Simple UI for GitHub users (Windows, macOS)
- **Sourcetree**: Visual Git control (Windows, macOS)
- **GitKraken**: Professional Git workflow (Windows, macOS, Linux)
- **TortoiseGit**: Integrates with File Explorer (Windows)
- **VS Code Git GUI**: Combines coding and Git (All platforms)