import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash.isequal'
import MultiSelect from '../MultiSelect'

const MultiSelectWrap = ({
  fetchAllResources,
  resources,
  filterResource,
  withCheckBox,
  id,
  selectedResource,
  textResetFilter,
  textChoose,
  arrow,
  checkMark,
  numShowPreview,
  classes,
  fields,
  selectedWithDel,
  delSelectedOption
}) => {
  const [selectedFilter, setSelectedFilter] = useState(selectedResource)
  const [selectedResources, setSelectedResources] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    selectedFilter.length > 0
      ? setSelectedResources(
          resources.filter((item) =>
            selectedFilter.includes(item[fields.uniqId])
          )
        )
      : setSelectedResources([])
  }, [resources, selectedFilter, fields])

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
      filterResource(selectedFilter, selectedResources)
    }
  }

  const handleDelSelect = (id) => {
    selectedWithDel && handleChange(id, false)
    selectedWithDel &&
      filterResource(
        [...selectedFilter.filter((item) => item !== id)],
        [...selectedResources.filter((item) => item.id !== id)]
      )
  }

  return (
    <MultiSelect
      id={id}
      resources={
        selectedWithDel && delSelectedOption
          ? resources.filter((item) => !selectedFilter.includes(item.id))
          : resources
      }
      selectedResources={selectedResources}
      handleChange={handleChange}
      showAllResource={selectedFilter.length === 0}
      handleDefault={handleDefault}
      handleDelSelect={handleDelSelect}
      handleUpdateFilter={handleUpdateFilter}
      withCheckBox={withCheckBox}
      toggleResourceSelect={isOpen}
      setToggleResourceFilter={() => setIsOpen((s) => !s)}
      textResetFilter={textResetFilter}
      textChoose={textChoose}
      arrow={arrow}
      checkMark={checkMark}
      numShowPreview={numShowPreview}
      classes={classes}
      fields={fields}
      selectedWithDel={selectedWithDel}
    />
  )
}

MultiSelectWrap.propTypes = {
  resources: PropTypes.array,
  selectedResource: PropTypes.array,
  fetchAllResources: PropTypes.func,
  filterResource: PropTypes.func,
  withCheckBox: PropTypes.bool,
  id: PropTypes.string,
  textResetFilter: PropTypes.string,
  textChoose: PropTypes.string,
  arrow: PropTypes.string,
  checkMark: PropTypes.string,
  numShowPreview: PropTypes.number,
  fields: PropTypes.object,
  selectedWithDel: PropTypes.bool,
  delSelectedOption: PropTypes.bool,
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
      'checkedBg',
      'hoverBg',
      'bgWithoutPadding',
      'withBorder',
      'borderRadius3',
      'withBorder',
      'borderRadius3'
    ])
  )
}

export default MultiSelectWrap
