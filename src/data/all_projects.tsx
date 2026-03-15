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
    category: ["Full-Stack","Data & Analytics"],
    workType: "Academic",
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
    tags: ["LangChain", "Agentic AI", "RAG", "OpenAI", "Python", "Automation"],
    gradient: "from-fuchsia-500 to-purple-600",
    featured: false,
    metrics: "10+ article workflows automated, 2x content velocity",
    category: ["AI/ML"],
    workType: "Personal",
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
    featured: false,
    metrics: "30% automation rate, <2% reopen rate",
    category: ["AI / ML"],
    workType: "Professional",
    // github: "https://github.com/sarita-joshi/fraud-detection",
    content: `
### The Problem: Support Tickets Were Drowning the Team

The customer support team at Bajaj Finserv Health was handling thousands of tickets daily — everything from "where's my claim?" to "how do I update my insurance plan?" Most of these were repetitive, well-documented questions, but each still required a human agent to read, understand, and respond. The result: long wait times, agent burnout, and inconsistent answer quality.

The goal was to build an **AI-powered chatbot** that could autonomously resolve common queries while intelligently escalating complex ones — without frustrating the user.


### Architecture

The system was built as a **RAG (Retrieval-Augmented Generation) pipeline** integrated with Salesforce for ticket management:

\`\`\`
User Query → Intent Classification → RAG Retrieval → LLM Response Generation → Salesforce Sync
                                          ↓
                                   Knowledge Base
                                (FAQs, Policy Docs,
                                 Claim Procedures)
\`\`\`

#### Core Components

| Component | Technology | Purpose |
|-----------|-----------|---------|
| LLM | OpenAI GPT (ChatGPT API) | Response generation |
| Orchestration | LangChain | Prompt chaining, retrieval, memory |
| Knowledge Base | Internal docs, FAQs, policy PDFs | Grounding source for RAG |
| CRM Integration | Salesforce | Ticket creation, status sync, agent handoff |
| Logging | Azure SQL | Query logs, confidence scores, resolution tracking |


### The Triaging Flow

Not every query should go to the LLM. The system used a **confidence-based triage pipeline**:

1. **Intent Detection** — Classify the incoming query (claim status, policy info, complaint, general FAQ)
2. **RAG Retrieval** — Pull the most relevant documents from the knowledge base using vector similarity
3. **Response Generation** — LLM generates a grounded answer using retrieved context
4. **Confidence Scoring** — If the model's confidence falls below threshold, the ticket is routed to a human agent with full context attached
5. **Salesforce Sync** — Every interaction is logged as a Salesforce case — whether auto-resolved or escalated

This meant agents only handled the genuinely complex cases, and when they did, they had the full conversation history and retrieved context already attached.


### Handling Edge Cases

- **Sensitive queries** (billing disputes, legal complaints) were auto-escalated regardless of confidence — certain intent categories always went to humans
- **Ambiguous queries** got a clarification prompt before attempting resolution
- **Multi-turn conversations** used LangChain's conversation memory to maintain context across follow-ups


### Results

| Metric | Value |
|--------|-------|
| Ticket auto-resolution rate | **30%** |
| Reopen rate | **<2%** (over 2 months) |
| Agent time saved | **320+ hours/month** |
| Average response time | **<5 seconds** (vs 4+ hours for human response) |

The <2% reopen rate was the key validation — it meant the bot wasn't just closing tickets, it was actually resolving them correctly.


### Challenges & Learnings

- **Prompt engineering was critical** — early prompts generated verbose, off-topic responses. Iterating on system prompts with few-shot examples dramatically improved answer quality
- **Latency vs quality tradeoff** — longer context windows improved accuracy but increased response time. Settled on a chunked retrieval approach with top-3 document passages
- **Knowledge base freshness** — policy documents changed frequently. Built a weekly re-indexing pipeline to keep the RAG source current
    `,
  },
  {
  id: 19,
  title: "Graph RAG: From Notes to Knowledge Graphs",
  description:
    "Transforms unstructured notes into a queryable knowledge graph using LLMs and graph traversal instead of vector similarity for multi-hop reasoning.",
  date: "Jun 2025",
  tags: [
    "FastAPI",
    "React",
    "D3.js",
    "LlamaIndex",
    "Graph RAG",
    "TailwindCSS",
    "Python",
  ],
  gradient: "from-sky-500 to-indigo-500",
  featured: true,
  metrics: "Interactive graph-based RAG; live chat + visualization",
  category: ["AI / ML"],
  workType: "Personal",
  github: "https://github.com/Sarita-Joshi/note-to-knowledge",
  demo: "graph-whisperer-react-app-GoogleChrome2025-06-1600-57-52-ezgif.com-video-speed.mp4",
  content: `
### The Idea: What If Your Notes Could Think?

Traditional RAG systems work by chunking documents, embedding them into vectors, and retrieving the most similar chunks to a query. This works well for direct lookups — but falls apart when answering questions that require **connecting information across multiple notes**.

For example, if Note A says "Project X uses Kafka" and Note B says "Kafka requires Zookeeper for coordination," a vector search for "what does Project X depend on?" might retrieve Note A but miss Note B entirely. The relationship chain \`Project X → Kafka → Zookeeper\` is invisible to vector similarity.

**Graph RAG** solves this by extracting **entities and relationships** from text and building a **knowledge graph** that can be traversed for multi-hop reasoning.


### How It Works

#### 1. Document Ingestion
Users upload raw text or notes through the React frontend. The backend receives the content via \`POST /upload\` and triggers the extraction pipeline.

#### 2. Triple Extraction
An LLM (configurable — supports **OpenAI, Gemini, and Groq**) processes each document and extracts structured relationships in the form:

\`\`\`
(Entity A) —[Relationship]→ (Entity B)
\`\`\`

For example, from the text *"Sarita built a fraud detection system using Spark and Kafka"*, the LLM extracts:
- (Sarita) —[built]→ (Fraud Detection System)
- (Fraud Detection System) —[uses]→ (Spark)
- (Fraud Detection System) —[uses]→ (Kafka)

#### 3. Knowledge Graph Construction
Extracted triples are assembled into a graph structure where:
- **Nodes** = entities (people, tools, concepts, projects)
- **Edges** = relationships between them

The graph is served via \`GET /graph\` and rendered as an **interactive D3.js visualization** — users can see their knowledge network grow in real-time as they upload more notes.

#### 4. Graph-Grounded Chat
When a user asks a question via the chat interface (\`GET /chat\`), instead of vector similarity search, the system:
1. Identifies relevant entities in the query
2. Traverses the graph to find connected entity clusters
3. Assembles the relevant triples as context
4. Passes them to the LLM for a grounded response

This means the system can answer **multi-hop questions** that require connecting information across different notes — something traditional RAG struggles with.


### Architecture

| Layer | Technology | Role |
|-------|-----------|------|
| Frontend | React, TailwindCSS | Upload interface, chat, settings |
| Visualization | D3.js | Interactive knowledge graph rendering |
| Backend | FastAPI (Python) | API layer for ingestion, graph, and chat |
| RAG Engine | LlamaIndex (Graph RAG mode) | Triple extraction and graph-based retrieval |
| LLM Providers | OpenAI, Gemini, Groq | Configurable — user selects in settings |


### API Design

| Endpoint | Method | Purpose |
|----------|--------|---------|
| \`/upload\` | POST | Ingest documents, trigger triple extraction |
| \`/graph\` | GET | Return nodes and edges for visualization |
| \`/chat\` | GET | Query the graph, return LLM-grounded response |


### Technical Challenges

- **Async conflicts**: LlamaIndex's internal coroutines conflicted with FastAPI's async routing. Solved with \`asyncio.run()\` wrappers and careful sync/async boundary management
- **Triple quality**: LLM-extracted triples aren't always clean — duplicate entities with slightly different names (e.g., "Kafka" vs "Apache Kafka") create fragmented graphs. Entity resolution is on the roadmap
- **Graph scale**: D3.js visualization slows down with large graphs. Currently manageable for personal note collections, but would need clustering or pagination for larger corpora


### What Makes This Different from Standard RAG

| Aspect | Vector RAG | Graph RAG (this project) |
|--------|-----------|------------------------|
| Retrieval method | Cosine similarity on embeddings | Graph traversal on entity relationships |
| Multi-hop reasoning | Weak — each chunk is independent | Strong — follows relationship chains |
| Explainability | "These chunks were similar" | "These entities are connected because..." |
| Context assembly | Top-K similar chunks | Connected subgraph around query entities |


### Roadmap
- **Neo4j** for persistent graph storage (currently in-memory)
- **Entity resolution** via spaCy or embedding similarity to merge duplicate nodes
- **Hybrid RAG** — combine graph traversal with vector retrieval for best of both worlds
- **Feedback loops** — let users validate or correct extracted triples
- **Agent memory** — use the knowledge graph as long-term memory for AI agents
`,
}
,
  {
  id: 17,
  title: "OCTA Traffic & Demand Analytics",
  description:
    "Analyzed Orange County’s transit data using Alteryx and Tableau to visualize future travel demand and recommend infrastructure strategies for 2045. Delivered actionable insights on route efficiency and growth areas.",
  date: "Oct 2024",
  tags: ["Alteryx", "Tableau", "Data Visualization", "Transportation", "Urban Planning"],
  gradient: "from-amber-500 to-yellow-600",
  featured: false,
  metrics: "40% faster insight generation, 3 key infrastructure recommendations",
  category: [ "Data & Analytics"],
  workType: "Hackathon",
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
    workType: "Academic",
    github: "https://github.com/Sarita-Joshi/FullStack-Scholarship-Funding-Smart-Contract",
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
  featured: true,
  metrics: "Real-time suggestions with <300ms response time",
  category: ["AI / ML", "Full-Stack"],
  workType: "Personal",
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
    category: ["AI / ML", "Full-Stack"],
    workType: "Hackathon",
    github: "https://github.com/Sarita-Joshi/recycli_ACMWHackathon",
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
    featured: true,
    metrics: "85% NER accuracy, 30% faster response,  HIPAA-compliant",
    category: ["Full-Stack", "AI / ML"],
    workType: "Hackathon",
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
    metrics: "<30ms response, 70% CTR, <1% zero result queries",
    category: ["Full-Stack","Data & Analytics", "AI / ML"],
    workType: "Hackathon",
    // github: "https://github.com/sarita-joshi/fraud-detection",
    content: `
### The Problem: Finding the Right Healthcare Provider Shouldn't Be Hard

Healthcare platforms live or die by search. When a user types "cardiologist near me" or "Dr. Sharma pediatrics," they expect instant, relevant results — not a wall of irrelevant listings. The existing search was SQL-based, slow, and returned zero results far too often.

I was tasked with building a **search engine from scratch** — one that could handle 1M+ requests/day across 20+ endpoints, with sub-30ms latency and intelligent ranking.


### Architecture & Evolution

**Phase 1: ELK Stack Foundation**
The initial build used the classic ELK stack — **Elasticsearch** for indexing and retrieval, **Logstash** for log processing, and **Kibana** for monitoring search analytics. MySQL served as the source of truth for provider data.

**Phase 2: Real-time Sync via CDC**
Static index dumps weren't cutting it. Provider data changed constantly — new registrations, updated schedules, changed specialties. I migrated to a **Change Data Capture (CDC)** pipeline that streamed MySQL changes into Elasticsearch in near real-time, ensuring the index was always fresh.

**Phase 3: Multi-Index Architecture**
Different search contexts needed different index strategies:
- **Provider search** — fuzzy matching on names, specialties, locations
- **Facility search** — geo-based queries with distance scoring
- **Service search** — keyword + category matching

Each got its own optimized Elasticsearch index with custom analyzers and mappings. A **multi-index sync layer** kept everything consistent.


### Custom Ranking Logic

Off-the-shelf Elasticsearch scoring wasn't enough. I built a **custom ranking pipeline** that combined:

| Signal | Purpose |
|--------|---------|
| Text relevance (BM25) | Base match quality |
| Availability score | Prioritize providers with open slots |
| User engagement (CTR) | Learn from what users actually click |
| Recency boost | Favor recently active providers |
| Geo-distance decay | Closer results rank higher |

Rankings were tuned through **daily analysis and A/B testing** — we'd ship a scoring variant, measure CTR and conversion, and iterate weekly.


### Scale & Performance

- **20+ search endpoints** covering providers, facilities, services, and autocomplete
- **1M+ requests/day** served through a Node.js API layer
- **<30ms p95 latency** with Elasticsearch query caching and connection pooling
- **<1% zero-result rate** — down from ~15% with the old SQL search
- **70% CTR** on search results — a strong signal that ranking quality was high


### Technical Challenges

- **Index drift**: CDC pipelines occasionally fell behind during peak writes. Built a reconciliation job that ran nightly to catch any missed updates
- **Synonym handling**: Medical terminology is full of aliases ("heart doctor" = "cardiologist"). Maintained a custom synonym dictionary updated monthly
- **Cold-start providers**: New providers had no engagement data for ranking. Used a boosted-recency signal to give them initial visibility


### Impact
This search engine became the backbone of the platform's discovery experience — powering every provider lookup, facility finder, and service search across web and mobile. The jump from SQL queries to a purpose-built search stack transformed both user experience and business metrics.
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
    category: ["Full-Stack", "AI / ML"],
    workType: "Professional",
    // github: "https://github.com/sarita-joshi/fraud-detection",
    content: `
### The Challenge: Testing Voice Assistants at Automotive Scale

At Mercedes-Benz R&D, the MBUX voice assistant is tested across hundreds of speech scenarios before every build release — think navigation commands, media controls, vehicle function triggers, and general knowledge queries. Previously, this was done **manually**: an engineer would sit in front of the vehicle hardware, speak a test phrase, wait for the response, and log whether it passed or failed.

This approach was slow (4+ minutes per scenario), error-prone, and didn't scale across the 250+ test cases needed per build cycle.

I was brought on to **automate the entire end-to-end validation pipeline**.


### How It Works

The system replaces the human tester with an automated pipeline that handles speech generation, hardware communication, response capture, and result evaluation:

#### 1. Test Phrase Generation (TTS)
Instead of a human speaking, **Text-to-Speech (TTS)** generates audio for each test phrase. These are fed to the vehicle's microphone input, simulating a real driver interaction.

#### 2. Vehicle Hardware Communication (DLT Protocol)
The test rig connects to the vehicle's **ECU (Electronic Control Unit)** via the **DLT (Diagnostic Log and Trace)** protocol — the standard for embedded automotive logging. I wrote a **custom Python-based DLT logger** that:
- Connects to the vehicle hardware over socket
- Streams and parses real-time logs from the MBUX OS
- Filters relevant dialog events from thousands of system messages

#### 3. UI Activity Capture (OpenCV)
For scenarios where the assistant responds visually (e.g., showing a navigation route or adjusting a setting), **OpenCV** captures and analyzes the vehicle display output — verifying that the correct screen rendered in response to the command.

#### 4. Response Validation
Each test case has an expected outcome. The system evaluates responses in two categories:

| Response Type | Validation Method |
|---------------|-------------------|
| **Cloud responses** (general info, weather, etc.) | LLM-based semantic comparison against expected answers |
| **Vehicle functions** (AC, windows, navigation) | DLT log tracking to verify the correct vehicle function was triggered |

#### 5. Report Generation
After each build cycle, the system generates a structured test report — pass/fail per scenario, response latency, confidence scores — and publishes it for the engineering team.


### Multi-Process Architecture
The pipeline runs as a **multi-process Python application**:
- One process handles TTS audio playback and ECU communication
- Another handles DLT log streaming and parsing
- A third manages OpenCV screen capture
- The main orchestrator coordinates timing, collects results, and generates reports

This parallelism was critical — DLT logs stream continuously and can't be paused, so capture had to happen concurrently with test execution.


### Impact

| Metric | Before | After |
|--------|--------|-------|
| Time per scenario | ~4 minutes | ~30 seconds |
| Regression time reduction | — | **85%** |
| Test coverage | Manual subset | **250+ scenarios automated** |
| Test reliability improvement | — | **48%** |

### Technical Challenges
- **DLT parsing**: No existing Python library handled Mercedes' custom DLT format well. The custom logger I built had to handle binary protocol parsing, message filtering, and reconnection on hardware resets
- **Timing sensitivity**: TTS playback, ECU response, and log capture all had to be synchronized within tight windows — off by 500ms and you'd miss the response log
- **Environment variability**: Different MBUX versions had different log formats and response patterns, requiring configurable parsing rules
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
    category: ["Data & Analytics"],
    workType: "Professional",
    // github: "https://github.com/sarita-joshi/fraud-detection",
    content: `
### The Problem: 22 Platforms, Zero Unified Tracking

At Bajaj Finserv Health, user interactions were scattered across dozens of systems — Salesforce for CRM, Google Analytics for web behavior, CleverTap and Netcore for push/WhatsApp engagement, ValueFirst for call center events, and multiple in-house services for app activity. Each platform had its own event format, its own webhook structure, and its own idea of what a "user action" looked like.

The business needed a **single, unified event backbone** that could ingest, normalize, and route 300K+ events/day across all these systems — reliably and in near real-time.


### What Got Built

An **event-driven integration framework** that acted as the central nervous system for all user communication and engagement data:

#### Event Types Captured
- **User lifecycle events**: app open/close, page views, drop-offs, sign-ups
- **Communication events**: SMS sent/delivered, email opened/clicked, WhatsApp messages via CleverTap/Netcore
- **Call center events**: inbound/outbound calls, IVR selections, agent assignments (ValueFirst)
- **CRM events**: lead creation, stage changes, task assignments (Salesforce)
- **Custom business events**: drop-off campaign triggers, re-engagement flows, funnel completions


### Architecture

\`\`\`
External Platforms (22+)
    ↓ webhooks / APIs
Ingestion Layer (Python + Azure Functions)
    ↓ normalize & validate
Event Queue (Azure Service Bus)
    ↓
Processing Layer (Apache Airflow DAGs)
    ↓ transform & enrich
SQL Server (canonical event store)
    ↓
Downstream Consumers (dashboards, campaigns, analytics)
\`\`\`

#### Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| **Airflow for orchestration** | DAG-based scheduling gave visibility into every step, with built-in retry and alerting |
| **SQL-based step registry** | Each DAG step was registered in a metadata table — making it easy to track what ran, when, and whether it succeeded |
| **Azure Key Vault** | All API keys and webhook secrets stored centrally, rotated without code changes |
| **Idempotent processing** | Every event had a unique ID — duplicates were detected and skipped at the ingestion layer |


### Custom Drop-off Campaigns

Beyond just moving data, the framework powered **intelligent re-engagement**. When a user dropped off mid-funnel (e.g., started a health plan purchase but didn't complete payment), the system would:

1. Detect the drop-off event in real-time
2. Classify the drop-off stage and user segment
3. Trigger a personalized campaign (WhatsApp nudge, email reminder, or agent callback) via the appropriate channel

These campaigns were fully configurable through a rules engine — marketing could adjust timing, channel, and message without engineering involvement.


### Scale & Reliability

| Metric | Value |
|--------|-------|
| Events processed daily | **300K+** |
| Platforms integrated | **22+** |
| Data lag (before → after) | **2 hours → 5 minutes** |
| Webhook reliability | **99.5%** first-attempt delivery |

### Challenges

- **Webhook inconsistency**: Every platform had a different payload format, retry policy, and auth mechanism. Built a normalization layer with per-platform adapters
- **Retry edge cases**: Some platforms sent duplicate webhooks on timeout. The idempotency layer caught most, but edge cases around partial processing required careful state tracking
- **Airflow scaling**: At 300K events/day, Airflow's scheduler needed tuning — increased parallelism, optimized DAG parsing, and moved to CeleryExecutor for distributed task execution
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
    category: ["Data & Analytics"],
    workType: "Professional",
    // github: "https://github.com/sarita-joshi/fraud-detection",
    content: `
### The Problem: Marketing Was Flying Blind

The sales and marketing team was running campaigns across millions of prospects — but treating them all equally. Every lead got the same outreach, the same cadence, the same messaging. The result: low conversion rates, wasted ad spend, and no way to tell which leads were actually worth pursuing.

The ask was straightforward: **build a system that scores leads by their likelihood to convert, so the team can focus on the ones that matter.**


### Approach: From Raw Data to Actionable Scores

#### Data Foundation
I started with **2M+ lead records** spanning demographic data, interaction history, campaign responses, and product interest signals. All sourced from SQL databases and CRM exports.

#### Feature Engineering
The raw data needed significant shaping before it was model-ready:

| Feature Category | Examples |
|-----------------|----------|
| **Demographics** | Age, location, income bracket, occupation |
| **Behavioral** | Pages visited, time on site, email opens/clicks |
| **Campaign history** | Past campaign responses, channel preference, recency |
| **Product signals** | Products viewed, quote requests, plan comparisons |

Feature engineering was done in **SQL** for the heavy joins and aggregations, with **Python (Pandas)** for transformation and encoding.

#### Model Training
Tested multiple approaches using **Scikit-learn**:

| Model | Precision | Recall | Notes |
|-------|-----------|--------|-------|
| Logistic Regression | Good | Moderate | Fast, interpretable baseline |
| Random Forest | Better | Better | Handled feature interactions well |
| Gradient Boosting (XGBoost) | Best | Best | Final production model |

The key challenge was **class imbalance** — converters were a small fraction of total leads. Used SMOTE oversampling and adjusted class weights to improve recall without tanking precision.


### The Dashboard

Scores alone weren't useful without a way for the marketing team to act on them. Built interactive dashboards in **Power BI and Tableau** that enabled:

- **Lead scoring view** — every prospect ranked by conversion probability, filterable by segment, region, and campaign
- **Campaign performance** — which campaigns were attracting high-score leads vs low-score ones
- **Strategy comparison** — A/B views showing conversion rates across different targeting approaches
- **Score distribution** — understanding how scores shifted over time and across cohorts


### Iterating on Strategy

The real value wasn't just the model — it was the **feedback loop**. The team could:

1. Run a campaign targeting only high-score leads
2. Measure actual conversion rates in the dashboard
3. Compare against broad-targeting campaigns
4. Adjust strategy and re-score

This cycle of **score → target → measure → iterate** is what drove the 2x conversion improvement — not any single model tweak.


### Results

| Metric | Value |
|--------|-------|
| Lead records analyzed | **2M+** |
| Conversion rate improvement | **2x** |
| Campaign targeting efficiency | Significantly improved — fewer leads contacted, higher conversions |


### Challenges & Learnings

- **Score staleness**: Lead behavior changes over time. Built a monthly retraining pipeline to keep scores fresh
- **Stakeholder trust**: The marketing team initially didn't trust model scores over their gut feel. Showing side-by-side campaign results (scored vs unscored targeting) built credibility
- **Data quality**: Inconsistent CRM entries and missing fields were the biggest bottleneck — spent significant effort on data cleaning and validation before modeling
    `,
  },
  {
    id: 8,
    title: "CI/CD Microservices API Gateway",
    description:
      "Built a FastAPI-based API gateway with Docker and Kubernetes, supporting 10K+ requests/min, and integrated Prometheus-Grafana monitoring for 99.9% uptime and real-time insights.",
      date: "Jan 2025 - Feb 2025",
      tags: ["DevOps", "Deployment", "observability", "FastAPI", "Docker", "Kubernetes", "Python", "API Design", "Grafana", "Prometheus", "DevOps", "Monitoring"],
    gradient: "from-pink-500 to-red-500",
    featured: false,
    metrics: "10K+ requests/minute, 99.9% uptime monitoring",
    category: ["Full-Stack"],
    workType: "Personal",
    github: "https://github.com/Sarita-Joshi/CI-CD-Monitoring-Playground",
    content: `,
### Overview  
This project involved building a **FastAPI-based API Gateway** orchestrated through **Docker** and **Kubernetes**, with **NGINX Ingress** for routing and **Prometheus + Grafana** for observability.  

The goal was to create a scalable gateway system that could:
- Serve as a unified entry point for microservices  
- Handle traffic load and failures gracefully  
- Support metric collection and performance monitoring  
- Act as a **deployment backbone for ML inference APIs or data ingestion endpoints**

This forms the foundation for **serving production ML models**, exposing **Data & Analytics services**, or enabling **AI-driven applications** behind scalable, secure APIs.


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
      "Engineered integration pipelines on azure data lake using Databricks, Synapse, and Blob Storage. Automated ingestion and partitioning for multi-GB daily data flow.",
    date: "May 2025 - ",
    tags: ["Azure", "Synapse", "Data Lake", "Databricks", "Big Data"],
    gradient: "from-purple-500 to-indigo-500",
    featured: false,
    metrics: "8GB+ daily processing",
    category: ["Data & Analytics"],
    workType: "Professional",
    // github: "https://github.com/sarita-joshi/fraud-detection",
    content: `
### The Problem: Data Silos Were Killing Cross-Team Analytics

Healthcare data at scale is messy. Clinical data, claims data, user engagement data, and operational data all lived in different systems with different schemas and different update cadences. Teams that needed cross-cutting insights — like correlating claim processing times with customer satisfaction — had to manually export, join, and analyze data in spreadsheets.

The goal: build a **centralized data lake on Azure** that could ingest, clean, and serve multi-GB daily data flows to any team through a single, governed platform.


### Architecture: Three-Layer Lakehouse

The data lake followed a classic **medallion architecture** with three layers:

\`\`\`
Data Sources (APIs, databases, files)
        ↓
   ┌─────────────┐
   │  Raw Layer   │  ← Azure Blob Storage (Parquet format)
   │  (Bronze)    │     Exact copy of source data, immutable
   └──────┬──────┘
          ↓
   ┌─────────────┐
   │ Cleaned Layer│  ← Databricks (PySpark ETL jobs)
   │  (Silver)    │     Deduped, validated, schema-enforced
   └──────┬──────┘
          ↓
   ┌─────────────┐
   │ Aggregated   │  ← Databricks + Synapse Analytics
   │  (Gold)      │     Business-ready metrics and dimensions
   └──────┬──────┘
          ↓
    Consumers (Power BI, APIs, ML pipelines)
\`\`\`


### Layer Details

#### Bronze (Raw)
- Data ingested into **Azure Blob Storage** in **Parquet format** — columnar, compressed, and partition-friendly
- Sources included database CDC streams, API pulls, and file drops
- Every record retained as-is for auditability — no transformations at this stage

#### Silver (Cleaned)
- **Databricks notebooks** (PySpark) handled the heavy lifting:
  - Schema validation and type enforcement
  - Deduplication based on composite keys
  - Null handling and outlier flagging
  - Timestamp normalization across time zones
- Output: clean, consistent tables partitioned by date

#### Gold (Aggregated)
- Business-level aggregations built on top of silver tables:
  - Daily/weekly/monthly KPIs
  - Dimensional tables for reporting (provider, region, product)
  - Pre-computed metrics for Power BI dashboards
- **Synapse Analytics** served as the query engine for ad-hoc analysis and dashboard backends


### Ingestion Pipeline

| Stage | Technology | Detail |
|-------|-----------|--------|
| Extraction | Azure Data Factory | Scheduled pulls from source databases and APIs |
| Landing | Azure Blob Storage | Raw Parquet files partitioned by source and date |
| Processing | Databricks (PySpark) | Bronze → Silver → Gold transformations |
| Serving | Synapse Analytics | SQL-based querying for dashboards and reports |
| Visualization | Power BI | Connected to Gold layer for real-time dashboards |


### Scale & Performance

| Metric | Value |
|--------|-------|
| Daily data ingestion | **8GB+** |
| Processing framework | Databricks auto-scaling clusters |
| Query engine | Synapse serverless SQL pools |
| Consumers | Power BI, data science team, operations team |


### Challenges

- **Schema drift**: Source systems occasionally changed column names or types without warning. Built schema validation checks in the Bronze → Silver step that flagged and quarantined non-conforming records
- **Partition strategy**: Choosing the right partition key (date vs source vs region) had a huge impact on query performance. Settled on date-based partitioning for time-series queries with secondary partitions by data source
- **Cost management**: Databricks clusters and Synapse queries can get expensive fast. Implemented auto-scaling policies and query timeouts to keep costs predictable
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
    category: ["Data & Analytics"],
    workType: "Professional",
    // github: "https://github.com/sarita-joshi/fraud-detection",
    content: `
### The Problem: Invoice Approvals Were a Black Hole

The finance team's invoice approval process was entirely manual — an invoice would arrive, get forwarded via email to the department head, then to the finance department, then back if something was wrong. There was no central tracker, no standardized format, and no way to know where an invoice was stuck in the pipeline.

Invoices got lost in inboxes. Approvals took days. The finance team spent more time chasing people than processing payments.


### What Got Built

An **end-to-end invoice approval automation system** using Microsoft Power Automate, with SharePoint Lists as the central data store:

\`\`\`
Invoice Submitted (Form/Email)
        ↓
  SharePoint List Entry
  (standardized format)
        ↓
  Department Head Approval
  (Power Automate flow)
        ↓
  Finance Department Review
  (Power Automate flow)
        ↓
  Approved / Rejected / Returned
        ↓
  Auto-notifications & Audit Log
\`\`\`


### Approval Flow Design

The system supported **multiple approval workflows** depending on invoice type and amount:

| Invoice Type | Flow |
|-------------|------|
| Standard (<threshold) | Dept Head → Finance → Auto-approve |
| High-value (>threshold) | Dept Head → Finance Head → CFO → Finance |
| Recurring vendors | Pre-approved template → Finance only |

Each flow was built as a separate Power Automate cloud flow with conditional branching based on invoice metadata.


### SharePoint as the Single Source of Truth

The key design decision was using **SharePoint Lists** to standardize everything:

- Every invoice entered the system in a **consistent format** — vendor name, amount, department, GL code, supporting documents
- The finance team could view all invoices in one place, filter by status, and export for reporting
- Approval status, timestamps, and approver comments were tracked on each list item
- This solved the finance team's core pain: **"where is this invoice and who's holding it up?"**


### Reminder & Follow-up Flows

Approvals that sat idle for more than a configured period triggered **automated follow-ups**:

- **24-hour reminder** — gentle nudge to the pending approver
- **48-hour escalation** — CC the approver's manager
- **Weekly digest** — summary of all pending approvals sent to department heads

These flows alone eliminated most of the "chasing people" overhead the finance team dealt with.


### Results

| Metric | Value |
|--------|-------|
| Manual approval effort reduction | **40%** |
| Tasks auto-handled via flows | **90%** |
| Average approval turnaround | Reduced from days to hours |
| Invoice tracking visibility | **100%** — every invoice traceable in SharePoint |


### Challenges

- **Power Automate limitations**: Complex branching logic was hard to maintain visually in Power Automate's designer. Kept flows modular (one flow per approval type) to manage complexity
- **SharePoint list limits**: Large lists (5000+ items) hit view threshold limits. Implemented indexed columns and filtered views to keep performance acceptable
- **User adoption**: Getting department heads to approve via the flow instead of replying to emails required training and gentle enforcement by the finance team
    `,
  },
];

export const categories = [
  "All",
  "AI / ML",
  "Data & Analytics",
  "Full-Stack",
];