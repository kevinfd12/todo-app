import './ribbon.scss';
import { useEffect, useState } from 'react';

export const Ribbon = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); //this is a delay of 5 seconds before it even starts to fade.
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`RibbonBox--rt`}>
      <span className={`Ribbon--rt red ${visible ? 'visible' : ''}`} />
    </div>
  );
};
