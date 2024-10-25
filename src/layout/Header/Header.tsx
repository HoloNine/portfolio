// Internal dependencies
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";

// Config
import config from "../../config.json";

const Header = () => {
  const { navigation } = config;

  return (
    <header className="flex justify-between items-center">
      <div>
        <Logo />
      </div>
      <div className="flex gap-sxl2xl items-center">
        <nav>
          <ul className="flex gap-sml">
            {navigation.map((item) => (
              <li key={item.id} className="text-label">
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
        <Button />
      </div>
    </header>
  );
};

export default Header;
