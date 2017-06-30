def err_msg = ""

node {
  try {
    stage 'Checkout'

    git url: 'https://github.com/grugrut/wine_tasting_editor.git'

    stage 'preTest'
    sh 'npm install'
  
    stage 'Test'
    // Do nothing

    stage 'Build'
    sh 'webpack'

    stage 'Deploy'
    withCredentials([string(credentialsId: 'WINE_DEPLOY_PATH', variable: 'WINE_DEPLOY_PATH')]) {
      sh 'rsync -vrlptD --delete ${WORKSPACE}/dist/ ${WINE_DEPLOY_PATH}/'
    }
  } catch (e) {
    err_msg = "${e}"
    currentBuild.result = "FAILURE"
  } finally {
    if (currentBuild.result != "FAILURE") {
      currentBuild.result = "SUCCESS"
    }
    notify(err_msg)
  }
}

def notify(msg) {
  def detail_link = "(<${env.BUILD_URL}|Open>)"
  def slack_color = "good"
  if (currentBuild.result == "FAILURE") {
    slack_color = "danger"
  }

  def slack_msg = "job ${env.JOB_NAME}[No.${env.BUILD_NUMBER}] was builded ${currentBuild.result}. ${detail_link}\n\n${msg}"
  slackSend color: "${slack_color}", message: "${slack_msg}"
}
