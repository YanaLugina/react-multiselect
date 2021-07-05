import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash.isequal'
import MultiSelect from '../MultiSelect'

const MultiSelectWrap = ({
  fetchAllResources,
  resources,
  filterResource,
  withCheckBox,
  toggleResourceSelect,
  setToggleResourceFilter,
  id,
  selectedResource,
  textResetFilter,
  textChoose
}) => {
  const [selectedFilter, setSelectedFilter] = useState([])
  const [selectedResources, setSelectedResources] = useState([])

  useEffect(() => {
    selectedFilter.length > 0
      ? setSelectedResources(
        resources.filter((item) => selectedFilter.includes(item.id))
      )
      : setSelectedResources([])
  }, [resources, selectedFilter])

  useEffect(() => {
    fetchAllResources()
  }, [fetchAllResources])

  useEffect(() => {
    filterResource([])
  }, [filterResource])

  const handleChange = (value, isChecked) => {
    setSelectedFilter((s) => {
      return isChecked
        ? s.filter((item) => item === value).length > 0
          ? [...s]
          : [...s, value]
        : [...s.filter((item) => item !== value)]
    })
  }

  const handleDefault = () => {
    setSelectedFilter([])
    setSelectedResources([])
  }

  const handleUpdateFilter = () => {
    if (!isEqual(selectedFilter, selectedResource)) {
      filterResource(selectedFilter)
    }
  }

  return (
    <MultiSelect
      id={id}
      resources={resources}
      selectedResources={selectedResources}
      handleChange={handleChange}
      showAllResource={selectedFilter.length === 0}
      handleDefault={handleDefault}
      handleUpdateFilter={handleUpdateFilter}
      withCheckBox={withCheckBox}
      toggleResourceSelect={toggleResourceSelect}
      setToggleResourceFilter={setToggleResourceFilter}
      textResetFilter={textResetFilter}
      textChoose={textChoose}
    />
  )
}

MultiSelectWrap.propTypes = {
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

export default MultiSelectWrap
