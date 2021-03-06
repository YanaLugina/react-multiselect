import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'

import style from './CheckBoxes.module.scss'

const CheckBoxCommon = ({
  textLabel,
  handleChecked,
  stateChecked,
  blockInterestReasonId,
  withCheckBox,
  children,
  checkMark,
  classes = []
}) => {
  const [isChecked, setIsChecked] = useState(false)
  const checked = useMemo(() => {
    if (checkMark) {
      return <img src={checkMark} alt='checked icon' />
    } else {
      return 'X'
    }
  }, [checkMark])

  const [styleCk, setStyleCk] = useState(isChecked ? checked : '')

  useEffect(() => {
    setIsChecked(stateChecked && stateChecked)
  }, [stateChecked])

  useEffect(() => {
    setStyleCk(isChecked ? checked : '')
  }, [isChecked, checked])

  const handleClick = (e) => {
    handleChecked(
      typeof blockInterestReasonId === 'number'
        ? +e.currentTarget.id
        : e.currentTarget.id,
      !isChecked
    )
    setIsChecked((state) => !state)
  }

  const styleNew = `${classes
    .map(
      (item) =>
        ' ' +
        (item !== 'checkedBg' ? style[item] : isChecked ? style[item] : '')
    )
    .join('')}`

  return (
    <label
      className={style.labelCheckBox + styleNew}
      id={blockInterestReasonId}
      onClick={handleClick}
    >
      {withCheckBox ? <div className={style.checkBox}>{styleCk}</div> : ''}
      {textLabel}
      {children || ''}
    </label>
  )
}

CheckBoxCommon.propTypes = {
  textLabel: PropTypes.string,
  checkMark: PropTypes.string,
  stateChecked: PropTypes.bool,
  handleChecked: PropTypes.func,
  children: PropTypes.node,
  blockInterestReasonId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  withCheckBox: PropTypes.bool,
  classes: PropTypes.arrayOf(
    PropTypes.oneOf([
      'checkedBg',
      'blueLabel',
      'paddingConnection',
      'greyWithDiv',
      'forSecretary',
      'bgWithoutPadding',
      'hoverBg'
    ])
  )
}

export default CheckBoxCommon
