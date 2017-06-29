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
    // Do nothing
  } finally {
    notify()
  }
}

def notify() {
  def detail_link = "(<${env.BUILD_URL}|Open>)"
  def slack_color = "good"
  if (currentBuild.result == "FAILURE") {
    slack_color = "danger"
  }

  def slack_msg = "job ${env.JOB_NAME}[No.${env.BUILD_NUMBER}] was builded ${currentBuild.result}. ${detail_link}"
  slackSend color: "${slack_color}", message: "${slack_msg}"
}
