odoo.define('custom_theme.Menu', function (require) {
    "use strict";

    var Menu = require('web.Menu');

    Menu.include({
        // template: 'CustomMenu',

        start: function () {
            const res = this._super.apply(this, arguments);
            // $("#sidebar").append(this.$menu_apps);
            // $("#sidebar").append($(".mt-2"));
            res.then(() => {
                $("#sidebar").append($(".mt-2"));
            })
            return res;
        },

    });


});
    