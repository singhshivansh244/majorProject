import './about.css'
import './main.css'

export default function About() {
  return (
    <div>
      <div className={'about__carousal'} style={{ backgroundImage: "url('/images/background/1.jpg')" }}></div>
      <div className="about__fade"></div>
      <div className='about__tiles'>
        <div
          className='about__tilesImg'
          style={{ backgroundImage: "url('/images/carousel/tiles1.jpg')" }}>
          <a
            className='about__tileLink vert-move'
            href="#WhoWeAre">Who we are
          </a>
          <div className="about__tileClickMe vert-move">
            <span>↑</span>
            <br />
            <span>Click me</span>
          </div>
        </div>
        <div
          className='about__tilesImg'
          style={{ backgroundImage: "url('/images/background/3.jpg')" }}>
          <a
            className='about__tileLink vert-move'
            href="#ServicesWeOffer">Services We Offer
          </a>
          <div className="about__tileClickMe vert-move">
            <span>↑</span>
            <br />
            <span>Click me</span>
          </div>
        </div>
      </div>
      <div>
        <h1 className='about__about-title' id='WhoWeAre'>Who we are?</h1>
        <div className="about__about-pic-container">
          <img src="/images/groupImage.jpg" alt="group" className='about__about-dp' />
          <div className='about__about-info'>
            <p>
              We are group of innovative developers under guidance of our mentor are assisting farmers by providing them a system which can be useful for their cultivation process.
            </p>
          </div>
        </div>
        <div>
          <h1 className='about__about-title' id='ServicesWeOffer'>Services we offer</h1>
        </div>
        <div className='about__about-pic-container about__about-services-container'>
          <div>
            <img src='/images/service2.jpg' alt="services" className='about__about-dp' />
          </div>
          <div className='about__about-info'>
            <p>
              <a href="http://localhost:3000/service">Disease Detection</a> dolor sit amet consectetur adipisicing elit. Ipsa tempora neque, quia dolor harum voluptatem. Molestias tempore quisquam autem nulla ut, error eius aspernatur rem dolores aperiam deleniti, porro laudantium?
            </p>
          </div>
        </div>
        <div className='about__about-pic-container about__about-services-container' >
          <div className='about__about-info'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempora neque, quia dolor harum voluptatem. Molestias tempore quisquam autem nulla ut, error eius aspernatur rem dolores aperiam deleniti, porro laudantium?
            </p>
          </div>
          <div>
            <img src='/images/service1.jpg' alt="services" className='about__about-dp' />
          </div>
        </div>
      </div>
    </div>
  )
}



