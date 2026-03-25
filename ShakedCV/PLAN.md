# Plan: Shaked CV — React Editable Version

## Context

Shaked's CV exists as a PDF (`cv-2025.pdf`). The goal is to recreate it exactly as a React app so content can be edited easily via a TypeScript data file, and the result can be printed to PDF via browser (A4). Layout and styling should be easy to change later.

---

## Tech Stack

- **Vite + React + TypeScript** (in `/Users/liorgreenberg/Dev/ShakedCV/`)
- **Single `cv-data.ts`** for all content — the only file to touch when updating info
- **CSS** (plain, no CSS-in-JS) for layout + print styles

---

## Step 0: Save Plan to Project

```bash
cp ~/.claude/plans/vivid-singing-wolf.md /Users/liorgreenberg/Dev/ShakedCV/PLAN.md
```

---

## Step 1: Extract Profile Photo

Use `pdfimages` (poppler) to extract the embedded photo from the PDF:

```bash
pdfimages -png cv-2025.pdf cv-images
# → produces cv-images-000.png (the profile photo)
mv cv-images-000.png public/profile.png
```

If poppler not available, use `pdftoppm` or install via `brew install poppler`.

---

## Step 2: Bootstrap Vite Project

```bash
cd /Users/liorgreenberg/Dev/ShakedCV
npm create vite@latest . -- --template react-ts
npm install
```

Remove boilerplate (`App.css`, `assets/react.svg`, starter content in `App.tsx`).

---

## Step 3: Create `src/data/cv-data.ts`

All CV content in one typed file. Structured as:

```ts
export const cvData = {
  name: "Shaked Ahissar",
  title: "Medical Student - 6th year",
  photo: "/profile.png",
  contact: {
    email: "Shaked.ahissar@gmail.com",
    phone: "0526930493",
  },
  languages: [
    { name: "Hebrew", level: 5 },
    { name: "English", level: 5 },
    { name: "Spanish", level: 3 },
  ],
  hobbies: [
    "Horse Riding — Certified Riding Instructor (Wingate Institute), National Competitions",
    "Wind surfing",
    "Baking",
    "Traveling",
  ],
  education: [
    { title: "Doctor of Medicine (MD), Technion", dates: "2022 - Present" },
    { title: "B.Sc in Medical Sciences, Technion", dates: "2019 - 2022", note: "Graduated with honors" },
    { title: "Technion Excellence Program", dates: "2018 - 2022" },
    { title: "Aharon Katzir High School, Rehovot", dates: "2008 - 2011", note: "Graduated with honors, Majors: Chemistry, Physics" },
  ],
  employment: [...],
  extracurricular: [...],
};
```

---

## Step 4: Build React Components

```
src/
  data/
    cv-data.ts
  components/
    CV.tsx           ← root layout (two-column, A4)
    Sidebar.tsx      ← photo, personal, languages, hobbies
    MainContent.tsx  ← name, title, education, employment, extracurricular
  cv.css             ← all styles + @media print
  App.tsx            ← renders <CV />
```

### Layout

- Two-column flex layout: sidebar ~28% width, main ~72%
- Fixed A4 proportions: `210mm × 297mm` on the root element
- Dark red accent color: `#8B1A1A` (sampled from PDF)

### Sidebar sections

- Profile photo (rounded or square, matches PDF)
- Personal Details: name, email (envelope icon), phone (phone icon)
- Languages: name + dot rating (5 dots, filled = colored)
- Hobbies: square bullet list

### Main content sections

Each section: red heading + horizontal rule, then entries.

- **Education**: bold title + right-aligned red date + optional sub-note
- **Employment**: bold title + right-aligned red date + optional red subtitle + optional bullet list
- **Extracurricular**: same pattern, some entries have sub-bullets

---

## Step 5: CSS — Layout + Print

```css
/* A4 page size */
.cv-page {
  width: 210mm;
  min-height: 297mm;
  display: flex;
  font-family: 'Segoe UI', sans-serif;
  font-size: 10pt;
  background: white;
}

/* Print: remove browser chrome, fit A4 */
@media print {
  body { margin: 0; }
  .cv-page { width: 210mm; min-height: 297mm; }
}
```

---

## Step 6: Verify

1. `npm run dev` → open `http://localhost:5173` → visually matches PDF
2. Browser → Print → Save as PDF → compare with `cv-2025.pdf`
3. Edit a field in `cv-data.ts` → hot reload shows change immediately

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `public/profile.png` | Extract from PDF |
| `src/data/cv-data.ts` | Create — all CV content |
| `src/components/CV.tsx` | Create — layout shell |
| `src/components/Sidebar.tsx` | Create — left panel |
| `src/components/MainContent.tsx` | Create — right panel |
| `src/cv.css` | Create — styles + print |
| `src/App.tsx` | Modify — render `<CV />` |
| `index.html` | Modify — set title |
