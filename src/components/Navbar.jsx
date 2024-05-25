import { motion } from "framer-motion";
import logo from "../assets/raoLogo.png";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-15" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a
          href="https://www.facebook.com/ornate.ahmed/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <FaFacebook style={{ color: "#1877F2" }} />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/reeyad_ahmed_ornate/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <FaInstagram style={{ color: "#C13584" }} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/ra-ornate/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <FaLinkedin style={{ color: "#0A66C2" }} />
        </motion.a>
        <motion.a
          href="https://github.com/Ornate159"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <FaGithub style={{ color: "#6e5494" }} />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
