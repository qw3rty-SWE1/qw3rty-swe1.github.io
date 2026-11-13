# qw3rty-swe1.github.io

The project website for **qw3rty**, a typeracing-style math game for Massachusetts 4th graders. This site covers the project's background, deliverables, assignments, and team. It is served at <https://qw3rty-swe1.github.io>.

The site is plain HTML, CSS, and a little vanilla JavaScript. There is no build step: edit a file, commit, and push to `main`, and GitHub Pages publishes it.

## Structure

```
index.html                       The whole site (single page with anchor sections)
css/styles.css                   All styles (colors and fonts are set at the top)
js/main.js                       Game URL setting and mobile menu toggle
images/team/                     Team photos
images/team/placeholder-avatar.svg  Neutral avatar used until real photos are added
docs/                            PDFs and other downloadable documents
.nojekyll                        Tells GitHub Pages to serve files as-is
```

## Previewing locally

Open `index.html` in a browser. All paths are relative, so no server is needed.

## Common updates

### Set the game URL

Open `js/main.js` and set `GAME_URL` at the top:

```js
const GAME_URL = "https://example.com/qw3rty/";
```

Every "Play" button reads this value. While it is empty, those buttons appear disabled and say the game is coming soon.

### Add a document (deliverable or assignment)

1. Put the file in `docs/` using a lowercase, hyphenated name, for example `docs/srs.pdf` or `docs/assignment-1.pdf`.
2. In `index.html`, find the matching card or table row. A comment right above the disabled button holds the finished link. Replace the disabled `<a ... aria-disabled="true">` with that link.
3. Change the `Coming soon` badge to `<span class="badge badge-live">Available</span>`, or remove it.
4. For a new assignment, copy an existing table row, then update its title, description, and link.

Expected file names:

| Item               | File                          |
| ------------------ | ----------------------------- |
| SRS                | `docs/srs.pdf`                |
| Presentation Notes | `docs/presentation-notes.pdf` |
| Demo Video         | `docs/demo-video.mp4`, or a YouTube link |
| Project Requirements | `docs/project-requirements.pdf` |
| Use Case Diagram   | `docs/use-case-diagram.png`   |
| Class Diagram      | `docs/class-diagram.png`      |
| Sequence Diagrams  | `docs/sequence-diagram-1.png`, `docs/sequence-diagram-2.png` |

Keep large videos out of the repository. Upload them to YouTube (or similar) and link to them instead.

### Add a team member photo

1. Save a square photo (at least 300 × 300 px, JPG or PNG) to `images/team/`, named like `firstname-lastname.jpg`.
2. In the Team section of `index.html`, change that member's `src` to the new file and update the `alt` text, for example `alt="Portrait of Jane Doe"`.
3. Fill in the name, role, email, and GitHub or LinkedIn link. There is a completed example card in a comment under the team list.

To add or remove members, copy or delete a whole `<li class="card member">` block.

### Find remaining placeholders

Everything not filled in yet uses the `placeholder` class or a `Coming soon` badge. Search `index.html` for `placeholder` and `Coming soon` to find them all.
