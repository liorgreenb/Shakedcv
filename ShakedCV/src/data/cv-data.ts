export interface LanguageEntry {
  name: string;
  level: number; // 1–5
}

export interface EducationEntry {
  title: string;
  dates: string;
  note?: string;
}

export interface EmploymentEntry {
  title: string;
  subtitle?: string;
  dates: string;
  bullets?: string[];
}

export interface ExtracurricularEntry {
  title: string;
  subtitle?: string;
  dates?: string;
  bullets?: string[];
  afterNote?: string;
}

export const cvData = {
  name: "Shaked Ahissar",
  title: "MD Graduate",
  photo: "profile.png",

  contact: {
    email: "Shaked.ahissar@gmail.com",
    phone: "0526930493",
    dateOfBirth: "19.04.1993",
  },

  languages: [
    { name: "Hebrew", level: 5 },
    { name: "English", level: 5 },
    { name: "Spanish", level: 2 },
  ] as LanguageEntry[],

  hobbies: [
    { name: "Horse Riding", type: "horse" },
    { name: "Wind Surfing", type: "surf" },
    { name: "Baking", type: "baking" },
    { name: "Traveling", type: "mountain" },
  ],

  education: [
    { title: "Doctor of Medicine (MD), Technion", dates: "2022 - 2025", note: "Graduated with honors" },
    {
      title: "B.Sc in Medical Sciences, Technion",
      dates: "2019 - 2022",
      note: "Graduated with honors",
    },
    { title: "Technion Excellence Program", dates: "2018 - 2022", note: "Honors program with extended research-oriented curriculum" },
  ] as EducationEntry[],

  certifications: [
    { title: "ACLS Provider", issuer: "American Heart Association", date: "Jan 2026" },
  ],

  employment: [
    {
      title: "Patient Support and De-escalation Assistant",
      subtitle: "Complex PTSD department, Merhavim Mental Health Center",
      dates: "Oct 2025 - Dec 2025",
    },
    {
      title: "Physician assistant",
      subtitle: "Pediatrics Department, Rambam Medical Center",
      dates: "Nov 2024 - Sep 2025",
    },
    {
      title: "Physician assistant",
      subtitle: "Internal Medicine Department, Carmel Medical Center",
      dates: "Nov 2024 - May 2025",
    },
  ] as EmploymentEntry[],

  militaryService: {
    title: "Military Service",
    subtitle: "C4I Corps (Mamram) — IDF technology and software unit",
    dates: "Mar 2012 - Mar 2018",
    bullets: [
      "Mamram Programming Course",
      "Programming Instructor",
      "Officers' Course",
      "Software Development Team Leader",
      "Commander in Technological Officers' Course",
    ],
  } as EmploymentEntry,

  extracurricular: [
    {
      title: "MD Final Research Project",
      subtitle: "Retrospective analysis of lymph node yield in oncological distal pancreatectomy and impact on survival, Faculty of Medicine, Technion",
      dates: "2024 - 2025",
    },
    {
      title: "Microbiome Research Project",
      subtitle: "Effects of the immune system on E. coli gene expression, Dr. Naama Geva Zatorsky's Lab, Technion",
      dates: "2020 - 2021",
    },
    {
      title: "Participation in Medical Hackathons",
      bullets: [
        "MindStart, National Hackathon for Med Students — 2025",
        "T2Med, Faculty of Medicine, Technion — 2023",
        "Mindstate Ideation, Faculty of Biomedical Engineering, Technion — 2020 (Third Place)",
      ],
    },
    {
      title: "Bioinformatics Project",
      subtitle: "microRNA expression in lung cancer, Computer Science Faculty, Technion",
      dates: "2019",
    },
  ] as ExtracurricularEntry[],
} as const;
