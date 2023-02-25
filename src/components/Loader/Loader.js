import { Puff } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Puff
      height="80"
      width="80"
      radius={1}
      color="grey"
      ariaLabel="puff-loading"
      wrapperStyle={{
        margin: '0 auto',
        justifyContent: 'center',
      }}
      visible={true}
    />
  );
};

export default Loader;
