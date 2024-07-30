import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Torchlite from '../../Assets/Images/Torchlite.png'
import Hathme from '../../Assets/Images/Hathme.png'

const items = [
  {
    id: 1,
    title: "Torchlite",
    img: Torchlite,
    desc: "Torchlite is a versatile Partner Management (PRM) Platform that enhances partner programs with tools for onboarding, deal registration, and account mapping. It also supports co-marketing, co-selling, and integrates seamlessly with other systems.",
    link: 'https://www.torchlite.com/'
  },
  {
    id: 2,
    title: "Hatme",
    img: Hathme, 
    desc: 'Hathme is an all-in-one app connecting merchants and customers, offering seamless delivery and ordering from restaurants. It also features engaging reels, social networking, and a convenient way to order medical supplies, making everyday life easier and more enjoyable.',
    link: 'https://www.hathme.com/'
  },
  // {
  //   id: 3,
  //   title: "Vanilla JS App",
  //   img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  // },
  // {
  //   id: 4,
  //   title: "Music App",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  // },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleButtonClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => handleButtonClick(item.link)}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
