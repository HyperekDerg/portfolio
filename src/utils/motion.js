export const sectionVariant = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 0.5, // Delay the start of the animation for 0.5 seconds
      staggerChildren: 0.4, // Stagger the animation of each child by 0.4 seconds
    }
  }
};