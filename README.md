# Do Something Web App
Do Something allows users to generate activites, submit their own activity suggestions and display all suggested activities. I used <a href="https://boredapi.com/">Bored API</a> and arrays for the data.
This is Assignment 2 for COMP 2112 - Adv Client-Side JavaScript.

## Assignment goals
- Create a React application that uses react-router dom for navigation with at least 4 page components
- Incorporate user-triggered interactions with state and effect hooks to retrieve and manage API data and display within the application
- Use Bootstrap for a consistent UI

## Pages and features
### Home
Contains a brief descrption of the app and list of app features linked to the other pages.
### Generate
Fetches randomized data from Bored API and updates the button text using values from an array on button click. Displays loading message while waiting to fetch data.
### Suggest
Collect form values and stores them in session storage upon submitssion for use on another page.
### My List
Retrieves stored form values from session storage and and displays them in cards below existing cards, containing a different set of values from an array.

## Links
- <a href="https://www.do-something-app.onrender.com">Live site</a>
- <a href="https://www.loom.com/share/e843659223dc4b9aab4eab84a873b188?sid=beddfadb-f2ab-4e11-aac3-954ed41b5e71">Loom video</a>
