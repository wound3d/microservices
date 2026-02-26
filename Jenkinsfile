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

        stage('Check Hosts') {
            steps {
                bat 'echo %DOCKER_HOST%'
            }
        }

        stage('Build') {
            steps {
                 bat '''
                    cd lab2/test_service1
                    docker compose up --build -d
                    cd ../test_service2
                    docker compose up --build -d
                    cd ../gateway
                    docker compose up --build -d
                    docker ps -a
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
