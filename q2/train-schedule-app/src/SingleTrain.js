import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SingleTrain = ({ trainId }) => {
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchSingleTrain = async () => {
      try {
        const response = await axios.get(`http://20.244.56.144/train/trains/${trainId}`);
        setTrain(response.data);
      } catch (error) {
        console.error('Fetch single train error:', error);
      }
    };

    fetchSingleTrain();
  }, [trainId]);

  if (!train) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{train.name}</h2>
      {/* Display other train details here */}
    </div>
  );
};

export default SingleTrain;
