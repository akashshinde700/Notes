# Life Cycle of a Change in Git

1. **Modify Files**  
   You change your files on your computer. These changes are only on your disk — Git doesn’t track them yet.

2. **Check Changes**  
   Run:  
   ```
   git diff
   ```  
   to see what changes you made (not saved to Git yet).

3. **Stage Changes**  
   ```
   git add filename
   ```  
   or  
   ```
   git add .
   ```  
   to tell Git: "I want to include these changes in the next save."

4. **Check Staged Changes**  
   ```
   git diff --staged
   ```  
   to see what changes are ready to be saved (committed).

5. **Commit Changes**  
   ```
   git commit -m "Your message here"
   ```  
   This saves your changes in Git history with a message describing what you did.

6. **Push Changes (optional)**  
   If you use a remote repository (like GitHub), run:  
   ```
   git push
   ```  
   to send your saved changes to the remote server.

---

## What is a Commit ID?  
Every time you save your changes with `git commit`, Git creates a unique ID for that commit. This unique ID is called the **commit ID** or **commit hash**.  
It looks like a long string of letters and numbers.  
This ID helps Git and you to identify exactly which commit you are talking about.

### Why is Commit ID useful?  
- To see details of a specific commit.  
- To go back to an old commit (undo changes).  
- To share or refer to a specific commit with others.

### How to see commit IDs?  
Run this command:  
```
git log
```  
You will see a list of commits with:  
- Commit ID (long hash)  
- Author  
- Date  
- Commit message  

**Example output:**  
```
commit e4f3a1b7c9d2e8f0a1234567890abcdef12345678
Author: Akash
Date: Tue May 28 10:00:00 2025 +0530
Fixed bug in login feature
```

### Short commit ID  
You usually only need the first 7-8 characters to refer to a commit, for example:  
`e4f3a1b`

---

## Exiting the Git Commit Editor  
If you are inside the Git commit editor (usually Vim) and want to exit without saving anything:  
- Press the `Esc` key on your keyboard (to make sure you are not typing).  
- Type `:q!` (colon, then q, then exclamation mark).  
- Press `Enter`.  

If you want to save your commit message and exit:  
- Press the `Esc` key on your keyboard (just to be safe).  
- Type `:wq` (colon, then w, then q).  
- Press `Enter`.  

This will save your message and exit the editor.

---

## What does `git log -3` do?  
- It shows you the last 3 saved changes (commits) in your project.  
- Run command:  
```
git log -3
```

---

## `git log -p`  
Shows commit history plus the exact code/text changes (diff) made in each commit.  
- Commit info (ID, author, date, message)  
- Then, the diff showing:  
  - Lines added (with `+`)  
  - Lines removed (with `-`)  

This helps you see what changed inside files for every commit.

---

## What does `git log --stat` do?  
- It shows the commits with a summary of changes:  
  - Which files changed  
  - How many lines added or removed in each file  

**Command:**  
```
git log --stat
```

**Example output:**  
```
commit a1b2c3d4
Author: Akash
Date: Thu May 29 2025
Fixed bug in login
src/login.js | 10 +++++-----
src/utils.js | 4 ++--
2 files changed, 7 insertions(+), 7 deletions(-)
```

Quickly see what files changed in each commit and how big the changes were without seeing the full code diff.

---

## `git log --oneline`  
- Shows a short and simple list of your commits.  
- Each commit is shown in one line with:  
  - A short commit ID (7 characters)  
  - The commit message (short description)  

**Run this command inside your Git project folder:**  
```
git log --oneline
```

**Example output:**  
```
a1b2c3d Fixed login bug
f4e5d6a Added new feature
123abcd Initial commit
```

This is useful when you want a quick overview of all commits without too much detail.

---

## What does `git show` do?  
`git show` shows you details of the most recent commit (or any specific commit you ask for).  
It includes:  
- Commit ID  
- Author name  
- Date  
- Commit message  
- What changed (like a diff)  

**Commands:**  
```
git show
```  
This shows the latest commit with all the changes.  

```
git show <commit-id>
```  
If you want to see a specific commit, use its commit ID.