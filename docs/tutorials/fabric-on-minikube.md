# Creating a Hyperledger Fabric cluster on Minikube

**Pre-requisites**
- You've installed NodeJS (version 8 and higher) and NPM.
- You've installed Minikube and added it to the PATH variable on your system.
- You've installed Kubectl and added it to the PATH variable on your system.

**Setup the environment**
1. Open a terminal/console.
1. Run: ``npm install -g kubechain``
1. Run: ``minikube start``
1. Run: ``kubectl proxy``
   - Do not forget to proxy. Kubechain does not support picking a Kubernetes cluster.

**Hyperledger Fabric configuration**
1. At a preferred ``path`` create a new directory named ``configuration``.
1. Create sub-directory named ``fabric`` to ``configuration``.
1. Add the standard Hyperledger Fabric configuration files to the ``fabric`` directory.
  - These are ``configtx.yaml`` and ``crypto-config.yaml``.

**Create the Kubernetes Cluster**
1. Open a new terminal/console.
1. Change your current directory to the ``path`` where you created the ``configuration`` directory.
   - i.e. Run: ``cd path``, not `cd path/configuration`
1. Run: ``kubechain create config fabric``
1. Run: ``kubechain create cluster fabric``
1. Verify that the cluster is operational by your preferred means.