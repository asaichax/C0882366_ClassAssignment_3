# Creating Docker image from Node + Express application 

### Create Node Express application https://github.com/asaichax/C0882366_ClassAssignment_3

### Create Dockerfile in the project and copy the following code in the file
```
# syntax=docker/dockerfile:1
FROM node:18-alpine
LABEL maintainer "asaichand37@gmail.com"
LABEL build_date "2024-02-06"
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node", "app.js"]
```
### Create Docker image using following commads
```
git status
cls
docker build --tag C0882366-Node-Assignment3 . 
docker build --tag c0882366-node-assignment3 . 
docker images
docker build --tag c0882366-node-assignment3 . 
docker images
```
### Run the newly created image using below commands
```
docker run --detach --port 3000:3000 c0882366-node-assignment3:latest
docker run --detach --publish 3000:3000 c0882366-node-assignment3:latest
docker run --detach --publish 3001:3000 c0882366-node-assignment3:latest
docker ps
```
### Stop the container using following commands
```
docker stop nifty_mclaren
docker stop confident_chaplygin
docker ps -a
```
### Remove existing containers using following commands
```
docker rm c8e3ff0e284c
docker rm 484d55c5649b
docker ps -a
docker build --tag c0882366-node-assignment3 . 
docker images
docker rmi 26110763f73b
docker images
```
### Run the container using environment variables
```
//docker run --detach --publish 3000:80 c0882366-node-assignment3:latest -e PORT=80 NAME=C1
//docker run --detach --publish 3000:80 c0882366-node-assignment3:latest --env PORT=80 NAME=C1
//docker run --detach --publish 3000:80 c0882366-node-assignment3:latest -env PORT=80 NAME=C1
//docker run --detach --publish 3000:80 c0882366-node-assignment3:latest -e PORT=80
docker run --detach --publish 3000:80 -e PORT=80 c0882366-node-assignment3:latest
docker run --detach --publish 3000:80 -e PORT=80 NAME=C1 c0882366-node-assignment3:latest
docker run --detach --publish 3001:8080 -e PORT=8080 -e  NAME=c1 c0882366-node-assignment3:latest
doskey /history
doskey /h > dockercommands.txt
```
### Stop the container using following commands using text file
```
docker run --detach --publish 3000:3000 --env-file my-env.txt c0882366-node-assignment3:latest
```
### Tag your recently created image to publish on Docker hub registry

```
docker image tag c0882366-node-assignment3:latest saichandakkisani/c0882366-node-assignment3:1.0.0
docker images
docker login
```
### Pull and run the recently pushed image to local Docker environment
```
docker push saichandakkisani/c0882366-node-assignment3:1.0.0
docker pull saichandakkisani/c0882366-node-assignment3:1.0.0 
1.0.0
docker run -d -p 3000:3000 saichandakkisani/c0882366-node-assignment3:1.0.0
```