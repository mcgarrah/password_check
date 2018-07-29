// Very Simple Example of Password Validation
//
// James Michael McGarrah for OMSCS HCI Course
// Summer 2018
//

$(document).ready(function () {

    //
    // Show Password
    //
    $('#pwdcheck').click(function(){
        if('password' == $('#password').attr('type')) {
            $('#password').prop('type', 'text')
        } else {
            $('#password').prop('type', 'password')
        }
    });

    //
    // Submit button validation Code Section
    //
    // Setup Submit to be disabled
    $("#submit").attr('disabled', 'disabled');
    $("form").keyup(function() {
        // To Disable Submit Button
        $("#submit").attr('disabled', 'disabled');
        // Validating Password field not empty
        //var password = $("#password").val();
        //if (!(password == "")) {
        // Validating Password field meets strength requirements
        var result = $("#result").html();
        if (result == "Strong") {
            // To Enable Submit Button
            $("#submit").removeAttr('disabled');
            $("#submit").css({
                "cursor": "pointer",
                "box-shadow": "1px 0px 6px #333",
                "background-color": "#4CAF50"
            });
        }
    });

    // On Click for Submit Button
    $("#submit").click(function() {
        $("#submit").css({
            "cursor": "default",
            "box-shadow": "none"
        });
        alert("Password Check Prototype Form Submitted");
    });

    //
    // Password Validation Code Section
    //
    $('#password').keyup(function () {
        $('#result').html(checkStrength($('#password').val()))
        $('#length').html(checkLength($('#password').val()))
        $('#letter').html(checkLower($('#password').val()))
        $('#capital').html(checkUpper($('#password').val()))
        $('#number').html(checkSpecial($('#password').val()))
    })

    // length
    function checkLength(password) {
        if (password.length < 8) {
            $('#length').removeClass('strong')
            $('#length').addClass('weak')  // color coded in CSS
            return '&#x2716; Minimum 8 characters'
        } else {
            $('#length').removeClass('weak')
            $('#length').addClass('strong')  // color coded in CSS
            return '&#x2714; Minimum 8 characters'
        }
    }

    // lower
    function checkLower(password) {
        // If it has numbers and characters, increase strength value.
        if (password.match(/([a-z])/)) {
            $('#letter').removeClass('weak')
            $('#letter').addClass('strong')  // color coded in CSS
            return '&#x2714; A lowercase letter'
        } else {
            $('#letter').removeClass('strong')
            $('#letter').addClass('weak')  // color coded in CSS
            return '&#x2716; A lowercase letter'
        }
    }

    // capital
    function checkUpper(password) {
        // If it has numbers and characters, increase strength value.
        if (password.match(/([A-Z])/)) {
            $('#capital').removeClass('weak')
            $('#capital').addClass('strong')  // color coded in CSS
            return '&#x2714; A capital (uppercase) letter'
        } else {
            $('#capital').removeClass('strong')
            $('#capital').addClass('weak')  // color coded in CSS
            return '&#x2716; A capital (uppercase) letter'
        }
    }

    // number or symbol
    function checkSpecial(password) {
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/) || password.match(/([0-9])/)) {
            $('#number').removeClass('weak')
            $('#number').addClass('strong')  // color coded in CSS
            return '&#x2714; A <b>number</b> or symbol'
        } else {
            $('#number').removeClass('strong')
            $('#number').addClass('weak')  // color coded in CSS
            return '&#x2716; A <b>number</b> or symbol'
        }
    }

    // Complexity indicator
    function checkStrength(password) {
        var strength = 0
        if (password.length < 6) {
            $('#result').removeClass()
            $('#result').addClass('short')  // color coded in CSS
            return 'Too short'
        }
        if (password.length > 7) strength += 1
        // If password contains both lower and uppercase characters, increase strength value.
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
        // If it has numbers and characters, increase strength value.
        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1
        // If it has one special character, increase strength value.
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
        // If it has two special characters, increase strength value.
        if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
        // Calculated strength value, we can return messages
        // If value is less than 2
        if (strength < 2) {
            $('#result').removeClass()
            $('#result').addClass('weak') // color coded in CSS
            return 'Weak'
        } else if (strength == 2) {
            $('#result').removeClass()
            $('#result').addClass('good') // color coded in CSS
            return 'Good'
        } else {
            $('#result').removeClass()
            $('#result').addClass('strong') // color coded in CSS
            return 'Strong'
        }
    }
});

