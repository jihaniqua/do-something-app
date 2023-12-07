# Do Something Web App

Do Something allows users to generate activites, submit their own activity suggestions and display all suggested activities. I used <a href="https://boredapi.com/">Board API</a> and arrays for the data.
This is Assignment 2 for COMP 2112 - Adv Client-Side JavaScript.

## Assignment goals

- Create a React application that uses react-router dom for navigation with at least 4 page components
- Incorporate user-triggered interactions with state and effect hooks to retrieve and manage API data and display within the application
- Use Bootstrap for a consistent UI

## Page features

1. Home: Contains a brief descrption of the app and list of app features linked to the other pages.
2. Generate: Fetches randomized data from Bored API and updates the button text using values from an array on button click. Displays "loading.." while waiting to fetch data.
3. Suggest: Collect form values and stores them in session storage upon submitssion for use on another page.
4. My List: Retrieves stored form values from session storage and and displays them in cards below existing cards, containing a different set of values from an array.

### Live site
