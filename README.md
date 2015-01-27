CSC 591 P1
Mitchell Neville

# Twitter Sentiments

## Introduction

This Node.js project is an exploration of data stream processing. 
The goal is to exploit a third-party web service and perform analytics on
the data stream. The Twitter streaming API is used to perform a basic
sentiment analysis on a stream of tweets. The project uses various other
projects including express, socket.io, Jade, and jQuery. In addition, the 
npm package [node-twitter | https://github.com/desmondmorris/node-twitter]
has also been incorporated for easily connecting to the Twitter stream. 

## Sentiment Analysis

The application will connect to the Twitter streaming API and filter 
tweets with the words 'love' or 'hate'. It will count and determine the 
percentage of tweets seen which contain these keywords, and it will also
display the total number of tweets analyzed. If a tweet contains both 
words, then that tweet is added to the total count twice, so that the love
and hate percentages will add up to 100%.  
