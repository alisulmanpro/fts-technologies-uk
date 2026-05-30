import Link from "next/link";

const MainMenu = () => {
  return (
    <nav className="main-menu">
      <ul>
        <li className="menu-item">
          <Link href="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link href="/about">About</Link>
        </li>
        <li className="menu-item">
          <Link href="/service">Services</Link>
        </li>
        <li className="menu-item">
          <Link href="/learning-hub">Learning Hub</Link>
        </li>
        <li className="menu-item">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default MainMenu;
