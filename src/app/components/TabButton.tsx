import { MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface TabButtonProps {
  active: boolean;
  selectTab: (event: MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const variants = {
    active: { opacity: 1, x: 0 },
    default: { opacity: 0, x: -50 },
  };
  
  const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
    const buttonClasses = active ? "text-[#558344]" : "text-black";
  
    return (
      <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-black ${buttonClasses}`}>
          {children}
        </p>
        <motion.div
          animate={active ? "active" : "default"}
          variants={variants}
          className="h-1 bg-primary-500 mt-2 mr-3"
        ></motion.div>
      </button>
    );
  };


export default TabButton;