import { useState, useEffect } from 'react';

function BotonScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alHacerScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', alHacerScroll);
    // Al desmontar el componente se saca el listener
    return () => window.removeEventListener('scroll', alHacerScroll);
  }, []);

  return (
    <button
      type="button"
      className={`btn-scroll-top ${visible ? 'visible' : ''}`}
      aria-label="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </button>
  );
}

export default BotonScrollTop;