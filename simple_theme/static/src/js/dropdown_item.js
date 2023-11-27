/** @odoo-module **/

import {DropdownItem} from "@web/core/dropdown/dropdown_item";


export class SimpleThemeDropdownItem extends DropdownItem {
    onClick(ev) {

        const detail = {
            payload: this.props.payload,
            dropdownClosingRequest: {
                isFresh: true,
                mode: this.props.parentClosingMode,
            },
        };
        this.trigger("dropdown-item-selected", detail);
    }

}

SimpleThemeDropdownItem.template = "simple_theme.SimpleThemeDropdownItem"
SimpleThemeDropdownItem.props = {
    ...DropdownItem.props,
    webIconData: {
        type: String,
        optional: true,
    },
}