export const allProjects = [
  {
    id: 1,
    title: "Real-time Fraud Detection System",
    description:
      "Engineered a Spark-based fraud detection system processing 100K+ transactions/hour via Kafka, achieving 92% accuracy and <1s latency through FastAPI and Cassandra integration.",
    date: "Jan 2024 - May 2024",
    tags: [
      "Apache Spark",
      "Kafka",
      "Python",
      "FastAPI",
      "Cassandra",
      "Streamlit",
    ],
    gradient: "from-red-500 to-orange-500",
    featured: true,
    metrics: "100K+ transactions/hour, 92% accuracy",
    category: ["Data Engineering"],
    github: "https://github.com/Sarita-Joshi/Credit-Card-Fraud-Detection-Spark",
    // demo: "https://fraud-detection-demo.com",
    content: `
### Overview
Designed a Spark Structured Streaming pipeline integrated with Kafka to detect fraudulent credit card transactions in real time.

### Tech Stack
- **Apache Spark** for stream processing
- **Kafka** to simulate real-time transaction flow
- **Cassandra** as a NoSQL sink
- **FastAPI + Streamlit** for API access and UI dashboard

### Features
- <1s latency with structured streaming
- Interactive UI with live fraud status updates
- Kafka-based ingestion for realistic flow

### Limitations
- No GPU acceleration for model inference
- Simple rule-based logic; limited generalization

### Impact
- Detected 92% fraud cases accurately
- Enabled demo handling 100K+ events/hour
    `,
  },
  {
    id: 2,
    title: "Voice Prescription Generation",
    description:
      "Built a BERT-powered voice prescription tool with autosuggest/autocomplete, trained on SNOMED data. Improved NER accuracy to 85% and response time by 30%.",
      date: "Aug 2022 - Dec 2022",
      tags: ["BERT", "Python", "React.js", "Firebase", "SpaCy", "SNOMED"],
    gradient: "from-blue-500 to-cyan-500",
    featured: true,
    metrics: "85% NER accuracy, 30% faster response",
    category: ["Machine Learning", "NLP", "Full-stack"],
    // github: "https://github.com/sarita-joshi/fraud-detection",
    content: `
### Overview
Created a voice-to-text system for doctors to generate prescriptions using medical NLP.

### Tech Stack
- **BERT** fine-tuned for NER with SNOMED terms
- **React + Firebase** for frontend and backend
- **SpaCy** for preprocessing and autocomplete

### Features
- Voice input with real-time transcription
- Autocomplete & autosuggest based on diagnosis

### Limitations
- Requires medical vocabulary tuning
- Moderate latency for voice decoding

### Impact
- 85% NER accuracy
- Reduced prescription writing time by 30%
    `,
  },
  {
    id: 14,
    title: "Multi-Agent LLM Article Generator",
    description:
      "Built an autonomous storytelling agent system leveraging LangChain agents for dynamic article generation with voiceover, formatting, and automated publishing.",
    date: "Mar 2025 - Apr 2025",
    tags: ["LangChain", "OpenAI", "Python", "Agentic AI", "RAG", "Automation"],
    gradient: "from-fuchsia-500 to-purple-600",
    featured: true,
    metrics: "10+ article workflows automated, 2x content velocity",
    category: ["AI/ML", "Automation"],
    github: "https://github.com/sarita-joshi/llm-agent-article-generator",
    demo: "https://llm-autostory-demo.com",
    content: `
## Overview
Developed a fully autonomous article generation system using multiple LangChain agents with distinct responsibilities for content research, outline creation, formatting, voice synthesis, and publishing.

## Tech Stack
- **LangChain Agents**: Used for modular responsibilities (writer, editor, narrator).
- **LangGraph**: Highly customization graph workflow.
- **LLM Factory**: LLM Agnostic design supporting OpenAI, Claude, Gemini, Groq, etc.
- **Python & FastAPI**: Backend for controlling workflow and endpoints.
- **RAG (Retrieval-Augmented Generation)**: Ensured factual accuracy.

## Features
- Multi-agent workflow orchestration
- Markdown + HTML formatting support
- Voiceover generation & auto upload
- Configurable input prompts and templates

## Limitations
- TTS quality depends on network latency
- Occasional hallucinations during data-heavy topics

## Impact
Enabled automated generation of explainer articles for video shorts and blogs, doubling content output speed and reducing manual effort by over 70%.
`,
  },
  {
    id: 15,
    title: "EcoMeter: Computer Vision for Sustainable Choices",
    description:
      "Created a mobile app that classifies product packaging from photos using computer vision, informing users about eco-friendliness and recycling options to promote responsible consumption.",
    date: "Nov 2019 - Nov 2019",
    tags: [
      "YOLOv5",
      "Computer Vision",
      "Python",
      "OpenCV",
      "Image Classification",
    ],
    gradient: "from-lime-500 to-green-500",
    featured: false,
    metrics: "94% classification accuracy, 3x faster sorting",
    category: ["Computer Vision", "Sustainability"],
    github: "https://github.com/sarita-joshi/ecometer-waste-classifier",
    demo: "https://ecometer-demo.com",
    content: `
## Overview
Built a real-time computer vision tool to identify and sort waste into recyclable, compostable, electronic, and landfill using custom-trained YOLOv5.

## Tech Stack
- **YOLOv5**: Custom-trained object detection model.
- **OpenCV**: Real-time webcam integration and preprocessing.
- **LabelImg**: Manual annotation and bounding box generation.
- **Python**: Image preprocessing and model orchestration.

## Features
- Classifies 4 types of waste in real-time
- Lightweight model for edge deployment
- Augmented training data for robustness

## Limitations
- Accuracy reduces under poor lighting
- Manual annotations required for dataset expansion

## Impact
Achieved 94% classification accuracy with significant reduction in sorting time, promoting sustainability initiatives and waste management automation.
`,
  },
  {
    id: 11,
    title: "Blockchain Scholarship Platform",
    description:
      "Developed a blockchain-based scholarship platform with smart contracts and MongoDB backend. Enabled role-based workflows, transparency, and application traceability.",
      date: "Aug 2024 - Dec 2024",
      tags: ["Solidity", "MongoDB", "React", "Node.js", "FastAPI", "Web3"],
    gradient: "from-green-600 to-cyan-500",
    featured: true,
    metrics: "100+ verified applicants, 95% data accuracy",
    category: ["Full-stack", "Blockchain"],
    github: "https://github.com/Sarita-Joshi/Blockchain-Scholarship-Funing",
    content: `
### Overview
Created a blockchain-based platform for managing scholarship applications and fund disbursements.

### Tech Stack
- **Solidity** smart contracts
- **MongoDB + FastAPI** for metadata storage
- **React + ShadCN** for frontend UI

### Features
- Role-based access for donors, reviewers
- Fund transparency & decentralized logic

### Limitations
- Gas cost optimization pending
- Limited wallet integrations

### Impact
- Enabled trustless donation-based fund flow
    `,
  },
  {
    id: 3,
    title: "High-Performance Search Engine",
    description:
      "Architected a search engine using ElasticSearch and SQL with NLP-based ranking, delivering <30ms latency, 70% CTR, and 98% reduction in zero-result queries.",
      date: "Jan 2022 - Dec 2022",
      tags: ["ElasticSearch", "SQL", "NLP", "Python", "Azure"],
    gradient: "from-green-500 to-emerald-500",
    featured: true,
    metrics: "<30ms response, 70% CTR, 98% fewer zero results",
    category: ["NLP", "Backend Engineering", "Data Engineering"],
    // github: "https://github.com/sarita-joshi/fraud-detection",
    content: `
### Overview
Deployed a healthcare provider search engine using ElasticSearch and NLP-based scoring models.

### Tech Stack
- **ElasticSearch** for indexing and querying
- **SQL** for metadata sync
- **Azure + Python** backend API

### Features
- Search-as-you-type
- NLP-enhanced fuzzy ranking

### Limitations
- Cold-start issue for new providers
- Synonym handling needs manual update

### Impact
- Reduced zero-result queries by 98%
- Increased CTR by 70%
    `,
  },

  {
    id: 4,
    title: "E2E Speech Dialog Validation Tool",
    description:
      "Designed a test automation framework for validating cloud-connected speech dialog systems, reducing development QA effort by 33% via multi-process Python flows.",
      date: "Jan 2025 - Jun 2025",
      tags: [
      "Python",
      "Socket Programming",
      "Audio Processing",
      "Speech Recognition",
      "ECU Communication",
    ],
    gradient: "from-purple-500 to-pink-500",
    featured: false,
    metrics: "33% testing time reduction",
    category: ["Full-Stack", "Data Analytics"],
    // github: "https://github.com/sarita-joshi/fraud-detection",
    content: `
### Overview
Automated validation of embedded SDS modules across MBUX versions.

### Tech Stack
- **Python + subprocess** for multi-thread orchestration
- **DLT + ECU log parsing**
- **TTS + STT** API integration

### Features
- Plug-and-play log parser
- Module isolation and automation via CLI

### Limitations
- Initial version lacks GUI
- Log path was system-dependent

### Impact
- 33% time saved in developer testing
    `,
  },
  {
    id: 5,
    title: "Customer Service AI Chatbot",
    description:
      "Deployed an OpenAI + LangChain chatbot integrated with Salesforce to automate healthcare queries. Achieved 30% ticket resolution automation with <2% reopen rate.",
      date: "Jan 2023 - Dec 2023",
      tags: ["OpenAI", "LangChain", "Python", "Salesforce", "NLP"],
    gradient: "from-indigo-500 to-blue-500",
    featured: false,
    metrics: "30% automation rate, <2% reopen rate",
    category: ["Artificial Intelligence", "NLP", "Full-stack"],
    // github: "https://github.com/sarita-joshi/fraud-detection",
    content: `
### Overview
Deployed RAG-based chatbot to assist with patient queries and support tickets.

### Tech Stack
- **OpenAI + LangChain** for generative responses
- **Salesforce** for user data and ticket syncing
- **Azure SQL** for logging & metrics

### Features
- Ticket triage with confidence scoring
- RAG for document-grounded answers

### Limitations
- Long prompts increased inference time
- Some sensitive queries required escalation

### Impact
- Automated 30% tickets
- <2% reopen rate across 2 months
    `,
  },
  {
    id: 6,
    title: "Event-driven Integration Framework",
    description:
      "Built event-driven robust ETL workflows using Apache Airflow and SQL to orchestrate 300K+ webhook events/day. Integrated monitoring, retry handling, and cost optimization across 22+ platforms.",
      date: "Jun 2021 - Dec 2021",
      tags: ["Apache Airflow", "SQL", "Python", "Azure", "ETL"],
    gradient: "from-teal-500 to-green-500",
    featured: false,
    metrics: "300K+ events/day processed",
    category: ["Data Engineering", "Cloud Infrastructure"],
    // github: "https://github.com/sarita-joshi/fraud-detection",
    content: `
### Overview
Built event-driven pipelines syncing data across internal tools and external CRMs.

### Tech Stack
- **Apache Airflow** DAGs for scheduling
- **Python + SQL Server** for extraction and transformation
- **Azure Key Vault + Blob Storage**

### Features
- 22+ platform syncs
- SQL-based DAG step registry

### Limitations
- Retry policies had edge cases
- Manual re-triggers were needed

### Impact
- 300K+ webhooks/day
- Reduced data lag from 2h to 5min
    `,
  },
  {
    id: 7,
    title: "Predictive Analytics Dashboard",
    description:
      "Developed an interactive dashboard using Power BI for sales propensity modeling, doubling campaign conversions across 2M+ lead records.",
    date: "Sep 2020 - May 2021",
    tags: ["PowerBI", "Tableau", "Python", "SQL", "Machine Learning"],
    gradient: "from-yellow-500 to-orange-500",
    featured: false,
    metrics: "2x campaign conversions, 2M+ leads",
    category: ["Data Analytics", "Machine Learning"],
    // github: "https://github.com/sarita-joshi/fraud-detection",
    content: `
### Overview
Developed a lead prioritization tool using ML and visualized insights via PowerBI dashboards.

### Tech Stack
- **Python (Scikit-learn)** for model training
- **SQL** for feature engineering
- **PowerBI + Tableau** for dashboards

### Features
- Campaign filters by score
- Conversion likelihood meter

### Limitations
- Scores needed periodic retraining
- Data imbalance affected recall

### Impact
- Improved lead conversion by 2x
    `,
  },
  {
    id: 8,
    title: "Microservices API Gateway",
    description:
      "Implemented a FastAPI-based microservices gateway with Docker and Kubernetes, supporting 10K+ requests/min with heath check, load balancing and rate limiting.",
      date: "Jan 2025 - Feb 2025",
      tags: ["FastAPI", "Docker", "Kubernetes", "Python", "API Design"],
    gradient: "from-pink-500 to-red-500",
    featured: false,
    metrics: "10K+ requests/minute",
    category: ["Backend Engineering", "DevOps"],
    github: "https://github.com/Sarita-Joshi/CI-CD-Monitoring-Playground",
    content: `
### Overview
Designed API orchestration layer to balance load and isolate service failures.

### Tech Stack
- **FastAPI** for gateway implementation
- **Kubernetes + Docker** for service hosting
- **Redis** for caching and limits

### Features
- Rate-limiting and circuit breaking
- Tracing headers and error fallback

### Limitations
- No support for GraphQL
- Scalability tested on dev cluster

### Impact
- Handled 10K+ requests/min
- Reduced 500 errors by 35%
    `,
  },
  {
    id: 9,
    title: "Real-time Monitoring System",
    description:
      "Built a Grafana-Prometheus monitoring system with custom alerts and dashboards, ensuring 99.9% uptime across critical backend components.",
      date: "Feb 2025 - May 2025",
      tags: ["Grafana", "Prometheus", "Python", "DevOps", "Monitoring"],
    gradient: "from-cyan-500 to-blue-500",
    featured: false,
    metrics: "99.9% uptime monitoring",
    category: ["DevOps"],
    // github: "https://github.com/sarita-joshi/fraud-detection",
    content: `
### Overview
Implemented system-wide observability solution for ML and backend jobs.

### Tech Stack
- **Prometheus** for metrics scraping
- **Grafana** for dashboards
- **Python** exporters and alerting logic

### Features
- Latency & memory dashboards
- Alerting rules for incident response

### Limitations
- Basic auth, no SSO
- Lacked long-term log retention

### Impact
- 99.9% system uptime maintained
- Reduced MTTD to <5 mins
    `,
  },
  {
    id: 10,
    title: "Cloud Data Lake Solution",
    description:
      "Engineered a sandbox data lake on Azure using Databricks, Synapse, and Blob Storage. Automated ingestion and partitioning for 8GB+ daily data flow.",
    date: "May 2025 - ",
    tags: ["Azure", "Databricks", "Synapse", "Data Lake", "Big Data"],
    gradient: "from-purple-500 to-indigo-500",
    featured: false,
    metrics: "8GB+ daily processing",
    category: ["Cloud Infrastructure"],
    // github: "https://github.com/sarita-joshi/fraud-detection",
    content: `
### Overview
Integrated scalable lakehouse for healthcare analytics on Azure cloud.

### Tech Stack
- **Azure Data Lake + Blob Storage**
- **Databricks** for ETL processing
- **Synapse Analytics** for querying

### Features
- Automated table partitioning
- Metadata push to PowerBI

### Limitations
- Query tuning required manual profiling

### Impact
- Enabled 8GB+ ingestion/day
- Supported cross-team analytics
    `,
  },
  {
    id: 12,
    title: "Finance Chatbot with Power Automate",
    description:
      "Created a finance assistant chatbot using Power Automate and internal Azure APIs to handle invoice and vendor queries. Reduced manual response effort by 40%.",
      date: "Jan 2021 - Aug 2021",
      tags: [
      "Power Automate",
      "AI Chatbot",
      "Finance",
      "Automation",
      "API Integration",
    ],
    gradient: "from-sky-500 to-purple-500",
    featured: false,
    metrics: "40% effort reduction",
    category: ["Artificial Intelligence", "Cloud Infrastructure"],
    // github: "https://github.com/sarita-joshi/fraud-detection",
    content: `
### Overview
Developed internal chatbot to assist finance team with vendor and policy workflows.

### Tech Stack
- **Power Automate** for flow creation
- **Salesforce API** integration
- **Python + PowerShell** scripts

### Features
- Invoice lookup and update automation
- Audit compliance prompts

### Limitations
- Required frequent maintenance
- Not built for mobile view

### Impact
- 90% tasks auto-handled via flow bots
    `,
  },
];

export const categories = [
  "All",
  "Data Engineering",
  "Machine Learning",
  "Artificial Intelligence",
  "NLP",
  "Full-stack",
  "Data Analytics",
  "Backend Engineering",
  "DevOps",
  "Cloud Infrastructure",
];
