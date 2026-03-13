import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  fullWidth?: boolean;
}

export function FadeIn({ 
  children, 
  delay = 0, 
  className = "", 
  direction = "up",
  fullWidth = false 
}: FadeInProps) {
  
  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: 30 };
      case "down": return { opacity: 0, y: -30 };
      case "left": return { opacity: 0, x: 30 };
      case "right": return { opacity: 0, x: -30 };
      case "none": return { opacity: 0 };
    }
  };

  const getAnimatePosition = () => {
    if (direction === "none") return { opacity: 1 };
    return { opacity: 1, x: 0, y: 0 };
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={getAnimatePosition()}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      className={fullWidth ? `w-full ${className}` : className}
    >
      {children}
    </motion.div>
  );
}
