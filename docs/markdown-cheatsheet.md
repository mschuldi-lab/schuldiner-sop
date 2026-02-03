---
sidebar_position: 2
title: ✍️ Markdown cheatsheet
slug: /markdown-cheatsheet
---

# Markdown Cheat Sheet


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

**Preview**:

# H1 - Main Title (Use once)
## H2 - Major Section
### H3 - Subsection
#### H4 - Minor Section
##### H5 - Tiny Header
###### H6 - Smallest Header


### Emphasis
```markdown
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~
```

**Preview**:

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~


### Lists

**Unordered (Bullet) Lists**
```markdown
* Item 1
* Item 2
  * Indented Item 2a (Use 2 spaces)
  * Indented Item 2b
```

**Preview**:

* Item 1
* Item 2
  * Indented Item 2a (Use 2 spaces)
  * Indented Item 2b


**Ordered (Numbered) Lists**
```markdown
1. First step
2. Second step
3. Third step
```

**Preview**:

1. First step
2. Second step
3. Third step


**Task Lists (Checkboxes)**
```markdown
- [x] This is a complete item
- [ ] This is an incomplete item
```

**Preview**:

- [x] This is a complete item
- [ ] This is an incomplete item



### Links
```markdown
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

[1]: [http://slashdot.org](http://slashdot.org)
[arbitrary case-insensitive reference text]: [https://www.mozilla.org](https://www.mozilla.org)
```

**Preview**:

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

[1]: [http://slashdot.org](http://slashdot.org)
[arbitrary case-insensitive reference text]: [https://www.mozilla.org](https://www.mozilla.org)


### Images
```markdown
Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

![My Lab Image](/img/Schuldiner_logo_white.png)
```

**Preview**:

Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

![My Lab Image](/img/Schuldiner_logo_white.png)



### Code and Syntax Highlighting
Inline `code` has `back-ticks` around it.

Blocks of code use three back-ticks ` ``` ` or four spaces:

````markdown
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
````

**Preview**:

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

**Preview**:

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

### Blockquotes
```markdown
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.
```

**Preview**:

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.


### Horizontal Rules
Three or more dashed, asterisks, or underscores.

```markdown
---
***
___
```


**Preview**:

---
***
___



### Line Breaks
To force a line break without a paragraph gap, end a line with two spaces.

```markdown
Here is a line for people who text,__  
and want to keep it on the same block.
```

**Preview**:

Here is a line for people who text,  
and want to keep it on the same block.




### YouTube Videos
Standard Markdown doesn't support video embeds, but Docusaurus does via basic HTML or Plugins. The simplest way is a thumbnail link:

```markdown
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
```

**Preview**:

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)

