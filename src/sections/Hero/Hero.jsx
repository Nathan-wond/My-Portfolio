import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
function Hero() {
  return (<>
    <section id='Hero'><div>
        <img src={heroImg} alt="" />
        </div>
        </section>
    </>
  )
}

export default Hero;