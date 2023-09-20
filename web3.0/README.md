
# Web 3.0 Blockchain Application

## Introduction

The project's stack includes React, Tailwind CSS, and Ethereum Smart Contracts. React is a popular JavaScript library for building user interfaces. Tailwind CSS is a utility-first CSS framework that makes it easy to style web applications. Ethereum is a blockchain-based platform that allows developers to build decentralized applications using smart contracts.

The project's main features include connecting to the Ethereum blockchain to interact with smart contracts, and displaying data from the blockchain in real-time. In addition to these features, the project also includes various other components such as authentication, error handling, and testing.

Overall, this project provides an excellent opportunity for web developers who want to learn about the latest web development technologies and tools and get hands-on experience building a React Solidity Blockchain Application.

## What is GAS?

In the context of blockchain, gas refers to a unit of measurement that is used to determine the cost of a transaction on the network.

When you want to send a transaction on the blockchain, you need to pay a fee to the network to process it. This fee is measured in units of gas, and it is paid in the cryptocurrency of the network (such as Bitcoin or Ethereum).

Think of gas as the fuel that powers the blockchain. Every time you send a transaction, the network needs to use resources (such as computing power and storage space) to process it. The more resources your transaction requires, the more gas you need to pay to the network.

The gas price is not fixed and can vary depending on the demand for the network's resources. When the network is congested, the gas price can increase, making it more expensive to send transactions. Similarly, when the network is less busy, the gas price can decrease.

In summary, gas is a unit of measurement used to determine the cost of a transaction on the blockchain. It is paid in the cryptocurrency of the network and represents the amount of resources required to process the transaction.

## Mainnet VS Subnet

In the context of blockchain technology, a mainnet and a subnet refer to different types of networks.

A mainnet is the primary blockchain network that is responsible for processing transactions and validating new blocks. It is the main public network that supports the native cryptocurrency of a blockchain project. For example, the Bitcoin mainnet is the primary network that processes Bitcoin transactions and maintains the Bitcoin blockchain.

A subnet, on the other hand, is a secondary network that operates within a larger blockchain network. It is designed to handle specific functions or tasks that may not be suitable or efficient for the mainnet to handle. Subnets are often used to support scalability, interoperability, and specialized use cases.

For example, A mainnet is like a big playground where everyone goes to play games and have fun. It's the main place where all the important things happen.

A subnet is like a smaller playground that's inside the big playground. It's like a special area where you can play different games that you might not be able to play on the big playground. It's like a place where you can do special things that you can't do in the big playground. 
## Run Locally

Clone the project

```bash
  git clone GITHUB_URL_WILL_BE_THERE
```

### Setup Alchemy to get Token

Before running locally we need to deploy our smart contract on blockchain, for this we need to follow these steps:

  - Create account on [Alchemy](https://www.alchemy.com/)
  - Go to Dashboard and create an application as in image
  
  ![2](https://user-images.githubusercontent.com/64011971/227930514-486c7cb8-cbef-40e2-8470-8e93e2dfcbb7.png)

  - Give details in following form pop-up and make sure to select your network from network dropdown (sepolia recommended) and create app
  
  ![FireShot Capture 017 - Alchemy - dashboard alchemy com](https://user-images.githubusercontent.com/64011971/227930895-0c10c8c0-2942-4fb1-803c-39277126c8c5.png)

  - Now from dashboard page click on View Details as following
  
  ![3](https://user-images.githubusercontent.com/64011971/227931236-8edcfd56-2607-4fc4-a70b-c6973c4f8886.png)

  - You'll see app detail in pop-up as below, copy that url from **HTTPS** input field

  ![4](https://user-images.githubusercontent.com/64011971/227931491-3ac2df68-b3eb-43d1-b2cc-cdeacffb82fa.png)

  - Open you project code and go to file smart_contract/hardhat.config.js, paste copied url against url property of sepolia object.
  - Now, open terminal


### Install and Setup MetaMask

  - Go to chrome web store and search for metamask extension
  - Install and pin this extension
  - Create account and Login to metamask
  - Select Sepolia test network from Networks of metamask

Initially you'll have 0 ETH and for deployments you'll need to have some balance to pay GAS(which we will discuss later) you can get balance from different
Faucets website(i got from [here](https://sepoliafaucet.com/)). Once you have balance in your account then you can go for deployments.

### Deploy Smart Contract

  Install dependencies

  ```bash
    cd smart_contract
    npm install
  ```
  Deploy contract
  
  ```bash
    npx hardhat run scripts/deploy.js --network sepolia 
  ```
  
  Once contract deployed successfully, you'll get an address in terminal console.Copy that address from terminal and paste it in hardhat.config.js 
  file against account property of sepolia. 
  
  Meanwhile after successful deployment of smart contract, there will be a file Transactions.json generated in directory smart_contract/artifacts/contracts/Transactions.sol/
  copy that json file and paste it into client/src/utils
  

### Run Application
Go to the project directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

![FireShot Capture 020 - Krypt - Send Crypto across the world! - localhost](https://user-images.githubusercontent.com/64011971/228021320-03e98d35-5a66-4476-8a18-faec0994bd89.png)

![FireShot Capture 021 - Krypt - Send Crypto across the world! - localhost](https://user-images.githubusercontent.com/64011971/228021457-93b8efdb-cd2b-42a9-8aa9-1cfa7e059188.png)

