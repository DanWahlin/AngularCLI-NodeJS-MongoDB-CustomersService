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
      
     
      
       stage('RUNNIG') {
            steps {
             sh'  docker-compose build'
              sh'docker-compose up'
           
            }
        }
    
    }
}
