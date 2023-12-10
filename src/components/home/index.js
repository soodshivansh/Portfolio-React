import { Link } from 'react-router-dom';
import Logotitle from '../../assets/images/logo-s.png'
import './index.scss'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass,setletterclass] = useState('text-animate')
  const nameArray = ['h','i','v','a','n','s','h']
  const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.',]
  
  // useEffect(() => {
  //   return setTimeout(() => {
  //     setletterclass('text-animate-hover');
  //   }, 4000);
  // }, []);

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <span className={letterClass}>H</span>  
        <span className={`${letterClass} _12`}>i,</span>  
        <br/> 
        <span className={`${letterClass} _13`}>I</span>  
        <span className={`${letterClass} _14`}>'m</span>  
        <img src={Logotitle} alt="developer" />
        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
        <br />
        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
        </h1>
        <h2>Frontend Developer</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
      <Logo />
    </div>
    <Loader type="pacman" ></Loader>
    </>
  );
}

export default Home;