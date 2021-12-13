function validate_form() {
    var fname = document.reg_form.fname;
    var lname = document.reg_form.lname;
    var addr = document.reg_form.addr;
    var city = document.reg_form.city;
    var zip = document.reg_form.zip;
    var yes = document.reg_form.yes;
    var no = document.reg_form.no;
    var onedaypass = document.reg_form.onedaypass;
    var twodaypass = document.reg_form.twodaypass;
    var threedaypass = document.reg_form.threedaypass;
    var fourdaypass = document.reg_form.fourdaypass;
    if (fname_val(fname)) {
        if (lname_val(lname)) {
            if (addr_val(addr)) {
                if (city_val(city)) {
                    if (zip_val(zip)) {
                        if (speaking_check(yes, no)) {
                            if (pass_check(onedaypass, twodaypass, threedaypass, fourdaypass)) {
                                return true;
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}

function fname_val(fname) {
    if (fname.value == "") {
        alert("Enter first name");
    } else {
        return true;
    }
}
function lname_val(lname) {
    if (lname.value == "") {
        alert("Enter last name");
        return false;
    } else {
        return true;
    }
}
function addr_val(addr) {
    var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (addr.value == "") {
        alert("Enter address name");
        return false;
    }
    else if (eid.value.match(mailformat)) {
        return true;
    }
    else {
        alert('Invalid Email');
        return false;
    }
}

function city_val(city) {
    if (city.value == "") {
        alert("Enter city");
        return false;
    } else {
        return true;
    }
}
function zip_val(zip) {
    var zipv = /^{5}$/;
    if (zip.value == "") {
        alert("Enter zip");
        return false;
    } else if (zip.value.match(zipv)) {
        return true;
    }
    else {
        alert("5-digit zip allowed");
        return false;
    }
}
function speaking_check(yes, no) {
    if ($('#yes').is(':checked')) {
        alert("Select yes or no");
        return false;
    } else {
        return true;
    }
}