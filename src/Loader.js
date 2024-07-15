import React, { useState, useEffect } from 'react';
import Main from './Main';
import logo from './Transpar.gif'

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <img src={logo} alt="Logo" className="loader-logo" />
        </div>
      ) : (
        <Main />
      )}
    </div>
  );
}

export default Loader;