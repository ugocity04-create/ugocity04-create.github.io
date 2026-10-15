import { useEffect, useRef } from "react";

// The thin coloured line at the top that grows as you scroll.
export default function ScrollProgress() {
  const bar = useRef(null);

  useEffect(() => {
    function update() {
      const page = document.documentElement;
      const max = page.scrollHeight - page.clientHeight;
      const progress = max > 0 ? page.scrollTop / max : 0;
      if (bar.current) bar.current.style.transform = "scaleX(" + progress + ")";
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <div className="progress" ref={bar} aria-hidden="true" />;
}
