import { useEffect } from "react";

export const ScrollDetection = (props) => {
  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const targetPosition = window.innerHeight * '1.02';
      if (scrollPosition >= targetPosition) {
        props.setTargetReached(true);
      } else {
        props.setTargetReached(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
  }, []);
}