import React, { useContext, useEffect, useState } from 'react';
import { Web3Context } from '../../context/Web3Context';
import MentorMatchABI from '../../contracts/abis/MentorMatch.json';

const ContractInteraction: React.FC = () => {
  const { contract, account } = useContext(Web3Context);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      if (contract && account) {
        try {
          const result = await contract.methods.getData().call({ from: account });
          setData(result);
        } catch (error) {
          console.error("Error fetching data from contract:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [contract, account]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Contract Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ContractInteraction;