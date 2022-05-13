import Title_IMG from '../../assets/images/main.png';
import IMG_223 from '../../assets/images/Rectangle-223.png';
import IMG_16 from '../../assets/images/image-16.png';
import IMG_224 from '../../assets/images/Rectangle-224.png';
import IMG_225 from '../../assets/images/Rectangle-225.png';
import IMG_226 from '../../assets/images/Rectangle-226.png';
import IMG_227 from '../../assets/images/Rectangle-227.png';
import IMG_228 from '../../assets/images/Rectangle-228.png';
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <>
      <section className="home-title-section">
        <article>
          <h2 className='home-title'>Hilf mit die Umwelt zu schützen</h2>
          <p className='home-text'>Abfälle bedrohen Vögel, Delfine und Co. Mehr als zehn Millionen Tonnen Abfälle gelangen jährlich in die Ozeane.
          Sie kosten Abertausende Meerestiere das Leben. Seevögel verwechseln Plastik mit natürlicher Nahrung, 
          Delfine verfangen sich in alten Fischernetzen. Hilf mit Müll zu reduzieren und trashnothing.
          </p>
          <Button text="Starte jetzt" style="button button-purple" />
        </article>
        <figure>
          <img src={Title_IMG} alt="title-image" />
        </figure>
      </section>
      <section className='home-content-section'>
        <h3 className='content-title'>Lebe eCommerce mal anders</h3>
        <article className='image-content-wrapper'>
          <figure className='figure'>
            <img src={IMG_16} alt="-" />
            <img src={IMG_223} alt="-" />
            <figcaption>
              <h4>Verkaufen statt wegwerfen</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget.</p>
            </figcaption>
          </figure>
          <figure className='figure'>
            <img src={IMG_224} alt="-" />
            <figcaption>
              <h4>Verschenke und Schütze</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget.</p>
            </figcaption>
          </figure>
          <figure className='figure'>
            <img src={IMG_225} alt="-" />
            <img src={IMG_227} alt="-" />
            <img src={IMG_226} alt="-" />
            <img src={IMG_228} alt="-" />
            <figcaption>
              <h4>Der Umwelt zuliebe</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus faucibus egestas neque, quis nunc in turpis cursus eget.</p>
            </figcaption>
          </figure>
        </article>
      </section>
    </>
  );
}

export default Home;