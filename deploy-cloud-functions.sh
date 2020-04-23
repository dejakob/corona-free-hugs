gcloud auth activate-service-account --key-file ./credentials.json
gcloud config set account $(node -p "require('./credentials.js').account")

cd ./worker-triggers/create-hug && ./deploy.sh