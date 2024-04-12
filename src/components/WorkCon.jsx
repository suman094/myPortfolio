import { useRef } from "react";
import { useInView } from "framer-motion";


function WorkCon({ children, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    
      <div ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          transitionDelay:'0.5s'
        }}

        className={className}
      >
        {children}
      </div>
    
  );
}

export default WorkCon