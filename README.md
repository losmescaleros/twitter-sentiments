CSC 591 P1

Mitchell Neville

# Twitter Sentiments

## Introduction

This Node.js project is an exploration of data stream processing. 
The goal is to exploit a third-party web service and perform analytics on
the data stream. The Twitter streaming API is used to perform a basic
sentiment analysis on a stream of tweets. The project uses various other
projects including express, socket.io, Jade, and jQuery. In addition, the 
npm package [node-twitter](https://github.com/desmondmorris/node-twitter)
has also been incorporated for easily connecting to the Twitter stream. 

## Sentiment Analysis

The application will connect to the Twitter streaming API and filter 
tweets with the words 'love' or 'hate'. It will count and determine the 
percentage of tweets seen which contain these keywords, and it will also
display the total number of tweets analyzed. If a tweet contains both 
words, then that tweet is added to the total count twice, so that the love
and hate percentages will add up to 100%.  

## Running the Application

The main application is located in ```app.js```, and it requires four environment 
variables to be set before running:

- ```TWITTER_CONSUMER_KEY```
- ```TWITTER_CONSUMER_SECRET```
- ```TWITTER_ACCESS_TOKEN```
- ```TWITTER_ACCESS_SECRET```

These are provided when you [register an application](http://apps.twitter.com)
for use with the Twitter API. 

In addition to the Twitter key requirements, a Node.js environment is also 
required to install packages and run the ```app.js``` server source, but creating
this environment is beyond the scope of this project. 

Once the environment is set up, assuming you are using a terminal in the folder
where ```app.js``` is located, you can run the application using:

```
$ node app.js
```

This will launch the server, and tweets will begin streaming in and printing to
the console. The server will listen for connections on port 3000, and on the 
client side, you may navigate to ```http://localhost:3000``` in a web browser. 
This will display the sentiment analysis percentages and the total number of tweets
seen since server start-up.
