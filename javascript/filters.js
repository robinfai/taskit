/**
 * Created by apple on 2013-11-23.
 */

define(['app','semantic'],function(app){
    app.filter('truncate', function () {
        return function (text, length, end) {
            if (isNaN(length))
                length = 10;

            if (end === undefined)
                end = "...";

            if (text.length <= length || text.length - end.length <= length) {
                return text;
            }
            else {
                return String(text).substring(0, length-end.length) + end;
            }

        };
    });
    app.filter('substring', function () {
        return function (text, start, length) {
            return text.substring(start,length);
        };
    });
});