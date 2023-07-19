import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-opacity-70 bg-black  sticky top-0 py-5 text-white">
        <nav className="w-3/4 flex flex-row mx-auto ">
          <div className="uppercase text-lg basis-1/4">
            <Link to="/">
              <span className="font-extrabold text-white">Benua </span>
              <span className="font-extralight text-blue-400">Puhun</span>
            </Link>
          </div>

          <div className="basis-3/4 flex items-center justify-evenly">
            <Link className="hover:underline" to="/docs">
              docs
            </Link>
            <Link className="hover:underline" to="/gallery">
              gallery
            </Link>
            <Link className="hover:underline" href="">
              news
            </Link>
            <Link className="hover:underline" href="">
              contact
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
