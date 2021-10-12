node {  
    stage('Build') { 
       sh' yarn  install'
    }
    stage('Test') { 
        sh'docker-compose build'
    }
    stage('Deploy') { 
        sh'docker-compose up' 
    }
}
