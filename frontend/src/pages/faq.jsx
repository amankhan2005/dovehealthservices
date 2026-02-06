 import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <motion.section
      className="section gray"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >

      <h1>Frequently Asked Questions</h1>

      <details>
        <summary>How do I request a nurse?</summary>
        <p>Fill the request form on home page.</p>
      </details>

      <details>
        <summary>Are nurses certified?</summary>
        <p>Yes, all nurses are verified and trained.</p>
      </details>

      <details>
        <summary>Do you accept insurance?</summary>
        <p>Yes, we work with insurance providers.</p>
      </details>

      <details>
        <summary>How can I apply as a nurse?</summary>
        <p>Use the Apply form on home page.</p>
      </details>

    </motion.section>
  );
}
