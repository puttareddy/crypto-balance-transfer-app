import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/constant';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionsContract;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('');
  const [formData, setFormData] = useState({
    addressTo: '',
    amount: '',
    keyword: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem('transactionCount')
  );
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e, name) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionsContract = getEthereumContract();

        const availableTransactions =
          await transactionsContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map(
          (transaction) => ({
            addressTo: transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(
              transaction.timestamp.toNumber() * 1000
            ).toLocaleString(),
            message: transaction.message,
            keyword: transaction.keyword,
            amount: parseInt(transaction.amount._hex) / 10 ** 18,
          })
        );

        setTransactions(structuredTransactions);
      } else {
        console.log('Ethereum is not present');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert('Please install metamask!');

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        getAllTransactions();
      } else {
        console.log('No accounts found!');
      }
    } catch (error) {
      console.log(error);

      throw new Error('No Etherium Object!');
    }
  };

  const checkIfTransactionExists = async () => {
    try {
      if (ethereum) {
        const transactionsContract = getEthereumContract();
        const currentTransactionCount =
          await transactionsContract.getTransactionCount();

        window.localStorage.setItem(
          'transactionCount',
          currentTransactionCount
        );
      }
    } catch (error) {
      console.log(error);

      throw new Error('No Etherium Object!');
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install metamask!');

      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      setCurrentAccount(accounts[0]);
      getAllTransactions();
    } catch (error) {
      console.log(error);

      throw new Error('No Etherium Object!');
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert('Please install metamask!');

      // get data from form...

      const { addressTo, amount, keyword, message } = formData;
      const transactionsContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);

      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: '0x5208',
            value: parsedAmount._hex,
          },
        ],
      });

      const transactionHash = await transactionsContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );

      setIsLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait();
      setIsLoading(false);
      console.log(`Success - ${transactionHash.hash}`);

      const transactionCount = await transactionsContract.getTransactionCount();

      setTransactionCount(transactionCount.toNumber());
      window.location.reload();
    } catch (error) {
      console.log(error);

      throw new Error('No Etherium Object!');
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    checkIfTransactionExists();
  }, [transactionCount]);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        sendTransaction,
        handleChange,
        transactions,
        isLoading,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
