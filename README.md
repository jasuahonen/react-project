[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/iuze45af)
# Shopping List App - Final Project

## Team Information
Team autumn 
Server: 23wsp-pro22.student.titeweb
Members: Jasu Ahonen & Sabita Manandhar

## Project Overview
This application is designed to provide a simple and efficient way to manage a shopping list. This collaborative project encompasses both frontend and backend components, and it comes with a fully functional CI/CD pipeline for seamless deployment. The application is built using React.js for the frontend and Express.js for the backend.

## Project Structure
v0.1.0 Initial setup
Initial commit where we added backend and frontend folders and the code can be run locally by using commands "npm run dev" & "npm start"

v.0.2.0 Dockerize localhost
The code can be now run locally by using docker-compose up -d and opening browser in http://localhost:5000 for backend and http://localhost:3000 for frontend


v.0.3.0 
This phase focuses on implementing a Continuous Integration/Continuous Deployment (CI/CD) pipeline for the team project and deploying it to a remote server. The pipeline is defined in the pipeline.yml file in the GitHub workflow, comprising three stages: test, build, and deploy.

The Test stage involves running npm install and npm test for both the Backend and Frontend components to ensure code quality and functionality.

The Build stage involves creating Docker images. Images are pushed to the registry only when building the main branch, ensuring version control consistency.

The Deploy stage creates remote files, copies them to the server, and starts the application on the remote server.

Information about our server or Hostname:-
name:23wsp-pro22;
IP Address: 172.16.4.237;
Ports:
Frontend: 8000;
Backend: 4000;

v.0.4.0 CI/CD Pipeline & Remote Server
This phase focuses on the combination of a React.js frontend and an Express.js backend to create a simple yet functional Shopping List application. 
The frontend is a React.js application that interacts with the backend API to display and manage the shopping list. The main features include:
- Fetching and displaying the pre-defined shopping list items.
- Adding new items to the shopping list.
- Deleting items from the shopping list.
- Marking items as picked by checking a checkbox.
  
The backend communicates with the frontend through a REST API, handling GET, POST, and DELETE requests to manage a shopping list stored as an array.

v1.0.0 Final Release
This release is the Final Release and the App can be opened in the following addresses:
Frontend: https://23wsp-pro22.course.tamk.cloud
Backend API: https://23wsp-pro22.course.tamk.cloud/api/ShoppingList

## Contact Information
For any inquiries, please contact the project team:

Jasu Ahonen: jasu.ahonen@tuni.fi
Sabita Manandhar: sabita.manandhar@tuni.fi

