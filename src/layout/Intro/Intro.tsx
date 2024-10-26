// Config
import Button from "../../components/Button/Button";
import config from "../../config.json";

const Intro = () => {
  const { intro } = config;

  return (
    <section className="grid grid-cols-4 grid-rows-4 sm:grid-cols-8 lg:grid-cols-12 sm:grid-rows-2 xl:sm:grid-rows-1 gap-4 mb-s2xl3xl">
      <div className="flex flex-col gap-sxl2xl items-start col-span-4 lg:col-span-3 lg:row-span-2 xl:col-span-3">
        <div className="flex flex-col gap-sml">
          <h2 className="text-headline">{intro.title}</h2>
          <p className="text-body">{intro.text}</p>
        </div>
        <Button />
      </div>

      {intro.cards.map((card, index) => (
        <div
          key={index}
          className={`flex flex-col gap-sxl2xl p-sml bg-white-04 rounded-3xl justify-between col-span-4 ${index === 0 ? "lg:row-span-2 lg:col-start-5" : ""} `}
        >
          <div className="flex flex-col gap-sml">
            <h3 className="text-title">{card.title}</h3>
            <p className="text-body">{card.text}</p>
          </div>
          <span className="text-title text-black-36 dark:text-white-36 self-end">
            {card.id}
          </span>
        </div>
      ))}
    </section>
  );
};

export default Intro;
