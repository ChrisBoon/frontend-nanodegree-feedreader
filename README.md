# Feedreader project

## Instructions

### To view hosted version GitHub:

https://chrisboon.github.io/frontend-nanodegree-feedreader

### Github repo:

https://github.com/ChrisBoon/frontend-nanodegree-feedreader

### To view locally once downloaded:

You should be able to open the index file directly in your browser.

### Build Process:

For development purposes I inlcuded a grunt task that simply watched for changes to the spec file and reloaded a local server running index.html (using browsersync).
There shoudn't be any need to run this to see the page working, but if you choose to you will need to do the following:

Should you wish to download and run the build yourself you will need Grunt and node.js. If you don't have them installed you can find out more here: http://gruntjs.com/ https://nodejs.org/en/

Once you have installed grunt and node, use the command line to cd into the root directory and type 'npm install' to install the required dependencies for Browsersync. Then type 'grunt' to run the default grunt task. This will spin up a server and should automatically load the webpage in your default browser. If it doesn't you can open a browser window and type 'http://localhost:3000/' into the URL bar.