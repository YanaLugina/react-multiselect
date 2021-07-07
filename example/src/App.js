import React, { useState } from 'react'

import { ExampleComponent } from '@yana4961/react-multiselect'
import '@yana4961/react-multiselect/dist/index.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const fetchAllResources = async() => {
    return [{ id: 1, name: 'First' }, { id: 2, name: 'Second' }, { id: 3, name: 'Third' }, { id: 4, name: 'f' }];
  };
  const filterResource = async() => {
    return [{ id: 1, name: 'First' }, { id: 2, name: 'Second' }];
  };

  return <div>
    <ExampleComponent
      fetchAllResources={fetchAllResources}
      resources={[{ id: 1, name: 'First' }, { id: 2, name: 'Second' }, { id: 3, name: 'Third' }]}
      filterResource={filterResource}
      withCheckBox
      toggleResourceSelect={isOpen}
      setToggleResourceFilter={() => setIsOpen(s => !s)}
      id={'MultiSelectExample'}
      selectedResource={[1]}
      textResetFilter={'All reset'}
      textChoose={'Make a choice'}
    />
  </div>
}

export default App
