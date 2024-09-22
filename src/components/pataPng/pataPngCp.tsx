import React from 'react';
import { View, Image } from 'react-native';

import { pataStyles } from './pataPngStyles';

const PataPngCp = ({ source, angle, style }) => {
    return (
      <Image
        source={source}
        style={[
          pataStyles.image, 
          style,
          { transform: [{ rotate: `${angle}deg` }] } // Aplica a rotação
        ]}
      />
    );
  };

  export default PataPngCp;