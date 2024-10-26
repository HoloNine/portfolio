// Internal dependencies
import Logo from "../icons/logo";
import Button from "../components/button";
import Nav from "../components/Nav/Nav";

// Config
import config from "../config.json";

const Header = () => {
  const { navigation } = config;

  return (
    <header className="flex justify-between items-center px-global-inline">
      <Logo />
      <div className="flex gap-96 items-center">
        <Nav nav={navigation} />
        <Button label="Get in touch" />
      </div>
    </header>
  );
};

export default Header;
