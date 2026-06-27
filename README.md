# Flask + Express CI/CD using Jenkins

## Project Overview

This project deploys a Flask backend and an Express frontend on a single AWS EC2 instance.

- Flask Backend : Port 6000
- Express Frontend : Port 4000
- Process Manager : PM2
- CI/CD Tool : Jenkins
- Source Control : GitHub

---

## Project Structure

my-app/
│
├── flask/
│   ├── app.py
│   └── requirements.txt
│
├── express/
│   ├── app.js
│   └── package.json
│
├── Jenkinsfile
├── README.md
└── .gitignore

---

## Prerequisites

- AWS EC2 (Ubuntu)
- Python 3
- Node.js
- npm
- PM2
- Jenkins
- Git

---

## Install Flask Dependencies

cd flask

python3 -m venv venv

source venv/bin/activate

pip install -r requirements.txt

---

## Install Express Dependencies

cd express

npm install

---

## Start Applications

Flask

pm2 start flask/app.py --name flask --interpreter python3

Express

pm2 start express/app.js --name express

Save PM2

pm2 save

Check Status

pm2 list

---

## Jenkins Pipeline

The Jenkins pipeline performs:

1. Checkout latest source code
2. Install Flask dependencies
3. Install Express dependencies
4. Restart Flask using PM2
5. Restart Express using PM2
6. Save PM2 configuration

---

## GitHub Webhook

Payload URL

http://<JENKINS_PUBLIC_IP>:8080/github-webhook/

Event

Push Event

---

## Application URLs

Frontend

http://<EC2_PUBLIC_IP>:4000

Backend

http://<EC2_PUBLIC_IP>:6000

---

## Useful Commands

Check PM2

pm2 list

Restart Flask

pm2 restart flask

Restart Express

pm2 restart express

View Logs

pm2 logs flask

pm2 logs express

Restart Jenkins

sudo systemctl restart jenkins

Check Jenkins Status

sudo systemctl status jenkins