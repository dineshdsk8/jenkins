pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        /* ---------------- FLASK ---------------- */
        stage('Setup Flask') {
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

        stage('Run Flask') {
            steps {
                dir('flask') {
                    sh '''
                    pm2 delete flask || true

                    pm2 start venv/bin/python --name flask --cwd $(pwd) -- app.py
                    '''
                }
            }
        }

        /* ---------------- EXPRESS ---------------- */
        stage('Setup Express') {
            steps {
                dir('express') {
                    sh '''
                    npm install
                    '''
                }
            }
        }

        stage('Run Express') {
            steps {
                dir('express') {
                    sh '''
                    pm2 delete express || true
                    pm2 start app.js --name express --cwd $(pwd)
                    '''
                }
            }
        }
    }

    post {
        always {
            sh 'pm2 list'
        }
    }
}