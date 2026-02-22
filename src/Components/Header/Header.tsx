import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>
        Brooklin Pigg
        {/* <span className="pig-icon">
          <TbPig />
        </span> */}
      </h1>
      <div className="link-wrapper">
        <a href="/">about</a>
        <a href="/work/for-every-year-you-dont-have">work</a>
        <a href="/contact">contact</a>
      </div>
    </header>
  );
};

export default Header;
