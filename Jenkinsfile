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
         
          sh'sh ‘scp -P 1722 -r Jenkinsfile sama@63.33.196.224:/home/sama/Jenkinsfileup’'
           
        }
    }
