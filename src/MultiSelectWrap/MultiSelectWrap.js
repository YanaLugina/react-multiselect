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
  textChoose,
  arrow,
  checkMark,
  numShowPreview,
  classes
}) => {
  const [selectedFilter, setSelectedFilter] = useState(selectedResource)
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
      arrow={arrow}
      checkMark={checkMark}
      numShowPreview={numShowPreview}
      classes={classes}
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
  arrow: PropTypes.string,
  checkMark: PropTypes.string,
  numShowPreview: PropTypes.number,
  classes: PropTypes.arrayOf(
    PropTypes.oneOf([
      'marginInSettings',
      'bgGrayUnder',
      'allWidth',
      'withoutShadow',
      'withoutMargins',
      'maxWidthStretch',
      'paddingConnection',
      'blueLabel',
      'forSecretary',
      'greyWithDiv',
      'checkedBg',
      'hoverBg',
      'bgWithoutPadding'
    ])
  )
}

export default MultiSelectWrap
