import { motion } from 'framer-motion';

const Button = (props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={props.style}
    >{props.text}</motion.button>
  );
}

export default Button;