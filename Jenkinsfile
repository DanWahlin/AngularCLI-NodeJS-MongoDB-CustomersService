pipeline {
    agent any
    environment {
        CI = 'true'
    }
  
  
    stages {
        stage('TESTING') {
            steps {
                sh 'yarn install'
             sh 'docker-compose build'
            }
        }
      
     

      
      
    }
    
   
}
