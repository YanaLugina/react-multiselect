import React from 'react'
import MultiSelectWrap from './MultiSelectWrap'
import PropTypes from 'prop-types'

const MultiSelectReact = ({
  fetchAllResources,
  resources,
  filterResource,
  withCheckBox,
  toggleResourceSelect,
  setToggleResourceFilter,
  id,
  selectedResource,
  textResetFilter,
  textChoose,
  arrowDown,
  checkMark,
  numShowPreview,
}) => {
  return (
    <MultiSelectWrap
      fetchAllResources={fetchAllResources}
      resources={resources}
      filterResource={filterResource}
      withCheckBox={withCheckBox}
      toggleResourceSelect={toggleResourceSelect}
      setToggleResourceFilter={setToggleResourceFilter}
      id={id}
      selectedResource={selectedResource}
      textResetFilter={textResetFilter}
      textChoose={textChoose}
      arrow={arrowDown}
      checkMark={checkMark}
      numShowPreview={numShowPreview}
    />
  )
}

MultiSelectReact.propTypes = {
  resources: PropTypes.array,
  selectedResource: PropTypes.array,
  fetchAllResources: PropTypes.func,
  filterResource: PropTypes.func,
  withCheckBox: PropTypes.bool,
  toggleResourceSelect: PropTypes.bool,
  setToggleResourceFilter: PropTypes.func,
  id: PropTypes.string,
  textResetFilter: PropTypes.string,
  textChoose: PropTypes.string,
  arrowDown: PropTypes.string,
  checkMark: PropTypes.string,
  numShowPreview: PropTypes.number,
}

export default MultiSelectReact
