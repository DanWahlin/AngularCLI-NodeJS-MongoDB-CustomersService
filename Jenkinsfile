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
      
     
      
       stage('Building ...............') {
            steps {
             sh'  docker-compose build'
              sh'docker-compose up'
           
            }
        }
      
      
         
       stage('Uping Docker ..............') {
            steps {
        
              sh'docker-compose up'
           
            }
        }
    
    }
}
