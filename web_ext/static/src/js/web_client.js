/** @odoo-module **/
import {WebClient} from "@web/webclient/webclient";
import {patch} from 'web.utils';


patch(WebClient.prototype, 'web_ext/static/src/js/web_client.js', {
    setup() {
        this._super.apply(this, arguments);
        // 设置标题为OdooIOT, 生产环境设置为自己备案标题即可
        this.title.setParts({ zopenerp: "OdooIOT" });

    }

});
