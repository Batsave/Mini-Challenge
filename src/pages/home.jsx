import { Helmet } from "react-helmet";

//Styles
import "../scss/home.scss";
import { useState } from "react";
//Composants
import ProductCard from "../components/ProductCard.jsx";
//Data
import Data from "../data/data.json";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const filteredData = selectedOption
    ? Data.filter((product) => product.category === selectedOption)
    : Data;

  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Découvrez notre Nouvelle Collection"
        />
        <meta name="robots" content="noindex, follow" />
        <meta
          name="googlebot"
          content="noindex, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="noindex, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://www.pepinesque.com/" />
        <meta property="og:url" content="https://www.pepinesque.com" />
        <meta property="og:site_name" content="Pepinesque | Mini-Projet" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pepinesque | Mini-Projet" />
        <meta
          property="og:description"
          content="Découvrez notre Nouvelle Collection"
        />

        <meta property="og:image:width" content="584" />
        <meta property="og:image:height" content="384" />
        <meta property="fb:pages" content="" />
        <meta property="fb:admins" content="" />
        <meta property="fb:app_id" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <meta name="twitter:title" content="Pepinesque | Mini-Projet" />
        <meta
          name="twitter:description"
          content="Découvrez notre Nouvelle Collection"
        />
        <title>Pepinesque | Mini-Projet</title>
      </Helmet>

      <header id="home" className="header-container">
        <video
          className="bg-video"
          autoPlay={true}
          loop={true}
          controls={false}
          playsInline
          muted
        >
          <source src="./publicité-pepinesque-min.mp4" type="video/mp4" />
        </video>
        <div className="head-bloc">
          <a className="social-button" href="https://www.pepinesque.com">
            Suivez-nous sur les réseaux
          </a>

          <h1 className="title"> Découvrez notre Nouvelle Collection</h1>
          <h2 className="subtitle">
            Une qualité de tissu et de fabrication irréprochable pour des prix
            abordables.
          </h2>
        </div>
      </header>

      <div id="about" className="about">
        <div className="about-container">
          <div className="content">
            <div>
              <p className="about-ancre"> A propos de nous.</p>
            </div>
            <h3 className="title">6 ans d'existence.</h3>
            <p className="paragraphe">
              La marque Pépinesque a été créée à Cholet en 2017 sous l’impulsion
              d’Aimé VIVION. Pépinesque s’est développé dans le streetwear
              français après avoir été adoptée par de nombreux artistes Fun
              Radio et NRJ cumulant des millions de vues sur leurs singles. Par
              la suite la marque a été repérée par les journaux, radios,
              télévisions grâce à sa grande communauté de près de 15 000
              personnes sur les réseaux sociaux. Aujourd’hui, Pépinesque propose
              des vêtements épurés et de qualité afin d’affirmer son propre
              style et ses valeurs. La marque dynamise le streetwear français en
              proposant un large choix de produits sur sa boutique en ligne avec
              la possibilité de se faire livrer partout dans le monde en
              seulement quelques jours.
            </p>
          </div>
          <div className="content">
            <div className="img-about"></div>
          </div>
        </div>
      </div>

      <div id="products" className="allproducts">
        <div className="options">
          {selectedOption === "" ? (
            <p className="title">Tous nos Produits</p>
          ) : (
            <p className="title">Tous nos {selectedOption}</p>
          )}
          <select
            className="filter"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="">Tous les produits</option>
            <option value="Sweat">Sweat</option>
            <option value="T-Shirt">T-Shirt</option>
          </select>
        </div>
        <div className="results">
          {filteredData.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
