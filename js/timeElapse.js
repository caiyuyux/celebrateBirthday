function getDaysInMonth(month) {
    var data = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return data[month];
}

function timeElapse(date) {
    var current = new Date();
    var years = NaN;
    var months = NaN;
    var days = NaN;
    var hours = NaN;
    var minutes = NaN;
    var seconds = NaN;
    current.setMonth(current.getMonth()+1);
    seconds = current.getSeconds() - date.getSeconds();
    if (seconds < 0) {
        seconds += 60;
        current.setMinutes(current.getMinutes() - 1);
    }
    minutes = current.getMinutes() - date.getMinutes();
    if (minutes < 0) {
        minutes += 60;
        current.setHours(current.getHours() - 1);
    }
    hours = current.getHours() - date.getHours();
    if (hours < 0) {
        hours += 24;
        current.setDate(current.getDate() - 1);
    }
    days = current.getDate() - date.getDate();
    if (days < 0) {
        days += getDaysInMonth(current.getMonth());
        current.setMonth(current.getMonth() - 1);
    }
    months = current.getMonth() - date.getMonth();
    if (months < 0) {
        months += 12;
        current.setYear(current.getFullYear() - 1);
    }
    years = current.getFullYear() - date.getFullYear();
    if (years < 10) {
        years = "0" + years;
    }
    if (months < 10) {
        months = "0" + months;
    }
    if (days < 10) {
        days = "0" + days;
    }
    if (years < 10) {
        years = "0" + years;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var result = (years > 0 ? "<span class=\"digit\">" + years + "</span> year ":"")
    result += (months >= 0 ? "<span class=\"digit\">" + months + "</span> month ":"");
    result += "<span class=\"digit\">" + days + "</span> day <br/>";
    result += "<span class=\"digit\">" + hours + "</span> hr "
    result += "<span class=\"digit\">" + minutes + "</span> min "
    result += "<span class=\"digit\">" + seconds + "</span> sec";

    $("#elapseClock").html(result);
}