import React from 'react';
import PropTypes from 'prop-types';


const ContentWrapper = ({ children, contentWrapperStyles }) => <div style={contentWrapperStyles}>{children}</div>;

ContentWrapper.defaultProps = {
    children: PropTypes.object,
    contentWrapperStyles: PropTypes.object
};

ContentWrapper.propTypes = {
    children: {},
    contentWrapperStyles: {}
};

export default ContentWrapper;