## Phase 2 Project Guidelines

## Learning Goals
Build a React single page application from scratch
Apply your knowledge of components, props and state management
Incorporate client-side routing
Use data from an API

## Introduction
Now that you've learned the fundamentals of React, it's time to practice and expand your skills by making a React project from scratch!

This assignment is open-ended when it comes to the actual content. You are free to create whatever you'd like, as long as it incorporates the requirements listed in these instructions.

## Requirements
You must make a single page application (only one index.html file) using create-react-app
Your app should use at least 5 components in a way that keeps your code well organized
There should be at least 3 client-side routes using react-routerLinks to an external site.
Use the RESTful API that has been provided by your Technical Mentor.
For reference to the remaining MANDATORY requirements;

  ## Technical Requirements
Every single repository should have a detailed README file explaining how to set up the codebase upon cloning/forking 
You should have regular git commits, and the messages should be clear and concise.
Your application must be deployed and accessible through a remote URL. (You can choose whichever deployment platform you wish)
Your project should be structured in an organized manner.
Your web application should have proper styling. Ensure it looks professional and clean.
Your app must be a REACT frontend that accesses data from a public API. All client and API interactions should be handled asynchronously and use JSON as the communication format. 
Your entire app must run on a single page. There should be NO redirects. In other words, your project will contain a single HTML file.
Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.
Your repository should include a license. (Adding a license to a repository - GitHub Docs) 
Your project MVP MUST be completed within the stipulated timeline.
Since this is a group project you are expected to contribute to a single repository. You can use this page to learn more about this: Git Remote | Atlassian Git Tutorial 


## Stretch Goals
Once you have met the minimum requirements, feel free to explore! These are only the basic requirements — you're free to add on as much stuff as you'd like.

## Setup
For this project, you will need one repository: front-end.

Use create-react-app to generate starter code for your your project. Follow the instructions on the create-react-appLinks to an external site. site to get started.

## Deploying
When your project is complete, you are encouraged to deploy it! You'll need to deploy your frontend .

For your frontend, we recommend using NetlifyLinks to an external site.; however, there are a number of free services you can use if you'd like to explore alternatives.

## Deploying Tips & Tricks
## Routing
If you're using React Router, you'll also need to set up a _redirects file as specified here:

Netlify RedirectsLinks to an external site.
Your redirects file should be placed in the public folder. It look like this:

/*    /index.html   200

## Environment Variables
When working on your app, it's useful to consider which environment you're working on:

Development: when working locally
Test: when running tests
Production: when deployed to server
You'll likely have some variables that change depending on what environment you're working in. For example, after deploying your site to production, you won't be able to access your backend on localhost anymore.

To handle these kind of environment variables, we can use .env files. (API Keys and passwords need to also be stored in environment variables)

create-react-app has some tools for working with .env files that you can read about here:

Custom Environment VariablesLinks to an external site. https://create-react-app.dev/docs/adding-custom-environment-variables/

You can make a .env.development and .env.production file to keep track of separate environment variables. Note that these files should be in the root of your application directory (not in /src). For example, you might set up a .env.development file with your local development server URL:

REACT_APP_API_URL=http://localhost:4000
And a .env.production file with your deployed backend URL:

REACT_APP_API_URL=https://my-awesome-project.herokuapp.com
To use these environment variables in your code, you can access them at process.env.REACT_APP_VARIABLE_NAME:

fetch(`${process.env.REACT_APP_API_URL}/cats`)
  .then((r) => r.json())
  .then(setCats);

## What Happens When I Deploy?
Glad you asked! Deploying your site involves taking the code that lives on your machine, and setting it up to run on someone else's machine.

As you'll recall, our frontend applications are a type of app known as a Single Page Application. What that means is that there is only one HTML file, along with a handful of JavaScript, CSS, fonts, images, and other static assets. So when our site is deployed, the main thing we need is a server to host all of those files and let other people from around the world access those files with their browsers.

In order to generate those files, create-react-app comes with a special build script that uses another tool, webpack, to take all of our JavaScript, CSS, and other assets from the src directory and optimize them by bundling (merging files together) and minifying (shortening the lines of code) so that the files load as fast as possible.

You can try this out on your own by running npm run build. This will create a new directory with your bundled and minified source code!

When you upload your project to Netlify, this build script will run automatically on Netlify's server, so that they can host the content for you. Any time you update your code and push the changes up to Netlify, the build script will run again and create a new bundle on the server.

Netlify can be configured to use Continuous Deployment, which typically works by connecting your Git repository with Netlify's build process. Then, any time you push up changes to your main branch, your deployed site will automatically update! This makes it very easy to add features even after you've deployed.
