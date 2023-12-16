import { useSelector } from 'react-redux';

function Greeting() {
  const {
    greeting, isLoading, error,
  } = useSelector((state) => state.greeting);

  let loadMessage = null;

  if (isLoading) {
    loadMessage = 'Loading message...';
  }

  if (error) {
    loadMessage = 'Error loading data';
  }

  return (
    <section>
      {
      (isLoading || error)
        ? (<p className="status"><i>{loadMessage}</i></p>)
        : (<p className="greeting-message"><b>{greeting?.salutation}</b></p>)
    }
    </section>
  );
}

export default Greeting;