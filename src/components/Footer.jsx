import "../scss/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="/" className="footer-logo" alt="Logo Officiel"></a>
        <div className="section">
          <p className="section-title">A propos</p>
          <p className="section-text">
          Ce site est un prototype d'exercice dessiné et développé par Baptiste SAVE
            (@batsave) dans le cadre de sa formation de Développeur Web et Mobile au sein de la Wild Code School
                    sur le campus Remote de Septembre 2023.
          </p>
        </div>

        <div className="section">
          <p className="section-title">Légale</p>
          <ul className="section-list">
            <li className="section-item">
              <a href="#">Mentions Légales</a>
            </li>
            <li className="section-item">
              <a href="#">CVG</a>
            </li>
            <li className="section-item">
              <a href="#">Cookies</a>
            </li>
            <li className="section-item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="spacing"></div>
        </div>
      <div className="footer-section">
        <p className="copyright">
          © 2023 | BATSAVE. Tous droits réservés.
        </p>
      </div>
      
    </footer>
  );
}
