import React from 'react'
import MultiSelectWrap from './MultiSelectWrap'
import PropTypes from 'prop-types'

const MultiSelectReact = ({
  withCheckBox,
  id,
  textResetFilter,
  textChoose,
  arrowDown,
  checkMark,
  numShowPreview,
  classes,
  selectedWithDel,
  delSelectedOption,
  nodeEmptyOptions,
  resources = [],
  filterResource = () => {},
  fetchAllResources = () => {},
  selectedResource = [],
  fields = { uniqId: 'id', displayed: 'name' }
}) => {
  return (
    <MultiSelectWrap
      fetchAllResources={fetchAllResources}
      resources={resources}
      filterResource={filterResource}
      withCheckBox={withCheckBox}
      id={id}
      selectedResource={selectedResource}
      textResetFilter={textResetFilter}
      textChoose={textChoose}
      arrow={arrowDown}
      checkMark={checkMark}
      numShowPreview={numShowPreview}
      classes={classes}
      selectedWithDel={selectedWithDel}
      delSelectedOption={delSelectedOption}
      nodeEmptyOptions={nodeEmptyOptions}
      fields={{
        uniqId: Object.values(fields)[0] || 'id',
        displayed: Object.values(fields)[1] || 'name'
      }}
    />
  )
}

MultiSelectReact.propTypes = {
  resources: PropTypes.array,
  selectedResource: PropTypes.array,
  fetchAllResources: PropTypes.func,
  filterResource: PropTypes.func,
  withCheckBox: PropTypes.bool,
  id: PropTypes.string,
  textResetFilter: PropTypes.string,
  textChoose: PropTypes.string,
  arrowDown: PropTypes.string,
  checkMark: PropTypes.string,
  numShowPreview: PropTypes.number,
  fields: PropTypes.object,
  selectedWithDel: PropTypes.bool,
  delSelectedOption: PropTypes.bool,
  nodeEmptyOptions: PropTypes.node,
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
      'bgWithoutPadding',
      'withBorder',
      'withBorder',
      'borderRadius3'
    ])
  )
}

export default MultiSelectReact
