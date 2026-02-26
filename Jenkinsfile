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
                bat 'docker create network gateway'
                cd lab2/test_service1
                bat 'docker compose up --build'
                cd lab2/test_service2
                bat 'docker compose up --build'
                cd lab2/gateway
                bat 'docker compose up --build'
                echo "Services started. Showing status:"
                bat 'docker-compose ps'

                
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
