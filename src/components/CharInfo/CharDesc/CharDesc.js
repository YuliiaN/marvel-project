const CharDesc = ({ comics, desc }) => {
  const isDesc = desc ? desc : `There is no character's description`;
  return (
    <>
      <p className="text-[0.875rem] leading-4 mt-[0.938rem]">{isDesc}</p>
      <h3 className="font-bold text-lg leading=[1.305rem] mt-[0.625rem] mb-[0.813rem]">
        Comics
      </h3>
      <ul className="flex flex-col gap-2.5">
        {comics.map(({ id, title, urls }) => (
          <li key={id} className="py-1 py-2.5 shadow-1xl">
            <a
              href={urls[0].url}
              rel="nofollow noopener noreferrer"
              target="_blank"
              className="text-[0.875rem]leading-5 text-black"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CharDesc;
