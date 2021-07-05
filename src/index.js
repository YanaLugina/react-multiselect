import React from 'react'
import MultiSelectWrap from './MultiSelectWrap'
import PropTypes from 'prop-types'

export const ExampleComponent = ({
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
    />
  )
}

ExampleComponent.propTypes = {
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
}
