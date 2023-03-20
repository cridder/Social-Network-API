# Social-Network-API
# Description

Challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. 

## Installation

Fork repo and run 'npm run start'
## Users Story

AS A social media startup

- [X] I WANT an API for my social network that uses a NoSQL database
  - [X] SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria

GIVEN a social network API

- [X] WHEN I enter the command to invoke the application
  - [X] THEN my server is started and the Mongoose models are synced to the MongoDB database
- [X] WHEN I open API GET routes in Insomnia for users and thoughts
  - [X] THEN the data for each of these routes is displayed in a formatted JSON
- [X] WHEN I test API POST, PUT, and DELETE routes in Insomnia
  - [X] THEN I am able to successfully create, update, and delete users and thoughts in my database
- [X] WHEN I test API POST and DELETE routes in Insomnia
  - [X] THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
## Videos
### 01 - https://drive.google.com/file/d/1Zwc5Tpze_dJ38Gsg0wXezEVgWWXzNZvG/view?usp=sharing 
- Get all users: /api/users
- Get all thoughts: /api/thoughts
- Get user by ID: /api/users/:id
### 02 - https://drive.google.com/file/d/1TYW2y3v4JGM0OT-73ZlpT0k1SDuXPHkP/view?usp=sharing
- Create a user: /api/users
- Create a thought: /api/thoughts
- Add a reaction: /api/thoughts/641798b7db560d7c048aeda4/reactions
### 03 - https://drive.google.com/file/d/1A2BzqqSPnl28epnfrQUna_FstlehqYr5/view?usp=sharing
- Update a user: /api/users/:id
- Add a friend: /api/users/:id/friends/:id
- Update a thought: /api/thoughts/:id
### 04 - https://drive.google.com/file/d/1mbOMttWqGOgcCK70-S6hRxbUv8sW9wh-/view?usp=sharing
- Delete a reaction: /api/thoughts/:id/reactions/:id
- Delete a thought: /api/thoughts/:id
- Delete a friend: /api/users/:id/friends/:id
- Delete a user: /api/users/:id

## License

  MIT

  [![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey.svg)](https://mit-license.org)

## Contributing  

  CONTRIBUTE

## Tests

  TEST

## Questions

  ASK

  https://github.com/cridder

  cjridder@gmail.com

## END
