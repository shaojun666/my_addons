/** @odoo-module */

import {patch} from '@web/core/utils/patch';
import {WebClient} from "@web/webclient/webclient";


patch(WebClient.prototype, 'web_ext.WebClient', {
    setup() {

        this._super.apply(this, arguments);
        // 设置标题为OdooIOT, 生产环境设置为自己备案标题即可
        this.title.setParts({zopenerp: "OdooIOT"});

    }
});
