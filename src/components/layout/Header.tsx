import salusLogo from "@/assets/salus-logo.png";

export function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#" className="logo">
          <img src={salusLogo} alt="SALUS" className="logo-image" />
        </a>
        <nav className="nav">
          <a href="#demo-form" className="btn btn-lime">
            BOOK A DEMO
          </a>
        </nav>
      </div>
    </header>
  );
}
