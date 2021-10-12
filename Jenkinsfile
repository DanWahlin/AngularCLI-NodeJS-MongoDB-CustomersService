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
         
 
           sh 'scp -P 1722 Jenkinsfile sama@63.33.196.224:/home/sama/ss.pu'

           
        }
    }
