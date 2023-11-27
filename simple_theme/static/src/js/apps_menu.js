odoo.define('custom_theme.AppsMenu', function (require) {
    "use strict";

    var AppsMenu = require('web.AppsMenu');

    AppsMenu.include({
        template: 'CustomAppsMenu',

        events: Object.assign({}, AppsMenu.prototype.events, {
            'click #toggle-sidebar': 'onToggleSidebarBtnClick'
        }),

        init(parent, menuData) {
            this._super(...arguments);
            for (let n in this._apps) {
                this._apps[n].web_icon_data = menuData.children[n].web_icon_data;
            }

        },
        onToggleSidebarBtnClick(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            const body = $(document.body);
            body.toggleClass("toggle-sidebar");

        },
    });


});
