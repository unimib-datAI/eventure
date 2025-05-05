# Dynamic-Itinerary-Planning-and-Gamified-Crowd-Management

Milan is a vibrant city renowned for hosting a wide range of events, from football matches and concerts to fashion shows and design week. While these events bring economic and cultural benefits, they also contribute to significant challenges, particularly traffic and walking congestion. Large gatherings often strain public transport systems, causing crowding and safety concerns, especially at metro stations after events.
This study explores the use of Large Language Models (LLMs) to mitigate post-event congestion by generating personalized walking itineraries around key Points of Interest (POIs) in Milan, such as monuments, museums, art galleries, and theaters. The aim is to guide visitors to explore nearby attractions, encouraging them to walk to these sites, respond to LLMs generated questions or read facts about the visited place with the final goal of having a staggered arrival at the nearest metro station, avoiding congestion. The study involves developing a distance and walking duration matrix between POIs based on the OpenStreetMaps data, fine-tuning an LLM using LoRA to optimize itinerary generation based on POI type and time constraints, and generating contextual questions and facts to enhance visitor engagement.

To proceed with running the full project the numerical order must be followed:
1. Selezione-POIs-Knowledge-Graph
2. Generazione-Matrice-Distanze-Docker
3. Dataset Fine tuning Generator
4. Model_Finetuning
5. Mistral_finetunato_itinerary_MCQS


- The fine tuning Dataset is available in Hugging Face: https://huggingface.co/datasets/matteanedda/path_selection_bidirectionality_and_connection_understanding_master
- The Fine tuned model is available in Hugging Face: https://huggingface.co/matteanedda/Itinerary_Selection_Mistral 
