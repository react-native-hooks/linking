// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Linking } from 'react-native';

function useDeviceOrientation() {
  const [url, setUrl] = useState(null);
  const [error, setError] = useState();

  async function initialUrl() {
    try {
      const linkingUrl = await Linking.getInitialURL();
      if (linkingUrl) {
        setUrl(linkingUrl);
      }
    } catch (ex) {
      setError(ex);
    }
  }

  async function openUrl(linkingUrl) {
    try {
      const isSupported = await Linking.canOpenURL(linkingUrl);
      if (!isSupported) {
        setError(`Can't handle url: ${linkingUrl}`);
      } else {
        Linking.openURL(linkingUrl);
      }
    } catch (ex) {
      setError(ex);
    }
  }

  useEffect(() => {
    function handleOpenUrl(ev) {
      setUrl(ev.url);
    }

    initialUrl(); // for initial render

    Linking.addEventListener('url', handleOpenUrl);
    return () => Linking.removeEventListener('url', handleOpenUrl);
  }, []);

  return [url, openUrl, error];
}

export default useDeviceOrientation;
