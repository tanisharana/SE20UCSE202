import React, { useState, useEffect } from 'react';

const NumberList = () => {
  const [oddNumbers, setOddNumbers] = useState([]);

  useEffect(() => {
    fetchOddNumbers();
  }, []);

  const fetchOddNumbers = async () => {
    try {
      const response = await fetch('http://20.244.56.144/numbers/odd');
      const data = await response.json();
      setOddNumbers(data.numbers);
    } catch (error) {
      console.error('Error fetching odd numbers:', error);
    }
  };

  return (
    <div>
      <h2>Odd Numbers</h2>
      <ul>
        {oddNumbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;
