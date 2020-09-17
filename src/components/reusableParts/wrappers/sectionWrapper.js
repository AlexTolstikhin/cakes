import React from 'react';
import PropTypes from 'prop-types';

const SectionWrapper = ({ children, sectionWrapperStyles }) => <section style={sectionWrapperStyles}>{children}</section>;

SectionWrapper.defaultProps = {
    children: PropTypes.object,
    sectionWrapperStyles: PropTypes.object
};

SectionWrapper.propTypes = {
    children: {},
    sectionWrapperStyles: {}
};

export default SectionWrapper;