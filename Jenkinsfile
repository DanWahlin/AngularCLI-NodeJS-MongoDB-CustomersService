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
          
           
            }
        }
      
      
         
   
    
    }
}
