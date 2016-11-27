$(document).ready(function () {
    var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var patern09 = /^09[0-9]{8}?$/;
    var patern01 = /^01[0-9]{9}?$/;
    $(".fullname").keypress(function () {
        $(".fullname-error").hide();
    });
    $(".address").keypress(function () {
        $(".address-error").hide();
    });
    $(".phone").keypress(function () {
        $(".phone-error").hide();
    });
    $(".email").keypress(function () {
        $(".email-error").hide();
    });
    $("#order_button").click(function () {
        var objHeight = $(window).height();
        var fullname = $(".fullname").val();
        var address = $(".address").val();
        var phone = $(".phone").val();
        var email = $(".email").val();
        if (fullname.length == 0 || address.length == 0 || phone.length == 0) {
            if (fullname.length == 0) {
                $(".fullname-error").show();
                $(".fullname").focus();
            }
            else {
                $(".fullname-error").hide()
            }
            if (address.length == 0) {
                $(".address-error").show();
                $(".address").focus();
            }
            else {
                $(".address-error").hide();
            }
            if (phone.length == 0) {
                $(".phone-error").show();
                $(".phone").focus();
            }
            else {
                $(".phone-error").hide();
            }
            return false;
        }
        if (phone.length > 0) {
            if (!patern09.test(phone) && !patern01.test(phone)) {
                $(".phone-error").html("Số điện thoại không hợp lệ");
                $(".phone-error").show();
                return false;
            }
        }
        if (email.length > 0 && !reg.test(email)) {
            $(".email-error").html("Email sai định dạng");
            $(".email-error").show();
            $(".email").focus();
            return false;
        }
        $("#purchase").submit();
    });
});