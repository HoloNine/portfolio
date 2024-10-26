// Internal dependencies
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import Nav from "../../components/Nav/Nav";

// Config
import config from "../../config.json";

const Header = () => {
  const { navigation } = config;

  return (
    <header className="flex justify-between items-center">
      <div>
        <Logo />
      </div>
      <div className="flex gap-96 items-center">
        <Nav nav={navigation} />
        <Button />
      </div>
    </header>
  );
};

export default Header;
