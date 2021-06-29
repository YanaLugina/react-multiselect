import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
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
    if (!_.isEqual(selectedFilter, selectedResource)) {
      filterResource(selectedFilter)
    }
  }

  return (
    <div>
      FFFF
      <MultiSelect
        id={id}
        resources={resources}
        selectedResources={selectedResources}
        handleChange={handleChange}
        showAllResource={selectedFilter.length === 0}
        handleDefault={handleDefault}
        handleUpdateFilter={handleUpdateFilter}
        withCheckBox={withCheckBox}
        toggleResourceSelect={
          id === 'collectPostFilter' ? toggleResourceSelect : false
        }
        setToggleResourceFilter={
          id === 'collectPostFilter' ? setToggleResourceFilter : () => {}
        }
      />
    </div>
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
}

export default MultiSelectWrap
