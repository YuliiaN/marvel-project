const Skeleton = () => {
  return (
    <>
      <p className="font-bold text-center text-lg leading-6 mb-[1.875rem]">
        Please select a character to see more information
      </p>
      <div>
        <div className="header grid gap-x-2.5 items-center">
          <div className="pulse w-10 h-10 bg-grey rounded-full"></div>
          <div className="pulse w-full h-4 bg-grey"></div>
        </div>
        <div className="pulse w-full h-[2.188rem] bg-grey mt-[0.938rem]"></div>
        <div className="pulse w-full h-[2.188rem] bg-grey mt-[0.938rem]"></div>
        <div className="pulse w-full h-[2.188rem] bg-grey mt-[0.938rem]"></div>
      </div>
    </>
  );
};

export default Skeleton;
