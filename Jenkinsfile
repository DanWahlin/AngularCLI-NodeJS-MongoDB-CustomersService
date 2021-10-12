def remote = [:]
remote.name = "sama"
remote.host = "63.33.196.224"
remote.allowAnyHosts = true
remote.port = 1722

node {
   withCredentials([sshUserPrivateKey(credentialsId: 'ssh-sama', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'sama')]) {""
			remote.user = sama
			remote.identityFile = identity
        stage("SSH Steps Rocks!") {
          
          
          sh 'rm -r AngularCLI-NodeJS-MongoDB-CustomersService'
            sh ' git clone https://github.com/moussiomar90/AngularCLI-NodeJS-MongoDB-CustomersService.git '
           sh 'cd AngularCLI-NodeJS-MongoDB-CustomersService'
          sh 'mkdir sama'
          
           
        }
    }
}
