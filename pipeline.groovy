pipeline {
    agent any
    
    stages {
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/UmeshGayashan/Baby_Vaccination_Management_GroupProject'
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t BabyVacBackEnd .'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'Dockerhub', variable: 'DockerhubPassword')]) {
                    script {  
                        sh "docker login -u UmeshGayashan -p '${DockerhubPassword}'"
                    }
                }
            }
        }
        stage('Push Image') {
            steps {
                sh "docker push BabyVacBackEnd"
            }
        }
    }
    post {
        always {
            sh 'docker logout'
        }
    }
}
