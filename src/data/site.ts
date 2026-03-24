// ─────────────────────────────────────────────
//  Site-wide configuration — fill in your info
// ─────────────────────────────────────────────

export const SITE = {
  initials: 'ZJR',
  name: 'Zhang Jr',
  title: 'Generative AI Engineer',
  tagline: 'Open to opportunities · 2026',
  description:
    'Ph.D. researcher turned AI engineer. Specializing in LLM/VLM post-training, Agentic RL, and building agents that plan, act, and learn in production.',
  url: 'https://zhang-jr.github.io',
};

export const STATS = [
  { num: '4+', label: 'Years Exp' },
  { num: '30+', label: 'Projects' },
  { num: '8', label: 'Open Source' },
];

export const ABOUT = {
  bio: [
    'Ph.D. in Computer Science, specializing in post-training for large multimodal models. Currently leading algorithm R&D on VLM/LLM alignment, Agentic RL, and real-time video AI — shipping models that power production-grade intelligent agents.',
    'I believe the next leap in AI is not bigger models, but models that can plan, act, and learn from interaction. My work lives at that frontier: teaching models to use tools, reason through uncertainty, and improve through reinforcement.',
    'When I\'m not running training jobs, I\'m vibe coding side projects with AI pair programmers, reading new RL papers, or thinking about what it means to build agents that are actually useful.',
  ],
};

export const EXPERIENCE = [
  {
    year: '2021~',
    role: 'Senior Algorithm Engineer / Tech Lead',
    company: 'KAOLAURAN Tech Corp',
    desc: 'Led algorithm team on full post-training pipeline for large multimodal/language models (VLM/LLM), covering SFT, DPO, On-Policy Distillation, RLVR, and Agentic RL. Built distributed training infrastructure supporting 1.5B–70B+ models and a 15M-sample multimodal data pipeline. Drove deployment of 3 industry-specific LLMs (smart governance, safety production, tobacco), lifting recognition accuracy from 60% to 90%+. Established standardized model iteration workflows, automated multi-dimensional evaluation, and end-to-end training monitoring with 98% data quality pass rate.',
  },
  {
    "year": "2018-2022",
    "role": "Ph.D. Computer Science and Technology",
    "company": "University of Electronic Science and Technology of China",
    "desc": "Research focus on multimodal video analysis, including audio-visual speech analysis, video action recognition, and adversarial attacks."
  },
  {
    "year": "2015-2018",
    "role": "M.S. Communication and Information Systems",
    "company": "Jiangxi University of Science and Technology",
    "desc": "Research focus on face recognition techniques including PCA, SVD, manifold learning, and deep neural networks."
  },
  {
    "year": "2011-2015",
    "role": "B.Eng. Electronic Information Engineering",
    "company": "Wuhan University of Science and Technology",
    "desc": "Core coursework in matrix analysis, statistical learning, data structures, and electronic signal analysis and processing."
  }
];

export const SKILLS = [
  {
    icon: '🎯',
    name: 'Post-Training & Alignment',
    desc: 'Full post-training pipeline from SFT to preference alignment and reinforcement learning. Experienced in on-policy and off-policy methods for both capability improvement and safety alignment.',
    tags: ['SFT', 'DPO', 'PPO', 'GRPO', 'RLVR', 'RLHF', 'Reward Modeling'],
  },
  {
    icon: '🏗️',
    name: 'Distributed Training',
    desc: 'Building and maintaining large-scale distributed training infrastructure across multi-node GPU clusters, with focus on throughput optimization and training stability.',
    tags: ['DeepSpeed', 'Megatron-LM', 'FSDP', 'Ray', 'NCCL', 'FlashAttention'],
  },
  {
    icon: '👁️',
    name: 'Multimodal & VLM',
    desc: 'End-to-end experience with vision-language models covering architecture adaptation, multimodal instruction tuning, and video understanding tasks.',
    tags: ['VLM', 'ViT', 'Video LLM', 'Multimodal SFT', 'Visual Grounding'],
  },
  {
    icon: '🗂️',
    name: 'Data Engineering',
    desc: 'Designing large-scale multimodal data pipelines including collection, filtering, annotation, and synthetic data generation for post-training.',
    tags: ['Data Pipeline', 'Synthetic Data', 'Quality Filtering', 'Auto-Annotation', 'Parquet/HDF5'],
  },
  {
    icon: '📊',
    name: 'Evaluation & Benchmarking',
    desc: 'Building automated multi-dimensional evaluation systems for LLM/VLM, covering capability benchmarks, reward hacking detection, and production monitoring.',
    tags: ['Eval Harness', 'LLM-as-Judge', 'MMMU', 'MT-Bench', 'Custom Metrics'],
  },
  {
    icon: '⚙️',
    name: 'MLOps & Inference',
    desc: 'Deploying and serving large models in production with focus on inference acceleration, cost efficiency, and training-to-serving pipeline automation.',
    tags: ['vLLM', 'TGI', 'Quantization', 'LoRA Serving', 'K8s', 'Triton'],
  },
];

export const PROJECTS = [
  {
    num: '001',
    name: 'Video Agent Agentic RL Training System',
    desc: 'Replaced rule-based workflow engine with a ReAct-architecture VLM Agent capable of autonomously orchestrating 70+ atomic CV tools. Designed hierarchical action space and multi-dimensional verifiable reward function. Built fully async Inference-Training engine on verl, lifting GPU utilization from 60% to 85%. Composite task completion rate reached 85%+.',
    tags: ['Agentic RL', 'GRPO', 'SAMPO', 'ReAct', 'verl', 'PRM'],
    href: '#',
  },
  {
    num: '002',
    name: 'Multimodal Reasoning Model',
    desc: 'Reproduced and optimized DeepSeek-R1 RLVR framework with a hybrid RL+DPO training strategy. Introduced dynamic importance sampling and clip-higher policy to stabilize training. Implemented On-Policy Distillation enabling cloud-to-edge model evolution. ',
    tags: ['RLVR', 'DPO', 'On-Policy Distillation', 'Qwen3-VL', 'MoE'],
    href: '#',
  },
  {
    num: '003',
    name: 'Real-Time Multimodal Video Interaction System',
    desc: 'Designed a low-latency audio-video interaction system supporting visual understanding and external tool calls beyond traditional audio-only voice assistants. Async event-driven pipeline with 20+ processors integrated 15 AI service providers (OpenAI, Google, Anthropic, etc.). Achieved <500ms end-to-end latency supporting 8-channel 1024p@30fps concurrent streams.',
    tags: ['VLM', 'VAD', 'Streaming STT/TTS', 'Async Pipeline', 'WebRTC'],
    href: '#',
  },
  {
    num: '004',
    name: 'Multimodal Training & Data Infrastructure',
    desc: 'Built dual-track SFT system for Dense (1.5B–70B) and MoE (~30B-A3B) models on ms-swift, raising GPU utilization to 90%+. Designed modular VLM framework with flexible vision encoder and alignment layer combinations. Constructed end-to-end data pipeline producing 15M multimodal instruction samples at 98% quality pass rate.',
    tags: ['DeepSpeed', 'Megatron', 'ms-swift', 'Sequence Packing', 'verl'],
    href: '#',
  },
  {
    num: '005',
    name: 'Converge — Kubernetes-Inspired Agent Framework',
    desc: 'A production-ready Python framework for orchestrating AI agents at scale. Declarative API maps Kubernetes concepts (Deployment→AgentWorkflow, kubelet→AgentRuntime, etcd→StateStore) to agent orchestration — declare the goal, the ReconcileLoop converges to it. Supports DAG-based multi-agent workflows, RBAC tool permissions, Human-in-the-loop for high-risk actions, and full OpenTelemetry observability.',
    tags: ['Agentic', 'ReconcileLoop', 'LiteLLM', 'asyncio', 'Pydantic v2', 'PostgreSQL'],
    href: '#',
  },
];

export const CONTACT = {
  email: 'jrzhang339@gmail.com',
  github: { label: 'github.com/zhang-jr', href: 'https://github.com/zhang-jr' },
  // linkedin: { label: 'linkedin.com/in/zhang-jr', href: 'https://linkedin.com/in/zhang-jr' },
  // twitter: { label: '@zhang_jr_dev', href: 'https://x.com/zhang_jr_dev' },
};
