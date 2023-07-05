import HeroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
            unde quibusdam. Rerum rem vel aperiam eaque, in nostrum nemo cumque
            eligendi! Magnam eveniet sed quibusdam eius pariatur nam suscipit
            soluta!
          </p>
        </div>
        <div className="img-container">
          <img src={HeroImg} alt="Woman and the browser" className="img" />
        </div>
      </div>
    </section>
  )
}

export default Hero
