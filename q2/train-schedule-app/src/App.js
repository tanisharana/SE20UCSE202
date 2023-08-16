import React from 'react';
import AuthForm from './AuthForm';
import TrainList from './TrainList';
import SingleTrain from './SingleTrain';

function App() {
  return (
    <div>
      <AuthForm />
      <TrainList />
      <SingleTrain trainId={1234} />
    </div>
  );
}

export default App;
