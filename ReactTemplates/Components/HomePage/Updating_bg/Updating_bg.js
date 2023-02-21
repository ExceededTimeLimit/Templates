import React from "react";
import { motion } from "framer-motion";
import "./Updating_bg.scss";

const Updating_bg = () => {
	return (
		<>
			<motion.div
				className="Updating_bg"
				animate={{
                    background: [
                        'linear-gradient(0deg, #33ccff 0%, #ff99cc 100%)',
                        'linear-gradient(180deg, #99CCFF 0%, #FFFFFF 100%)', 
                        'linear-gradient(360deg, #33ccff 0%, #ff99cc 100%)',
					],
				}}
				transition={{duration: 80, ease: "easeInOut" , repeat: Infinity }}
			>
				Hi
			</motion.div>
		</>
	);
};

export default Updating_bg;
