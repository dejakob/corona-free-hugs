npm i --save --save-exact corona-free-hugs@latest
gcloud functions deploy create-hug --runtime nodejs10 --trigger-http --project $(node -p "require('../../credentials.js').project_id")