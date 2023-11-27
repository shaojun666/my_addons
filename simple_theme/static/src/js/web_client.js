odoo.define('custom_theme.WebClient', function (require) {
    "use strict";

    const WebClient = require('web.WebClient');


    return WebClient.include({
        start: function () {
            const res = this._super.apply(this, arguments);

            const aside = $(document.createElement("aside"));
            aside.addClass("sidebar");
            aside.attr("id", "sidebar")


            this.$el.append(aside);
            return res;
        },



    });


});
