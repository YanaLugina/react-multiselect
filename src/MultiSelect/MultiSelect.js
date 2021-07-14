import React, { useEffect, useState, useRef } from 'react'
import CheckBox from '../CheckBoxes'
import PropTypes from 'prop-types'
import style from './multiselect.module.scss'

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
  textResetFilter,
  textChoose,
  fields,
  arrow,
  checkMark,
  classes = [],
  numShowPreview = 3
}) => {
  const [options, setOptions] = useState([])
  const [selectedOptions, setSelectedOptions] = useState([])
  const [styleFilterOptions, setStyleFilterOptions] = useState({})
  const currentElement = useRef(null)

  useEffect(() => {
    return () => setStyleFilterOptions({})
  }, [])

  const classesCheckBox = [
    'checkedBg',
    'blueLabel',
    'paddingConnection',
    'greyWithDiv',
    'forSecretary',
    'bgWithoutPadding',
    'hoverBg'
  ]

  useEffect(() => {
    setOptions(
      resources && resources.length > 0
        ? resources.map((resource) => {
            const stateCheckedStatus =
              selectedResources && selectedResources.length > 0
                ? selectedResources.findIndex(
                    (item) => item[fields.uniqId] === resource[fields.uniqId]
                  ) !== -1
                : false
            return (
              <CheckBox
                key={resource[fields.uniqId]}
                blockInterestReasonId={resource[fields.uniqId]}
                handleChecked={handleChange}
                stateChecked={stateCheckedStatus}
                textLabel={resource[fields.displayed]}
                withCheckBox={withCheckBox}
                checkMark={checkMark}
                classes={classes.filter((item) =>
                  classesCheckBox.includes(item)
                )}
              />
            )
          })
        : []
    )
  }, [
    resources,
    selectedResources,
    withCheckBox,
    handleChange,
    fields,
    checkMark
  ])

  useEffect(() => {
    setSelectedOptions(
      selectedResources && selectedResources.length > 0
        ? selectedResources.map((item) => {
            return (
              <div
                className={style.pointSelected}
                key={`Resourse${item[fields.uniqId]}`}
              >
                {item[fields.displayed]}
              </div>
            )
          })
        : []
    )
  }, [selectedResources, fields])

  const initialPosts = (
    <div className={style.pointWithoutBg} key='Resourse1'>
      {textChoose}
    </div>
  )

  const handleCloseSelect = (bool) => {
    if (bool) {
      setToggleResourceFilter()
      handleUpdateFilter()
    } else {
      setToggleResourceFilter()
      setStyleFilterOptions({ width: currentElement.current.offsetWidth })
    }
  }

  const handleDefaultClick = (e) => {
    e.preventDefault()
    handleDefault()
  }
  const buttonClear =
    selectedOptions.length > 0 ? (
      <button
        id='clearFilter'
        className={style.changeOwner}
        onClick={handleDefaultClick}
      >
        {textResetFilter}
      </button>
    ) : (
      <button id='nothingFilter' className={style.nothingFilter}>
        −−−
      </button>
    )

  const filterOptions = (
    <React.Fragment>
      <div
        className={style.modalMultiSelect}
        onClick={() => handleCloseSelect(toggleResourceSelect)}
      />
      <div className={style.optionForSelection} style={styleFilterOptions}>
        {textResetFilter ? buttonClear : ''}
        <div
          className={
            style.stringOption +
            classes.map((item) => ' ' + style[item]).join('')
          }
          key={`optionSelect${id}`}
          onClick={(e) => e.stopPropagation()}
        >
          {options}
        </div>
      </div>
    </React.Fragment>
  )

  return (
    <div
      className={
        style.wrapFilter +
        classes
          .filter((cl) => !['blueLabel', 'forSecretary'].includes(cl))
          .map((item) => ' ' + style[item])
          .join('')
      }
      key={`carsCards${id}`}
      onClick={(e) => e.stopPropagation()}
      id={id}
    >
      <div
        className={style.wrapSelected}
        onClick={() => handleCloseSelect(toggleResourceSelect)}
        ref={currentElement}
      >
        <div className={style.selectedOptions}>
          {showAllResource
            ? initialPosts
            : selectedOptions.length >
              (numShowPreview !== 0 ? numShowPreview : 1)
            ? selectedOptions.slice(
                0,
                numShowPreview !== 0 ? numShowPreview : 1
              )
            : selectedOptions}
          {selectedOptions.length >
          (numShowPreview !== 0 ? numShowPreview : 1) ? (
            <div className={style.countOverThree} key='overThree'>
              +
              {selectedOptions.length -
                (numShowPreview !== 0 ? numShowPreview : 1)}
            </div>
          ) : (
            ''
          )}
        </div>
        <div className={style.selectDropDownArrow}>
          {arrow ? <img src={arrow} alt='arrow' /> : ''}
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
  id: PropTypes.string,
  textResetFilter: PropTypes.string,
  textChoose: PropTypes.string,
  arrow: PropTypes.string,
  checkMark: PropTypes.string,
  numShowPreview: PropTypes.number,
  fields: PropTypes.object,
  classes: PropTypes.arrayOf(
    PropTypes.oneOf([
      'marginInSettings',
      'bgGrayUnder',
      'allWidth',
      'withoutShadow',
      'withoutMargins',
      'maxWidthStretch',
      'checkedBg',
      'hoverBg',
      'bgWithoutPadding',
      'withBorder',
      'borderRadius3',
      'paddingConnection',
      'blueLabel',
      'forSecretary'
    ])
  )
}

export default MultiSelect
