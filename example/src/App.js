import React, { useState } from 'react'

import { ExampleComponent } from '@yana4961/react-multiselect'
import '@yana4961/react-multiselect/dist/index.css'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return <div>Filter<ExampleComponent
    fetchAllResources={() => console.log('fetch')}
    resources={[{ id: 1, name: 'First' }, { id: 2, name: 'Second' }, { id: 3, name: 'Therd' }]}
    filterResource={() => console.log('postFilter')}
    withCheckBox
    toggleResourceSelect={isOpen}
    setToggleResourceFilter={() => setIsOpen(s => !s)}
    id={'MultiSelect@yana4961'}
    selectedResource={[1]}
  /></div>
}

export default App
