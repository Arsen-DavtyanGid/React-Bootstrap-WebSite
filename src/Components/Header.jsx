import Navbar from "./Navbar";

function Header(props) {
  return (
    <header>
      <Navbar logo={props.logo} />
    </header>
  );
}
export default Header;
