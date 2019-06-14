# Simple UI component library - UX design

## Instructions

* Creating a simple UI component library, implementing four form elements from Material Design. We will be calling the library “MD Simple”.
* The elements to be implemented are
  * Text field
    https://material.io/design/components/text-fields.html
  * Switch
    https://material.io/design/components/selection-controls.html#switches
  * Checkboxes
    https://material.io/design/components/selection-controls.html#checkboxes
  * Radio buttons
    https://material.io/design/components/selection-controls.html#radio-buttons

## CSS library
* Create a CSS file named “mds.css”. The file should define styles for the follow components using BEM.
  * .mds-text-field
  * .mds-switch
  * .mds-checkbox
  * .mds-radio
* Please refer to the documentation for information on how to create CSS components using BEM. http://getbem.com/naming/

## JavaScript Library
* Create a JavaScript file named “mds.js” that defines an object called mds . The object should define the following methods
  * mds.textField(element)
  * mds.switch(element)
  * mds.checkbox(element)
  * mds.radioButton(element)
* These methods instantiate the element, adding functionality if necessary. If no JavaScript is necessary, please leave the methods empty.
* For this exercise only JavaScript code to control behavior of the text field label is necessary.
* Optional: Return a function that can be used to remove all event listeners (if any) added by the method.
This is to avoid memory leaks when using the components.






