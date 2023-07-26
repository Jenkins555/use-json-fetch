import React from 'react';
import DataComponent from './components/DataComponent';
import ErrorComponent from './components/ErrorComponent';
import LoadingComponent from './components/LoadingComponent';

const App = () => {
  return (
    <div>
      <h1>Компонент для успешного получения данных:</h1>
      <DataComponent />

      <h1>Компонент для получения ошибки:</h1>
      <ErrorComponent />

      <h1>Компонент для индикатора загрузки:</h1>
      <LoadingComponent />
    </div>
  );
};

export default App;
