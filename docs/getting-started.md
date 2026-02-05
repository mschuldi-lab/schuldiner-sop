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


### **No desing or coding skills required:** 

The content is written as simple text using "Markdown"

### **What is Markdown?**

It is a lightweight markup language that lets you format text using simple symbols. The goal is to be readable as-is with light formatting instructions.

### **Where to find help?**

There is a built-in guide available directly in the editor, but it is small and easy to miss.

**Look for the small **M** icon** at the bottom of the comment box or the GitHub text editor:

<a aria-labelledby="blob-markdown-help" href="https://docs.github.com/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax" target="_blank" data-ga-click="Markdown Toolbar, click, help" rel="noreferrer" aria-describedby="blob-markdown-help"><svg aria-hidden="true" focusable="false" class="octicon octicon-markdown" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" display="inline-block" overflow="visible" style="vertical-align: text-bottom;"><path d="M14.85 3c.63 0 1.15.52 1.14 1.15v7.7c0 .63-.51 1.15-1.15 1.15H1.15C.52 13 0 12.48 0 11.84V4.15C0 3.52.52 3 1.15 3ZM9 11V5H7L5.5 7 4 5H2v6h2V8l1.5 1.92L7 8v3Zm2.99.5L14.5 8H13V5h-2v3H9.5Z"></path></svg></a>

Click on it to open the full [GitHub Markdown Guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
> You can also bookmark the link above if you are interested to learn advanced formatting.

## Part 3: Docusaurus Special Features

These features make our wiki look more organized. Use them at your will!

### Admonitions (i.e. Callout Boxes)

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

**Preview:**

:::note **_Info_**
General information or context about a protocol.
:::

:::tip **Pro Tip:** 
Use this for lab hacks or recommendations.
:::

:::warning **Watch out!**
Procedures that require extra attention.
:::

:::danger **SAFETY HAZARD:** 
Use this for toxic chemicals, radiation, or biohazards.
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

**Preview:**

<details>
  <summary>Click to see the full recipe</summary>
  
  1. Mix A and B
  2. Shake well
  3. Enjoy
</details>


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

**Preview:**

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


### Advanced customization (HTML tags)

Since Docusaurus uses MDX (Markdown + JSX), you can technically render almost any standard HTML tag.

But there are specific rules because it is processed as React, not raw HTML.

The Golden Rules:

* Self-Closing Tags: All tags must be closed.
  * ❌ `<br>`, `<img>`, `<hr>`
  * ✅ `<br />`, `<img />`, `<hr />`


* Attributes: Use camelCase for attributes.
  * ❌ `class="my-class"`
  * ✅ `className="my-class"`


* Inline Styles: Styles must be objects, not strings.
  * ❌ `style="color: red;"`
  * ✅ `style={{ color: 'red', marginTop: '10px' }}`


* Don't nest block elements inside inline elements (like `<div>` or `<h3>` within `<p>`). This will crash the build (Hydration Error).

* Example of common tags:
  * Layout: `<div>`, `<span>`, `<section>`, `<article>`
  * Media: `<img />`, `<iframe />` (great for embedding PDFs or Google Docs)


### YouTube Videos

Standard Markdown doesn't support video embeds, but Docusaurus does via basic HTML or Plugins. 

The simplest way is a thumbnail link:

```markdown
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/bCkCyZvYw_c/maxresdefault.jpg)](https://www.youtube.com/watch?v=bCkCyZvYw_c)
```

**Preview**:

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/bCkCyZvYw_c/maxresdefault.jpg)](https://www.youtube.com/watch?v=bCkCyZvYw_c)

