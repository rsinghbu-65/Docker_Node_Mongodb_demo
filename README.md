## demo app - developing with Docker

This demo app shows a simple user profile app set up using 
- index.html with pure js and css styles
- nodejs backend with express module
- mongodb for data storage

All components are docker-based

#### To build a docker image from the application

    docker build -t my-app:1.0 .
    
The dot "." at the end of the command denotes location of the Dockerfile.


#### To start the application

Step 1: start app

    docker compose up (from inside the docker folde)
    
Step 2: in mongo-express UI - create a new database "my-db"
	# acess the mongo-express ui from localhost:8080

Step 3: in mongo-express UI - create a new collection "users" in the database "my-db"

    
Step 4: access the nodejs application from browser 

    http://localhost:3000


