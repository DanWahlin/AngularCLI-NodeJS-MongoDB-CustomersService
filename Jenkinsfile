def remote = [:]
remote.name = "sama"
remote.host = "63.33.196.224"
remote.allowAnyHosts = true
remote.port = 1722


pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'yarn install'
           
            }
        }
   
    }
}
