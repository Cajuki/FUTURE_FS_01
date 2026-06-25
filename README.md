# Fidel Chimwani — Portfolio (Terminal Noir)

A production-ready personal portfolio built with **React 18 + Vite**.  
Design system: **Space Grotesk** display · **JetBrains Mono** mono · Amber-Gold accent on Navy-Charcoal background.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
fidel-portfolio/
├── index.html              # Entry HTML + SEO meta tags + Google Fonts
├── vite.config.js          # Vite + React plugin config
├── package.json
├── public/
│   └── favicon.svg         # FC monogram favicon
└── src/
    ├── main.jsx            # React root mount
    ├── App.jsx             # Root component (assembles all sections)
    ├── index.css           # Global reset, animations, scrollbar styles
    ├── tokens.js           # Design tokens (colors, typography constants)
    ├── data.js             # All portfolio content (projects, skills, etc.)
    ├── hooks.js            # useInView + useCounter custom hooks
    └── components/
        ├── Nav.jsx         # Sticky nav with scroll-blur effect
        ├── Ticker.jsx      # Scrolling tech stack ticker (stock ticker style)
        ├── Hero.jsx        # Full-screen hero + terminal console card
        ├── SectionHeader.jsx # Reusable eyebrow + heading component
        ├── Projects.jsx    # Horizontal-scroll project cards
        ├── About.jsx       # Bio + JSON profile card
        ├── Skills.jsx      # Tabbed tag cloud + DevOps/Rust callouts
        ├── Journey.jsx     # Vertical timeline with edu/career distinction
        ├── Services.jsx    # 6 service cards
        ├── Contact.jsx     # Contact info rows + message form
        └── Footer.jsx      # Wordmark + links
```

---

## 🎨 Design System

| Token     | Value       | Usage                        |
|-----------|-------------|------------------------------|
| `bg`      | `#0A0F1E`   | Page background              |
| `surface` | `#111827`   | Nav, ticker, elevated surfaces |
| `card`    | `#141D2F`   | Card backgrounds             |
| `border`  | `#1E293B`   | All borders / dividers       |
| `gold`    | `#F59E0B`   | Primary accent (amber-gold)  |
| `white`   | `#F8FAFC`   | Primary text                 |
| `muted`   | `#64748B`   | Secondary / supporting text  |

**Fonts (via Google Fonts):**
- `Space Grotesk` — headings and body
- `JetBrains Mono` — labels, tags, terminal UI

---

## ✏️ Customisation

### Update content
All portfolio data lives in **`src/data.js`**:
- `PROJECTS` — add/edit project entries, live links, GitHub links
- `SKILL_CATEGORIES` — add new skill categories or skills
- `JOURNEY` — career/education milestones
- `CONSOLE_LINES` — hero terminal card values
- `CONTACT_LINKS` — email, phone, socials

### Update colours
Edit `src/tokens.js` to change the entire palette in one place.

### Add CV download
Place your CV PDF in `/public/` as `Fidel_Chimwani_CV.pdf`.  
The "Download CV" button in the hero already points to `/Fidel_Chimwani_CV.pdf`.

---

## 🌐 Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# drag & drop the dist/ folder to Netlify Drop
```

### GitHub Pages
```bash
npm run build
# push dist/ contents to gh-pages branch
```

---

## 📬 Contact

**Fidel Chimwani**  
Email: fidelchimwani@gmail.com  
GitHub: [github.com/Cajuki](https://github.com/Cajuki)  
Live: [medithrex.site](https://medithrex.site)
