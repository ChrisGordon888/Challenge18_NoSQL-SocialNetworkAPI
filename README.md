# Challenge18_NoSQL-SocialNetworkAPI
The challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description
A Social Network API that uses a NoSQL database to handle large amounts of unstructured data. This project uses Express.js for routing, a MongoDB database, and the Mongoose ODM.

## User Story
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Installation
Installing the application requires one to clone the repoistory and follow the usage instructions!

## Usage
- In order to run the application please navigate to the root directory and open the package.json in the terminal.
- Install dependencies with the command NPM install
- Next use the command NPM start to initialize the app

## Contributing
- In order to make contributions please clone the repository into your own folder with this link here: git@github.com:ChrisGordon888/Challenge18_NoSQL-SocialNetworkAPI.git
- Next, make changes in your code editor and open a pull request when pushing!

## License
This application is licensed under the MIT license.
