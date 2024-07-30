import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Creative Vision</h2>
          <p>
            Discover the art of transforming ideas into visually stunning and
            functional designs. I blend creativity with technical expertise to
            craft unique digital experiences that leave a lasting impression.
          </p>
          {/* <button>View Projects</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Technical Expertise</h2>
          <p>
            From front-end development to back-end integration, I offer a
            comprehensive skill set in web and software development. Let&apos;s build
            reliable, scalable, and high-performance solutions together.
          </p>
          {/* <button>See My Work</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Quality Assurance</h2>
          <p>
            Dedicated to delivering flawless products, I meticulously test and
            optimize each project to ensure top-quality performance and user
            satisfaction. Quality is never compromised.
          </p>
          {/* <button>Learn More</button> */}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Brand Identity</h2>
          <p>
            Crafting a unique brand identity is crucial for standing out in the
            market. I specialize in creating cohesive and compelling brand
            visuals that resonate with your target audience.
          </p>
          {/* <button>Go</button> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
