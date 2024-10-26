// Internal dependencies
import Nav from "../../components/nav";

// Config
import config from "../../config.json";

const Socials = () => {
  const { socials } = config;
  return (
    <section className="mb-global-block">
      <Nav nav={socials} />
    </section>
  );
};

export default Socials;
