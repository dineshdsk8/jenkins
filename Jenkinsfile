pipeline {
    agent any

    environment {
        FLASK_PORT = "6000"
        EXPRESS_PORT = "4000"
    }

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

        stage('Restart Flask (PM2)') {
            steps {
                dir('flask') {
                    sh '''
                    pm2 delete flask || true

                    export FLASK_APP=app.py
                    export FLASK_RUN_HOST=0.0.0.0
                    export FLASK_RUN_PORT=6000

                    pm2 start venv/bin/python \
                        --name flask \
                        --cwd $(pwd) \
                        -- -m flask run
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

        stage('Restart Express (PM2)') {
            steps {
                dir('express') {
                    sh '''
                    pm2 delete express || true

                    pm2 start server.js \
                        --name express \
                        --cwd $(pwd) \
                        --env production
                    '''
                }
            }
        }
    }

    post {
        always {
            sh '''
            pm2 list
            '''
        }
    }
}