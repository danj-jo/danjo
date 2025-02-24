"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TypingEffect() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState("linkedin/in/danj-jo"); // Start text
  const speed = isDeleting ? 50 : 100; // Typing vs Deleting speed

  useEffect(() => {
    let i = isDeleting ? text.length - 1 : text.length + 1;

    const timeout = setTimeout(() => {
      setText(currentText.slice(0, i));

      // If typing is complete, pause and start deleting after 1 second
      if (!isDeleting && i === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      }
      // If deleting is complete, pause and change the text
      else if (isDeleting && i === 0) {

        setIsDeleting(false);
        // Switch the text after deleting
        setCurrentText((prev) => (prev === "linkedin/in/danj-jo" ? "github.com/danj-jo" : "linkedin/in/danj-jo"));
        // Pause before retyping
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentText]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-white text-center text-2xl">
        {text}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block bg-white w-2 h-5 ml-1"
        />
      </div>
    </div>
  );
}
