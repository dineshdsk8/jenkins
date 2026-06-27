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

                    pip install -r requirements.txt
                    '''

                }

            }

        }

        stage('Install Express Dependencies') {

            steps {

                dir('express') {

                    sh '''
                    npm install
                    '''

                }

            }

        }

        stage('Restart Flask') {

            steps {

                sh '''

                pm2 delete flask || true

                pm2 start flask/app.py --name flask --interpreter python3

                '''

            }

        }

        stage('Restart Express') {

            steps {

                sh '''

                pm2 delete express || true

                pm2 start express/app.js --name express

                '''

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