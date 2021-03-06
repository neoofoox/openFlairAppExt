Ext.define('openFlair.utils.DateUtils', {
    singleton: true,
    parse : function (date) {
        var dateAndTime = date.split('T');
        var date = dateAndTime[0];
        var time = dateAndTime[1];
        var splittedDate = date.split('-');
        var splittedTime = time.split(':');
        var year = splittedDate[0];
        var month = splittedDate[1];
        var day = splittedDate[2].replace('T', '');
        var hour = splittedTime[0];
        var minutes = splittedTime[1];
        var seconds = splittedTime[2].replace('Z', '');
        var datum = new Date();
        datum.setFullYear(year);
        datum.setMonth(month-1);
        datum.setDate(day);
        datum.setHours(hour+1);
        datum.setMinutes(minutes);
        datum.setSeconds(seconds);
        datum.setMilliseconds(0);
        return datum;
    }
});