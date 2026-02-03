import salusLogo from "@/assets/salus-logo.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <img src={salusLogo} alt="Salus" className="logo-image" />
        </div>
        <div className="footer-copyright">© 2024 SALUS SAFETY INC. | ALL RIGHTS RESERVED</div>
      </div>
    </footer>
  );
}
