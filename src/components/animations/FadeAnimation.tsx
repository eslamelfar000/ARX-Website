import React from "react";
import { motion, Variants } from "framer-motion";

type AnimationDirection = "up" | "down" | "left" | "right" | "in";
type AnimationProps = {
  children: React.ReactNode;
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
};

const FadeAnimation: React.FC<AnimationProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.4,
  className = "",
  once = true,
}) => {
  const getVariants = () => {
    const distance = 20;
    const variants = {
      hidden: {
        opacity: 0,
        y: direction === "up" ? distance : direction === "down" ? -distance : 0,
        x:
          direction === "left"
            ? distance
            : direction === "right"
            ? -distance
            : direction === "in"
            ? 0
            : -distance,
      },
      scale: {
        scale: direction === "in" ? 0.9 : 1,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      },
    };
    return variants;
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={getVariants() as Variants}
      animate={direction === "in" ? "scale" : "visible"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeAnimation;
