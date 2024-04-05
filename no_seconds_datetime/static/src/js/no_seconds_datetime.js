/** @odoo-module **/

import {DateTimePicker} from "@web/core/datepicker/datepicker";
import {DateTimeField} from "@web/views/fields/datetime/datetime_field";
import {registry} from "@web/core/registry";
import {formatDateTime} from "@web/core/l10n/dates";
import {localization} from "@web/core/l10n/localization";


class NoSecondsDateTimePicker extends DateTimePicker {

    setup() {

        super.setup();

        this.format = this.format.replace(":ss", "").replace("ss秒", "")
        this.defaultFormat = this.defaultFormat.replace(":ss", "").replace("ss秒", "")
        this.staticFormat = this.staticFormat.replace(":ss", "").replace("ss秒", "")

    }

}

export class NoSecondsDateTimeField extends DateTimeField {

    setup() {

        super.setup();

        // 默认值去掉秒
        if (this.props.value) {
            const value = this.props.value;
            const d = new Date(value.ts);
            d.setSeconds(0);
            value.ts = d.getTime();
            value.c.second = 0;
            this.props.update(value);
        }


    }

    get formattedValue() {

        const format = localization.dateTimeFormat;
        return formatDateTime(this.props.value, {format: format.replace(":ss", "").replace("ss秒", "")});
    }

}

NoSecondsDateTimeField.components = {
    DateTimePicker: NoSecondsDateTimePicker,
};


registry.category("fields").add("no_seconds_datetime", NoSecondsDateTimeField);