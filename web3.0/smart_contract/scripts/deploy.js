const main = async () => {
  const transactionsFactory = await hre.ethers.getContractFactory(
    'Transactions'
  );
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log('Transactions address: ', transactionsContract.address);
};

// 0x58cD0BFbd4c31FbDAb7b1428c8df04389C3B193a

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
