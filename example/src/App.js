import React, { useState } from 'react'

import MultiSelectReact from '@yana4961/react-multiselect'
import '@yana4961/react-multiselect/dist/index.css'

import arrowDown from './asserts/arrow.svg'
import checkMark from './asserts/checked.svg'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Event triggered after change marked options,
  // if checked options equal selectedResource,
  // no changes have occurred, the event will not be triggered
  const filterResource = (resultChecked) => {
    console.log('resultChecked', resultChecked);
  };

  return <div>
    <MultiSelectReact
      fetchAllResources={() => console.log('Event emit after open/closing options')}
      resources={[{ id: 1, name: 'First' }, { id: 2, name: 'Second' }, { id: 3, name: 'Third' }, { id: 4, name: 'fourth' }, { id: 5, name: 'fifth' }]}
      filterResource={filterResource}
      withCheckBox
      toggleResourceSelect={isOpen}
      setToggleResourceFilter={() => setIsOpen(s => !s)}
      id={'MultiSelectExample'}
      selectedResource={[1, 3]}
      textResetFilter={'All reset'}
      textChoose={'Make a choice'}
      arrowDown={arrowDown}
      checkMark={checkMark}
      numShowPreview={3}
    />
  </div>
}

export default App
