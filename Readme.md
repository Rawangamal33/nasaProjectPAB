# Space Biology Knowledge Engine

**A Knowledge Discovery Platform for NASA's Bioscience Research**

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/Rawangamal33/nasaProjectPAB)

---

## Executive Summary

NASA has conducted numerous biological experiments in space, generating vast scientific data essential for lunar and Mars missions. However, this knowledge is scattered, highly technical, and difficult to navigate. 

The **Space Biology Knowledge Engine** is a web-based platform that empowers researchers to discover, analyze, and interpret space biology publications efficiently. The system organizes 608 experiments into six thematic categories, provides AI-generated summaries, and integrates a Gemini-powered chatbot for interactive exploration.

---

## Project Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    User Interface                       │
│         (React + TailwindCSS Frontend)                  │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                  Backend API Layer                      │
│           (Java Spring Boot REST APIs)                  │
└────────────────────┬────────────────────────────────────┘
                     │
      ┌──────────────┼──────────────┐
      ▼              ▼               ▼
┌──────────┐  ┌──────────┐  ┌──────────────┐
│ Database │  │  Gemini  │  │    Search    │
│ SQLite/  │  │ Chatbot  │  │    Engine    │
│  Postgres│  │   API    │  │              │
└──────────┘  └──────────┘  └──────────────┘
      ▲
      │
┌─────┴──────────────────────────────────────────────────┐
│          Data Processing Pipeline                      │
│  (Python Scripts - Web Scraping & AI Enhancement)      │
│                                                        │
│  1. PMC Scraper → Extract metadata (608 papers)        │
│  2. Conclusion Extractor → Add missing sections        │
│  3. AI Summarizer → Generate summaries (T5 model)      │
│  4. Image Extractor → Collect figure URLs (3,476)      │
│  5. Photo Analyzer → Organize images (~1,000 curated)  │
└────────────────────────────────────────────────────────┘
```

---

## Methodology & Implementation

Space biology research plays a critical role in understanding human health and biology during long-duration missions to the Moon and Mars. Despite NASA's extensive research, publications are often fragmented and not easily accessible. Researchers face challenges in quickly retrieving relevant studies or synthesizing results. 

Our solution bridges this gap by providing a structured, interactive platform to make NASA's bioscience research more accessible.

---

## Methodology & Implementation

### Data Collection & Analysis
Collected and processed 608 NASA space biology publications from PubMed Central, extracting metadata including titles, abstracts, authors, keywords, DOIs, publication years, results sections, and figure captions. Applied AI-powered text summarization to generate concise summaries for rapid comprehension.

### Backend Development
Built robust REST APIs using Java Spring Boot to handle data retrieval, search functionality, and database operations. Implemented efficient query optimization for fast response times.

### Frontend Development
Developed responsive user interface using React and TailwindCSS, featuring advanced search, thematic filtering, and intuitive navigation for seamless user experience.

### Chatbot Integration
Integrated Gemini AI chatbot to provide interactive assistance, explain complex concepts, and help researchers explore related studies through natural language queries.

### Workflow & Coordination
Coordinated data processing, backend API development, frontend implementation, and AI integration using collaborative tools including Google Sheets, Excel, Canva, and mind mapping software.

---

## Key Features

| Feature | Impact |
|---------|--------|
| Advanced Search | Search by title, author, or year |
| Thematic Categories | Six categories for efficient navigation |
| Summarized Abstracts & Results | Quick understanding of key findings |
| Gemini Chatbot | AI-powered assistant for deeper analysis |
| Interactive Frontend | React-based user-friendly interface |
| Reliable Backend | Java Spring Boot APIs for robust performance |

---

## Tools & Technologies

| Component | Tools / Frameworks |
|-----------|-------------------|
| Data Processing | Python, BeautifulSoup, Pandas |
| AI & NLP | Gemini Chatbot, T5 Text Summarization |
| Backend | Java, Spring Boot |
| Frontend | React, TailwindCSS |
| Database | SQLite / PostgreSQL |
| Collaboration | Google Sheets, Excel, Canva, Mind Mapping |

---

## Impact

The Space Biology Knowledge Engine allows researchers to:
- Filter publications by thematic category
- Search by keywords, authors, or years
- Read structured AI-generated summaries
- Interact with chatbot assistant for clarification
- Access organized research images and figures

This reduces barriers to accessing specialized data, accelerates discovery, and improves collaboration, ultimately supporting future lunar and Mars missions.

**"Accelerating space biology discoveries for the next frontier of exploration."**

---

## Project Statistics

- **608 papers** organized and processed
- **6 thematic categories** for navigation
- **3,476 images** extracted and classified
- **85-95%** data extraction success rate

---

## Future Work

- Add grants and funding section to support researchers
- Develop Top 10 Experiments showcase based on scientific impact
- Integrate NASA Task Book metadata to link publications with projects
- Expand chatbot training data for improved responses
- Add data visualization dashboard

---

## Links & Resources

| Resource | Link / Description |
|----------|-------------------|
| GitHub Repository | [https://github.com/Rawangamal33/nasaProjectPAB](https://github.com/Rawangamal33/nasaProjectPAB) |
| Dataset Source | NASA SB_publications (608 papers) |
| Dataset Link | [https://github.com/jgalazka/SB_publications/tree/main](https://github.com/jgalazka/SB_publications/tree/main) |

---


## Acknowledgments

- NASA for providing open access to space biology research
- PubMed Central for article repository
- Hugging Face for AI models
- Google Gemini for chatbot API

---

**Disclaimer**: This tool is for research and educational purposes. All data sourced from NASA's open access repositories.