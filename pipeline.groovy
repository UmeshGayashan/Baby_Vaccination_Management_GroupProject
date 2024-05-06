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
        // Added Test Stage
        // Updated Test Stage (fixed permissions)
        stage('Test') {
            steps {
                script {
                    try {
                        // Assuming you've fixed permissions on /var/lib/apt/lists/lock

                        // Update apt (assuming you have root privileges) - Consider alternative with apt-get if possible
                        // Update apt and install npm without sudo
                        sh 'sudo -S apt update < /dev/null'
                        sh 'sudo -S apt install -y npm < /dev/null'

                        // Navigate to the directory containing package.json (assuming it's in workspace)
                        dir("${WORKSPACE}") {
                            // Run npm test
                            sh 'npm test'
                        }
                    } catch (err) {
                        echo "Error occurred during testing: ${err}"
                        currentBuild.result = 'FAILURE'
                    }
                }
            }
        }


        // Added Build Stage
        stage('Build') {
            steps {
                script {
                    try {
                        // Navigate to the directory containing package.json (assuming it's in workspace)
                        dir("${WORKSPACE}") {
                            // Install dependencies
                            sh 'npm install'
                            // Run build command
                            sh 'npm start'  // Assuming build command is 'npm run build'
                        }
                    } catch (err) {
                        echo "Error occurred during build: ${err}"
                        currentBuild.result = 'FAILURE'
                    }
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
                withCredentials([string(credentialsId: 'DockerHubPassword', variable: 'DockerHub')]) {
                    script {  
                        sh "docker login -u umeshgayashan -p '${DockerHub}'"
                    }
                }
            }
        }
        stage('Push Image') {
            steps {
                sh 'docker push umeshgayashan/BabyVacBackEnd'
            }
        }
    }
    post {
        always {
            sh 'docker logout'
        }
    }
}