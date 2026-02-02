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

## Part 2: Markdown Cheat Sheet

This guide covers standard Markdown syntax used on GitHub.

### Headers
```markdown
# H1 - Main Title (Use once)
## H2 - Major Section
### H3 - Subsection
#### H4 - Minor Section
##### H5 - Tiny Header
###### H6 - Smallest Header
```

### Emphasis
```markdown
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
```

### Lists

**Unordered (Bullet) Lists**
```markdown
* Item 1
* Item 2
  * Indented Item 2a (Use 2 spaces)
  * Indented Item 2b
```

**Ordered (Numbered) Lists**
```markdown
1. First step
2. Second step
3. Third step
```

**Task Lists (Checkboxes)**
```markdown
- [x] This is a complete item
- [ ] This is an incomplete item
```

### Links
```markdown
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

[1]: [http://slashdot.org](http://slashdot.org)
[arbitrary case-insensitive reference text]: [https://www.mozilla.org](https://www.mozilla.org)
```

### Images
```markdown
Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

![My Lab Image](/img/my-image.png)
```

### Code and Syntax Highlighting
Inline `code` has `back-ticks` around it.

Blocks of code use three back-ticks ` ``` ` or four spaces:

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```bash
# No language indicated, so no syntax highlighting. 
# But let's throw in a <b>tag</b>.
```

### Tables
Colons can be used to align columns.

```markdown
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

### Blockquotes
```markdown
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.
```

### Horizontal Rules
Three or more dashed, asterisks, or underscores.

```markdown
---
***
___
```

### Line Breaks
To force a line break without a paragraph gap, end a line with two spaces.

```markdown
Here is a line for people who text,__  
and want to keep it on the same block.
```

### YouTube Videos
Standard Markdown doesn't support video embeds, but Docusaurus does via basic HTML or Plugins. The simplest way is a thumbnail link:

```markdown
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
```

---

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