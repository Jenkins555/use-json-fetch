import React from 'react';
import useJsonFetch from './useJsonFetch';

const ErrorComponent = () => {
  const [data, loading, error] = useJsonFetch('http://localhost:7070/error');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Received Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ErrorComponent;
