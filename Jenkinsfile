pipeline {
    agent any
    
    environment {
        BRANCH_NAME = 'lab2'  
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo "Building branch: ${env.BRANCH_NAME}"
            }
        }
        
        stage('Build') {
            steps {
                echo 'Launching commands...'
                bat 'docker build -t jenkins-lab3:latest .'

                
            }
        }
        
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
    }
    
    post {
        always {
            echo 'Building complete'
        }
    }
}
