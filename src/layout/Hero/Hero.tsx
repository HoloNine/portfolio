// Config
import config from "../../config.json";

const Hero = () => {
  const { title, text } = config.hero;
  return (
    <section className="flex justify-center items-center min-h-hero py-96">
      <div className="flex flex-col items-center gap-48">
        <h1
          className="text-display text-center max-w-screen-xl"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-subtitle text-center max-w-screen-md">{text}</p>
      </div>
    </section>
  );
};

export default Hero;
