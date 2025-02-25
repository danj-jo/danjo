"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TypingEffect() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState("linkedin/in/danj-jo");
  const speed = isDeleting ? 50 : 100;

  useEffect(() => {
    const i = isDeleting ? text.length - 1 : text.length + 1;

    const timeout = setTimeout(() => {
      setText(currentText.slice(0, i));


      if (!isDeleting && i === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      else if (isDeleting && i === 0) {

        setIsDeleting(false);
        setCurrentText((prev) => (prev === "linkedin/in/danj-jo" ? "github.com/danj-jo" : "linkedin/in/danj-jo"));

      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentText]);

  return (
    <div className="flex items-center justify-center mx-auto my-auto">
      <div className="
      text-white text-center text-2xl sm:w-1024 
            text-center lg:w-96 lg:mx-auto lg: my-auto lg:mt-20 p-6 ">
        {text}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.3 }}

        />
      </div>
    </div>
  );
}
