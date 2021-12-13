function validate_form() {
    var sname = document.student.name;
    var rnum = document.student.regno;
    var dob = document.student.dob;
    var pro = document.student.program;
    var eid = document.student.emailid;
    var tadd = document.student.temp;
    var tasp = document.student.addr;
    var padd = document.student.perm;
    var num = document.student.phone;
    if (sname_val(sname)) {
        if (regnum_val(rnum)) {
            if (dob_val(dob)) {
                if (prog_val(pro)) {
                    if (mail_val(eid)) {
                        if (temp_val(tadd)) {
                            if (per_val(padd)) {
                                if (no_val(num)) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}
function sname_val(sname) {
    var letters1 = /^[a-zA-Z]{1,30}$/;
    if (sname.value.match(letters1)) {
        return true;
    }
    else {
        alert('Enter the Name');
        return false;
    }
}
function regnum_val(rnum) {
    var numz = /^[A-Za-z0-9]+$/;
    if (rnum.value.match(numz)) {
        return true;
    }
    else {
        alert('Enter the Registration');
        return false;
    }
}
function dob_val(dob) {
    var dobz = /^[A-Za-z0-9]+$/;
    if (dob.value.match(dobz)) {
        return true;
    }
    else {
        alert('Enter the DOB');
        return false;
    }
}
function prog_val(pro) {
    var progz = /^[A-Za-z]+$/;
    if (pro.value.match(progz)) {
        return true;
    }
    else {
        alert('Enter the Program');
        return false;
    }
}
function mail_val(eid) {
    var mailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (eid.value.match(mailformat)) {
        return true;
    }
    else {
        alert('Invalid Email');
        return false;
    }
}
function temp_val(tadd) {
    var taddz = /^[A-Za-z]+$/;
    if (tadd.value.match(taddz)) {
        return true;
    }
    else {
        alert('Enter the temporary address');
        return false;
    }
}
function per_val(padd) {
    var paddz = /^[A-Za-z]+$/;
    if (padd.value.match(paddz)) {
        return true;
    }
    else {
        alert('Enter the permanent address');
        return false;
    }
}
function no_val(num) {
    var num1 = /^[0-9]{10}$/;
    if (num.value == "") {
        alert('Enter the Number');
    }
    else if (num.value.match(num1)) {
        return true;
    }
    else {
        alert('Invalid Number');
        return false;
    }
}