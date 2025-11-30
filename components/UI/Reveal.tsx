import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in ms
  threshold?: number;
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  threshold = 0.1 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  const transitionDelay = `${delay}ms`;

  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay }}
    >
      {children}
    </div>
  );
};

export default Reveal;