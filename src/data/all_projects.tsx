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
###  Why Fraud Detection?  
Fraudulent transactions cost billions globally each year, and *the longer a fraud goes undetected, the bigger the loss*. Traditional fraud detection often runs on batch pipelines, which can lag by hours or even days. Today, however, financial systems demand **real-time insights** — not just to stop fraud, but to build **trust and resilience** into the system.

This project was my deep dive into **real-time fraud detection using big data technologies**. The goal:  
> Build a system that can simulate and process real-time credit card transactions, score them for fraud, and respond within **1 second** — at scale.


###  The Journey — From Rule-Based to Streaming Intelligence  

####  Phase 1: Setting up the Real-Time Pipeline  
The first hurdle was **data simulation and ingestion**. I built a Kafka producer in Python to continuously emit synthetic transactions mimicking real-world formats (amount, location, transaction type, etc.). Kafka fed these into a **Spark Structured Streaming** pipeline, chosen for its scalability and native support for real-time processing.

**Challenge:**  
- Spark Structured Streaming can be tricky with small event sizes due to **micro-batch tuning**. It took multiple rounds of testing to find the sweet spot between **throughput** and **latency**.

####  Phase 2: Model Prototyping and Evaluation  
Next came **model experimentation**. I started simple:

| Model Type             | Pros                            | Cons                         |
|------------------------|----------------------------------|------------------------------|
| Rule-based logic       | Fast, easy to interpret          | Rigid, low generalization    |
| Logistic Regression    | Lightweight, interpretable       | Moderate accuracy            |
| Random Forest          | Better fraud detection rates     | Slightly slower inference    |
| Spark ML Pipelines     | Integrated nicely in the flow    | Limited flexibility in tuning|

In the end, I deployed a **Random Forest model** using **Spark MLlib** for real-time scoring. It offered the best trade-off between speed and accuracy, reaching **92% detection accuracy** on held-out test sets.

####  Phase 3: Real-time Serving and Visualization  
To expose results, I integrated **FastAPI** for REST endpoints and built a live dashboard using **Streamlit** — showing flagged transactions, fraud scores, and system status in real time.


###  Challenges Faced  

1. **Data Drift**:  
   Synthetic data often lacks the noise and irregularity of real-world transactions, leading to **overfitting** on patterns that wouldn’t generalize. This is a big reason why fraud detection in production typically requires **continuous model retraining**.

2. **No GPU Acceleration**:  
   All processing was CPU-bound. Though sufficient for 100K+ txns/hour in this demo, real-time ML in production often uses **optimized model serving (e.g., ONNX, TorchServe)** and **hardware acceleration**.

3. **Latency Bottlenecks**:  
   Tuning Spark’s micro-batches and ensuring consistent Kafka throughput took effort. I also learned how **checkpointing** and **backpressure** affect stream stability.

4. **Scaling Cassandra**:  
   While Cassandra handled writes well, querying by fraud score/time window for dashboard display required careful indexing and partition design.


###  Industry Benchmarks and Standards  

| Feature                         | Industry Standard                           | This Project                      |
|--------------------------------|---------------------------------------------|-----------------------------------|
| Detection Window               | Sub-second to few seconds                   | <1 second                         |
| Accuracy                       | 90–99% (with model ensembles)               | 92% (single model, no ensemble)   |
| Techniques Used                | Hybrid ML + Rules + Anomaly Detection       | Spark ML + Rules                  |
| Deployment                     | Real-time APIs, streaming architecture      | FastAPI + Kafka + Streamlit       |
| Data Sources                   | Live feeds from POS, ATM, mobile, eCommerce | Simulated via Kafka producer      |
| Model Updates                  | Continuous retraining (online learning)     | Static model (future work)        |


###  Future Improvements  

Here’s how I envision evolving this project:

- **Online Learning / Feedback Loops**:  
  Integrate user feedback (e.g., flagged but legitimate) to continuously refine model weights via **incremental learning**.

- **Anomaly Detection Layer**:  
  Add unsupervised models (e.g., Isolation Forest, Autoencoders) to catch unknown patterns outside the training set.

- **Feature Store + Real Data Pipelines**:  
  Use a **feature store** to serve historical aggregates and **real transaction datasets** (with obfuscation) for better validation.

- **Deploy via Docker & Kubernetes**:  
  Containerize each component and deploy on a local K8s cluster to simulate production deployment and load balancing.

- **Fraud Explainability Module**:  
  Incorporate **SHAP or LIME** for model interpretability — crucial for financial institutions needing transparent decisions.


###  Takeaway  
This project gave me hands-on experience in building an **end-to-end real-time ML system**. From data generation and ingestion to model deployment and dashboarding, I encountered — and overcame — the many roadblocks that real-time data systems face.

It's one thing to train a model. It’s another to make it *react instantly* under pressure.`,
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
    category: ["Generative AI", "Automation"],
    github: "https://github.com/Sarita-Joshi/multi-agent-llm-article-generation",
    demo: "https://llm-autostory-demo.com",
    content: `
###  Overview
This project explores **agentic AI** in a production-style article generation pipeline. I built a **multi-agent system** using LangGraph and LangChain that autonomously handles everything from topic discovery to drafting, refining, and formatting articles using Retrieval-Augmented Generation (RAG).  

What sets this system apart is its **multi-model support**, allowing seamless switching between OpenAI, Claude, and Gemini models. The modularity enables benchmarking different architectures and scaling writing workflows with near-zero human intervention.


###  Architecture

Each autonomous agent in the system is responsible for a distinct task:
- **Research Agent:** Gathers context using RAG and cleanses results
- **Planner Agent:** Converts the topic into a structured outline
- **Writer Agent:** Generates content section-by-section
- **Editor Agent:** Refines grammar and tone
- **Formatter Agent:** Converts drafts into Markdown with proper structure

LangGraph manages agent state, tool invocation, and retry logic using persistent memory across chains.


###  Key Features
- **LangGraph-based modular orchestration** of multi-agent flows  
- **LLM adapter layer** supporting OpenAI, Gemini, Claude  
- **Tool abstraction** for vectorstore (FAISS), chunkers, and editors  
- **Benchmarking mode** to compare model output quality and timing  
- **Formatted Markdown output** ready for CMS integration  
- **Easily pluggable components** for new tools or agents  


###  Performance
| Metric                     | Value                  |
|----------------------------|------------------------|
| Article workflows deployed | 10+                    |
| Model switch latency       | ~0.4s average          |
| Speedup vs manual pipeline | 2×                     |
| RAG-enhanced relevance     | ~88% factual match     |


###  Challenges & Learnings
- Designing long-term memory routing across agents was tricky
- Gemini’s structured responses needed extra formatting cleanup
- RAG’s performance varied significantly with chunk size and ranking model
- Claude performed well in coherence but was slower on large inputs


###  Future Extensions
- Integrate Git-based versioning for drafts  
- Auto-publish to Ghost/Notion via APIs  
- Add voiceover and summarization agents  
- Fine-tune chunk retrieval with user feedback loops  
- Use scoring agents for automated quality grading  


###  Why It Matters
This project isn’t just about article generation — it's a **blueprint for building scalable AI task agents**. The ability to abstract model layers, control flows, and evaluate performance makes it ideal for real-world LLM production experimentation in media, research, or education.

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
    featured: true,
    metrics: "30% automation rate, <2% reopen rate",
    category: ["Generative AI", "MLOps & Deployment"],
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
  id: 17,
  title: "OCTA Traffic & Demand Analytics",
  description:
    "Analyzed Orange County’s transit data using Alteryx and Tableau to visualize future travel demand and recommend infrastructure strategies for 2045. Delivered actionable insights on route efficiency and growth areas.",
  date: "Oct 2024",
  tags: ["Alteryx", "Tableau", "Data Visualization", "Transportation", "Urban Planning"],
  gradient: "from-amber-500 to-yellow-600",
  featured: true,
  metrics: "40% faster insight generation, 3 key infrastructure recommendations",
  category: ["Data Analytics", "Data Engineering"],
  github: "", // If you have a public repo or report link, add it here
  demo: "", // If there's a Tableau dashboard or hosted report, you can link it here
  content: `
### Rethinking Transit: What 2045 Could Look Like in Orange County  
*How geospatial data, transit models, and a bit of storytelling shaped our vision for the future.*

🏆 **Winner – SoCal CSUF x Alteryx Datathon 2024**

In October 2024, I had the chance to lead a project that won the **SoCal CSUF x Alteryx Datathon**, where our team worked with real-world data from the **Orange County Transportation Authority (OCTA)**. The challenge? Understand how travel demand is expected to shift by 2045 and propose actionable recommendations to shape a smarter, more connected Orange County.

We weren’t just looking at spreadsheets. This was **geospatial, temporal, and deeply human** data — millions of trip records across zones, layered over infrastructure, population forecasts, and regional growth patterns. Behind every number was a commute, a missed bus, a traffic jam, or a smoother ride to work.


## Understanding the Problem

OCTA gave us modeled trip data for two key years:
- **2016** (baseline)
- **2045** (projected)

The goal was to explore **what changes, why they happen, and what should be done about it.**

Some of the guiding questions we started with:
- Which regions will see the biggest surge in trips?
- Are current bus routes aligned with future demand?
- How can infrastructure evolve to meet growing needs?


## Our Approach: Let the Data Tell a Story

Instead of jumping into charts, we walked through the data like urban planners — virtually, with code and maps.

1. **Trip Density Analysis**  
   We visualized trip volumes across over 1,000 zones. The heatmaps were revealing — quiet suburbs were about to get busy.

2. **Growth Pockets**  
   Irvine Spectrum, parts of Santa Ana, and Anaheim–Fullerton emerged as high-growth zones — potential future transit hubs.

3. **Route Efficiency**  
   Overlaying bus routes revealed mismatches. Several high-growth areas were under-served.

4. **First-Mile/Last-Mile Gaps**  
   We identified “dead zones” with high trip projections but poor walkability or transit access.


## Key Insights

- 🚍 **Mismatch in Growth vs. Service**  
  Some of the fastest-growing zones lacked direct or frequent transit routes.

- 📈 **Peak Load Shifts**  
  Peak hours in 2045 will be longer and less predictable. Transit planning must adapt.

- 🌱 **Convenience Drives Sustainability**  
  Unless made more accessible, public transit will lose out to cars, increasing congestion and emissions.


## Our Recommendations

1. **Redesign Bus Corridors**  
   Prioritize upgrades in high-growth areas like Irvine and Harbor Blvd.

2. **Invest in Feeder Systems**  
   Shuttles, bike shares, and micromobility in “dead zones” to support mainline transit.

3. **Build Dynamic Planning Tools**  
   OCTA should continuously monitor trends with a live dashboard and adjust routes and frequencies in near real-time.


## Final Thoughts

This project wasn’t just about visualizations or predictions — it was about **imagining the future of public transit** through the lens of real-world data. And our work earned us **1st place** in a field of talented, data-driven teams.

Working with OCTA’s projections helped us understand how **human-centered design** can and should influence transit planning. At the end of the day, transit isn’t just about vehicles and routes — it’s about people, and data gives us the language to design better for them.


*🏆 Built with Alteryx · Tableau · Python · Real-World Impact · Datathon Champion*
`
},
  {
    id: 11,
    title: "Blockchain Scholarship Platform",
    description:
      "Developed a blockchain-based scholarship platform with smart contracts and MongoDB backend. Enabled role-based workflows, transparency, and application traceability.",
      date: "Aug 2024 - Dec 2024",
      tags: ["Solidity", "MongoDB", "React", "Node.js", "FastAPI", "Web3"],
    gradient: "from-green-600 to-cyan-500",
    featured: false,
    metrics: "100+ verified applicants, 95% data accuracy",
    category: ["Full-Stack"],
    github: "https://github.com/Sarita-Joshi/Blockchain-Scholarship-Funing",
    content: `
###  The Problem  
Scholarships often operate behind closed doors — eligibility criteria are vague, fund allocation lacks visibility, and applicants have no clear way to track progress. I wanted to tackle this trust gap by **building transparency from the ground up**, using **blockchain and decentralized logic**.

The core idea was:  
> A decentralized scholarship platform where donors, reviewers, and applicants interact through **verifiable workflows**, and funds flow only after **on-chain approvals**.


### Architecture Overview  

This wasn’t just a blockchain demo — it was a **fully operational full-stack platform** with:

- **Smart Contracts (Solidity)** for role-based workflows and fund control  
- **MongoDB + FastAPI** for off-chain metadata management and dynamic querying  
- **React + ShadCN UI** for a clean and responsive user interface  
- **Web3.js & Node.js** for frontend-to-chain interactions and API integration  


###  Tech Deep Dive  

#### 🔸 **Solidity Smart Contracts**
I designed the heart of the system using **Solidity**. The contract included:

- **Role-based access control** for *applicants*, *reviewers*, *donors*, and *owner*
- **State machines** for tracking each application (e.g., Submitted → Reviewed → Approved)
- **Donor-led funding** where ETH donations could only be disbursed to **verified, approved applicants**
- **Event logging** for immutable audit trails

>  Challenge: Ensuring **gas-efficient logic** for multi-step workflows  
> 🔧 Solution: I modularized contract methods and used mappings over arrays to reduce cost

####  **MongoDB + FastAPI** Backend  
While blockchain handled core logic, all application metadata — essays, transcripts, fund amounts — was stored off-chain in **MongoDB**.  

Why? Because storing large data on-chain is **expensive and unnecessary**.  
I built a **FastAPI service** to:

- Validate and persist applicant info
- Track application status
- Link blockchain \`transactionHash\` and \`applicantId\` for traceability
- Serve filtered views for dashboards (pending/approved apps, donor history, etc.)

>  Challenge: Avoiding sync issues between chain and off-chain state  
>  Solution: Every blockchain write operation triggers a FastAPI listener that updates MongoDB with corresponding status changes.

####  **React + ShadCN Frontend**  
For the UI, I used **React** with **ShadCN UI library** for a professional look and feel. The app had:

- **Role-specific views** (applicants could apply, donors could donate, reviewers could filter & approve)
- **Expandable sections** for multi-stage forms
- **Blockchain status trackers** (e.g., “Transaction pending… confirmed ✔”)
- **Secure MetaMask integration** for wallet-based authentication

####  **Web3.js + Node.js Integration**
To glue the frontend and smart contracts, I used **Web3.js** in the browser and **Node.js** in the backend to:

- Sign and send transactions from MetaMask  
- Monitor \`event logs\` from the contract and reflect them in the UI  
- Allow owners to trigger fund disbursement from the dashboard


###  Application Flow

1. **Applicant** logs in → fills form → hits submit → FastAPI stores metadata → Solidity logs submission  
2. **Reviewer** logs in → reviews data → on-chain approval updates status  
3. **Donor** logs in → donates ETH → funds are locked  
4. **Contract Owner** disburses funds to approved applicants only after on-chain conditions met


###  Achievements

- 100+ verified applicants onboarded during test phase  
- 95% data consistency between chain and backend  
- Average transaction confirmation time: ~12s (Rinkeby)  
- 100% transparent flow from application to fund release  


###  Limitations & Learnings

- **Gas Cost Optimization Pending**: Some contract methods, especially batch operations, were gas-heavy and would need refactoring before mainnet deployment  
- **Wallet Compatibility**: Only MetaMask was supported — multi-wallet integration and mobile-friendly onboarding (e.g., WalletConnect) are in the pipeline  
- **Security Audits**: Solidity code has basic checks, but hasn’t gone through a formal audit


###  What’s Next?

- **Polygon/Mumbai Deployment** for lower gas fees and faster transactions  
- **Decentralized Identity (DID)** integration to authenticate student records and documents  
- **NFT-based certificates** for approved applicants  
- **Donation leaderboard + milestone badges** to incentivize recurring donors  
- **Multi-language support** and **accessibility features** to onboard non-English speakers  


###  Final Thoughts  
This project made me rethink how we manage and distribute opportunity. By combining **blockchain for trust**, **APIs for flexibility**, and **clean UX for access**, I created a system where *every role is accountable, and every transaction is visible*.

In a world where trust in institutions is shaky, **transparency can be engineered — one block at a time**.
    `,
  },
  {
  id: 18,
  title: "Smart Email Compose with GPT-2 and T5",
  description:
    "Built a Gmail-style smart compose feature using fine-tuned GPT-2 and T5 models on the Enron email dataset. Enables inline suggestions with fast completions.",
  date: "May 2025",
  tags: [
    "GPT-2",
    "T5",
    "Transformers",
    "FastAPI",
    "React",
    "Fine-tuning",
    "NLP",
  ],
  gradient: "from-yellow-400 to-pink-500",
  featured: false,
  metrics: "Real-time suggestions with <300ms response time",
  category: ["Generative AI", "Full-Stack"],
  github: "https://github.com/Sarita-Joshi/Smart-Email-Compose-GPT-2-and-T5",
  demo: "https://sarita-joshi.github.io/smart-Email-Compose-GPT-2-and-T5/",
  content: `
### Overview
Recreated Gmail’s smart compose experience by fine-tuning two language models (GPT-2 and T5-small) on the Enron email dataset. Built a full-stack app to serve suggestions via a FastAPI backend with React frontend.

### Tech Stack
- **GPT-2**, **T5-small** via HuggingFace Transformers
- **FastAPI** for serving completions
- **React + TailwindCSS** for frontend
- **Render** for deployment

### Data & Preprocessing
- Used **Enron email dataset**, extensively cleaned and parsed
- Created **sentence pairs** by chunking email bodies and generating prefix–completion splits for training

### Features
- Inline autocomplete as user types (like Gmail)
- Tab key to accept, Backspace/Escape to reject
- Model switch (GPT-2 / T5) with UI toggle
- Animated UI with theme toggle
- Warning prompt if backend is down, with demo video link

### Limitations
- Smaller models used due to GPU and memory constraints
- No production-level optimization (e.g., batching, caching)

### What I Learned
- Sequence-to-sequence modeling vs decoder-only generation
- Designing training data from real-world text
- FastAPI deployment challenges with large models
- UX lessons from mimicking real apps

### Impact
- Achieved near real-time suggestions (<300ms)
- Provided a replicable framework for anyone exploring smart compose systems
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
    category: ["MLOps & Deployment"],
    github: "https://github.com/sarita-joshi/ecometer-waste-classifier",
    demo: "https://ecometer-demo.com",
    content: `
###  Problem: “Is This Recyclable?” Shouldn’t Be a Mystery  
In 2019, even the most eco-conscious users couldn’t tell if an item belonged in recycling, compost, landfill, or e-waste — let alone understand its environmental impact. The information was out there… but not accessible in the moment.

So I built **EcoMeter**, a computer vision-powered mobile tool that could:
>  Take a picture of any product or packaging  
>  Analyze its **material content** (plastic, aluminum, glass, etc.)  
>  Score it on **eco-friendliness** using formulas for **decomposability**, **reusability**, **carbon emissions**, and **product life cycle**  
>  Suggest the best **disposal option**


### 📦 How It Worked  

EcoMeter used a custom-trained **YOLOv3 model** (state-of-the-art at the time) to detect packaging materials in real-time. Instead of classifying objects by brand or shape, it focused on the **material composition** — plastic type, glass vs. metal, paperboard, etc.

From there, I applied a scoring layer based on:
-  **Decomposability index**
-  **Reusability factor**
-  **Recycling compatibility**
-  **Estimated carbon footprint**
-  **Product life cycle classification**

Each item was then placed in one of 4 categories:
-  Recyclable  
-  Compostable  
-  E-waste  
-  Landfill  

…along with a 1–5  **eco-score** (to nudge better behavior).


###  Tech Stack  

| Component        | Tool/Method                      |
|------------------|----------------------------------|
| Detection Engine | YOLOv3 (trained with Darknet)    |
| Preprocessing    | OpenCV + custom filters          |
| Annotation Tool  | LabelImg                         |
| Sustainability Model | Python (rules + formula engine) |
| Prototype UI     | Streamlit (concept only)         |


###  Performance  

| Metric                              | Result                      |
|-------------------------------------|-----------------------------|
| Material Classification Accuracy    | **94%**                     |
| Avg. Inference Time (YOLOv3)        | ~0.25s (CPU)                |
| Sorting Speed                       | **3x faster** than manual   |
| Supported Material Types (initial)  | PET, HDPE, paper, aluminum, glass, electronics  


###  Features  

-  **Real-time photo input** with YOLOv3-based detection  
-  **Material breakdown and analysis** (not object category)  
-  **Sustainability score** using environmental impact formulas  
-  **Categorization into disposal bins** (recycle, compost, landfill, e-waste)  
-  **Color-coded eco-scores** with explanations  
-  Designed for **public kiosks, school awareness apps, and personal waste tracking**


###  Challenges & Solutions  

1. **No labeled datasets for material detection (in 2019)**  
   → Created custom dataset with **manually annotated images** across material categories  
   → Used **LabelImg** for bounding boxes and class labels

2. **Lighting conditions and occlusions**  
   → Applied **data augmentation** to simulate outdoor, indoor, glare-heavy conditions

3. **Scoring logic for eco-index**  
   → Worked with publicly available data on **material decomposition times**, **carbon impact**, and **life cycle assessments**  
   → Converted it into a **composite rating formula** for every prediction


###  Real-World Potential  

EcoMeter was built as a **proof of concept**, but could scale across:
-  Schools and colleges for **eco-literacy programs**  
-  Shopping apps for **eco-conscious purchases**  
-  Public smart bins that **auto-sort waste with cameras**  
-  Mobile apps to **influence responsible choices** at the point of disposal  


###  Future Extensions  

- Deploy on mobile using **TensorFlow Lite** or ONNX  
- Add **barcode integration** for mixed packaging  
- Enable **user feedback loop** to refine scoring formulas  
- Support for **multi-region regulations** and waste codes  
- **Gamify eco-scores** to drive habit changes over time


###  Reflection  

EcoMeter was ahead of its time — built before sustainability became mainstream in tech. It taught me how **ML can be more than just detection**: it can **educate, influence, and empower** users to make smarter choices.

> Sustainable behavior isn't about having the data — it's about **delivering it in the moment it matters most.**
`,
  },
  {
    id: 2,
    title: "Voice Prescription Generation",
    description:
      "Built a Spacy-powered voice prescription tool which generates structured prescription, trained on SNOMED data, from voice. Improved NER accuracy to 85% and response time by 30%.",
      date: "Aug 2022 - Dec 2022",
      tags: ["Python", "React.js", "Firebase", "SpaCy", "NER", "SNOMED"],
    gradient: "from-blue-500 to-cyan-500",
    featured: false,
    metrics: "85% NER accuracy, 30% faster response,  HIPAA-compliant",
    category: ["MLOps & Deployment", "Full-stack"],
    // github: "https://github.com/sarita-joshi/fraud-detection",
    content: `
###  Project Motivation  
Doctors often struggle with repetitive, time-consuming prescription writing — especially in fast-paced, multilingual environments. I set out to build a **voice-enabled prescription generation system** that could understand **spoken medical commands**, even with dialectical variation, and return **structured, editable, clinically accurate prescriptions**.


###  NLP Exploration: A Layered Approach  

I didn’t jump straight to complex langauge models like BERT. Instead, I did benchmarking of available NLP libraries and approached, comparing:

| Approach              | Pros                                                | Outcome             |
|-----------------------|-----------------------------------------------------|---------------------|
| **Stanford CoreNLP**  | Great syntactic parsing, useful for edge cases      | Slower              |
| **Rule-based patterns**| Excellent for dosages and templates                | High precision      |
| **BERT (fine-tuned)** |  Complex, High computation                          | Complex             |
| **SpaCy (custom NER)**| Fast, easy to train                                 | ~85% accuracy       |
The final pipeline ran **SpaCy + Stanford NLP** for preprocessing and NER. This saved time and maintained real-time responsiveness.


###  Smart Handling of Dialects & Drug Variants  

One of the toughest challenges was understanding **hard-to-pronounce drug names** — especially when affected by local dialects or pronunciation slips (e.g., _“hydrochlorothiazide”_, _“clopidogrel”_, etc.).

To solve this:
- After transcription, I matched drug tokens against **SNOMED CT vocab** using **fuzzy matching + embeddings**
- Returned the **top 3 most likely drug name matches** with:
  - Suggested **dosage variants** (e.g., 250mg, 500mg, 750mg)
  - Matching **frequencies** (e.g., once daily, twice daily)

The UI then:
- Displayed these options in an **editable dropdown**
- Let doctors **accept, reject, or manually correct** the prediction
- Logged rejected or overridden entries for **future retraining and fine-tuning**

>  This flexible flow mimicked how real doctors work — not forcing automation, but **supporting decision-making**.


### ️ Full-Stack System Design  

- **Frontend**: React.js  
  - Live speech input via Web Speech API  
  - Autosuggest for SNOMED terms  
  - Editable prescription form  
  - Patient dashboard + log view  

- **Backend**: Python + Firebase  
  - NLP model APIs (SpaCy inference)  
  - Real-time syncing via Firestore  
  - Secure auth via Firebase Auth  
  - Training data log for model feedback  

- **Compliance Measures:**
  - HTTPS communication  
  - Encrypted Firestore access with RBAC  
  - No PII stored on local devices  
  - Token-based auth for API access 


###  Workflow  

1. Doctor logs in via Firebase  
2. Dictates a prescription aloud  
3. Text is processed by NLP engine  
4. Top 3 drug/dosage/frequency matches are shown  
5. Doctor edits or accepts → Rx is finalized and saved  
6. Data from rejections/overrides is stored for **continuous learning**

> Example spoken input:  
> _"Give 500 milligrams amoxicillin twice a day for sore throat."_  
> → Output suggestions:  
> - **Amoxicillin 250mg**
> - **Amoxicillin 500mg**
> - **Amoxicillin 750mg**  
> *(Doctor selects 500mg → confirmed.)*


###  Results

| Metric                            | Result                          |
|-----------------------------------|----------------------------------|
| Final NER accuracy                | **85%**                          |
| Avg. response latency             | **<900ms**                       |
| Avg. Rx generation time saved     | **~30%**                         |
| Prescriptions processed           | ~180 (internal testing)          |
| Feedback entries for retraining   | 100+ (accepted/rejected cases)   |
| HIPAA-compliant data handling     | ✅ Confirmed                     |


###  Key Features  

- Live voice-to-text transcription  
- Medical NER for drugs, symptoms, dosages  
- Autosuggest with top 3 editable options  
- Manual override and real-time feedback logging  
- Firebase-based secure login  
- Patient logs and saved prescriptions  
- Feedback-driven model improvement  


###  Future Improvements  

- Add **ICD-10 and RxNorm integration** for cross-system compatibility  
- Deploy on **mobile platforms** for rural and emergency use  
- Support **multi-accent audio training** for better transcription  
- Build a **retraining pipeline** from feedback logs  
- Automate **summary reports** from patient logs  


###  Reflection  

This project pushed me to **think like an engineer and a designer** — balancing real-world healthcare needs with cutting-edge NLP techniques. The **feedback-driven UI**, layered NLP stack, and retraining loop gave me hands-on experience with how **AI can enhance — not replace — expert workflows**.

> Tech should adapt to the user, not the other way around — especially when lives are on the line.
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
    featured: false,
    metrics: "<30ms response, 70% CTR, 98% fewer zero results",
    category: ["Data Engineering", "MLOps & Deployment"],
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
    category: ["Full-Stack", "Automation"],
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
    id: 6,
    title: "Event-driven Integration Framework",
    description:
      "Built event-driven robust ETL workflows using Apache Airflow and SQL to orchestrate 300K+ webhook events/day. Integrated monitoring, retry handling, and cost optimization across 22+ platforms.",
      date: "Jun 2021 - Dec 2021",
      tags: ["Apache Airflow", "SQL", "Python", "Azure", "ETL"],
    gradient: "from-teal-500 to-green-500",
    featured: false,
    metrics: "300K+ events/day processed",
    category: ["Data Engineering", "Automation"],
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
    category: ["Data Analytics", "MLOps & Deployment"],
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
    title: "CI/CD Microservices API Gateway",
    description:
      "Built a FastAPI-based API gateway with Docker and Kubernetes, supporting 10K+ requests/min, and integrated Prometheus-Grafana monitoring for 99.9% uptime and real-time insights.",
      date: "Jan 2025 - Feb 2025",
      tags: ["FastAPI", "Docker", "Kubernetes", "Python", "API Design", "Grafana", "Prometheus", "DevOps", "Monitoring"],
    gradient: "from-pink-500 to-red-500",
    featured: false,
    metrics: "10K+ requests/minute, 99.9% uptime monitoring",
    category: ["Data Engineering", "MLOps & Deployment"],
    github: "https://github.com/Sarita-Joshi/CI-CD-Monitoring-Playground",
    content: `,
### Overview  
This project involved building a **FastAPI-based API Gateway** orchestrated through **Docker** and **Kubernetes**, with **NGINX Ingress** for routing and **Prometheus + Grafana** for observability.  

The goal was to create a scalable gateway system that could:
- Serve as a unified entry point for microservices  
- Handle traffic load and failures gracefully  
- Support metric collection and performance monitoring  
- Act as a **deployment backbone for ML inference APIs or data ingestion endpoints**

This forms the foundation for **serving production ML models**, exposing **data engineering services**, or enabling **AI-driven applications** behind scalable, secure APIs.


### Why API Gateways Matter in Scalable AI Systems  
In real-world ML and data platforms, models and pipelines are often deployed as microservices. API gateways help manage:

- Request routing to the right service  
- Load balancing under variable load  
- Rate limiting and access control  
- Observability and performance monitoring  
- Centralization of fault handling and logging  

This setup mirrors production deployments where **AI inference services**, **data APIs**, or **internal microservices** must be tightly orchestrated and monitored.


### Implementation Summary  

#### Infrastructure
- **Docker**: Containerized all services for modular deployment  
- **Kubernetes**: Managed scalability, availability, and health checks  
- **NGINX Ingress**: Routed incoming traffic based on defined rules  
- **Redis**: Reserved for caching and planned rate-limiting  
- **Prometheus + Grafana**: Enabled collection and visualization of real-time performance metrics

#### Gateway Capabilities
- Managed over **10,000 requests per minute** without degradation  
- Distributed traffic evenly across service pods using Kubernetes Services  
- Added tracing headers (\`X-Request-ID\`, \`X-Trace-Path\`) to support distributed observability  
- Reduced internal 500-level errors by **35%** through timeouts and fallback behavior


### Monitoring and Telemetry  
To support future production deployments, I integrated:

- **Prometheus**: Pulled time-series metrics such as request volume, latency, error rate  
- **Grafana**: Used for dashboarding and setting alert thresholds  
- **OpenTelemetry (planned)**: Foundation laid for full distributed tracing across services

This observability layer ensures the system is ready for scaling and production integration with ML pipelines or data workflows.


### Best Practices  
- **Stateless Gateway Design**: Supports horizontal scaling and restart safety  
- **Fail-Fast Logic**: Timeouts and circuit breaking prevent cascading failures  
- **Health Probes**: Kubernetes monitored service readiness and availability  
- **Separation of Concerns**: Gateway handled only traffic logic, not business logic  
- **Metrics-first Architecture**: Monitoring and logging embedded in core system flow


### Limitations  
- **GraphQL support** is not implemented; current routing supports REST APIs only  
- **Service discovery** is static; future upgrades will integrate Consul or Istio  
- **Rate limiting logic** (via Redis or NGINX) is reserved for future iteration  
- **Tracing** is initialized via headers but not yet exported or aggregated


### Future Work  
- Integrate **Redis-based rate limiting** and per-IP throttling  
- Add **JWT-based route-level authentication and RBAC**  
- Export traces to **OpenTelemetry-compatible tools** like Jaeger or Tempo  
- Build custom **Grafana dashboards** for endpoint-specific SLA monitoring  
- Benchmark against **service mesh-based gateways** (e.g., Istio, Linkerd)


### Relevance to Real world Applications
This gateway architecture directly supports:
- Serving inference APIs under load with traceability  
- Routing ingest endpoints and applying per-pipeline rate limits  
- Wrapping intelligent services with production-ready infrastructure

It serves as a **foundational piece** in any system that exposes APIs for intelligent decisioning, real-time model serving, or event-driven data processing.


### Conclusion  
This project was a deep dive into **scalable, observable backend design** using container orchestration and traffic engineering principles. While rate limiting, authentication, and tracing integration are planned next, the current build already demonstrates how API gateways can manage service health, control access, and ensure reliability in **real-world, production-level AI and data systems**.

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
    category: ["Data Engineering"],
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
    category: ["Generative AI", "MLOps & Deployment"],
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
  "Generative AI",
  "Data Engineering",
  "MLOps & Deployment",
  "Automation Tools",
  "Full-Stack",
  "Analytics"
];