# Personal website

A one-page portfolio for GitHub Pages: About, Projects (with filters), Resume, and Contact.
Plain HTML, CSS and JavaScript, so there's no build step.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Page structure and your text (About, Resume highlights, Contact) |
| `styles.css` | Colors, light/dark gradients, layout |
| `script.js` | Theme toggle, project filters, nav highlighting, contact form |
| `projects.js` | **Your project list.** This is the file you'll edit most |
| `assets/` | Your photo (`profile.svg` placeholder), `resume.pdf`, project screenshots |

## Fill in your details

Search `index.html` for `TODO` and replace:

- `Your Name`, the intro text, and the quick facts
- LinkedIn URL (`https://www.linkedin.com/in/your-handle`)
- GitHub URL (`https://github.com/your-username`)
- Email (`you@example.com`, appears 3 times: the top button and the Contact section; the form sends to the Contact link's address)
- Photo: put your photo in `assets/` (e.g. `assets/profile.jpg`) and update the `<img src>`
- Resume: save your resume as `assets/resume.pdf`

## Add or remove a project

Open `projects.js` and copy one block:

```js
{
  title: "My New Project",
  date: "2026-12",               // YYYY-MM or YYYY-MM-DD, newest shows first
  type: "hackathon",             // "personal" or "hackathon"
  event: "HackMIT 2026",         // optional, hackathon name
  award: "2nd Place",            // optional
  categories: ["ml", "cloud"],   // web-design, full-stack, cloud, data, ml
  description: "One or two sentences about it.",
  tech: ["Python", "AWS"],       // optional
  image: "assets/projects/new.png", // optional screenshot
  links: { github: "https://...", demo: "https://...", devpost: "https://..." }, // all optional
},
```

Paste it anywhere inside `window.PROJECTS = [ ... ]` (order doesn't matter; the site sorts by date).
To remove a project, delete its block. Filter counts update automatically.

To add a new category, add a line to `window.CATEGORIES` at the bottom of `projects.js`, e.g.
`mobile: "Mobile Apps",`, then use `"mobile"` in a project's `categories`.

## Preview locally

Just open `index.html` in a browser. (Or run `python3 -m http.server` in this folder and visit http://localhost:8000.)

## Deploy to GitHub Pages

1. On GitHub, create a **public** repository named exactly `<your-username>.github.io`.
2. Upload these files to the root of the repo (drag them into "Add file → Upload files", or):
   ```bash
   git init
   git add .
   git commit -m "Personal website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`, and save.
4. After a minute or two, your site is live at `https://<your-username>.github.io`.

Every time you push a change (like a new project in `projects.js`), the site updates automatically.
