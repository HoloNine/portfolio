import { NavType } from "../../types/nav.type";

type NavProps = {
  nav: NavType[];
};

const Nav = ({ nav }: NavProps) => {
  return (
    <nav>
      <ul className="flex gap-48 items-center min-h-12">
        {nav.map((navItem) => {
          return (
            <li key={navItem.id} className="text-label">
              {navItem.label}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
