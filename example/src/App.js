import React, { useState } from 'react'

import MultiSelectReact from '@yana4961/react-multiselect'
import '@yana4961/react-multiselect/dist/index.css'

import arrowDown from './asserts/arrow.svg'
import checkMark from './asserts/checked.svg'

const App = () => {
  const [selectedIds, setSelectedIds] = useState([3]);   // ids marked resources

  // Event triggered after change marked options,
  // if checked options equal selectedResource,
  // no changes have occurred, the event will not be triggered
  const filterResource = (resultChecked) => {
    setSelectedIds(resultChecked);
    console.log('resultChecked', resultChecked);
  };

  // please, wrapped MultiSelectReact for set width
  return <div style={{ width: 300 }}>
    <MultiSelectReact
      fetchAllResources={() => console.log('Event triggered after changing options')}
      resources={[{ id: 1, name: 'First' }, { id: 2, name: 'Second' }, { id: 3, name: 'Third' }, { id: 4, name: 'fourth' }, { id: 5, name: 'fifth' }]}
      filterResource={filterResource}
      withCheckBox={false}
      id={'MultiSelectExample'}
      selectedResource={selectedIds}  // ids marked resources
      textChoose={'Make a choice'}   // string for empty mulltiselect choice
      arrowDown={arrowDown}      // this for set arrow for right side in input
      checkMark={checkMark}   // img for marked selected checkboxes options, X by default
      numShowPreview={3} // how many preview boxes show
      classes={['hoverBg', 'checkedBg', 'bgWithoutPadding', 'borderRadius3']}
      fields={{ uniqId: 'id', displayed: 'name' }}  // sets fields 'uniqId' as value option and 'displayed' as displayed value option from 'resources' objects
    />
  </div>
}

export default App
