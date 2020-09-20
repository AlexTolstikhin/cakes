import React from 'react';
import PropTypes from 'prop-types';


const ContentWrapper = ({ children, styles }) => <div style={styles}>{children}</div>;

ContentWrapper.defaultProps = {
    children: PropTypes.object,
    styles: PropTypes.object
};

ContentWrapper.propTypes = {
    children: {},
    styles: {}
};

export default ContentWrapper;