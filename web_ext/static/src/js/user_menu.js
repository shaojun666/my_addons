/** @odoo-module **/

import {UserMenu} from "@web/webclient/user_menu/user_menu";
import {patch} from "@web/core/utils/patch";
import {registry} from "@web/core/registry";

const userMenuRegistry = registry.category("user_menuitems");

function separator51() {
    return {
        type: "separator",
        sequence: 51,
    };
}

patch(UserMenu.prototype, "web_ext.UserMenu", {
    setup() {
        this._super.apply(this, arguments);


        // 删除原来删除
        userMenuRegistry.remove('documentation');
        userMenuRegistry.remove('support');
        userMenuRegistry.remove('odoo_account');

        // 设置和登出添加separator
        userMenuRegistry.add("separator51", separator51);

    },

});

