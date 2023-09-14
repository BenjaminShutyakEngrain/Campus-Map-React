import React from 'react';
import PropTypes from 'prop-types';

const SightMapIframe = ({ url }) => {
  return (
    <iframe
      id="sightMapIframe"
      src={url}
      style={{ width: '100%', height: '600px', border: 'none' }}
      title="SightMap"
    />
  );
};

SightMapIframe.propTypes = {
  url: PropTypes.string.isRequired,
};

export default SightMapIframe;
