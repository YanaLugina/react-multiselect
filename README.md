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

## API

| Prop | Type | Default | Description | Example |
| :--- | :--- | :--- | :--- | :--- |
| resources | array |  [] | Options for select | ```[{ id: 1, name: 'First' }]``` |
| filterResource | function | () => {} | function, first argument return array ids selected options, second argument return filtered resources | ```const filterResource = (resultIds, resultObjects) => console.log('result', resultIds, resultObjects) ``` |
| fetchAllResources | function | () => {} | function, triggered when mount and after changing options. Function for get options from backend api can be set here | ```const resources = []; const fetchAllResources = () => resources.length === 0 && getOptionsFromAPI() ``` |
| id | string | none | the id attribute specifies a unique id for an HTML element | ``` id='multiselect_react_555' ``` |
| selectedResource | array\<int> or array\<String> | [] | sets the initial value selected options ids, if any  | ``` const selectedResource = [2] or const selectedResource = ['apple', 'watermelon'] ``` |
| arrowDown | string (url for jpeg, svg, png) | none (when no value is set when hovering over an area there is a round background color) | picture for customize arrow for toggle dropdown | ``` import arrowDown from './asserts/arrow.svg'``` then set prop ```arrowDown={arrowDown} ``` |
| withCheckBox | bool | false | if value is true options has checkboxes to mark selected values options, by default, the mark of the selected values ​​is done by setting the background-color on them  | then set prop ```withCheckBox=true``` |
| checkMark | string (url for jpeg, svg, png) | X | if used prop ```withCheckBox``` sets a custom mark checked in checkbox | ``` import checkMark from './asserts/checkMark.svg'``` then set prop ```checkMark={checkMark} ``` |
| numShowPreview | number | 3 | sets how many of the selected values ​​will display their title in the input | ```const numShowPreview = 5``` |
| selectedWithDel | bool | false | when setting a value in ```true```, it is possible to delete the selected value options ​​by clicking on them | then set prop ```selectedWithDel=true``` |
| classes | array\<String> | [] | set one of css class ``` 'marginInSettings', 'bgGrayUnder', 'allWidth', 'withoutShadow', 'withoutMargins', 'maxWidthStretch', 'paddingConnection', 'blueLabel', 'forSecretary', 'greyWithDiv', 'checkedBg', 'hoverBg', 'bgWithoutPadding', 'withBorder', 'withBorder', 'borderRadius3'``` | set prop ```classes={['hoverBg', 'checkedBg', 'bgWithoutPadding', 'borderRadius3']} ``` |
| textChoose | String | '' | Set text to input, when selected options is clear | ```'Select...'``` |
| textResetFilter | String | '' | Set text to button for clear all selected options. If this option == false, button not displayed | ```'Delete all'``` |
| delSelectedOption | bool | false | Flag, to remove the selected option from modal with options. Must be used with ```selectedWithDel``` | const delSelectedOption = true |
| nodeEmptyOptions | node | undefined | Some node to display when options in the modal window are empty | ```const nodeEmptyOptions = <div style={{ display: 'flex', paddingTop: 12, alignItems: 'center', justifyContent: 'center' }}>Empty</div>``` |

## License

MIT © [YanaLugina &lt;yana4961@gmail.com&gt;](https://github.com/YanaLugina &lt;yana4961@gmail.com&gt;)
