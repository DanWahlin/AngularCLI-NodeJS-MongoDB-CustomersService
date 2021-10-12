pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            args '-p 8000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'yarn install'
           
            }
        }
        stage('Test') {
            steps {
                sh 'docker-compose build'
               
            }
        }
        stage('Deliver') {
            steps {
                sh 'docker-compose up'
                
            }
        }
    }
}
