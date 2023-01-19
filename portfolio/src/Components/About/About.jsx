import "./About.css";

function About() {
  return (
    <>
      <div className="aboutBox">
        <div className="menu">
          <div className="menuTop">
            <button>John Petter Kleppen</button>
          </div>
          <div className="menuBottom">
            <button>Utvikling</button>
            <button>Grafikk</button>
            <button>Design</button>
            <button>Animasjon</button>
          </div>
        </div>
        <div className="textBox">
          <h1>Overskrift</h1>
          <p>Tekst her</p>
        </div>
      </div>
    </>
  );
}

export default About;
