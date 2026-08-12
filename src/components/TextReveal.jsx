import { motion } from 'framer-motion';

export default function TextReveal({ text, className, style, goldWords = [] }) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap", ...style }}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, index) => {
        // Strip punctuation for matching, but render original word
        const cleanWord = word.replace(/[.,]/g, '');
        const isGold = goldWords.includes(cleanWord) || goldWords.includes(word);
        
        return (
          <motion.span
            variants={child}
            style={{ marginRight: "0.25em", display: 'inline-block' }}
            key={index}
          >
            {isGold ? (
              <span className="text-gold" style={{ display: 'inline-block' }}>{word}</span>
            ) : (
              word
            )}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
