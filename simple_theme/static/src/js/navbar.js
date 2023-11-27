/** @odoo-module */

import {patch} from '@web/core/utils/patch';
import {NavBar} from "@web/webclient/navbar/navbar";
import {SimpleThemeDropdownItem} from "./dropdown_item"
import {SimpleThemeDropdown} from "./dropdown"
import { useEffect } from "@web/core/utils/hooks";

export class SimpleThemeMenuDropdown extends SimpleThemeDropdown {
    setup() {
        super.setup();
        useEffect(
            () => {
                if (this.props.xmlid) {
                    this.togglerRef.el.dataset.menuXmlid = this.props.xmlid;
                }
            },
            () => []
        );
    }
}
SimpleThemeMenuDropdown.props.xmlid = {
    type: String,
    optional: true,
};

export class SimpleThemeMenuItem extends SimpleThemeDropdownItem {
    setup() {
        super.setup();
        useEffect(
            () => {
                if (this.props.payload.id) {
                    this.el.dataset.section = this.props.payload.id;
                }
                if (this.props.payload.xmlid) {
                    this.el.dataset.menuXmlid = this.props.payload.xmlid;
                }
            },
            () => []
        );
    }

}



patch(NavBar, 'simple_theme/static/src/js/libs/navbar.js', {
    template: "simple_theme.NavBar",
    components: {
        ...NavBar.components,
        SimpleThemeMenuItem,
        SimpleThemeMenuDropdown
    },
});

patch(NavBar.prototype, 'simple_theme/static/src/js/libs/navbar.js', {

    // getApps() {
    //     const apps = this.menuService.getApps();
    //     const newApps = apps.map(function (item) {
    //         const prefix = item.webIconData.startsWith('P') ? 'data:image/svg+xml;base64,' : 'data:image/png;base64,';
    //         const webIconData = item.webIconData.startsWith('data:image') ? item.webIconData : prefix + item.webIconData.replace(/\s/g, '');
    //         item['webIconData'] = webIconData;
    //         return item
    //
    //     })
    //     return newApps
    // },

    onToggleSidebarBtnClick(event) {

        document.body.classList.toggle('toggle-sidebar')

    },

    mounted() {
        this._super();
        $("#sidebar").append($(".sidebar-nav"));
    }


});


