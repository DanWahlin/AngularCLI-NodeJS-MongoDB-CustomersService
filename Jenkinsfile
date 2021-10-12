def remote = [:]
remote.name = "sama"
remote.host = "63.33.196.224"
remote.allowAnyHosts = true
remote.port = 1722

node {
   withCredentials([sshUserPrivateKey(credentialsId: 'ssh-sama', keyFileVariable: 'identity', passphraseVariable: '', usernameVariable: 'sama')]) {""
			remote.user = sama
			remote.identityFile = identity
        stage("SSH CNX ") {
          
          
          sh'git clone https://github.com/moussiomar90/AngularCLI-NodeJS-MongoDB-CustomersService.git /home/sama/prod-server'
          sh'yarn install --modules-folder  /home/sama/prod-server '
           
        }
    }
}
