// Config
import config from "../../config.json";

const Hero = () => {
  const { title, text } = config.hero;
  return (
    <section className="flex justify-center items-center min-h-hero py-s2xl">
      <div className="flex flex-col items-center gap-sml">
        <h1
          className="text-display uppercase text-center max-w-screen-lg"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-subtitle text-center max-w-screen-md">{text}</p>
      </div>
    </section>
  );
};

export default Hero;
