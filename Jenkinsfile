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
               sh' apt install curl'
           
            }
        }
     
    }
}
