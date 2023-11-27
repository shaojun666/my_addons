/** @odoo-module **/
import {WebClient} from "@web/webclient/webclient";
import {patch} from 'web.utils';
import { SimpleThemeActionContainer } from './action_container'

patch(WebClient, 'simple_theme/static/src/js/web_client.js', {
    template: "simple_theme.WebClient",
    components: {
        ...WebClient.components,
        SimpleThemeActionContainer
    },

});
