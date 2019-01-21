
window.mds = {
    textField: function (element) {

    },
    switch: function (element) {

    },
    checkbox: function (element) {

    },
    radioButton: function (element) {

    },
};

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






