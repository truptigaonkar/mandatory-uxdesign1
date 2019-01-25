window.mds = {
    textField: textField(),
    switch: empty,
    checkbox: empty,
    radioButton: empty
};

// Control behavior of the textField label and underline
function textField() {
    let inputTextfield = document.querySelector('.mds-text-field__input');
    let labelTextfield = document.querySelector('.mds-floating-label');
    let underline = document.querySelector('.underline');

    inputTextfield.addEventListener('focus', () => {
        labelTextfield.classList.remove('is-active-color');
        if(inputTextfield){
            labelTextfield.classList.add('is-active');
            inputTextfield.classList.add('is-active-input');
        } 
        underline.classList.add('underline-is-active');
    });
    inputTextfield.addEventListener('blur', () => {
        labelTextfield.classList.add('is-active-color'); 
        if (inputTextfield.value === '') {
            labelTextfield.classList.remove('is-active'); 
             
        } 
        inputTextfield.classList.remove('is-active-input'); 
        underline.classList.remove('underline-is-active');
    });
}
function empty() {}



// Jquery to give disable effect to each element
$(function () {
    // Disable textfield
    $("#disableTextfield").attr("disabled", true);
    $("#mds-textfield__disabled").css('opacity', '0.4');


    // Disable Switch
    $("#disableSwitch1").attr("disabled", true);
    $("#mds-switch__checkedDisabled").css('opacity', '0.4');

    $("#disableSwitch2").attr("disabled", true);
    $("#mds-switch__uncheckedDisabled").css('opacity', '0.4');


    // Disable Checkbox
    $("#disableCheckbox1").attr("disabled", true);
    $("#mds-checkbox__checkedDisabled").css('opacity', '0.4');

    $("#disableCheckbox2").attr("disabled", true);
    $("#mds-checkbox__uncheckedDisabled").css('opacity', '0.4');


    // Disable Radio Button
    $("#disableRadio1").attr("disabled", true);
    $("#mds-radio__checkedDisabled").css('opacity', '0.4');

    $("#disableRadio2").attr("disabled", true);
    $("#mds-radio__uncheckedDisabled").css('opacity', '0.4');
});