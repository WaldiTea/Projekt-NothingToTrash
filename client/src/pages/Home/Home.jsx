import Button from "../../components/Button/Button";
import IMG_1 from '../../assets/images/gridImg1.svg';
import IMG_2 from '../../assets/images/image-3.png';
import IMG_3 from '../../assets/images/gridImg3.svg';
import IMG_8 from '../../assets/images/image-8.png';
import IMG_9 from '../../assets/images/image-9.png';
import IMG_10 from '../../assets/images/image-10.svg';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="title-section">
        <article className="title-article">
          <h2 className="title">Hilf mit die Umwelt zu schützen</h2>
          <p className="title-text">Abfälle bedrohen Vögel, Delfine und Co. Mehr als zehn Millionen Tonnen Abfälle gelangen jährlich in die Ozeane. Sie kosten Abertausende Meerestiere das Leben. Seevögel verwechseln Plastik mit natürlicher Nahrung, Delfine verfangen sich in alten Fischernetzen. Hilf mit Müll zu reduzieren und trashnothing.</p>
          <Button styling="btn btn-lg" text="Starte jetzt" onClick={() => navigate('/login')} />
        </article>
      </section>
      <section className="content-section">
        <h2 className="content-title">Lebe eCommerce mal anders</h2>
        <figure className="content-figure">
          <img src={IMG_1} alt="-" />
          <figcaption>
            <h3 className="caption-title">Verkaufen statt wegwerfen</h3>
            <p className="caption-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget.</p>
          </figcaption>
        </figure>
        <figure className="content-figure">
          <img src={IMG_2} alt="-" />
          <figcaption>
            <h3 className="caption-title">Verschenke und Schütze</h3>
            <p className="caption-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget.</p>
          </figcaption>
        </figure>
        <figure className="content-figure">
          <img src={IMG_3} alt="-" />
          <figcaption>
            <h3 className="caption-title">Der Umwelt zuliebe</h3>
            <p className="caption-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget.</p>
          </figcaption>
        </figure>
      </section>
      <section className="documentation-section">
        <figure>
          <img src={IMG_8} alt="-" />
        </figure>
        <article>
          <h3 className="documentation-title">Ohne Limits</h3>
          <p className="documentation-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget.</p>
          <Button styling="btn btn-orange" text="Zur Dokumentation" />
        </article>
        <article>
          <h3 className="documentation-title">Kenn deine Community</h3>
          <p className="documentation-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget.</p>
          <Button styling="btn btn-orange" text="Zur Dokumentation" />
        </article>
        <figure>
          <img src={IMG_9} alt="-" />
        </figure>
      </section>
      <section className="community-section">
        <h2 className="community-title">Von echten Menschen unterstützt</h2>
        <p className="community-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget.</p>
        <figure>
          <img src={IMG_10} alt="-" />
        </figure>
      </section>
    </>
  );
}

export default Home;