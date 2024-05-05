import SignInAndOut from "../auth/SignInAndOut";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center py-4">
        <div className="nav-brand">
          <Logo />
        </div>

        <ul className="flex gap-4 text-[#9C9C9C]">
          <li>
            <SignInAndOut />
          </li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
