import React, { useEffect } from 'react';

function App({ Component, pageProps }) {
  const theme = 'dark';
  useEffect(() => {
    document.body.classList.add(theme)
  }, [theme])
  const getLayout = Component.getLayout ?? ((page) => page)
  return (  
    <div className={`app ${theme}`}>
      {getLayout(
        <Component {...pageProps} />
      )}
    </div> 
  );
}

export default App;
