# Keeper

## Description

Keeper application allows users to create, store and delete their tasks and notes in a simple and efficient way. 

## Technologies used 

React, Node.js, Express, Body-parser, MongoDB, Mongoose, Docker, Material-UI

## Required software

- Docker
- Node.js

## To run the application

From command line, clone and start the backend
```bash
git clone https://github.com/ljenchik/Keeper.git
cd keeper/backend
docker run -d -p 27017:27017 --name test-mongo mongo:latest
npm install
nodemon index.js
```

Open second terminal to start the frontend

```
cd keeper/frontend
npm install
npm start
```

## Acnowledgements

This project is based on the guidance and steps provided by Angela Yu's Udemy <a href="https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/18125215#questions/18744410"> 
"The Complete 2023 Web Development Bootcamp"</a>. 

<img width="300" alt="Screenshot 2023-06-02 at 10 29 09" src="https://github.com/ljenchik/Keeper/assets/84686704/f7b15877-52b4-46c3-8f1d-5f6c490daee5">
<img width="300" alt="Screenshot 2023-06-02 at 10 29 23" src="https://github.com/ljenchik/Keeper/assets/84686704/e34e5d0f-71f1-4bf0-ab9c-0906dfef898b">
<img width="300" alt="Screenshot 2023-06-02 at 10 32 18" src="https://github.com/ljenchik/Keeper/assets/84686704/fcfa62bd-97a2-4c98-a45a-2957922f8310">

