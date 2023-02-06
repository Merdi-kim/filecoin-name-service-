# Filecoin Name Service

Filecoin Name Service is a registry for human readable names on the filecoin virtual machine. Each name is computed and registered so that every name is unique. Alternatively every name is followed by a *.FIL* domain. 

### Goal 
The goal of this project is to have human readable names for addresses on the FVM(filecoin virtual machine). This allows easy retrieval and easy sharing of addresses. 

### Architecture
This repository contains two separate projects(smart contract and frontend)
- **The smart contract**: The smart contract that is responsible for assigning names on the FVM and makes sure all names are unique and well stored onchain. 
- **The app**: the interface that interacts with the smart contract to allow users to easily register their names in a few clicks

### Step forward
The idea moving forward is to build an SDK that will be interacting with our contract to allow other services and apps to integrate with our smart contracts and benefit from registered names on the FVM.

### Get started
To run this project locally, you need to:
- clone the project: ```git clone https://github.com/Merdi-kim/filecoin-name-service-.git``` 
Navigate into the directory: ```cd filecoin-name-service``` .
Once in this directory, you can do two things:
- Check the smart contract 
- Run the app under **web-app** directory with ```npm run dev```

Do not forget to install all the dependencies ! 

**❗️Disclaimer**: The smart contract is not fully featured for production, we're still adding features to the project. 

Help us make this project better by contributing to it. 



