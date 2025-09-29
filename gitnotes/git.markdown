# Version Control Guide

## What is Version Control?
Version control is a system that helps developers track changes to code, collaborate effectively, and resolve issues efficiently. It saves your code incrementally, allowing you to manage different versions of your project.

### Why Do Developers Use It?
1. **Work Together**: Enables multiple developers to work on the same project without conflicts.
2. **Undo Mistakes**: Revert to previous versions if something goes wrong.
3. **See Changes**: Track what was changed, when, and by whom.
4. **Try Ideas**: Experiment with new code in isolated environments without affecting the main project.
5. **Stay Organized**: Keeps your project structured and secure.

### Popular Tool
- **Git**: The most widely used version control tool.
  - Works with platforms like GitHub to share and manage code online.
  - Use Git locally to manage code, then upload to GitHub for collaboration or sharing.

---

## Git vs GitHub

### Git
- A tool installed on your computer.
- Tracks changes to your code.
- Works offline on your local machine.
- Used for creating commits, branches, and managing versions.
- Designed by developers for code tracking.

### GitHub
- A web-based platform for storing and sharing Git repositories.
- Facilitates online code storage, collaboration, and project showcasing.
- Functions like Google Drive for code, requiring an internet connection.
- Used to host repositories, review code, and manage team projects.
- Owned by Microsoft, widely used for code sharing.

---

## Git Commands and Concepts

### `git --version`
- Checks if Git is installed and displays the installed version.

### `git config`
- Configures Git settings, primarily your identity (name and email) and preferences like the default editor.
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "you@example.com"
