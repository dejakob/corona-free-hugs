gcloud auth activate-service-account $(node -p "require('./credentials.js').account") --key-file ./credentials.json

cd ./worker-triggers/create-hug && ./deploy.sh