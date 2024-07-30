import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Abhi  */}
        </motion.span>
        <div className="social">
  <a href="https://www.linkedin.com/in/abhi-v-6b545a225/" target="_blank" rel="noopener noreferrer">
    <img src="/linkedin.png" alt="LinkedIn" />
  </a>
  <a href="https://github.com/abhibruce2" target="_blank" rel="noopener noreferrer">
    <img src="/github.png" alt="GitHub" />
  </a>
  <a href="https://www.instagram.com/_heyy__abhii/" target="_blank" rel="noopener noreferrer">
    <img src="/instagram.png" alt="Instagram" />
  </a>
  <a href="https://x.com/abhibruce2" target="_blank" rel="noopener noreferrer">
    <img src="/twitter.png" alt="Twitter" />
  </a>
</div>

      </div>
    </div>
  );
};

export default Navbar;
