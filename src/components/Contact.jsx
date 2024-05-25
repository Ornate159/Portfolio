import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.7 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="my-4 text-lg"
          onClick={() => copyToClipboard(CONTACT.address)}
          style={{ cursor: "pointer" }}
          whileHover={{ color: "#9b59b6" }}
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="my-4 text-lg"
          onClick={() => copyToClipboard(CONTACT.phoneNo)}
          style={{ cursor: "pointer" }}
          whileHover={{ color: "#9b59b6" }}
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="border-b text-lg"
          onClick={(e) => {
            e.preventDefault();
            copyToClipboard(CONTACT.email);
          }}
          style={{ cursor: "pointer", color: "#FFFFFF", transition: "color 0.3s" }}
          onMouseOver={(e) => e.target.style.color = "#9b59b6"}
          onMouseOut={(e) => e.target.style.color = "#FFFFFF"}
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;