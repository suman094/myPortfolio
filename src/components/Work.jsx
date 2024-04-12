import React, { useEffect, useState } from "react";
import hero from "../assets/hero.png";
import Project from "../Pages/Project";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import work from "../assets/work.png";

const Work = () => {
  const [isVisible, setVisible] = useState(true);

  return (
    <>
      <div className="work-con h-full relative">
        <div className="h-full object-cover overflow-hidden">
          <img className="w-full h-full" src={work} alt="" />
        </div>
        <div className="details-con absolute bottom-0 p-5">
          <h2 className=" text-2xl text-white">Project Name</h2>
        </div>
      </div>
    </>
  );
};

export default Work;
