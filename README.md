Mitchell Neville

[CSC 591 - P1](http://github.com/losmescaleros/twitter-sentiments 
"GitHub Project")

# Twitter Sentiments

## Introduction

This Node.js project is an exploration of data stream processing. 
The goal is to exploit a third-party web service and perform analytics on
the data stream. The Twitter streaming API is used to perform a basic
sentiment analysis on a stream of tweets.  

## Dependencies

The project uses various other
projects including [Express.js][express], [socket.io][socket io], [Jade][jade],
and [jQuery][jquery]. In addition, the Node.js package [Node-Twitter]
[node-twitter] has also been incorporated for easily connecting to the Twitter
stream. Bootstrap and jQuery JavaScript and CSS dependencies should be put in
```pulic/javascripts``` and ```public/stylesheets``` respectively. You can put
these files into their respective folders, or you can use symbolic links. 
However, the application expects ```jquery.min.js``` and ```bootstrap.min.js```
to be in the ```javascripts``` folder, as well as ```bootstrap.min.css``` and
```bootstrap-theme.min.css``` to be in the ```stylesheets``` folder. 

## Sentiment Analysis

The application will connect to the Twitter streaming API and filter 
tweets with the words 'love' or 'hate'. It will count and determine the 
percentage of tweets seen which contain these keywords, and it will also
display the total number of tweets analyzed. If a tweet contains both 
words, then that tweet is added to the total count twice, so that the love
and hate percentages will add up to 100%.  

## Source File Structure

The project file structure was created using Express.js web framework. The 
server code is found in ```app.js```, while the client-side JavaScript code is
in ```client.socket.io.js```. Jade view templates are located in the 
```views``` folder. The ```routes``` folder defines HTTP routing, but it is
not really used in this project. 

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
where ```app.js``` is located, you can install Node.js dependencies using:

```
$ npm install
```

Then, you can run the application using:

```
$ node app.js
```

This will launch the server, and tweets will begin streaming in and printing to
the console. The server will listen for connections on port 3000, and on the 
client side, you may navigate to ```http://localhost:3000``` in a web browser. 
This will display the sentiment analysis percentages and the total number of tweets
seen since server start-up.

To close the server in a terminal, use CTRL-C. 

[bootstrap]: http://getbootstrap.com	"Bootstrap"
[jquery]: http://jquery.com	 	"jQuery"
[node]: http://nodejs.org		"Node.js"
[express]: http://expressjs.com		"Express.js"
[jade]: http://jade-lang.com		"Jade"
[socket io]: http://socket.io		"Socket.io"
[node-twitter]: https://github.com/desmondmorris/node-twitter "Node-Twitter"
