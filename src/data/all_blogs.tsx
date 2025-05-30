export const blogPosts = {
  '1': {
    title: "Building Real-time Data Pipelines with Apache Spark and Kafka",
    content: `
## Introduction

In today's data-driven world, the ability to process and analyze data in real-time has become crucial for businesses to make informed decisions quickly. This article explores how to build scalable, real-time data pipelines using Apache Spark and Kafka.

## Architecture Overview

Our real-time data pipeline consists of several key components:

- **Apache Kafka** – Message broker for streaming data  
- **Apache Spark Streaming** – Real-time data processing engine  
- **Cassandra** – NoSQL database for storing processed results  
- **Grafana** – Monitoring and visualization  

## Implementation Details

The pipeline processes hundreds of thousands of events daily with sub-second latency. Here's how we achieved this:

### 1. Kafka Configuration

We configured Kafka with multiple partitions to enable parallel processing and ensure high throughput. Key configurations include:

- Partition strategy based on event timestamp  
- Replication factor of 3 for fault tolerance  
- Compression enabled to reduce network overhead  

### 2. Spark Streaming Setup

Our Spark streaming application processes data in micro-batches of 5 seconds, providing the right balance between latency and throughput.

## Performance Optimization

Several optimization techniques were applied:

- Memory tuning for Spark executors  
- Optimal batch sizing  
- Efficient serialization formats  
- Monitoring and alerting setup  

## Conclusion

Building real-time data pipelines requires careful consideration of architecture, performance, and monitoring. The combination of Spark and Kafka provides a robust foundation for processing streaming data at scale.
`,
    author: "Sarita Joshi",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "Data Engineering"
  },
  '2': {
    title: "Optimizing BERT Models for Production: Lessons from Healthcare NLP",
    content: `
## Introduction

Deploying BERT models in production healthcare environments presents unique challenges. This article shares practical insights from fine-tuning BERT for medical terminology recognition and achieving 85% NER accuracy in production systems.

## Healthcare NLP Challenges

Medical text processing involves several complexities:

- Domain-specific terminology (SNOMED CT)  
- Abbreviations and medical shorthand  
- Privacy and compliance requirements  
- Real-time processing needs  

## Model Fine-tuning Process

Our approach to fine-tuning BERT for healthcare applications:

### 1. Data Preparation

We curated a dataset of medical records with proper anonymization and SNOMED CT term mapping.

### 2. Training Strategy

Used transfer learning with BioBERT as the base model, then fine-tuned on our specific healthcare dataset.

## Production Optimization

Key optimizations for production deployment:

- Model quantization to reduce memory footprint  
- Batch processing for improved throughput  
- Caching strategies for common queries  
- A/B testing framework for model updates  

## Results and Impact

The optimized system achieved:

- 85% Named Entity Recognition accuracy  
- 30% improvement in response time  
- Successful processing of 10,000+ medical documents daily
`,
    author: "Sarita Joshi",
    date: "February 20, 2024",
    readTime: "6 min read",
    category: "Machine Learning"
  },
  '3': {
    title: "From Hackathon to Production: Scaling AI Solutions",
    content: `
## The Hackathon Journey

Winning four hackathons taught me valuable lessons about rapid prototyping and scaling AI solutions. This article shares insights from transforming hackathon projects into production-ready systems.

## Key Hackathon Wins

- **SoCal Alteryx Datathon 2024** – Real-time fraud detection system  
- **National Health Authority Hackathon 2022** – Voice prescription system  
- **Smart India Hackathon 2020** – Agricultural AI solution  
- **ACM-W India's 4th National Hackathon 2019** – Educational chatbot  

## From Prototype to Production

The journey from hackathon prototype to production involves several critical steps:

### 1. Technical Debt Management

Hackathon code is often quick and dirty. The first step is refactoring for maintainability and scalability.

### 2. Infrastructure Setup

Moving from local development to cloud infrastructure requires careful planning of CI/CD pipelines, monitoring, and deployment strategies.

### 3. Data Pipeline Robustness

Hackathon data pipelines need to be hardened for production with proper error handling, data validation, and monitoring.

## Lessons Learned

Key takeaways from scaling hackathon projects:

- Start with MVP mindset but plan for scale  
- Invest early in monitoring and observability  
- Documentation is crucial for team collaboration  
- Security and compliance cannot be afterthoughts  

## Impact and Results

Several hackathon projects have been successfully deployed:

- Fraud detection system processing 100K+ transactions/hour  
- Voice prescription system with 85% accuracy  
- Healthcare chatbot automating 30% of support tickets
`,
    author: "Sarita Joshi",
    date: "January 15, 2024",
    readTime: "5 min read",
    category: "AI/ML"
  }
};
