node {
  
        stage("yarn install ....") {
         
          sh'yarn install'
           
        }
    }



node {
  
        stage("docker-compose build ") {
         
          sh'docker-compose build'
           
        }
    }


node {
  
        stage("docker-compose up ") {
       
          sh'docker-compose up -d'
          echo ' Test available in : http://63.33.196.224:8087/'
           
        }
    }
