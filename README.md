# CI/CD Pipeline Using Jenkins

## Objective

Automate the deployment of the Flask and Express applications using Jenkins.

## Prerequisites

* Jenkins
* Git
* GitHub
* Python
* Node.js

## Pipeline Workflow

1. Developer pushes code to GitHub.
2. GitHub Webhook triggers the Jenkins pipeline.
3. Jenkins pulls the latest code from the GitHub repository.
4. Jenkins installs the required dependencies.
5. Jenkins deploys the latest version of the applications.
6. Verify that the deployment is successful.

## CI/CD Flow

GitHub → GitHub Webhook → Jenkins → Deploy Application

## Pipeline Stages

* Checkout Source Code
* Install Dependencies
* Deploy Application
* Verify Deployment

## Technologies Used

* Jenkins
* GitHub
* GitHub Webhooks
* Python
* Node.js