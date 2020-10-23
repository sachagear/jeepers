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

kubectl apply -f deploy.yml
kubectl apply -f service.yml

kubectl delete -f deploy.yml
kubectl delete -f service.yml
