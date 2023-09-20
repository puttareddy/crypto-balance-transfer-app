# Deployment

How to deploy & run this application

This can be done in multiple phases

1. Deploy Smart Contract to test network `georli` using below command

```shell
npx hardhat run scripts/deploy.js --network goerli
```

FYI, this application is already deployed using Alchemy

2. To run the application please execute below command

```shell
npm run dev
```

This command will run the application localhost:3000, which connects to above deployed smart contract