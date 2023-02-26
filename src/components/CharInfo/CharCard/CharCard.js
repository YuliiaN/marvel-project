import { HeroBtn } from 'components/Hero/Hero.styled';

const CharCard = ({ char }) => {
  return (
    <div className="bg-white flex items-center gap-[1.875rem]">
      <img
        alt={char.name}
        src={char.thumbnail}
        className="w-[9.375rem] h-[9.375rem]"
      />
      <div className="flex flex-col gap-[1.875rem]">
        <h2 className="font-bold uppercase text-[1.375rem] leading-[1.625rem]">
          {char.name}
        </h2>
        <div>
          <HeroBtn href={char.homepage} className="btn mb-2.5">
            <div className="inner">Homepage</div>
          </HeroBtn>
          <HeroBtn href={char.wiki} className="btn secondary">
            <div className="inner secondary">Wiki</div>
          </HeroBtn>
        </div>
      </div>
    </div>
  );
};

export default CharCard;
