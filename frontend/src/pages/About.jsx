 import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      <h1>About Zenithcare Services</h1>

      <p>
        Zenithcare Services is a professional healthcare
        staffing company providing certified nurses and
        therapists for home and hospital care.
      </p>

      <p>
        Our mission is to deliver compassionate,
        affordable, and reliable healthcare services.
      </p>

      <p>
        We believe in trust, safety, and excellence.
      </p>

    </motion.section>
  );
}
