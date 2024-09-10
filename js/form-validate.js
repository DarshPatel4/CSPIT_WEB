function ShowLoading(e) {
    var div = document.createElement('div');
    div.setAttribute("id", "loader_div");
    var img = document.createElement('img');
    img.src = base_url + 'site/templates/images/au-loader.gif';
    img.style.cssText = 'margin-top:10%';
    div.innerHTML = "Loading...<br />";
    div.style.cssText = 'position: fixed; top: 0%; left: 0%;width:100%;height:100%; z-index: 5000; text-align: center; background: #ccc; border: 1px solid #000; opacity:0.3';
    div.appendChild(img);
    document.body.appendChild(div);
    return true;
}

function HideLoading()
{
    $('#loader_div').remove();
}

function SaveToDisk(fileURL, fileName) {
    // for non-IE
    if (!window.ActiveXObject) {
        var save = document.createElement('a');
        save.href = fileURL;
        save.target = '_blank';
        save.download = fileName || 'unknown';

        var evt = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': false
        });
        save.dispatchEvent(evt);

        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    }

    // for IE < 11
    else if (!!window.ActiveXObject && document.execCommand) {
        var _window = window.open(fileURL, '_blank');
        _window.document.close();
        _window.document.execCommand('SaveAs', true, fileName || fileURL)
        _window.close();
    }
}

$("#connect_with_us").submit(function (e) {
    e.preventDefault();
}).validate({
    onkeyup: false,
    rules: {
        fname: {
            required: true
        },
        lname: {
            required: true
        },
        email_id: {
            required: true,
            email: true,
            // duplicateEmail: true
        },
        phone: {
            digits: true,
            required: true,
            minlength: 10,
            maxlength: 10,
            //duplicateMobile: true
        },
        state: {
            required: true
        },
        city: {
            required: true
        },
        agree: {
            required: true
        }
    },
    messages: {
        fname: "Enter your first name.",
        lname: "Enter your last name.",
        email_id: {required: "Enter valid email address."},
        phone: {required: "Only numbers (10 digits)."},
        state: "Select state.",
        city: "Enter city name.",
        agree: "Please accept."
    },
    errorPlacement: function (error, element)
    {
        //alert(element.tagName)
        //alert(element.prop("tagName"))
        if (element.attr('type') == 'checkbox')
        {
            error.insertAfter($(element).closest('div.form-check'));
        } else
        {
            error.insertAfter(element);
        }
        // error.insertAfter(element);
    },
    submitHandler: function (form)
    {
        ShowLoading();

        $.ajax({
            type: 'POST',
            url: base_url + 'ajax/',
            data: $("#connect_with_us").serialize() + '&parent_url=' + window.parent.location.href,
            success: function (response) {
                HideLoading();
                $('.loader-bg').fadeOut();
                //window.parent.closeModal();
                $('#newModal').modal('hide');
                if (response == 'success') {
                    $("#connect_with_us").fadeOut();
                    $("#ug_git_form").fadeOut('fast');
                    $('#form_response').html('<h4 font-size="17px">Thanks for your interest in Ahmedabad University. Look out for our emails on the latest information and news from our campus.</h4>')
                } else
                {
                    $('#form_response').prepend('<div style="border-radius:0px; margin:15px" class="alert alert-warning">There was some problem, please try again after sometime.</div>')
                }

            },
        });
        return false;
    }
});


$("#g_git_form").submit(function (e) {
    e.preventDefault();
}).validate({
    onkeyup: false,
    rules: {
        ug_fname: {
            required: true
        },
        ug_lname: {
            required: true
        },
        ug_email: {
            required: true,
            email: true
        },
        ug_phone: {
            digits: true,
            required: true,
            minlength: 10,
            maxlength: 10
        },
        ug_state: {
            required: true
        },
	programs: {
            required: true
        },
        class: {
            required: true
        },
        ug_city: {
            required: true
        },
        ug_agree: {
            required: true
        }
    },
    messages: {
        ug_fname: "Enter your first name.",
        ug_lname: "Enter your last name.",
        ug_email: {required: "Enter valid email address."},
        ug_phone: {required: "Only numbers (10 digits)."},
        ug_state: "Select state.",
	programs: "Select program.",
        class: "Select class.",
        ug_city: "Enter city name.",
        ug_agree: "Please accept."
    },
    errorPlacement: function (error, element)
    {
        //alert(element.tagName)
        //alert(element.prop("tagName"))
        if (element.attr('type') == 'checkbox')
        {
            error.insertAfter($(element).closest('div.form-check'));
        } else
        {
            error.insertAfter(element);
        }
        // error.insertAfter(element);
    },
    submitHandler: function (form)
    {
        ShowLoading();
        $.ajax({
            type: 'POST',
            url: base_url + 'ajax/',
            data: $("#g_git_form").serialize() + '&parent_url=' + window.parent.location.href,
            success: function (response) {
                HideLoading();
                $('.loader-bg').fadeOut();
                //window.parent.closeModal();
                $('#newModal').modal('hide');
                if (response == 'success') {
                    //  $("#ug_git_form").fadeOut('fast');
                    $('#form_response').html('<h4  font-size="17px">Thanks for your interest in Ahmedabad University. Look out for our emails on the latest information and news from our campus.</h4>')
                } else
                {
                    $('#form_response').prepend('<div style="border-radius:0px; margin:15px" class="alert alert-warning">There was some problem, please try again after sometime.</div>')
                }

            },
        });
        return false;
    }
});


$("#ug_git_form").submit(function (e) {
    e.preventDefault();
}).validate({
    onkeyup: false,
    rules: {
        ug_fname: {
            required: true
        },
        ug_lname: {
            required: true
        },
        ug_email: {
            required: true,
            email: true
        },
        ug_phone: {
            digits: true,
            required: true,
            minlength: 10,
            maxlength: 10
        },
        ug_state: {
            required: true
        },
	programs: {
            required: true
        },
        class: {
            required: true
        },
        ug_city: {
            required: true
        },
        ug_agree: {
            required: true
        }
    },
    messages: {
        ug_fname: "Enter your first name.",
        ug_lname: "Enter your last name.",
        ug_email: {required: "Enter valid email address."},
        ug_phone: {required: "Only numbers (10 digits)."},
        ug_state: "Select state.",
	programs: "Select program.",
        class: "Select class.",
        ug_city: "Enter city name.",
        ug_agree: "Please accept."
    },
    errorPlacement: function (error, element)
    {
        //alert(element.tagName)
        //alert(element.prop("tagName"))
        if (element.attr('type') == 'checkbox')
        {
            error.insertAfter($(element).closest('div.form-check'));
        } else
        {
            error.insertAfter(element);
        }
        // error.insertAfter(element);
    },
    submitHandler: function (form)
    {
        ShowLoading();
        $.ajax({
            type: 'POST',
            url: base_url + 'ajax/',
            data: $("#ug_git_form").serialize() + '&parent_url=' + window.parent.location.href,
            success: function (response) {
                HideLoading();
                $('.loader-bg').fadeOut();
                //window.parent.closeModal();
                $('#newModal').modal('hide');
                if (response == 'success') {
                    //  $("#ug_git_form").fadeOut('fast');
                    $('#form_response').html('<h4  font-size="17px">Thanks for your interest in Ahmedabad University. Look out for our emails on the latest information and news from our campus.</h4>')
                } else
                {
                    $('#form_response').prepend('<div style="border-radius:0px; margin:15px" class="alert alert-warning">There was some problem, please try again after sometime.</div>')
                }

            },
        });
        return false;
    }
});



$("#g_git_form").submit(function (e) {
    e.preventDefault();
}).validate({
    onkeyup: false,
    rules: {
        ug_fname: {
            required: true
        },
        ug_lname: {
            required: true
        },
        ug_email: {
            required: true,
            email: true
        },
        ug_phone: {
            digits: true,
            required: true,
            minlength: 10,
            maxlength: 10
        },
        ug_state: {
            required: true
        },
	programs: {
            required: true
        },
        class: {
            required: true
        },
        ug_city: {
            required: true
        },
        ug_agree: {
            required: true
        }
    },
    messages: {
        ug_fname: "Enter your first name.",
        ug_lname: "Enter your last name.",
        ug_email: {required: "Enter valid email address."},
        ug_phone: {required: "Only numbers (10 digits)."},
        ug_state: "Select state.",
	programs: "Select program.",
        class: "Select class.",
        ug_city: "Enter city name.",
        ug_agree: "Please accept."
    },
    errorPlacement: function (error, element)
    {
        //alert(element.tagName)
        //alert(element.prop("tagName"))
        if (element.attr('type') == 'checkbox')
        {
            error.insertAfter($(element).closest('div.form-check'));
        } else
        {
            error.insertAfter(element);
        }
        // error.insertAfter(element);
    },
    submitHandler: function (form)
    {
        ShowLoading();
        $.ajax({
            type: 'POST',
            url: base_url + 'ajax/',
            data: $("#g_git_form").serialize() + '&parent_url=' + window.parent.location.href,
            success: function (response) {
                HideLoading();
                $('.loader-bg').fadeOut();
                //window.parent.closeModal();
                $('#newModal').modal('hide');
                if (response == 'success') {
                    //  $("#ug_git_form").fadeOut('fast');
                    $('#form_response').html('<h4  font-size="17px">Thanks for your interest in Ahmedabad University. Look out for our emails on the latest information and news from our campus.</h4>')
                } else
                {
                    $('#form_response').prepend('<div style="border-radius:0px; margin:15px" class="alert alert-warning">There was some problem, please try again after sometime.</div>')
                }

            },
        });
        return false;
    }
});




var pg_data;
$("#pg_connect_form").submit(function (e) {
    e.preventDefault();
}).validate({
    onkeyup: false,
    rules: {
        fname: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            digits: true,
            required: true,
            minlength: 10,
            maxlength: 10
        },
        state: {
            required: true
        },
        city: {
            required: true
        },
        programme: {
            required: true
        },
        year_of_admission: {
            required: true
        },
        agree: {
            required: true
        }
    },
    messages: {
        fname: "Enter your first name.",
        email: {required: "Enter valid email address."},
        phone: {required: "Only numbers (10 digits)."},
        state: "Select state.",
        city: "Enter city name.",
        programme: "Select Programme.",
        year_of_admission: "Enter Admission year.",
        year_of_admission: "Enter Admission year.",
        agree: "Please agree.",
    },
    errorPlacement: function (error, element)
    {
        //alert(element.tagName)
        //alert(element.prop("tagName"))
        if (element.attr('type') == 'checkbox')
        {
            error.insertAfter($(element).closest('div.form-check'));
        } else
        {
            error.insertAfter(element);
        }
        // error.insertAfter(element);
    },
    submitHandler: function (form)
    {
        ShowLoading();
        pg_data = $("#pg_connect_form").serialize();
        $.ajax({
            type: 'POST',
            url: base_url + 'ajax/',
            data: pg_data + '&parent_url=' + window.parent.location.href,
            success: function (response) {
                HideLoading();
                $('.loader-bg').fadeOut();
                //window.parent.closeModal();
                $('#newModal').modal('hide');
                if (response == 'success') {
                    fname = jQuery('input[name="fname"]').val();
                    $("#pg_connect_form").fadeOut('fast');
                    $('#form_response').html('<div class="submit-msg"><p>Dear ' + fname + ',</p><p>Thank you for your interest in Ahmedabad University.</p><p>Your enquiry has been received.</p><p>We have sent an email to verify your email address.</p><p>Our Admission Team will get in touch with you soon.</p></div>')
                } else
                {
                    $('#form_response').prepend('<div class="submit-msg"><p>There was some problem, please try again after sometime.</p></div>')
                }

            },
        });
        return false;
    }
});


$("#download_brochure_form").submit(function (e) {
    e.preventDefault();
}).validate({
    onkeyup: false,
    rules: {
        fname_d: {
            required: true
        },
        lname_d: {
            required: true
        },
        email_id_d: {
            required: true,
            email: true,
            // duplicateEmail: true
        },
        phone_d: {
            digits: true,
            required: true,
            minlength: 10,
            maxlength: 10,
            //duplicateMobile: true
        },
        city_d: {
            required: true
        },
        state_d: {
            required: true
        },
        college_name: {
            required: true
        }
    },
    messages: {
        fname_d: "Enter your first name.",
        lname_d: "Enter your last name.",
        email_id_d: {required: "Enter valid email address."},
        phone_d: {required: "Only numbers (10 digits)."},
        state_d: "Enter state.",
        city_d: "Enter city name.",
        college_name: "Enter college/university name."
    },
    errorPlacement: function (error, element)
    {
        //alert(element.tagName)
        //alert(element.prop("tagName"))
        if (element.attr('type') == 'checkbox')
        {
            error.insertAfter($(element).closest('div.form-check'));
        } else
        {
            error.insertAfter(element);
        }
        // error.insertAfter(element);
    },
    submitHandler: function (form)
    {
        ShowLoading();

        $.ajax({
            type: 'POST',
            url: base_url + 'ajax/',
            data: $("#download_brochure_form").serialize() + '&parent_url=' + window.parent.location.href,
            success: function (response) {
                HideLoading();
                $('.loader-bg').fadeOut();
                //window.parent.closeModal();
                $('#newModal1').modal('hide');
                if (response == 'success') {
                    // $("#download_brochure_form").fadeOut();

                    var fileURL = $('#file_url').val();
                    var fileName = $('#file_name').val();

                    SaveToDisk(fileURL, fileName);
                    // $('#form_response').html('<h4 font-size="17px">Thanks for your interest in Ahmedabad University. Look out for our emails on the latest information and news from our campus.</h4>')
                } else
                {
                    //$('#form_response').prepend('<div style="border-radius:0px; margin:15px" class="alert alert-warning">There was some problem, please try again after sometime.</div>')
                }

            },
        });
        return false;
    }
});

$("#campus_visit_form").submit(function (e) {
    e.preventDefault();
}).validate({
    errorElement: 'div',
    errorClass: 'error_form',
    onkeyup: false,
    rules: {
        first_name: {
            required: true,
            lettersOnly: true
        },
        last_name: {
            required: true,
            lettersOnly: true
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true,
            inusPhone: true
        },
        visit_date: {
            required: true,
            date: true
        },
        schools: {
            required: true
        }
    },
    messages: {
        first_name: {
            required: "Enter first name."
        },
        last_name: {
            required: "Enter last name."
        },
        email_id: {
            required: "Enter your email id.",
            email: "Please enter a valid email address"
        },
        phone: {
            required: "Enter your phone number.",
        },
//        visit_date: {
//            required: "Select the date of visit."
//        },
        schools: {
            required: "Select school you want to visit."
        }
    },
    errorPlacement: function (error, element)
    {
        //alert(element.tagName)
        //alert(element.prop("tagName"))
        if (element.attr('type') == 'checkbox')
        {
            error.insertAfter($(element).closest('div.form-check'));
        } else
        {
            error.insertAfter(element);
        }
        // error.insertAfter(element);
    },
    submitHandler: function (form)
    {
        ShowLoading();
        $.ajax({
            type: 'POST',
            url: base_url + 'ajax/',
            data: $("#campus_visit_form").serialize() + '&parent_url=' + window.parent.location.href,
            success: function (response) {
                HideLoading();
                if (response == 'success')
                {
                    $("#campus_visit_form").fadeOut();
                    $('#form_response').html('<h4  font-size="17px">Thank you for your interest in Ahmedabad University. Your Campus Visit request has been received! We will reach out to you within 48 hours.</h4>')
                    // $('#form_response').html('<h4 font-size="17px">Thanks for your interest in Ahmedabad University. Look out for our emails on the latest information and news from our campus.</h4>')
                } else
                {
                    $('#form_response').prepend('<div style="border-radius:0px; margin:15px" class="alert alert-warning">There was some problem, please try again after sometime.</div>');
                }
            },
        });
        return false;
    }
});

$("#contact_form").submit(function (e) {
    e.preventDefault();
}).validate({
    errorElement: 'div',
    errorClass: 'error_form',
    onkeyup: false,
    rules: {
        fullname: {
            required: true,
            lettersOnly: true
        },
        email_id: {
            required: true,
            email: true
        },
        phone: {
            required: true,
            inusPhone: true
        },
        purpose: {
            required: true,
        }
    },
    messages: {
        fullname: {
            required: "Enter your name."
        },
        email_id: {
            required: "Enter your email id.",
            email: "Please enter a valid email address"
        },
        phone: {
            required: "Enter your phone number."
        },
        purpose: {
            required: "Select purpose of contact."
        }

    },
    errorPlacement: function (error, element)
    {
        //alert(element.tagName)
        //alert(element.prop("tagName"))
        if (element.attr('type') == 'checkbox')
        {
            error.insertAfter($(element).closest('div.form-check'));
        } else
        {
            error.insertAfter(element);
        }
        // error.insertAfter(element);
    },
    submitHandler: function (form)
    {
        ShowLoading();
        $.ajax({
            type: 'POST',
            url: base_url + 'ajax/',
            data: $("#contact_form").serialize() + '&parent_url=' + window.parent.location.href,
            success: function (response) {
                HideLoading();
                if (response == 'success')
                {
                    $("#contact_form").fadeOut();
                    $('#form_response').html('<h4  font-size="17px">Thanks for your interest in Ahmedabad University. Someone from our office will get back to you soon.</h4>')
                    // $('#form_response').html('<h4 font-size="17px">Thanks for your interest in Ahmedabad University. Look out for our emails on the latest information and news from our campus.</h4>')
                } else
                {
                    $('#form_response').prepend('<div style="border-radius:0px; margin:15px" class="alert alert-warning">There was some problem, please try again after sometime.</div>');
                }
            },
        });
        return false;
    }
});


$("#div_contact_form").submit(function (e) {
    e.preventDefault();
}).validate({
    errorElement: 'div',
    errorClass: 'error_form',
    onkeyup: false,
    rules: {
        fullname: {
            required: true,
            lettersOnly: true
        },
        email_id: {
            required: true,
            email: true
        },
        phone: {
            required: true,
            inusPhone: true
        },
        purpose: {
            required: true,
        }

    },
    messages: {
        fullname: {
            required: "Enter your name."
        },
        email_id: {
            required: "Enter email id.",
            email: "Please enter a valid email address"
        },
        phone: {
            required: "Enter phone number.",
        },
        purpose: {
            required: "Please select purpose of contact."
        }
    },
    errorPlacement: function (error, element)
    {
        //alert(element.tagName)
        //alert(element.prop("tagName"))
        if (element.attr('type') == 'checkbox')
        {
            error.insertAfter($(element).closest('div.form-check'));
        } else
        {
            error.insertAfter(element);
        }
        // error.insertAfter(element);
    },
    submitHandler: function (form)
    {
        ShowLoading();
        $.ajax({
            type: 'POST',
            url: base_url + 'ajax/',
            data: $("#div_contact_form").serialize() + '&parent_url=' + window.parent.location.href,
            success: function (response) {
                HideLoading();
                if (response == 'success')
                {
                    $("#div_contact_form").fadeOut();
                    $('#form_response').html('<h4  font-size="17px">Thanks for your interest in Ahmedabad University. Someone from our office will get back to you soon.</h4>')
                    // $('#form_response').html('<h4 font-size="17px">Thanks for your interest in Ahmedabad University. Look out for our emails on the latest information and news from our campus.</h4>')
                } else
                {
                    $('#form_response').prepend('<div style="border-radius:0px; margin:15px" class="alert alert-warning">There was some problem, please try again after sometime.</div>');
                }
            },
        });
        return false;
    }
});


$("#download_ee_form").submit(function (e) {
    e.preventDefault();
}).validate({
    onkeyup: false,
    rules: {
        full_name_ee: {
            required: true
        },
        email_id_ee: {
            required: true,
            email: true,
            // duplicateEmail: true
        },
        phone_ee: {
            digits: true,
            required: true,
            minlength: 10,
            maxlength: 10,
            //duplicateMobile: true
        },
        company_ee: {
            required: true
        },
        city_ee: {
            required: true
        },
        work_exp_ee: {
            required: true
        }
    },
    messages: {
        full_name_ee: "Enter your name.",
        email_id_ee: {required: "Enter valid email address."},
        phone_ee: {required: "Only numbers (10 digits)."},
        company_ee: "Enter company name.",
        city_ee: "Enter city name.",
        work_exp_ee: "Select work experience."
    },
    errorPlacement: function (error, element)
    {
        //alert(element.tagName)
        //alert(element.prop("tagName"))
        if (element.attr('type') == 'checkbox')
        {
            error.insertAfter($(element).closest('div.form-check'));
        } else
        {
            error.insertAfter(element);
        }
        // error.insertAfter(element);
    },
    submitHandler: function (form)
    {
        ShowLoading();

        $.ajax({
            type: 'POST',
            url: base_url + 'ajax/',
            data: $("#download_ee_form").serialize() + '&parent_url=' + window.parent.location.href,
            success: function (response) {
                HideLoading();
                $('.loader-bg').fadeOut();
                //window.parent.closeModal();
                $('#newModal2').modal('hide');
                if (response == 'success') {
                    // $("#download_brochure_form").fadeOut();

                    var fileURL = $('#file_url_ee').val();
                    var fileName = $('#file_name_ee').val();

                    SaveToDisk(fileURL, fileName);
                    // $('#form_response').html('<h4 font-size="17px">Thanks for your interest in Ahmedabad University. Look out for our emails on the latest information and news from our campus.</h4>')
                } else
                {
                    //$('#form_response').prepend('<div style="border-radius:0px; margin:15px" class="alert alert-warning">There was some problem, please try again after sometime.</div>')
                }

            },
        });
        return false;
    }
});

function gtag_report_conversion(url) {
    var callback = function () {
        if (typeof (url) != 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-751441524/13C9CKfZ1_EBEPSsqOYC',
        'event_callback': callback
    });
    return false;
}

$("#pg_git_form").submit(function (e) {
    e.preventDefault();
}).validate({
    onkeyup: false,
    rules: {
        pg_fname: {
            required: true
        },
        pg_lname: {
            required: true
        },
        pg_email: {
            required: true,
            email: true
        },
        pg_phone: {
            digits: true,
            required: true,
            minlength: 10,
            maxlength: 10
        },
        pg_state: {
            required: true
        },
        pg_city: {
            required: true
        },
        pg_agree: {
            required: true
        }
    },
    messages: {
        pg_fname: "Enter your first name.",
        pg_lname: "Enter your last name.",
        pg_email: {required: "Enter valid email address."},
        pg_phone: {required: "Only numbers (10 digits)."},
        pg_state: "Select state.",
        pg_city: "Enter city name.",
        pg_agree: "Please accept."
    },
    errorPlacement: function (error, element)
    {
        //alert(element.tagName)
        //alert(element.prop("tagName"))
        if (element.attr('type') == 'checkbox')
        {
            error.insertAfter($(element).closest('div.form-check'));
        } else
        {
            error.insertAfter(element);
        }
        // error.insertAfter(element);
    },
    submitHandler: function (form)
    {
        ShowLoading();
        $.ajax({
            type: 'POST',
            url: base_url + 'ajax/',
            data: $("#pg_git_form").serialize() + '&parent_url=' + window.parent.location.href,
            success: function (response) {
                HideLoading();
                $('.loader-bg').fadeOut();
                //window.parent.closeModal();
                $('#newModal').modal('hide');
                if (response == 'success') {

                    if (window.location.href == 'https://ahduni.edu.in/admission/graduate-admission/master-of-business-administration')
                    {
                        gtag_report_conversion();
                    }

                    $("#pg_git_form").fadeOut('fast');
                    $('#form_response').html('<h4  font-size="17px">Thanks for your interest in Ahmedabad University. Look out for our emails on the latest information and news from our campus.</h4>')
                } else
                {
                    $('#form_response').prepend('<div style="border-radius:0px; margin:15px" class="alert alert-warning">There was some problem, please try again after sometime.</div>')
                }

            },
        });
        return false;
    }
});


$("#health_form").submit(function (e) {
    e.preventDefault();
}).validate({
    errorElement: 'div',
    errorClass: 'error_form',
    onkeyup: false,
    rules: {
        fullname: {
            required: true,
            lettersOnly: true
        },
        programme: {
            required: true,
        },
        enrollment_number: {
            required: true,
        },
        email_id: {
            required: true,
            email: true
        },
        phone: {
            required: true,
            inusPhone: true
        }
    },
    messages: {
        fullname: {
            required: "Enter your name."
        },
        email_id: {
            required: "Enter your email id.",
            email: "Please enter a valid email address"
        },
        phone: {
            required: "Enter your phone number."
        }

    },
    errorPlacement: function (error, element)
    {
        //alert(element.tagName)
        //alert(element.prop("tagName"))
        if (element.attr('type') == 'checkbox')
        {
            error.insertAfter($(element).closest('div.form-check'));
        } else
        {
            error.insertAfter(element);
        }
        // error.insertAfter(element);
    },
    submitHandler: function (form)
    {
        ShowLoading();
        $.ajax({
            type: 'POST',
            url: base_url + 'ajax/',
            data: $("#health_form").serialize() + '&parent_url=' + window.parent.location.href,
            success: function (response) {
                HideLoading();
                if (response == 'success')
                {
                    $("#health_form").fadeOut();
                    $('#form_response').html('<h4  font-size="17px">We have received your Query, someone from the health center office will get back to you soon.</h4>')
                    // $('#form_response').html('<h4 font-size="17px">Thanks for your interest in Ahmedabad University. Look out for our emails on the latest information and news from our campus.</h4>')
                } else
                {
                    $('#form_response').prepend('<div style="border-radius:0px; margin:15px" class="alert alert-warning">There was some problem, please try again after sometime.</div>');
                }
            },
        });
        return false;
    }
});
;


$("#email_sub_form").submit(function (e) {
    e.preventDefault();
}).validate({
    onkeyup: false,
    rules: {
        email_id: {
            required: true,
            email: true
        }
    },
    messages: {
        email_id: {required: "Enter valid email address."}
    },
    errorPlacement: function (error, element)
    {
        error.insertAfter(element);
    },
    submitHandler: function (form)
    {
        ShowLoading();
        $.ajax({
            type: 'POST',
            url: base_url + 'ajax/',
            data: $("#email_sub_form").serialize() + '&parent_url=' + window.parent.location.href,
            success: function (response) {
                HideLoading();
                $('.loader-bg').fadeOut();
                if (response == 'success') {

                    $("#email_sub_form").fadeOut('fast');
                    $('#form_response_sub').html('<div style="border-radius:0px;" class="alert alert-success alert_message">We have sent an email to verify your email address.</div>')
                } else if (response == 'exist') {

                    $("#email_sub_form").fadeOut('fast');
                    $('#form_response_sub').html('<div style="border-radius:0px;" class="alert alert-warning alert_message">Email id already subscribed.</div>')
                } else
                {
                    $('#form_response_sub').html('<div style="border-radius:0px;" class="alert alert-warning alert_message">There was some problem, please try again after sometime.</div>')
                }
            },
        });
        return false;
    }
});

$("#gemba_form").submit(function (e) {
    e.preventDefault();
}).validate({
    onkeyup: false,
    rules: {
        ug_fname: {
            required: true
        },
        ug_lname: {
            required: true
        },
        ug_email: {
            required: true,
            email: true
        },
        ug_phone: {
            digits: true,
            required: true,
            minlength: 10,
            maxlength: 10
        },
        ug_company: {
            required: true
        },
         ug_agree: {
            required: true
        }
        
   
    },
    messages: {
        ug_fname: "Enter your first name.",
        ug_lname: "Enter your last name.",
        ug_email: {required: "Enter valid email address."},
        ug_phone: {required: "Only numbers (10 digits)."},
        ug_company: "Enter company name.",
        ug_agree: "Please accept."
        
    },
    errorPlacement: function (error, element)
    {
        //alert(element.tagName)
        //alert(element.prop("tagName"))
        if (element.attr('type') == 'checkbox')
        {
            error.insertAfter($(element).closest('div.form-check'));
        } else
        {
            error.insertAfter(element);
        }
        // error.insertAfter(element);
    },
    submitHandler: function (form)
    {
        ShowLoading();
        $.ajax({
            type: 'POST',
            url: base_url + 'ajax/',
            data: $("#gemba_form").serialize() + '&parent_url=' + window.parent.location.href,
            success: function (response) {
                HideLoading();
                $('.loader-bg').fadeOut();
                //window.parent.closeModal();
                $('#gemba').hide();
                if (response == 'success') {
                    //  $("#gemba_form").fadeOut('fast');
                    $('#form_response').html('<h4  font-size="17px">Thanks for your interest in Ahmedabad University. Look out for our emails on the latest information and news from our campus.</h4>')
                } else
                {
                    $('#form_response').prepend('<div style="border-radius:0px; margin:15px" class="alert alert-warning">There was some problem, please try again after sometime.</div>')
                }

            },
        });
        return false;
    }
});



$("#rd_form").submit(function (e) {
    e.preventDefault();
}).validate({
    onkeyup: false,
    rules: {
        ug_fname: {
            required: true
        },
        ug_lname: {
            required: true
        },
        ug_email: {
            required: true,
            email: true
        },
        ug_phone: {
            digits: true,
            required: true,
            minlength: 10,
            maxlength: 10
        },
        
         ug_agree: {
            required: true
        }
        
   
    },
    messages: {
        ug_fname: "Enter your first name.",
        ug_lname: "Enter your last name.",
        ug_email: {required: "Enter valid email address."},
        ug_phone: {required: "Only numbers (10 digits)."},
        ug_agree: "Please accept."
        
    },
    errorPlacement: function (error, element)
    {
        //alert(element.tagName)
        //alert(element.prop("tagName"))
        if (element.attr('type') == 'checkbox')
        {
            error.insertAfter($(element).closest('div.form-check'));
        } else
        {
            error.insertAfter(element);
        }
        // error.insertAfter(element);
    },
    submitHandler: function (form)
    {
        ShowLoading();
        $.ajax({
            type: 'POST',
            url: base_url + 'ajax/',
            data: $("#rd_form").serialize() + '&parent_url=' + window.parent.location.href,
            success: function (response) {
                HideLoading();
                $('.loader-bg').fadeOut();
                //window.parent.closeModal();
               $('#rd').hide();
                if (response == 'success') {
                    //  $("#rd_form").fadeOut('fast');
                    $('#form_response').html('<h4  font-size="17px">Thanks for your interest in Ahmedabad University. Look out for our emails on the latest information and news from our campus.</h4>')
                } else
                {
                    $('#form_response').prepend('<div style="border-radius:0px; margin:15px" class="alert alert-warning">There was some problem, please try again after sometime.</div>')
                }

            },
        });
        return false;
    }
});


$("#certification_form").submit(function (e) {
    e.preventDefault();
}).validate({
    onkeyup: false,
    rules: {
        ug_fname: {
            required: true
        },
        ug_lname: {
            required: true
        },
        ug_email: {
            required: true,
            email: true
        },
        ug_phone: {
            digits: true,
            required: true,
            minlength: 10,
            maxlength: 10
        },
        ug_city: {
            required: true
        },
         ug_agree: {
            required: true
        }
        
   
    },
    messages: {
        ug_fname: "Enter your first name.",
        ug_lname: "Enter your last name.",
        ug_email: {required: "Enter valid email address."},
        ug_phone: {required: "Only numbers (10 digits)."},
        ug_city: "Enter city.",
        ug_agree: "Please accept."
        
    },
    errorPlacement: function (error, element)
    {
        //alert(element.tagName)
        //alert(element.prop("tagName"))
        if (element.attr('type') == 'checkbox')
        {
            error.insertAfter($(element).closest('div.form-check'));
        } else
        {
            error.insertAfter(element);
        }
        // error.insertAfter(element);
    },
    submitHandler: function (form)
    {
        ShowLoading();
        $.ajax({
            type: 'POST',
            url: base_url + 'ajax/',
            data: $("#certification_form").serialize() + '&parent_url=' + window.parent.location.href,
            success: function (response) {
                HideLoading();
                $('.loader-bg').fadeOut();
                //window.parent.closeModal();
                $('#certication').hide();
                if (response == 'success') {
                    //  $("#gemba_form").fadeOut('fast');
                    $('#form_response').html('<h4  font-size="17px">Thanks for your interest in Ahmedabad University. Look out for our emails on the latest information and news from our campus.</h4>')
                } else
                {
                    $('#form_response').prepend('<div style="border-radius:0px; margin:15px" class="alert alert-warning">There was some problem, please try again after sometime.</div>')
                }

            },
        });
        return false;
    }
});




$("#bxmx_form").submit(function (e) {
    e.preventDefault();
}).validate({
    onkeyup: false,
    rules: {
        ug_fname: {
            required: true
        },
        ug_lname: {
            required: true
        },
        ug_email: {
            required: true,
            email: true
        },
        ug_phone: {
            digits: true,
            required: true,
            minlength: 10,
            maxlength: 10
        },
        ug_city: {
            required: true
        },
         ug_agree: {
            required: true
        }
        
   
    },
    messages: {
        ug_fname: "Enter your first name.",
        ug_lname: "Enter your last name.",
        ug_email: {required: "Enter valid email address."},
        ug_phone: {required: "Only numbers (10 digits)."},
        ug_city: "Enter city.",
        ug_agree: "Please accept."
        
    },
    errorPlacement: function (error, element)
    {
        //alert(element.tagName)
        //alert(element.prop("tagName"))
        if (element.attr('type') == 'checkbox')
        {
            error.insertAfter($(element).closest('div.form-check'));
        } else
        {
            error.insertAfter(element);
        }
        // error.insertAfter(element);
    },
    submitHandler: function (form)
    {
        ShowLoading();
        $.ajax({
            type: 'POST',
            url: base_url + 'ajax/',
            data: $("#bxmx_form").serialize() + '&parent_url=' + window.parent.location.href,
            success: function (response) {
                HideLoading();
                $('.loader-bg').fadeOut();
                //window.parent.closeModal();
                $('#bxmx').hide();
                if (response == 'success') {
                    //  $("#gemba_form").fadeOut('fast');
                    $('#form_response').html('<h4  font-size="17px">Thanks for your interest in Ahmedabad University. Look out for our emails on the latest information and news from our campus.</h4>')
                } else
                {
                    $('#form_response').prepend('<div style="border-radius:0px; margin:15px" class="alert alert-warning">There was some problem, please try again after sometime.</div>')
                }

            },
        });
        return false;
    }
});




$("#email_sub_form1").submit(function (e) {
    e.preventDefault();
}).validate({
    onkeyup: false,
    rules: {
        email_id: {
            required: true,
            email: true
        }
    },
    messages: {
        email_id: {required: "Enter valid email address."}
    },
    errorPlacement: function (error, element)
    {
        error.insertAfter(element);
    },
    submitHandler: function (form)
    {
        ShowLoading();
        $.ajax({
            type: 'POST',
            url: base_url + 'ajax/',
            data: $("#email_sub_form1").serialize() + '&parent_url=' + window.parent.location.href,
            success: function (response) {
                HideLoading();
                $('.loader-bg').fadeOut();
                if (response == 'success') {

                    $("#email_sub_form1").fadeOut('fast');
                    $('#form_response_sub1').html('<div style="border-radius:0px;" class="alert alert-success alert_message">We have sent an email to verify your email address.</div>')
                } else if (response == 'exist') {

                    $("#email_sub_form1").fadeOut('fast');
                    $('#form_response_sub1').html('<div style="border-radius:0px;" class="alert alert-warning alert_message">Email id already subscribed.</div>')
                } else
                {
                    $('#form_response_sub1').html('<div style="border-radius:0px;" class="alert alert-warning alert_message">There was some problem, please try again after sometime.</div>')
                }
            },
        });
        return false;
    }
});
