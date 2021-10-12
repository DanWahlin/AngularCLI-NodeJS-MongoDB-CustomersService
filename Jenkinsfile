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
      
     
      
       stage('Building Image...............') {
            steps {
             sh'  docker-compose build'
          
           
            }
        }
      
      
          
       stage('Container Creating .....') {
            steps {
             sh'  docker-compose up'
          
           
            }
        }
         
   
    
    }
}
