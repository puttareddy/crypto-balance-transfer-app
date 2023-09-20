# Architecture of Web 3.0

Web3 is the future of the internet and its architecture differs greatly to its predecessor, web2. Let’s take Twitter, a Web2 application, as an example 
and look at its architecture

**Database:** Stores data such as users, posts, tags, and comments.

**Frontend End:** Frontend development handles the design and interface of the web application.

**Backend End:** backend development focuses on what happens behind the scenes, which defines the business logic. ie. login logout, posting etc

Thus, when a users publishes a tweet on Twitter, the essential are 

Interaction with its frontend / backend / database
All business logic (code) is hosted on centralized servers (AWS, Azure)
User interact with the website via internet browser
This is a simple example of how Web2 applications work today.

![web2](https://user-images.githubusercontent.com/113621544/231537195-c6d5d56c-1278-4b1a-8062-9fe4d9d0feb0.png)


However, everything changes with web3!

### Introduction to Web3 Application 

The fundamental concept of the entire process is straightforward. In essence, Web3 refers to an application that employs a decentralized network. This 
implies that the internet is being transformed into a new infrastructure based on blockchain technology. Web3 represents the new era of web development 
that empowers users to take charge of their data privacy and ownership instead of relying on third parties such as Twitter.

Let us delve into some basic terms:

**Web3** operates on permissionless blockchains, and its technologies form the basis for peer-to-peer (P2P) transactions, payments, services, and 
marketplaces.

**Blockchain** technology enhances the way data is collected and managed across the internet. It brings together valuable data through the use of 
Artificial Intelligence (AI) and Internet of Things (IoT). Additionally, data stored on blockchain is immutable and cannot be tampered with.

A **dApp** is a decentralized application that operates on a blockchain or P2P network of computers. It enables users to participate in transactions 
directly with each other, eliminating the need for a central authority.

Architecture of a Web3 application


![web3](https://user-images.githubusercontent.com/113621544/231534255-89313f57-22d0-4da5-b3d1-8b9d48c5d0bf.png)

### An Overview
Let’s explore the whole process of what makes Web3 different.

**1. Blockchain** 

These refer to globally accessible state machines that are upheld by a network of peer-to-peer nodes. In summary, they are state machines that can be 
written and accessed by anyone worldwide. Nonetheless, while users can append new data to the blockchain, they are unable to modify existing data.

**2. Smart Contracts**

Smart contracts are business logic that is stored on a blockchain (state machines) and can be programmed to execute when certain predetermined 
conditions are met, without requiring the involvement of intermediaries.

The most widely recognized Smart contracts at present are transaction protocols that operate on the Ethereum blockchain. They are typically scripted in 
high-level languages such as Solidity, which specifies the logic underlying state changes. Smart contracts operate exclusively on private peers owned by 
particular network members, processing verified data that is hosted by those peers.

**3. Ethereum Virtual Machine (EVM)**

These machines’ purpose is to carry out the logic defined in the smart contracts. They handle the state changes that occur on the state machine.

**4. Front End process**

It enables users to connect and submit requests for contract function calls via the application's frontend, thereby facilitating communication with the 
application logic specified in smart contracts.

### Comparing Web2 and Web3 Frontend

In Web2, the application frontend allows users to query and post to the database, and this remains unchanged in Web3. Consequently, the primary 
responsibilities of a Web3 frontend developer are similar to those of their Web2 counterparts, as they are responsible for implementing all the features 
that users interact with. Typically, Web3 frontend developers require the same skill set, which includes expertise in HTML, CSS, JavaScript, React.js, 
and other relevant tools.

The significant difference, however, lies in the use of Web3.js, which is a suite of JavaScript libraries that enables interaction with an Ethereum 
node. Essentially, Web3.js provides an API that facilitates communication with the blockchain node using either a HTTP or IPC connection.

### How to interact with the Ethereum Virtual Machine (EVM) & Smart contracts.

For a Web3 application (dApp) to function properly, it must either host an Ethereum node or employ the services of a third-party provider such as 
Infura, Alchemy, or Quicknode. This is crucial because any node can execute a transaction or query data on the Ethereum Virtual Machine. However, it's 
worth noting that running a complete Ethereum node can be expensive and time-consuming to maintain. Consequently, relying on a third-party service may 
be a more practical option.

Moving on, we will discuss "Web3 providers," which enable interaction with the Ethereum Virtual Machine and smart contracts.


![interaction1](https://user-images.githubusercontent.com/113621544/231528928-33835048-2010-4df8-8515-634b1e6ebc0f.png)

Ethereum providers implement JSON-RPC specifications to facilitate communication with blockchain networks. Remote Procedure Call (RPC) is a request-
response protocol that outlines the procedures for a client to send a message to a remote machine to execute a function and retrieve a response. In this 
communication, the program runs on the client machine, with the client having no knowledge of the remote machine. All communication occurs via HTTP or 
Web Sockets.

Unlike centralized databases that grant access to apps through logins, dApps authenticate access via a web3 provider. Providers like Metamask, a 
cryptocurrency wallet, act as transaction signers and providers. It stores encrypted private keys using the browser's data storage. Write requests and 
transactions are signed with the client's private key, with each transaction incurring a fee in Ethereum, which goes to other nodes (miners) that verify 
the transactions.


![interaction2](https://user-images.githubusercontent.com/113621544/231528056-43d5c62b-74db-4406-b19b-49d8680fd427.png)

When a user wants to create a new transaction, the dApp, through the web3 provider, will prompt the user to sign the transaction using their 
private key. After the user has signed, the dApp will interact with the smart contract on behalf of the user and broadcast the output to the Ethereum 
network.

### Storage on the Ethereum Blockchain

Both IPFS and Swarm are decentralized off-chain storage solutions that can be used to store data and files for dApps, as storing 
everything on the Ethereum blockchain can become extremely expensive due to the associated transaction fees. IPFS uses content-addressing to identify 
each file in a global namespace connecting all computing devices, while Swarm is designed specifically to provide permissionless, censorship-resistant 
infrastructure for the deployment of dApp code. Providers like Infura or Pintara can be used to pin files to IPFS and store them on the blockchain, 
while Swarm has its own built-in incentive system for users to store and distribute data on the network.

![storage-on-ethereum-blockchain](https://user-images.githubusercontent.com/113621544/231527329-952d5163-548b-41b2-907c-2862675e6f9c.png)


Another option is cloud servers, Azure or AWS. However, that would resemble Twitter's web2 architecture, where we have the centralization of data. In 
addition, if Azure or AWS were to go down, censor your app, you would no longer have access to the data. For the above reasons, a genuine dApp would 
store all of its off- chain data on a decentralized storage option.

# Querying the blockchain

Now we are going to look at how to read data from smart contracts on the blockchain. There are two significant ways to do that:

1. Smart contract Events

To query and listen for smart contract events, utilise the Web3.js library. Every time an event is fired, you may provide a callback and listen for it. For instance, if you have a smart contract that delivers person A and person B a stream of payments continuously every block, you can emit an event each time person B receives a payment. Your front-end code can listen to events that the smart contract fires and take particular actions in response to them.

2. The Graph

Smart Contract Events is a good approach but with certain limitations. For instance, what if you deploy a smart contract and later realize you need an event emitted that you didn’t originally include? Unfortunately, you’d have to redeploy a new smart contract with that event and data.
A method of off-chain indexing called The Graph makes it simpler to search for data on the Ethereum blockchain. With the help of the Graph, you can specify which smart contracts to index, which events and function calls to listen to, and how to convert incoming events into entities that can be used by your frontend logic (or whatever else is utilising the API). Since GraphQL is more expressive than conventional REST APIs, it is used as the query language.
The Graph's indexing of blockchain data enables low-latency queries of on-chain data within our application logic.
 
 
![QB-graph](https://user-images.githubusercontent.com/113621544/231497496-97cc2b7e-e833-4ad7-b0a6-ddbb925b20a5.png)


# Scaling the DAPP

Ethereum is not scalable for now. We obviously have a problem here. A very poor user experience results from building a DApp on Ethereum with high gas fees and complete blocks. Fortunately, several remedies are in the works.

Polygon, an L2 scaling option, is a well-liked scaling approach. Polygon uses "sidechains" to process and carry out transactions as opposed to the main blockchain. A secondary blockchain that communicates with the main chain is known as a sidechain. The sidechain periodically sends a collection of its most recent blocks back to the main chain.

Optimistic Rollups and zkRollups are other illustrations of L2 solutions. Similar principles apply here: Using a "rollup" smart contract, we aggregate transactions off-chain and then periodically commit these transactions to the main chain.

The key point to remember is that L2 solutions only store transaction data on-chain and execute transactions (the slow portion) off-chain. Due to the fact that not every transaction needs to be processed on-chain, this enables us to scale the blockchain. when a result, transactions are also cheaper and faster, and they can still connect to the main Ethereum blockchain when needed



![QB-L2solutions](https://user-images.githubusercontent.com/113621544/231508668-0729cb5d-7c4a-42fa-acce-1c2305219741.png)


# Combining it together

If you are new to this, that it would not be diggested by you immediately. There are new developer frameworks which improve developers experience. 
One of the developer frameworks includes Hardhat. It makes easier for developers build, deploy and test their smart contracts. 
### Wrapping up 

Blockchain technology will continue to play an essential role in internet infrastructure as Web3 evolves. Web3 is a shift in the paradigm, where the 
users gain control of their privacy and data. It will also be interesting to see how Big tech companies will react to this future trend.


