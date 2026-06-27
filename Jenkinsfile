pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Flask Dependencies') {
            steps {
                dir('flask') {
                    sh '''
                    python3 -m venv venv
                    . venv/bin/activate
                    pip install --upgrade pip
                    pip install -r requirements.txt
                    '''
                }
            }
        }

        stage('Install Express Dependencies') {
            steps {
                dir('express') {
                    sh '''
                    npm ci || npm install
                    '''
                }
            }
        }

        stage('Restart Flask') {
            steps {
                dir('flask') {
                    sh '''
                    pm2 delete flask || true
                    pm2 start venv/bin/python --name flask -- app.py
                    '''
                }
            }
        }

        stage('Restart Express') {
            steps {
                dir('express') {
                    sh '''
                    pm2 delete express || true
                    pm2 start app.js --name express
                    '''
                }
            }
        }

        stage('Save PM2') {
            steps {
                sh 'pm2 save'
            }
        }
    }

    post {
        success {
            echo "Deployment Successful"
        }
        failure {
            echo "Deployment Failed"
        }
    }
}