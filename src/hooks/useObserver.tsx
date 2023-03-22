import { useState, useEffect, useRef } from "react";

export function useIntersectionObserver() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    const div = ref.current;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    });
    observer.observe(div as Element);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return { isIntersecting, ref };
}
