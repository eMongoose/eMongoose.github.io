/* ==========================================================================
   PROJECTS — edit this list to add or remove projects.
   --------------------------------------------------------------------------
   Each project is one { ... } block. Copy a block, paste it, and change it.
   Order doesn't matter: the site always shows the newest date first.
 
   Fields
     title       (required) Project name
     date        (required) "YYYY-MM" or "YYYY-MM-DD", used for sorting
                 (for a date range, use the END month here)
     dateLabel   (optional) Text to show instead, e.g. "Feb – Apr 2026"
     type        (required) "personal" or "hackathon"
     categories  (required) one or more of:
                   "web-design", "full-stack", "cloud", "data", "ml", "game-dev"
     description (required) One or two sentences
     tech        (optional) List of tools / languages shown as tags
     event       (optional) Hackathon or course name, shown under the title
     award       (optional) e.g. "1st Place", shown as a badge
     image       (optional) Path to a screenshot, e.g. "assets/projects/foo.png"
     links       (optional) { github: "...", demo: "...", devpost: "..." }
   ========================================================================== */
 
window.PROJECTS = [
  {
    title: "BC Short-Term Rental Investment Case",
    date: "2026-11",
    type: "hackathon",
    categories: ["data"],
    description:
      "Week-long business case pitching a $10M short-term rental investment in BC. Cleaned and merged 6+ datasets, used a MILP model to choose the best neighbourhoods and rental types, and showed that a loss in year one turns profitable over 10 years. Presented technical and non-technical pitches to a judging panel.",
    tech: ["Power BI", "MILP Optimization", "Data Cleaning"],
    links: { github: "https://github.com/eMongoose/DSSS-DataJam-2026" },
  },
  {
    title: "Fitness Journal Web Application",
    date: "2026-10",
    dateLabel: "Oct 2026 – Present",
    type: "personal",
    categories: ["full-stack", "cloud"],
    description:
      "Full-stack fitness app for logging workouts and keeping friends accountable, with workout data stored for future analysis. Serverless backend on AWS Lambda, Amazon Aurora for storage, Amplify for deployment, and IAM for access management.",
    tech: ["AWS Lambda", "Amazon Aurora", "AWS Amplify", "AWS IAM"],
    links: { github: "" },
  },
  {
    title: "Toxins in Fish Data Analysis",
    date: "2026-08",
    type: "personal",
    categories: ["data"],
    description:
      "Integrated five toxin-monitoring datasets (190,000+ observations) from the Canadian Open Government Portal, cleaned and standardized them, and built five Power BI visuals revealing a consistent decline in median concentrations of four major toxins.",
    tech: ["Python", "pandas", "Power BI", "Excel"],
    links: { github: "https://github.com/eMongoose/Analyzing-Toxins-in-Fish" },
  },
  {
    title: "Red Tide Environmental Data Analysis",
    date: "2026-08",
    type: "personal",
    categories: ["data", "ml"],
    description:
      "End-to-end pipeline matching environmental records geospatially (Haversine + BallTree), testing links to red tide occurrence with Mann–Whitney U tests and logistic regression, and evaluating classifiers under class imbalance.",
    tech: ["Python", "pandas", "scikit-learn", "SciPy", "statsmodels"],
    links: { github: "https://github.com/eMongoose/Red-Tide-Occurrence-Analysis" },
  },
  {
    title: "Fine-Tuning Diffusion Model",
    date: "2026-04",
    dateLabel: "Mar – Apr 2026",
    type: "personal",
    categories: ["ml"],
    description:
      "Fine-tuned SDXL with LoRA weights to improve depth perception and perspective in generated images, with a Gradio interface for interactive inference and testing.",
    tech: ["PyTorch", "SDXL", "LoRA", "Gradio"],
    links: { github: "" },
  },
  {
    title: "Brain Tumor Segmentation U-Net",
    date: "2026-04",
    dateLabel: "Feb – Apr 2026",
    type: "personal",
    categories: ["ml"],
    description:
      "U-Net brain tumor segmentation model in PyTorch, paired with a Tkinter GUI so users can visualize the model's predictions.",
    tech: ["PyTorch", "U-Net", "Tkinter"],
    links: { github: "" },
  },
  {
    title: "Emergency Room Wait Time Prediction",
    date: "2026-02",
    type: "hackathon",
    event: "VanML Hacks 2026, SFU",
    award: "First Prize",
    categories: ["ml", "data"],
    description:
      "Preprocessed real-world hospital data and engineered features to train and tune a LightGBM model that forecasts emergency department wait times.",
    tech: ["Python", "pandas", "scikit-learn", "LightGBM"],
    links: { github: "" },
  },
  {
    title: "Ducks in a Row",
    date: "2025-10",
    type: "hackathon",
    event: "StormHacks 2025, SFU",
    categories: ["game-dev"],
    description:
      "Cooperative multiplayer 2D platformer built around teamwork mechanics, with custom pixel-art assets.",
    tech: ["Unity", "Piskel"],
    links: { github: "https://github.com/eMongoose/Ducks-in-a-Row" },
  },
  {
    title: "Multiplayer Miniature Golf",
    date: "2025-08",
    dateLabel: "Jul – Aug 2025",
    type: "personal",
    categories: ["game-dev"],
    description:
      "Multiplayer mini golf with a client-server architecture over TCP sockets and JSON. The server runs physics, scoring, and goal detection and broadcasts real-time state to every client.",
    tech: ["Lua", "Love2D", "TCP Sockets", "JSON"],
    links: { github: "https://github.com/camblsoup/MiniatureGolf" },
  },
  {
    title: "Sheep Tossing Minigame",
    date: "2025-03",
    type: "hackathon",
    event: "DreamHacks 2025, SFU",
    award: "People's Choice",
    categories: ["game-dev"],
    description:
      "Relaxing 3D game designed to help players fall asleep, with soothing visuals and custom 3D models, built as a team prototype in a weekend.",
    tech: ["Unity", "Blender"],
    links: { github: "https://github.com/eMongoose/DreamHacks2025" },
  },
  {
    title: "Cover Letter Generator",
    date: "2025-02",
    type: "hackathon",
    event: "JourneyHacks 2025, SFU",
    categories: ["full-stack"],
    description:
      "Flask web tool that uses PerplexityAI to generate personalized cover letters from a job description and resume.",
    tech: ["Python", "Flask", "HTML/CSS", "PerplexityAI"],
    links: { github: "https://github.com/camblsoup/JourneyHacks" },
  },
];
 
/* Labels shown on the filter buttons and project tags.
   To add a new category, add it here AND use its key in a project above. */
window.CATEGORIES = {
//   "web-design": "Web Design",
  "full-stack": "Full Stack",
  cloud: "Cloud Computing",
  data: "Data Analysis / Engineering",
  ml: "Machine Learning",
  "game-dev": "Game Development",
};
 
window.PROJECT_TYPES = {
  personal: "Personal",
  hackathon: "Hackathon",
};
 