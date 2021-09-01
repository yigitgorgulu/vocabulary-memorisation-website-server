# Vocabulary Memorization Website Server

A server developed for my [vocabulary review website](https://github.com/yigitgorgulu/vocabulary-memorisation-website).

# Description

This is a server which stores information about the users, their decks, their cards and their sessions on the website.

## How to use

To use this server, simply send GET, POST, etc. requests to the server's address. Different database sections (e.g. users) are indicated by URL paths. For example, to add a new user, you would send a POST request to `http://localhost:3000/users` with a body like:
```
{
    "username": "example",
    "email": "mail@mail.com",
    "password": "pass"
}
```

## Technology Used

- [json-server](https://github.com/typicode/json-server)

# Installation


To install the project, simply clone this repository by running `git clone <url>` in your favourite terminal. After cloning the repository, use [npm](https://www.npmjs.com/) to install relevant modules by running `npm install` in the project root. Afterwards, running `node server.js` in the project root should get your project up and running on `localhost:3000`.
