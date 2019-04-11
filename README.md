# I Need Ideas!

An app where you can look for ideas for new projects and create your own ideas to inspire other people

![Preview](https://i.imgur.com/jqObi8w.png)

## Live demo

https://i-need-ideas.herokuapp.com/

## Stack:

- Front-end: React, Next.js
- Back-end: Node.js, Express, PostgreSQL

## Running the project

If you don't have the dotfiles, copy the .env-sample from each folder into .env files and fill the necessary data (such as your PostgreSQL connection).

Go to the root folder and install the dependencies:

    yarn install

`Cd` into each service folder and run them:

    cd packages/client && yarn dev  # starts the client server
    cd packages/api && yarn dev     # starts the api server
