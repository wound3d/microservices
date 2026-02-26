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

        stage('Check Docker Context') {
            steps {
                bat 'docker info'
                bat 'docker ps -a'
            }
        }
        
        stage('Build') {
            steps {
                bat 'echo %DOCKER_HOST%'
                 bat '''
                    cd lab2/test_service1
                    docker compose up --build -d
                    cd ../test_service2
                    docker compose up --build -d
                    cd ../gateway
                    docker compose up --build -d
                    docker-compose ps -a
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
