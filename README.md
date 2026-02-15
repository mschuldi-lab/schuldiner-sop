# 🧬 Schuldiner Lab SOP Wiki

![Status](https://img.shields.io/badge/Status-Live-success)
![Maintained By](https://img.shields.io/badge/Maintained%20by-Schuldiner%20Lab-blue)
![Built With](https://img.shields.io/badge/Built%20with-Docusaurus-green)

### Welcome to the digital evolution of our lab's ***Standard Operating Procedures***! 

This project moves our collective knowledge and experience from static Word documents into a **live, searchable, and version-controlled website**.  
It is designed to be the single source of truth for guidelines and useful information, ensuring everyone has access to it.

### 🔗 Access the Wiki

The SOPs are live and accessible here:  
### 👉 **[https://mschuldi-lab.github.io/schuldiner-sop/](https://mschuldi-lab.github.io/schuldiner-sop/)**

---

## ✨ Why move to GitHub?

We chose this platform to make collaborating on our science easier and more robust:

* **📜 Full History:** Every change is tracked forever to easily revert to previous versions if needed. In addition, you can see exactly who changed what and when and provide additional details or request more precision.
* **🤝 Dynamic Collaboration:** It's a workspace that allows discussing protocols or suggesting improvements via comments, requesting new features using the **Issue Tracker**, and of course, directly changing anything in an instant (provided it is validated).
* **⚡ Seamless Parallel Editing:** No more merging several conflicting Word documents. Multiple lab members can edit different sections simultaneously, and GitHub handles the integration.
* **🤖 Semi-Automated Magic:** You focus on writing the content (or light customization of formatting style). The website is auto-generated and deployed whenever an update is merged.

---

## 📚 What's Covered?

We are currently migrating the "SOP 2025" Word document. The site covers three main pillars:

1.  **Lab Protocols:** Step-by-step guides for our daily experiments and common methods.
2.  **Lab Resources:** Essential recipes for reagents, buffers, and safety/waste guidelines.
3.  **Computational Tools:** Guides for data analysis, software, and using this wiki.

---

## 📂 Repository Structure

If you are looking to edit the site or understand how it works, here is where the important files live:

* **`/docs`**: This is where the content lives. Each section of the SOP is stored here as a separate Markdown (`.md`) file. **If you want to edit text, go here. Each new file will be added as a new section in the table of contents.**
* **`/src`**: Contains the code that powers the site, including custom React components and stylesheets (`/css`) to render the design.
* **`/static`**: Stores static assets like images, diagrams, and PDF downloads referenced in the SOPs.
* **`docusaurus.config.js`**: The main configuration file for the site (navigation bar links, footer, and site settings).

---

## 🛠 For Developers & Maintainers


### Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```bash
npm
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
USE_SSH=true npm deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
