import { useGetMessageQuery } from '../redux/apis/apiSlice';

const GreetingPage = () => {
  const {
    data: randomMessage,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetMessageQuery();

  let content;

  if (isLoading) {
    content = 'Loading...';
  } else if (isSuccess) {
    content = randomMessage.message;
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <div>
      <h3>{content}</h3>
    </div>
  );
};

export default GreetingPage;
