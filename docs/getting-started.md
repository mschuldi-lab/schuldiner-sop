---
sidebar_position: 1
title: 🚀 Getting Started
slug: /getting-started
---

# Welcome to the Schuldi Lab SOP Wiki

This wiki is a living document created to make our lab work easier, safer, and more productive. It is hosted on GitHub and built with Docusaurus, meaning **anyone in the lab can (and should!) edit it.**

---

## Part 1: How to Contribute

### 1. Create a GitHub Account
To comment or edit, you need a free GitHub account.
* **Sign up:** [github.com/join](https://github.com/join)
* **Join the Lab:** Send your username to **Benjamin** (@benjamin-elusers) to be added to the lab github organization: `mschuldi-lab`

### 2. How to Edit a Page
Found a typo? Wrong buffer concentration? Want to add a new trick?
1.  Scroll to the bottom of any page and click **"Edit this page"**.
2.  This opens the file in GitHub. Click the **Pencil Icon** (✏️) to start writing.
3.  Make your changes using the Markdown guide below.
4.  Scroll down to **"Commit changes"**, write a short description (e.g., "Updated lysis buffer pH"), and click the green button.

### 3. How to Add a New Page
1.  Click "Edit" on any existing page to enter the folder view on GitHub.
2.  Navigate to the `docs/` folder.
3.  Click **Add file** > **Create new file**.
4.  Name your file ending in `.md` (e.g., `new-protocol.md`).
5.  Add the **Front Matter** at the very top (see below) and start writing!

---

## Part 2: Writing Content and Styling

No need for web designing skills or any level of programming.

The content on the website is written with a Markdown language which is a lightweight markup language for creating formatted text using a plain-text editor.

The key goal of markdown is to be readable as-is, with the formatting instructions remaining quite simple.

 
Refer to the next section for [a quick guide for writing Markdown formatted content](https://mschuldi-lab.github.io/schuldiner-sop/docs/markdown-cheatsheet)


## Part 3: Docusaurus Special Features

These features make our wiki look more organized. Use them at your will!

### Admonitions (Callout Boxes)
Use these to highlight critical info.

```markdown
:::note
General information or context about a protocol.
:::

:::tip
**Pro Tip:** Use this for lab hacks or recommendations.
:::

:::warning
Be careful! Procedures that require extra attention.
:::

:::danger
**SAFETY HAZARD:** Use this for toxic chemicals, radiation, or biohazards.
:::
```

Example preview:  

:::note General information or context about a protocol.
:::

:::tip **Pro Tip:** Use this for lab hacks or recommendations.
:::

:::warning Be careful! Procedures that require extra attention.
:::

:::danger **SAFETY HAZARD:** Use this for toxic chemicals, radiation, or biohazards.
:::

---

### Collapsible Details
Great for hiding long lists or deep technical details.

```html
<details>
  <summary>Click to see the full recipe</summary>
  
  1. Mix A and B
  2. Shake well
  3. Enjoy
</details>
```

### Tabs
Useful for showing alternatives (e.g., Mac vs PC, or 50mL vs 500mL prep).

```jsx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="small" label="50mL Prep" default>
    Use 5g of Agar.
  </TabItem>
  <TabItem value="large" label="500mL Prep">
    Use 50g of Agar.
  </TabItem>
</Tabs>
```
