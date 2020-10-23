# jeepers
Tutorial on how to deploy

make sure kubectl, minikube & docker is installed

minikube start
kubectl create namespace moo
kubectl create deploy moo --image=smontes/sergeapp
kubectl expose deployment moo --type=LoadBalancer --port=80
minikube service moo

=======> curl ip_address:port
