import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get('http://20.244.56.144/train/trains');
        const currentTime = new Date();

        // Filter out trains departing in the next 30 minutes
        const filteredTrains = response.data.filter(train => {
          const departureTime = new Date(train.departureTime);
          const timeDifferenceInMinutes = (departureTime - currentTime) / (1000 * 60);
          return timeDifferenceInMinutes > 30;
        });

        // Sort the trains based on criteria
        filteredTrains.sort((a, b) => {
          // Sort by ascending price
          if (a.price < b.price) return -1;
          if (a.price > b.price) return 1;

          // Sort by descending ticket availability
          if (a.seatsAvailability > b.seatsAvailability) return -1;
          if (a.seatsAvailability < b.seatsAvailability) return 1;

          // Sort by descending departure time
          const departureTimeA = new Date(a.departureTime);
          const departureTimeB = new Date(b.departureTime);
          return departureTimeB - departureTimeA;
        });

        setTrains(filteredTrains);
      } catch (error) {
        console.error('Fetch trains error:', error);
      }
    };

    fetchTrains();
  }, []);

  return (
    <div>
      <h2>Train List</h2>
      <ul>
        {trains.map(train => (
          <li key={train.id}>
            {train.name} - Departure: {train.departureTime} - Price: {train.price} - Seats: {train.seatsAvailability}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainList;
