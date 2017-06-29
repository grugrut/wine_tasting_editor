node {
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
}
