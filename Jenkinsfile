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
                 bat '''
                    cd lab2/test_service1
                    docker compose up --build
                    cd ..\test_service2
                    docker compose up --build
                    cd ..\gateway
                    docker compose up --build
                    docker-compose ps
                '''

                
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
