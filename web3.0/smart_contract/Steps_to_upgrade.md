# Building upgradeable smart contracts: A backdoor approach

## Introduction

Building upgradeable smart contracts involves creating smart contracts that can be modified and improved over time without 
requiring a full redeployment. The main advantage of upgradeable smart contracts is that they allow developers to fix bugs, add 
features, and improve functionality without disrupting the existing contract.

Upgradeable smart contracts are contracts that allow developers to make changes to the contract's code after it has been 
deployed on the blockchain. This is different from traditional smart contracts, which are immutable and cannot be modified once 
deployed.

## Proxy contract vs Logic contract

Upgradable smart contracts are useful for updating contracts to fix bugs or make improvements without having to redeploy the 
entire contract. The concept involves having a "proxy contract" and a "logic contract," where the proxy contract delegates to 
the logic contract. Users interact with the proxy contract, which stores all the application data, while the logic for the 
method is stored in the logic contract. Updating the logic involves simply updating and redeploying the logic contract, without 
having to redeploy the entire contract. This process can help prevent the loss of funds due to bugs or hacks in the contract.

## Why do we need upgradeable smart contract?

Upgradeable smart contracts provide several benefits over traditional, immutable smart contracts. Here are a few reasons why we 
might need upgradeable smart contracts:

1. Bug fixes: Smart contracts, like any other software, can contain bugs or errors that may only be discovered after the 
contract has been deployed on the blockchain. With an upgradeable smart contract, developers can fix these bugs and push out an 
updated version of the contract.

2. Evolving requirements: As the requirements for a smart contract change over time, an upgradeable contract allows developers 
to modify the code to meet those changing requirements.

3. Optimization: Developers may identify opportunities to optimize the code of a smart contract to reduce gas costs or improve 
its efficiency. An upgradeable smart contract allows developers to implement these optimizations without having to redeploy the 
entire contract.

4. Future-proofing: Upgradeable smart contracts can be designed to accommodate future upgrades or changes to the underlying 
blockchain technology. This can help ensure that the contract remains relevant and functional as the blockchain ecosystem 
evolves.

Overall, upgradeable smart contracts provide greater flexibility and adaptability than traditional, immutable smart contracts. 
They can help mitigate risks and provide a more agile development process for decentralized applications.
## Steps
Here's a detailed approach to building upgradeable smart contracts:

1. Use a Proxy Contract: The upgradeable smart contract pattern typically uses two smart contracts: a proxy contract and an 
implementation contract. The proxy contract is responsible for handling all user interactions, while the implementation contract 
contains the business logic of the smart contract. This separation of concerns allows developers to upgrade the implementation 
contract without changing the address of the proxy contract.

2. Use a Registry Contract: To allow the proxy contract to always point to the latest implementation contract, a registry 
contract can be used. This contract acts as a central hub for all the implementation contracts, allowing the proxy contract to 
reference the latest version.

3. Upgrade the Implementation Contract: When an upgrade is required, developers can deploy a new implementation contract and 
update the registry contract to point to the new contract. The proxy contract can then be updated to reference the new 
implementation contract, allowing it to use the latest version.

4. Use an Access Control Mechanism: It's important to have an access control mechanism in place to ensure that only authorized 
parties can upgrade the implementation contract. This can be achieved using a multisignature wallet, where multiple parties must 
sign off on the upgrade.

5. Use a Test Suite: When upgrading the implementation contract, it's important to test the new version thoroughly before 
deploying it. Using a test suite can help identify any bugs or issues before the contract is deployed.

6. Use a Security Audit: Smart contracts are susceptible to attacks, and upgradeable smart contracts are no exception. A 
security audit can help identify any vulnerabilities in the contract and help mitigate any risks.

## Conclusion

By following these steps, developers can build upgradeable smart contracts that allow for continuous improvement and evolution 
of the contract. This approach can help prevent issues such as lost funds due to bugs or hacks, and can ultimately lead to a 
more robust and functional smart contract.