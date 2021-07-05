import React, { useEffect, useState, useMemo, useRef } from 'react'
import CheckBox from '../CheckBoxes'
import PropTypes from 'prop-types'

import arrow from './assets/arrow.svg'
import style from './multiselect.module.scss'
import isEmpty from '../utils/isEmpty.js'

const MultiSelect = ({
  resources,
  handleChange,
  showAllResource,
  handleDefault,
  selectedResources,
  handleUpdateFilter,
  withCheckBox,
  toggleResourceSelect,
  setToggleResourceFilter,
  id,
  classes,
  textResetFilter,
  textChoose,
  fieldNames: field,
}) => {
  const [options, setOptions] = useState([])
  const [selectedOptions, setSelectedOptions] = useState([])
  const fieldNames = useMemo(
    () => (isEmpty(field) ? { id: 'id', name: 'name' } : field),
    [field]
  )
  const [styleFilterOptions, setStyleFilterOptions] = useState({})
  const currentElement = useRef(null)

  useEffect(() => {
    return () => setStyleFilterOptions({})
  }, [])

  useEffect(() => {
    setOptions(
      resources && resources.length > 0
        ? resources.map((resource) => {
            const stateCheckedStatus =
              selectedResources && selectedResources.length > 0
                ? selectedResources.findIndex(
                    (item) => item[fieldNames.id] === resource[fieldNames.id]
                  ) !== -1
                : false
            return (
              <CheckBox
                key={resource[fieldNames.id]}
                blockInterestReasonId={resource[fieldNames.id]}
                handleChecked={handleChange}
                stateChecked={stateCheckedStatus}
                textLabel={resource[fieldNames.name]}
                withCheckBox={withCheckBox}
              />
            )
          })
        : []
    )
  }, [resources, selectedResources, withCheckBox, handleChange, fieldNames])

  useEffect(() => {
    setSelectedOptions(
      selectedResources && selectedResources.length > 0
        ? selectedResources.map((item) => {
            return (
              <div
                className={style.pointSelected}
                key={`Post${item[fieldNames.id]}`}>
                {item[fieldNames.name]}
              </div>
            )
          })
        : []
    )
  }, [selectedResources, fieldNames])

  const initialPosts = (
    <div className={style.pointWithoutBg} key='Post1'>
      {textChoose}
    </div>
  )

  const handleCloseSelect = (bool) => {
    if (bool) {
      setToggleResourceFilter(false)
      handleUpdateFilter()
    } else {
      setToggleResourceFilter(true)
      setStyleFilterOptions({ width: currentElement.current.offsetWidth })
    }
  }

  const handleDefaultClick = (e) => {
    e.preventDefault()
    handleDefault()
  }

  const filterOptions = (
    <React.Fragment>
      <div
        className={style.modalMultiSelect}
        onClick={() => handleCloseSelect(toggleResourceSelect)}
      />
      <div className={style.optionForSelection} style={styleFilterOptions}>
        {selectedOptions.length > 0 ? (
          <button
            id='clearFilter'
            className={style.changeOwner}
            onClick={handleDefaultClick}>
            {textResetFilter}
          </button>
        ) : (
          <button id='nothingFilter' className={style.nothingFilter}>
            −−−
          </button>
        )}
        <div
          className={style.stringOption}
          key={`optionSelect${id}`}
          onClick={(e) => e.stopPropagation()}>
          {options}
        </div>
      </div>
    </React.Fragment>
  )

  return (
    <div
      className={
        style.wrapFilter +
        ' ' +
        (classes ? classes.map((item) => ' ' + style[item]).join('') : '')
      }
      key={`carsCards${id}`}
      onClick={(e) => e.stopPropagation()}
      id={id}>
      <div
        className={style.wrapSelected}
        onClick={() => handleCloseSelect(toggleResourceSelect)}
        ref={currentElement}>
        <div className={style.selectedOptions}>
          {showAllResource
            ? initialPosts
            : selectedOptions.length > 3
            ? selectedOptions.slice(0, 3)
            : selectedOptions}
          {selectedOptions.length > 3 ? (
            <div className={style.countOverThree} key='overThree'>
              +{selectedOptions.length - 3}
            </div>
          ) : (
            ''
          )}
        </div>
        <div className={style.selectDropDownArrow}>
          <img src={arrow} alt='arrow' />
        </div>
      </div>
      {toggleResourceSelect ? filterOptions : ''}
    </div>
  )
}

MultiSelect.propTypes = {
  resources: PropTypes.array,
  handleChange: PropTypes.func,
  showAllResource: PropTypes.bool,
  handleDefault: PropTypes.func,
  selectedResources: PropTypes.array,
  handleUpdateFilter: PropTypes.func,
  withCheckBox: PropTypes.bool,
  toggleResourceSelect: PropTypes.bool,
  setToggleResourceFilter: PropTypes.func,
  fieldNames: PropTypes.object,
  id: PropTypes.string,
  textResetFilter: PropTypes.string,
  textChoose: PropTypes.string,
  classes: PropTypes.arrayOf(
    PropTypes.oneOf([
      'marginInSettings',
      'bgGrayUnder',
      'allWidth',
      'withoutShadow',
      'withoutMargins',
      'maxWidthStretch',
    ])
  ),
}

export default MultiSelect
