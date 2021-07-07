# @yana4961/react-multiselect

> Multiselect react component with checkboxes

[![NPM](https://img.shields.io/npm/v/@yana4961/react-multiselect.svg)](https://www.npmjs.com/package/@yana4961/react-multiselect) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @yana4961/react-multiselect
```

## Usage

```jsx
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
```

## License

MIT © [YanaLugina &lt;yana4961@gmail.com&gt;](https://github.com/YanaLugina &lt;yana4961@gmail.com&gt;)
