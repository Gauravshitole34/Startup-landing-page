import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const elementsToAnimate = document.querySelectorAll(
      '.fade-in, .slide-in-left, .slide-in-right'
    );

    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup
    return () => {
      elementsToAnimate.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
};