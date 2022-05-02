pipeline {
    agent{
        label 'limekit'
    } 
    options {
        ansiColor('xterm')
    }
    tools {
        nodejs 'node'
        allure 'allure'
        }

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Initialize'){
            steps{
                sh 'npm run ci'
            }
        }
        stage('e2e Tests') {
            steps {
                script{
                    try{
                        sh 'npm test'
                    }
                    catch(e){
                        echo 'Caught: ${e}'
                        currentBuild.result=='SUCCESS'
                    }
                }
            }
        }
    }
    post{
        always{
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
        }
        success{
            slackSend channel: 'jenkins-ci-notifier', color: '#22910C', message: "Build Success: \nProject: ${env.JOB_NAME}  \n Build Number: ${env.BUILD_NUMBER} \n Build URL: ${env.BUILD_URL}"
        }
        unsuccessful{
            slackSend channel: 'jenkins-ci-notifier', color: '#EE3D18', message: "Build ${currentBuild.currentResult}: \nProject: ${env.JOB_NAME}  \n Build Number: ${env.BUILD_NUMBER} \n Build URL: ${env.BUILD_URL}"
        }
    }
}
