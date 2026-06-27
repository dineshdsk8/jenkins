CI/CD Pipeline Using Jenkins
Objective

Automate the deployment of the Flask and Express applications using Jenkins.

Prerequisites
Jenkins
Git
GitHub
PM2
Pipeline Workflow
Jenkins pulls the latest code from GitHub.
Installs the required dependencies.
Restarts the applications using PM2.
GitHub webhook automatically triggers the pipeline after every push.
Pipeline Stages
Checkout Source Code
Install Dependencies
Deploy Application
Restart Services
Verify Deployment