// ─────────────────────────────────────────────
//  Site-wide configuration — fill in your info
// ─────────────────────────────────────────────

export const SITE = {
  initials: 'ZJR',
  name: 'Zhang Jr',
  title: 'Full-Stack Engineer',
  tagline: 'Open to opportunities · 2026',
  description:
    'Full-stack engineer building performant, cloud-native systems. Passionate about turning complex engineering problems into elegant, user-focused experiences.',
  url: 'https://zhang-jr.github.io',
};

export const STATS = [
  { num: '5+', label: 'Years Exp' },
  { num: '30+', label: 'Projects' },
  { num: '8', label: 'Open Source' },
];

export const ABOUT = {
  bio: [
    'Computer Science graduate with a focus on cloud-native architecture and front-end engineering. Currently working as a senior full-stack engineer at a leading tech company, shipping products used by millions.',
    'I believe great engineers think in products. Technology is the medium — solving real problems is the goal.',
    'In my spare time I maintain open-source tools, contribute to dev communities, and explore the city on two wheels.',
  ],
};

export const EXPERIENCE = [
  {
    year: '2023',
    role: 'Senior Full-Stack Engineer',
    company: 'Tech Corp',
    desc: 'Led architecture design for core business systems. Managed a 6-person team through microservices migration, achieving 40% performance improvement.',
  },
  {
    year: '2021',
    role: 'Frontend Engineer',
    company: 'ByteDance',
    desc: 'Contributed to the creator platform for Douyin. Owned the data visualization module, supporting 2M+ DAU at peak.',
  },
  {
    year: '2019',
    role: 'Engineering Intern',
    company: 'Alibaba',
    desc: 'Participated in the OSS console frontend rewrite. Gained hands-on experience in large-scale front-end engineering practices.',
  },
  {
    year: '2015',
    role: 'B.Eng. Computer Science',
    company: 'Tongji University',
    desc: 'Graduated with GPA 3.8/4.0. Received Outstanding Thesis Award at the university level.',
  },
];

export const SKILLS = [
  {
    icon: '⚡',
    name: 'Frontend',
    desc: 'Building high-performance, maintainable modern web apps with a focus on engineering quality and user experience.',
    tags: ['React', 'Next.js', 'TypeScript', 'Vue 3', 'Vite'],
  },
  {
    icon: '🔧',
    name: 'Backend',
    desc: 'Designing scalable microservice architectures with deep experience in high-concurrency system design.',
    tags: ['Node.js', 'Go', 'Python', 'gRPC', 'REST'],
  },
  {
    icon: '☁️',
    name: 'Cloud & DevOps',
    desc: 'Proficient in cloud-native deployments, container orchestration, and automated CI/CD pipelines.',
    tags: ['AWS', 'Docker', 'K8s', 'CI/CD', 'Terraform'],
  },
  {
    icon: '🗄️',
    name: 'Database',
    desc: 'Experienced with relational and NoSQL databases, including query optimization and schema design at scale.',
    tags: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB'],
  },
  {
    icon: '🎨',
    name: 'Design & UI',
    desc: 'Fluent in Figma and design systems. I close the gap between design intent and production implementation.',
    tags: ['Figma', 'CSS/SCSS', 'Motion', 'TailwindCSS'],
  },
  {
    icon: '🤖',
    name: 'AI / LLM',
    desc: 'Building LLM-powered applications and RAG pipelines. Shipped an enterprise knowledge base on vector search.',
    tags: ['LangChain', 'OpenAI API', 'Vector DB', 'RAG'],
  },
];

export const PROJECTS = [
  {
    num: '001',
    name: 'CloudDash — Cloud Resource Monitor',
    desc: 'A multi-cloud resource visualization dashboard for small teams. Aggregates storage, compute, and CDN metrics in one view.',
    tags: ['React', 'Go', 'Cloud SDK'],
    href: '#',
  },
  {
    num: '002',
    name: 'Logseq AI Assistant',
    desc: 'An AI plugin for Logseq that integrates a local LLM to auto-summarize notes and enhance the personal knowledge graph.',
    tags: ['TypeScript', 'LangChain', 'Ollama'],
    href: '#',
  },
  {
    num: '003',
    name: 'VizFlow — Data Visualization Framework',
    desc: 'A lightweight Canvas chart library designed for big-data scenarios. Renders millions of data points at 60fps.',
    tags: ['Canvas API', 'WebWorker', 'TypeScript'],
    href: '#',
  },
  {
    num: '004',
    name: 'DeployKit — Static Site Deploy CLI',
    desc: 'One-command static site deployment to cloud storage + CDN, with automatic cache invalidation and HTTPS setup.',
    tags: ['Node.js', 'Storage API', 'CDN API'],
    href: '#',
  },
];

export const CONTACT = {
  email: 'jrzhang339@gmail.com',
  github: { label: 'github.com/zhang-jr', href: 'https://github.com/zhang-jr' },
  // linkedin: { label: 'linkedin.com/in/zhang-jr', href: 'https://linkedin.com/in/zhang-jr' },
  // twitter: { label: '@zhang_jr_dev', href: 'https://x.com/zhang_jr_dev' },
};
