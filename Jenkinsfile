def remote = [:]
remote.name = "sama"
remote.host = "63.33.196.224"
remote.allowAnyHosts = true
remote.port = 1722

node {
  
        stage("yarn install ") {
         
          sh'yarn install'
           
        }
    }



node {
  
        stage("yarn install ") {
         
          sh'docker-compose build'
           
        }
    }


node {
  
        stage("yarn install ") {
        sh' docker stop  nodeapp'
           sh' docker rm  nodeapp'
          sh'docker-compose up'
           
        }
    }
