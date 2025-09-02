# CheapShark Video Game Deal Lookup

This React project allows those looking for news on cheap video games to access the CheapShark API, finding news on where to find the cheapest games.

## Setup

After cloning the git repository, run npm install inside to install all dependencies, and npm run dev to open the project.

## Endpoints

(/) The home page, which offers a brief introduction and links to the game search and game lookup functions.

(/search) The search page, which allows you to search for games by name, and click on them to be taken to their game page. The results will also display the game IDs.

(/game/{id}) The game lookup page, which allows you to take a game id from previous searches and go directly to the game's page in question. The page will display its retail price, cheapest price ever, cheapest price currently, and what store you can find the last at.