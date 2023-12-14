odoo.define('web_ext.AbstractWebClient', function (require) {
    "use strict";

    const AbstractWebClient = require('web.AbstractWebClient');


    return AbstractWebClient.include({
        init: function (parent) {
            const res = this._super.apply(this, arguments);
            // 设置标题为OdooIOT, 生产环境设置为自己备案标题即可
            this.set('title_part', {"zopenerp": "OdooIOT"});
            return res;
        },


    });


});
