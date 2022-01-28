# TailorChallenge

## Restaurants List
Your task is to write a very simple restaurants list app.

1. Write a simple REST API in NodeJS that...
 - Has a complete CRUD endpoints.
 - Returns the attached "restaurants.json" payload (or a free version of it)
 - The data can all be mocked, no need for a persistence layer.

2. Create a User Model that...
 - Has username, password and a list of favourites restaurants.
 - Add authentication methods to the API.

3. Write a Next.js app that displays the restaurants from the API
- Use Context API for state management and Axios (or similar library) for fetching data from the API
- Display an initial list with all restaurants.
- When a restaurant is selected from the list, it will render a restaurant detail view displaying a few more details about that restaurant
- Enable CRUD actions.
- Display a spinner or placeholder component while the API request is ongoing.
- Make it look decent. No need for super sophisticated design, but at a minimum, make it somewhat responsive so that it doesn’t look terrible on a mobile phone. Add images for each device.
- Retrieve user favourite restaurants and enable the ability of mark/unmark a restaurant as favourite. (That path should be protected).

4. Push the code to a public github repo with a README.md that explains how to run API & Frontend app.

### Bonus points
1. Deploy the app.
2. JWT Authentication.
3. Styled-components.
4. TypeScript in the bakend 😍
5. Write realistic unit/end-to-end tests.

## Instalation

Install Tailor-Challenge dependencies whit npm, both in the server and the client folder.

```bash
    cd server
    npm i
    npm run seed // to create a database collection to work with

    cd ..
    cd client
    npm i
```

Open 2 different terminals to run both client and server.

Terminal for server (will run on http://localhost:5005/ by default)

```bash
    cd server
    npm start
```

Terminal for client (will run on http://localhost:3000/ by default)

```bash
    cd client
    npm run dev
```

## Authors

- [Jesus-Navas](https://github.com/Jesus-Navas/) - Junior Developer from Madrid. 