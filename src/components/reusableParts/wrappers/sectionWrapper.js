import React from 'react';
import PropTypes from 'prop-types';

const SectionWrapper = ({ children, styles }) => <section style={styles}>{children}</section>;

SectionWrapper.defaultProps = {
    children: PropTypes.object,
    styles: PropTypes.object
};

SectionWrapper.propTypes = {
    children: {},
    styles: {}
};

export default SectionWrapper;