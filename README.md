# nouman.dev — Portfolio

A static, multi-page portfolio for a frontend developer. No framework, no build step at runtime — just HTML, a compiled Tailwind stylesheet and a shared `script.js`.

## Pages

| Page | File | What's on it |
| --- | --- | --- |
| Home | `index.html` | Hero with typing effect, tech marquee, featured projects, services preview, testimonials, CTA |
| About | `about.html` | Story, portrait panel, animated stats, working principles, quick facts |
| Skills | `skills.html` | Services, animated proficiency bars, full tech stack, quality standards |
| Work | `work.html` | All projects with category filters, count, process notes, CTA |
| Experience | `experience.html` | Career timeline, impact metrics, education, certifications |
| Contact | `contact.html` | Contact details with copy-to-clipboard, validated form, next-steps list, FAQ accordion |

All navigation links point at real pages (the site stays usable on a case-sensitive host such as GitHub Pages). The brand logo goes home; “Hire me” goes to the contact page.

## Editing content

- **Projects, experience, services, skills, testimonials, marquee words** live in the `DATA` section at the top of `script.js`.
- **Page copy** lives directly in each HTML file.
- Project cards accept an optional `image` path (e.g. `assets/pulse.png`) and fall back to a generated gradient mockup.

## Styles

Tailwind is compiled ahead of time into `style.css`. If you add or change utility classes, rebuild it:

```bash
npm install --no-save tailwindcss@3.4.17
npx tailwindcss -i input.css -o style.css --minify
```

`input.css` holds the component classes plus the custom animation layers (reveal variants, spotlight, skill bars, accordion, page transitions).

## Animations included

- Scroll-reveal with direction variants (`data-reveal="left|right|scale|blur"`) and staggered children
- Typing headline, floating badges, blob background, marquee (pauses on hover)
- 3D tilt on the hero code card, cursor glow, spotlight hover on cards
- Counters, animated skill bars, parallax background glows
- Accordion height animation and a short page fade transition
- Everything respects `prefers-reduced-motion`; content stays visible without JavaScript.
