---
title: how-to-setup-a-free-blog-with-markdown-and-github-pages
layout: default
filename: how-to-setup-a-free-blog-with-markdown-and-github-pages.md
--- 
# How to setup your blog using only github Pages
*admin*

*10-april-2021*

<br />

> Basic understanding of github/git and markdown is required

<br />

#### What are we going to cover:
- Setting up a github account
- Activating github pages for organization account or organization project
- Use Themes and activate for all markdown (.md) files created
- Setup a custom domain for your site if required
- finito

<br />

> A. 
> *Setting up a github account*
<br />

Like with most things on this site, i will point in the right direction to documentation and only spell out areas where i believe i or anyone could be confused.
The site can be found here @ [github][github]

<br />
<br />

> B. 
> *Activating github pages for organization account or organization project*
<br />

The welcome page for github pages is very helpful and i dare say, playful. It can be found by clicking the link [github pages][githubpages]

<br />
<br />

> C. 
> *Use Themes and activate for all markdown (.md) files created*
<br />

By default, an activated theme will only work for either of the README.md or index.md or index.html files.
This is the part that i had issues with setting up on the github repo/project/site.
To render the chosen themes template to all .md or .html in the repo will require creating one additional file for your project and applying five lines at the beginning of every .md or .html file.
<br />

I chose to use the theme and a quick google search showed the themes code is hosted on github here.
From the themes code repo copy the default.html file in _layout/ folder and create the _layout/ folder in your repo and paste the copied default.html file there.
<br />

Add these lines to the top of each markdown/html page/file

---
title: title to show in broswer
layout: default
filename: page-name.md
--- 

where page-name.md is the name of the file; layout references the default.html file created earlier; and title shows the title in the browser window opening the page.




[githubpages]: <https://pages.github.com/>
[github]: <https://github.com/>
