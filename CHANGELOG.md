#@yana4961/react-multiselect

##2.2.4
1) Was fixed bug with update selected option, when option was change
2) Fixed bug with selected option, when using fields.uniqId !== 'id'

##2.2.2
1) Was added flag ```delSelectedOption``` to remove the selected option from modal with options.
2) Was added prop ```nodeEmptyOptions```: some node to display when options in the modal window are empty.
3) The number of hidden options has been changed, now this is a button by clicking on which all hidden options are opened.

##2.2.1
1) Was added type descriptions to README.md for prop ```textChoose```
2) Was added type descriptions to README.md for prop ```textResetFilter```

##2.2.0
1) Was added default values for props:  ```resources, filterResource, fetchAllResources, selectedResource```, was added type descriptions to README.md

##2.1.2
1) Was added second argument to function ```filterResource```, that returned objects selected resources.

##2.1.1
1) Was fixed bug ids in resource options with type of string. When ids was string this was crashed result.
2) Was fixed bug with returned not updated result choose options, after delete them with click on selected boxes in input.

##2.1.0
1) Was added props ```selectedWithDel``` that set function for delete selected elements after click on this elements box-preview in input. 
When set props ```selectedWithDel```  was added css-style hover background-color under place for arrow drop-down

##2.0.0
1) State for toggle open/close options moved into component
2) Created delete button clear all selected if text label for this don't set in props
3) Created class css for clear shadow 'withoutShadow'
4) Created class css for set border-radius 3px for input 'borderRadius3'
4) Created class css for set border for input 'withBorder'

##1.2.0
Added new prop ``` fields ``` for sets fields 'uniqId' as value option and 'displayed' as displayed value option from 'resources' objects
