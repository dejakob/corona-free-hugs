gcloud auth activate-service-account --key-file ./credentials.json

cd ./worker-triggers/create-hug && ./deploy.sh