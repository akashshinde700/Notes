# Version Control and Git Basics

## What is Version Control?

Version control is a tool that helps developers track and manage changes to their code over time. It enables smooth collaboration, easy mistake recovery, and organized code management.

### Why Do Developers Use Version Control?

1. **Collaboration**: Allows multiple developers to work on the same project without conflicts.
2. **Undo Mistakes**: Revert to previous versions if something goes wrong.
3. **Track Changes**: See what changes were made, when, and by whom.
4. **Experiment Safely**: Test new ideas on separate branches without affecting the main project.
5. **Stay Organized**: Keeps code and project history neat and secure.

### Popular Tool
- **Git**: The most widely used version control tool, often paired with platforms like **GitHub** for online code sharing and collaboration.

---

## Git vs. GitHub

### Git
- A tool installed on your computer to track code changes.
- Works offline, allowing you to create commits, branches, and manage versions locally.
- Created by developers to track code history efficiently.

**Example Commands**:
- `git --version`: Checks if Git is installed and displays the installed version.

### GitHub
- A website for storing and sharing Git repositories online.
- Enables collaboration, code reviews, and project management.
- Owned by Microsoft, used by millions to host and share code.

---

## Key Git Commands

### `git config`
- Used to set up and manage Git settings, such as your name and email for commits.
- **Example**:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "you@example.com"
  ```
- **Purpose**: Associates your identity with every commit.
- **`git config --list`**: Displays all current Git settings.
- **What does `--global` mean?**
  - `--global`: Applies settings to all Git projects on your computer.
  - Without `--global`: Settings apply only to the current project.

### `pwd`
- Stands for **Print Working Directory**.
- Displays the current directory you’re working in.

### `git status`
- Shows the current state of your Git project, including:
  - Changed files.
  - Files staged for commit.
  - Untracked files.
  - Current branch.
- **Example**:
  ```bash
  git status
  ```

### `.git` Folder
- Created when you run `git init` in a project directory.
- A hidden folder that stores:
  - Commit history.
  - Branches.
  - Configuration files.
- Acts as the "brain" of your Git project.

### `git add`
- Adds changed or new files to the staging area for the next commit.
- **Examples**:
  - Add a specific file: `git add filename`
  - Add all files: `git add .`

### `git commit`
- Saves staged changes with a descriptive message.
- **Example**:
  ```bash
  git commit -m "Your message"
  ```

### `git clone`
- Copies a remote Git repository to your local computer.
- **Example**:
  ```bash
  git clone <repository-url> foldername/
  ```

### `git diff`
- Shows changes in your files that haven’t been committed yet.
- **Example**:
  ```bash
  git diff
  ```

---

## Getting Started with Git

1. **Install Git**: Download and install Git from [git-scm.com](https://git-scm.com/).
2. **Configure Git**:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "you@example.com"
   ```
3. **Initialize a Repository**:
   ```bash
   git init
   ```
4. **Add and Commit Changes**:
   ```bash
   git add .
   git commit -m "Initial commit"
   ```
5. **Push to GitHub** (after linking to a remote repository):
   ```bash
   git push origin main
   ```

---

## Resources
- Learn more about Git: [Official Git Documentation](https://git-scm.com/doc)
- Explore GitHub: [GitHub Help](https://help.github.com)
- For xAI’s API services related to tools like Grok, visit [x.ai/api](https://x.ai/api).

---

*This README was created to summarize version control and Git basics as of September 29, 2025.*