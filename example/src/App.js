import React, { useState } from 'react'

import MultiSelectReact from '@yana4961/react-multiselect'
import '@yana4961/react-multiselect/dist/index.css'

import arrowDown from './asserts/arrow.svg'
import checkMark from './asserts/checked.svg'

const App = () => {
  const [selectedIds, setSelectedIds] = useState([2, 3]);   // ids marked resources
  const [resources, setResources] = useState(
    [
      { ids: 1, name: 'First' },
      { ids: 2, name: 'Second' },
      { ids: 3, name: 'Third' },
      { ids: 4, name: 'fourth' },
      { ids: 5, name: 'fifth' }
      ]
  );   // ids marked resources

  // Event triggered after change marked options,
  // if checked options equal selectedResource,
  // no changes have occurred, the event will not be triggered
  const filterResource = (resultIds, resultObjects) => {
    setSelectedIds(resultIds);
    console.log('+++resultCheckedIds', resultIds, resultObjects);
  };

  // please, wrapped MultiSelectReact for set width
  return <div style={{ width: 300 }}>
    <MultiSelectReact
      fetchAllResources={(i, a) => console.log('Event triggered after changing options', i, a)}
      resources={resources}
      filterResource={filterResource}
      withCheckBox={false}
      id='MultiSelectExample'
      selectedResource={selectedIds} // selected options ids
      arrowDown={arrowDown}      // this for set arrow for right side in input
      checkMark={checkMark}   // img for marked selected checkboxes options, X by default
      textChoose='Choose..'   // string for empty multiselect choice
      numShowPreview={3} // how many preview boxes show
      classes={['hoverBg', 'checkedBg', 'bgWithoutPadding', 'borderRadius3']}
      fields={{ uniqId: 'ids', displayed: 'name' }}  // sets fields 'uniqId' as value option and 'displayed' as displayed value option from 'resources' objects
      selectedWithDel
      delSelectedOption
      nodeEmptyOptions={<div style={{ display: 'flex', paddingTop: 12, alignItems: 'center', justifyContent: 'center' }}>Empty</div>}
    />
    <button  onClick={() => setResources(s => {
      s.pop()
      return [...s]
    })} >
      Pop
    </button>
    <button  onClick={() => setResources(s => {
      s.push({ id: 5, name: 'fifth' })
      return [...s]
    })} >
      Push
    </button>
  </div>
}

export default App
