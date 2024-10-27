import {useEffect, useRef, useState} from 'react';

const  useAnimation = (animationElementRef: React.MutableRefObject<null | HTMLElement>) => {
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    if (!animationElementRef.current) return;

    const options = {
      rootMargin: '0px',
      threshold: 0,
    };

    const intersectionCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!playAnimation) setPlayAnimation(true);
        }
      });
    };

    const observer = new IntersectionObserver(intersectionCallback, options);
    observer.observe(animationElementRef.current);
  }, [animationElementRef.current, setPlayAnimation]);

  return playAnimation;
}

export default useAnimation;

