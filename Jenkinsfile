pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
           
            }
        }
        stage('Test') {
            steps {
                sh 'pws'
                
            }
        }
        stage('Deliver') {
            steps {
                 sh 'pws'
                
            }
        }
    }
}
