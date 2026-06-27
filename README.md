CI/CD Pipeline Using Jenkins

## Objective

Automate the deployment of the Flask and Express applications using Jenkins.

## Prerequisites

* Jenkins
* Git
* GitHub
* PM2

## Pipeline Workflow

1. Jenkins pulls the latest code from GitHub.
2. Installs the required dependencies.
3. Restarts the applications using PM2.
4. GitHub webhook automatically triggers the pipeline after every push.

## Pipeline Stages

* Checkout Source Code
* Install Dependencies
* Deploy Application
* Restart Services
* Verify Deployment
