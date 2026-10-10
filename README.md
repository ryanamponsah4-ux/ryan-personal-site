## Live site
https://yourusername.github.io/ryan-personal-site/

cat > README.md << 'EOF'
# Ryan Amponsah | Personal Portfolio

A three-page personal portfolio for Ryan Amponsah, a graphic designer (RyanVisuals) who is growing into web development. It was built from an empty folder with plain HTML, CSS and JavaScript. There are no frameworks, no libraries and no templates.

## Live site

https://ryanamponsah4-ux.github.io/ryan-personal-site/

## Pages and features

- **Home**: hero and a short introduction.
- **Projects**: cards rendered from a JavaScript array, live search, a category filter, and a modal with project details.
- **Contact**: a form validated in JavaScript with an error message beside each field.
- **Dark mode**: a toggle that follows the visitor's system setting on a first visit and remembers their choice in `localStorage`.

## Run it locally

The site uses ES modules, and browsers block those when a file is opened directly. Serve the folder instead:

```bash
git clone https://github.com/ryanamponsah4-ux/ryan-personal-site.git
cd ryan-personal-site
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Project structure

```
index.html, projects.html, contact.html
css/style.css
js/main.js         entry point, starts the modules
js/theme.js        dark mode
js/projects.js     project data, card rendering, search and filter, card click handling
js/modal.js        modal, focus trap, focus return
js/validation.js   contact form validation
assets/images/     project images
```

## CSS naming convention: BEM

I used BEM (Block, Element, Modifier). A **block** is a standalone component, an **element** is a part of that block written `block__element`, and a **modifier** is a variation written `block--modifier`.

Examples from this site:

- `.site-nav` is the block, and `.site-nav__link` is a link inside it.
- `.project-card`, `.project-card__image` and `.project-card__title`.
- `.contact__input` and `.contact__error`.

Every class describes what it is, so styles stay in one flat level and do not depend on the page structure. Colours, spacing and font sizes are CSS custom properties defined once at the top of `style.css`, and dark mode works by swapping those values.

## Layout choices

- **Flexbox for the navigation:** the nav is a single row of items that need spacing and alignment along one axis, and it wraps on narrow screens.
- **CSS Grid for the project cards:** the cards sit in rows and columns, and Grid lets the column count change with screen width (1, 2 and 3 columns).

The site is responsive at 320px, 768px and 1440px.

## Lighthouse results

| Page | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| Home | 100 | 100 | 100 | 100 |
| Projects | 99 | 99 | 100 | 100 |
| Contact | 99 | 100 | 100 | 90 |

![Lighthouse scores for the Home page](assets/screenshots/lighthouse-home.png)
![Lighthouse scores for the Projects page](assets/screenshots/lighthouse-projects.png)
![Lighthouse scores for the Contact page](assets/screenshots/lighthouse-contact.png)

Now what i learnt;
         


- I built this site with help from an AI assistant (Claude). I directed the work, ran the commands, tested everything in the browser, and fixed problems as they came up.
- One small typing mistake (a wrong file name) made the whole site stop working. I found it by checking the error in the browser, and that taught me to always check the console when something breaks.
- A site has to be tested on a local server, not by just double-clicking the file, or the JavaScript won't load.
- Big images make a website slow. When I made my images smaller, my Lighthouse score went from 53 to 99.
- Small things like page descriptions help a site show up better in search, and they raised my SEO score.
- I learned how to use Git properly: working on separate branches, making pull requests, fixing a merge conflict, and undoing a commit with git revert.
- Things I want to get better at: writing more of the JavaScript myself and understanding why each part works.




- One wrong file name in an import (`contact.js` instead of `validation.js`) stopped every script on the site, because one failed module import stops the whole entry file. The browser console showed the 404 and pointed straight at the line.
- ES modules do not load from `file://`, so I need a local server to test.
- Event delegation: one listener on a container handles events from many children, because events bubble up. `closest()` finds which child was used.
- A modal needs more than a pop-up. It needs to trap focus, close on Escape, and return focus to the card that opened it.
- Compressing images and adding a meta description took Lighthouse from the 50s and 80s to above 90.
- Git: every change on its own branch and pull request, resolving a merge conflict by hand, and using `git revert` instead of `git reset` for a commit that is already on `main`.
EOF