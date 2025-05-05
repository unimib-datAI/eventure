# Eventour

**Harnessing Large Language Models for Efficient Crowd Management in Large-Scale Events**

Eventour is an open-source framework that leverages Large Language Models (LLMs) and generative AI to help event organizers reduce congestion and improve attendee experience by:

- Building an **enriched knowledge graph** of urban Points of Interest (POIs), transportation infrastructure, environmental data, and more  
- Generating **personalized, context-aware walking itineraries** that guide attendees through cultural landmarks before dispersing them toward metro stations  
- Incorporating **gamification elements** (interactive quizzes and puzzles) to engage users and encourage staggered departures, mitigating peak‐time crowding  
- Providing a modular **codebase** for data ingestion, preprocessing/enrichment, distance matrix computation, LLM fine-tuning, itinerary generation, and gamification content  
- Offering a React Native mobile application prototype (“Eventour”) for on-the-go delivery of itineraries and quizzes  

---

## Features

- **Data Integration & Enrichment**  
  – Ingests POIs from Wikidata, municipal open datasets (trees, benches, fountains, historic shops, NIL zones), and real-time weather  
  – Cleans, normalizes, de-duplicates, geocodes, and semantically tags records for a harmonized spatial knowledge graph  

- **Distance Matrix Computation**  
  – Uses OpenStreetMap data and OSRM to compute pedestrian distances and durations via a Dockerized routing engine  

- **LLM-Powered Itinerary Planning**  
  – Fine-tunes Mistral-7B with LoRA on abstracted distance matrices to learn itinerary rules (continuity, transport end, no duplicates, bidirectionality)  
  – Generates multiple staggered itineraries ending at metro stations, with configurable number of stops and intervals  

- **Generative Gamification**  
  – Retrieves POI metadata from Wikidata/DBpedia and uses Mistral-7B to produce multiple-choice questions and fun facts  
  – Integrates quizzes into the walking experience to sustain engagement  

- **Prototype Mobile App**  
  – React Native + Expo codebase for delivering itineraries and quizzes on iOS and Android  

---
