import React, { useState, useEffect } from 'react';
import SightMapIframe from './SightMapIframe';

const App = () => {
 
  const urlParams = new URL(window.location.href).searchParams;
  const initialInstance = urlParams.get('sightmap_instance') || 'frisco-campus';

  const [iframeURL, setIframeURL] = useState(`https://sightmap.com/embed/rxwj9yozp1e?instance=${initialInstance}`);

  useEffect(() => {
    function handleBeforeUnload(e) {
      
      const iframeElement = document.getElementById("sightMapIframe");
      let newURL;
      
      try {
        newURL = iframeElement.contentWindow.location.href;
      } catch (error) {
        console.error("Could not retrieve iframe URL:", error);
      }
    
      
      if (newURL) {
        const urlParams = new URL(newURL).searchParams;
        const newInstance = urlParams.get("instance");
    
        if (newInstance) {
          setIframeURL(`https://sightmap.com/embed/rxwj9yozp1e?instance=${newInstance}`);
        }
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="App">
      <h1>SightMap Integration</h1>
      <p>AMLI's Frisco luxury apartments are surrounded by incredible shopping, vast entertainment opportunities and several outstanding sports venues.</p>
      <p style={{fontSize: '20px'}}>Use our interactive property map to explore the property</p>
      <SightMapIframe url={iframeURL} />
    </div>
  );
};

export default App;