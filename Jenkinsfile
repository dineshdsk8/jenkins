pipeline {
    agent any

    stages {

        /* ---------------- CHECKOUT ---------------- */
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        /* ---------------- FLASK SETUP ---------------- */
        stage('Setup Flask (python3)') {
            steps {
                dir('flask') {
                    sh '''
                    pip3 install --user --upgrade pip
                    pip3 install --user flask
                    pip3 install --user -r requirements.txt
                    '''
                }
            }
        }

        /* ---------------- RUN FLASK ---------------- */
        stage('Run Flask') {
            steps {
                dir('flask') {
                    sh '''
                    pm2 delete flask || true

                    pm2 start app.py \
                        --name flask \
                        --interpreter python3 \
                        --cwd $(pwd)
                    '''
                }
            }
        }

        /* ---------------- EXPRESS SETUP ---------------- */
        stage('Setup Express') {
            steps {
                dir('express') {
                    sh '''
                    npm cache clean --force
                    rm -rf node_modules package-lock.json || true
                    npm install
                    '''
                }
            }
        }

        /* ---------------- RUN EXPRESS ---------------- */
        stage('Run Express') {
            steps {
                dir('express') {
                    sh '''
                    pm2 delete express || true

                    pm2 start app.js \
                        --name express \
                        --cwd $(pwd)
                    '''
                }
            }
        }
    }

    /* ---------------- STATUS ---------------- */
    post {
        always {
            sh '''
            pm2 list
            '''
        }
    }
}