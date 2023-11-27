/** @odoo-module **/

import { ActionContainer } from '@web/webclient/actions/action_container';
const { tags } = owl;
export class SimpleThemeActionContainer extends ActionContainer {

}

SimpleThemeActionContainer.template = tags.xml`
    <t t-name="web.ActionContainer">
      <div class="o_action_manager main" id="main">
        <t t-if="info.Component" t-component="info.Component" t-props="info.componentProps" t-key="info.id"/>
      </div>
    </t>`;
