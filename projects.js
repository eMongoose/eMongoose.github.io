/* ==========================================================================
   PROJECTS — edit this list to add or remove projects.
   --------------------------------------------------------------------------
   Each project is one { ... } block. Copy a block, paste it, and change it.
   Order doesn't matter: the site always shows the newest date first.
 
   Fields
     title       (required) Project name
     date        (required) "YYYY-MM" or "YYYY-MM-DD", used for sorting
     type        (required) "personal" or "hackathon"
     categories  (required) one or more of:
                   "web-design", "full-stack", "cloud", "data", "ml"
     description (required) One or two sentences
     tech        (optional) List of tools / languages shown as tags
     event       (optional) Hackathon name, shown on hackathon projects
     award       (optional) e.g. "1st Place", shown as a badge
     image       (optional) Path to a screenshot, e.g. "assets/projects/foo.png"
     links       (optional) { github: "...", demo: "...", devpost: "..." }
   ========================================================================== */
 
window.PROJECTS = [
  {
    title: "Portfolio Website",
    date: "2026-11",
    type: "personal",
    categories: ["web-design"],
    description:
      "This site! A one-page portfolio with project filters, light/dark themes, and a responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    links: { github: "https://github.com/your-username/your-username.github.io" },
  },
  {
    title: "Campus Eats",
    date: "2026-10-12",
    type: "hackathon",
    event: "HackState 2026",
    award: "Best UI",
    categories: ["full-stack", "web-design"],
    description:
      "Real-time dining hall menu and crowd tracker built in 36 hours with live seat availability.",
    tech: ["React", "Node.js", "Firebase"],
    links: { github: "https://github.com/your-username/campus-eats", devpost: "https://devpost.com/" },
  },
  {
    title: "Serverless Image Pipeline",
    date: "2026-08",
    type: "personal",
    categories: ["cloud", "data"],
    description:
      "Event-driven pipeline that resizes, tags, and indexes uploaded images using AWS Lambda and S3.",
    tech: ["AWS Lambda", "S3", "DynamoDB", "Terraform"],
    links: { github: "https://github.com/your-username/image-pipeline" },
  },
  {
    title: "Sentiment Lens",
    date: "2026-04-05",
    type: "hackathon",
    event: "TreeHacks 2026",
    award: "1st Place, AI Track",
    categories: ["ml", "full-stack"],
    description:
      "Browser extension that summarizes the tone of long comment threads using a fine-tuned transformer.",
    tech: ["Python", "PyTorch", "FastAPI", "Chrome APIs"],
    links: { github: "https://github.com/your-username/sentiment-lens", devpost: "https://devpost.com/" },
  },
  {
    title: "City Transit Dashboard",
    date: "2026-02",
    type: "personal",
    categories: ["data"],
    description:
      "ETL pipeline and interactive dashboard analyzing 5 years of public transit ridership data.",
    tech: ["Python", "Airflow", "PostgreSQL", "Tableau"],
    links: { github: "https://github.com/your-username/transit-dashboard", demo: "https://example.com" },
  },
  {
    title: "Plant Disease Classifier",
    date: "2025-11",
    type: "personal",
    categories: ["ml", "cloud"],
    description:
      "CNN that identifies leaf diseases from photos, deployed as a containerized API on Google Cloud Run.",
    tech: ["TensorFlow", "Docker", "GCP"],
    links: { github: "https://github.com/your-username/plant-classifier" },
  },
];
 
/* Labels shown on the filter buttons and project tags.
   To add a new category, add it here AND use its key in a project above. */
window.CATEGORIES = {
  "web-design": "Web Design",
  "full-stack": "Full Stack",
  cloud: "Cloud Computing",
  data: "Data Analysis / Engineering",
  ml: "Machine Learning",
};
 
window.PROJECT_TYPES = {
  personal: "Personal",
  hackathon: "Hackathon",
};
 