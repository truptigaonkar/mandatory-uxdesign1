window.mds = {
    textField: textField(),
    switch: empty,
    checkbox: empty,
    radioButton: empty
};

// Control behavior of the textField label and underline
function textField() {
    let inputTextfield = document.querySelector('.mds-text-field__input');
    let labelTextfield = document.querySelector('.mds-text-field__label');
    let underline = document.querySelector('.mds-text-field__underline');

    inputTextfield.addEventListener('focus', () => {
        labelTextfield.classList.remove('mds-text-field__label--focussedColor');
        if(inputTextfield){
            labelTextfield.classList.add('mds-text-field__label--focussed');
            inputTextfield.classList.add('mds-text-field__input--focussed');
        } 
        underline.classList.add('mds-text-field__underline--focussed');
    });
    inputTextfield.addEventListener('blur', () => {
        labelTextfield.classList.add('mds-text-field__label--focussedColor'); 
        if (inputTextfield.value === '') {
            labelTextfield.classList.remove('mds-text-field__label--focussed'); 
             
        } 
        inputTextfield.classList.remove('mds-text-field__input--focussed'); 
        underline.classList.remove('mds-text-field__underline--focussed');
    });
}
function empty() {}

// Jquery to give disable effect to each element
$(function () {
    // Disable textfield
    $("#disableTextfield").attr("disabled", true);
    $("mds-text-field--disabled").css('opacity', '0.4');


    // Disable Switch
    $("#mds-switch__input--disable1").attr("disabled", true);
    $("#mds-switch__checked--disabled").css('opacity', '0.4');

    $("#mds-switch__input--disable2").attr("disabled", true);
    $("#mds-switch__unchecked--disabled").css('opacity', '0.4');


    // Disable Checkbox
    $("#mds-checkbox__input--disable1").attr("disabled", true);
    $("#mds-checkbox__checkedDisabled").css('opacity', '0.4');

    $("#mds-checkbox__input--disable2").attr("disabled", true);
    $("#mds-checkbox__uncheckedDisabled").css('opacity', '0.4');


    // Disable Radio Button
    $("#mds-radio__input--disable1").attr("disabled", true);
    $("#mds-radio__checkedDisabled").css('opacity', '0.4');

    $("#mds-radio__input--disable2").attr("disabled", true);
    $("#mds-radio__uncheckedDisabled").css('opacity', '0.4');
});