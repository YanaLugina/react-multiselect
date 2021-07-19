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
      classes={['hoverBg', 'checkedBg', 'bgWithoutPadding', 'withoutShadow', 'withBorder', 'borderRadius3']}
      fields={{ uniqId: 'id', displayed: 'name' }}  // sets fields 'uniqId' as value option and 'displayed' as displayed value option from 'resources' objects
    />
  </div>
}

export default App

```

### Examples 

Example: 

![multiselect](/example/images/exampleMain.png)


Example without classes with button reset: 
```
<MultiSelectReact
      fetchAllResources={() => console.log('Event triggered after open/closing options')}
      resources={[{ id: 1, name: 'First' }, { id: 2, name: 'Second' }, { id: 3, name: 'Third' }, { id: 4, name: 'fourth' }, { id: 5, name: 'fifth' }]}
      filterResource={filterResource}
      withCheckBox
      textResetFilter={'All reset'}
      ...
      classes={['hoverBg', 'checkedBg', 'bgWithoutPadding']}
    />
```
![multiselect](/example/images/example.png)

Example with classes
```
<MultiSelectReact
      fetchAllResources={() => console.log('Event triggered after open/closing options')}
      resources={[{ id: 1, name: 'First' }, { id: 2, name: 'Second' }, { id: 3, name: 'Third' }, { id: 4, name: 'fourth' }, { id: 5, name: 'fifth' }]}
      filterResource={filterResource}
      withCheckBox
      ...
      classes={['hoverBg', 'checkedBg', 'bgWithoutPadding']}
    />
```
![multiselect](/example/images/exampleWithHover.png)


Example with classes and with withCheckBox=false:
```
<MultiSelectReact
      fetchAllResources={() => console.log('Event triggered after open/closing options')}
      resources={[{ id: 1, name: 'First' }, { id: 2, name: 'Second' }, { id: 3, name: 'Third' }, { id: 4, name: 'fourth' }, { id: 5, name: 'fifth' }]}
      filterResource={filterResource}
      withCheckBox={false}
      ...
      classes={['hoverBg', 'checkedBg', 'bgWithoutPadding']}
    />
```

![multiselect](/example/images/exampleWithoutCB.png)

Example without button 'delete all' with border radius, with border, without shadow on input

```
<MultiSelectReact
      fetchAllResources={() => console.log('Event triggered after changing options')}
      resources={[{ id: 1, name: 'First' }, { id: 2, name: 'Second' }, { id: 3, name: 'Third' }, { id: 4, name: 'fourth' }, { id: 5, name: 'fifth' }]}
      filterResource={filterResource}
      withCheckBox={false}
      id={'MultiSelectExample'}
      selectedResource={selectedIds}  // ids marked resources
      textChoose={'Make a choice'}   // string for empty mulltiselect choice
      /* textResetFilter={'All reset'} */
      arrowDown={arrowDown}      // this for set arrow for right side in input
      checkMark={checkMark}   // img for marked selected checkboxes options, X by default
      numShowPreview={3} // how many preview boxes show
      classes={['hoverBg', 'checkedBg', 'bgWithoutPadding', 'withoutShadow', 'withBorder', 'borderRadius3']}
      fields={{ uniqId: 'id', displayed: 'name' }}  // sets fields 'uniqId' as value option and 'displayed' as displayed value option from 'resources' objects
    />
```

![multiselect](/example/images/example2v.png)

Example with ```selectedWithDel``` props
```
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
      fields={{ id: 'id', name: 'name' }}  // sets fields 'uniqId' as value option and 'displayed' as displayed value option from 'resources' objects
      selectedWithDel
    />
```

![multiselect](/example/images/exampleDelBtn.png)

### Props

New Props:

```selectedWithDel```: that set function for delete selected elements after click on this elements box-preview in input. 
When set props ```selectedWithDel```  was added css-style hover background-color under place for arrow drop-down.

 ``` fields ``` : sets fields 'uniqId' as value option and 'displayed' as displayed value option from 'resources' objects.

## License

MIT © [YanaLugina &lt;yana4961@gmail.com&gt;](https://github.com/YanaLugina &lt;yana4961@gmail.com&gt;)
