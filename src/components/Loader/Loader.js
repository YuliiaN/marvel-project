import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#9F0013"
      wrapperStyle={{ margin: '0 auto' }}
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#232222"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Loader;
