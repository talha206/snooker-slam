import { useState, useEffect } from 'react';
import { Dimensions, Platform } from 'react-native';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    isSmall: Dimensions.get('window').width <= 320,
    isMedium:Dimensions.get('window').width<=440,
  });

  useEffect(() => {
    const onChange = ({ window }: any) => {
      setScreenSize({
        width: window.width,
        height: window.height,
        isSmall: window.width <= 320,
        isMedium:window.width<=440,
      });
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    return () => {
      subscription?.remove();
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
