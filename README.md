# jeepers
Tutorial on how to deploy

make sure kubectl, minikube & docker is installed

minikube start

minikube status

kubectl create namespace dev

kubectl create deploy moo --image=smontes/sergeapp -n dev

kubectl expose deploy moo --type=LoadBalancer --port=80 -n dev

minikube service moo -n dev

=======> curl ip_address:port

kubectl scale moo -n dev --replicas=4

kubectl apply -f nodeapp/deploy.yml
kubectl apply -f nodeapp/service.yml

kubectl delete -f nodeapp/deploy.yml
kubectl delete -f nodeapp/service.yml
