pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('TESTING') {
            steps {
                sh 'yarn install'
           
            }
        }
      
       stage('Build') {
            steps {
                sh 'ng build --watch'
           
            }
        }
      
       stage('RUNNIG') {
            steps {
                sh 'docker-compose build'
              sh'docker-compose up'
           
            }
        }
    
    }
}
