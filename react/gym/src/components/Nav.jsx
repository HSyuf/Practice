import { headerLogo } from "./../assets/images";

function Nav() {
  return (
    <header className="absolute padding-x py-8 z-10 w-full">
      <nav>
        <a href="">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
      </nav>
    </header>
  );
}

export default Nav;
