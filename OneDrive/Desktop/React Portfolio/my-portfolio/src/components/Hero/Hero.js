import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Akshay Pratap Singh</span></h1>
        <h2>Full-Stack Developer & CS Engineering Student</h2>
        <p>
          Building innovative web applications with MERN stack. Currently pursuing 
          B.Tech at BBDITM, Lucknow, with experience in AWS Cloud and IoT development.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">View My Work</button>
          <button className="btn-secondary">Contact Me</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;