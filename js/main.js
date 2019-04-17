$(window)
    .resize(function() {
        if ($(window).width() <= 1024) $('.module-icons').addClass("flex-column");
        else $('.module-icons').removeClass("flex-column");
    });

if ($(window).width() <= 1024) $('.module-icons').addClass("flex-column");
else $('.module-icons').removeClass("flex-column");

if ($(window).width() <= 768 && $(window).width() >= 376) {
    $('svg').attr("width", "140");
    $('svg').attr("height", "140");
    $('circle').attr("cx", "70");
    $('circle').attr("cy", "70");
    $('circle').attr("r", "35");
    $('.cost').attr("font-size", "25px");
    $('.duration').attr("y", "64%");
}

$(window).resize(function() {
    if ($(window)
        .width() <= 767) {
        $('.ready-partner-text').addClass("text-center");
        $('.odoo-hero-logo').removeClass("mb-5 pb-5");
        $('.odoo-hero-logo').addClass("mt-5");
    } else {
        $('.ready-partner-text').removeClass("text-center");
        $('.odoo-hero-logo').addClass("mb-5 pb-5");
        $('.odoo-hero-logo').removeClass("mt-5");
    }
});

if ($(window).width() <= 767) {
    $('.ready-partner-text, .payroll-icon').addClass("text-center");
    $('.payroll-icon').removeClass("text-right");
    $('.odoo-hero-logo').removeClass("mb-5 pb-5");
    $('.odoo-hero-logo').addClass("mt-5");
} else {
    $('.ready-partner-text, .payroll-icon').removeClass("text-center");
    $('.payroll-icon').addClass("text-right");
    $('.odoo-hero-logo').addClass("mb-5 pb-5");
    $('.odoo-hero-logo').removeClass("mt-5");
}

$(window).resize(function() {
    if ($(window)
        .width() <= 767) {
        $('.ready-partner-text, .payroll-icon').addClass("text-center");
        $('.payroll-icon').removeClass("text-right");
    } else {
        $('.ready-partner-text, .payroll-icon').removeClass("text-center");
        $('.payroll-icon').addClass("text-right");
    }
})

if ($(window).width() <= 767) {
    $('.ready-partner-text, .payroll-icon').addClass("text-center");
    $('.payroll-icon').removeClass("text-right");
} else {
    $('.ready-partner-text, .payroll-icon').removeClass("text-center");
    $('.payroll-icon').addClass("text-right");
}

if ($(window).width() <= 360) {
    $('#sugarcrm, #sap').attr("width", "125");
}

$(window).resize(function() {
    if ($(window).width() <= 320) {
        $('#sugarcrm, #sap, #msdynamics, #netsuit, #netsuit-1, #msdynamics-1, #salesforce, #zoho, #piperdrive, #quickbooks, #sage').attr("width", "78");
    }
})

if ($(window).width() <= 320) {
    $('#sugarcrm, #sap, #msdynamics, #netsuit, #netsuit-1, #msdynamics-1, #salesforce, #zoho, #piperdrive, #quickbooks, #sage').attr("width", "78");
}

$(window).resize(function() {
    if ($(window).width() <= 767) {
        $('.footer-links').removeClass("text-right");
        $('.footer-links').addClass("text-center");
        $('.about-jenga-logo, .about-arrows, .about-odoo-logo').removeClass("d-inline");
    } else {
        $('.footer-links').removeClass("text-center");
        $('.footer-links').addClass("text-right");
        $('.about-jenga-logo, .about-arrows, .about-odoo-logo').addClass("d-inline");
    }
})

if ($(window).width() <= 767) {
    $('.footer-links').removeClass("text-right");
    $('.footer-links').addClass("text-center");
    $('.about-jenga-logo, .about-arrows, .about-odoo-logo').removeClass("d-inline");
} else {
    $('.footer-links').removeClass("text-center");
    $('.footer-links').addClass("text-right");
    $('.about-jenga-logo, .about-arrows, .about-odoo-logo').addClass("d-inline");
}