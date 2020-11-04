# jeepers

###### Tutorial on how to deploy

make sure kubectl, minikube & docker is installed
```
install minikube https://minikube.sigs.k8s.io/docs/start/
install docker  https://docs.docker.com/docker-for-mac/install/
install kubectl https://kubernetes.io/docs/tasks/tools/install-kubectl/
```

The docker image is built and exists at `https://hub.docker.com/r/smontes/sergeapp`

`docker pull smontes/sergeapp` will grab you the latest image, or you can rebuild the image
```
cd nodeapp && docker build --no-cache -t sergeapp.
docker tag IMAGE_ID smontes/sergeapp
docker push smontes/sergeapp
```
then deploy


```
minikube start
minikube status

kubectl create namespace dev
kubectl create deploy moo --image=smontes/sergeapp -n dev
kubectl expose deploy moo --type=LoadBalancer --port=80 -n dev
```
make the service accessible `minikube service moo -n dev`

=======> `curl ip_address:port`
```
kubectl scale moo -n dev --replicas=4
```

Other methods to deploy
```
kubectl apply -f nodeapp/deploy.yml
kubectl apply -f nodeapp/service.yml

kubectl delete -f nodeapp/deploy.yml
kubectl delete -f nodeapp/service.yml
```
