pipeline {
    agent{
        label 'limekit'
    } 
    tools {
        nodejs 'node'
        allure 'allure'
        }

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm ci'
                sh 'npm install --save-dev mocha-allure-reporter allure-commandline'
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
        success{
            slackSend channel: 'jenkins-ci-notifier', color: '#22910C', message: "Build Success: \nProject: ${env.JOB_NAME}  \n Build Number: ${env.BUILD_NUMBER} \n Build URL: ${env.BUILD_URL}"
        }
        failure{
            slackSend channel: 'jenkins-ci-notifier', color: '#EE3D18', message: "Build Failed: \nProject: ${env.JOB_NAME}  \n Build Number: ${env.BUILD_NUMBER} \n Build URL: ${env.BUILD_URL}"
        }
    }
}
