odoo.define('no_seconds_datetime.no_seconds_datetime', function (require) {
    "use strict";

    var fieldRegistry = require('web.field_registry');
    var FieldDateTime = require('web.basic_fields').FieldDateTime;
    var datepicker = require('web.datepicker');
    var time = require('web.time');
    var session = require('web.session');


    var NoSecondsDateTimeWidget = datepicker.DateWidget.extend({
        type_of_date: "datetime",
        init: function (parent, options) {
            this._super(parent, _.extend({
                buttons: {
                    showToday: false,
                    showClear: false,
                    showClose: true,
                },
            }, options || {}));

            this.options.format = this.options.format.replace(":ss", "").replace("ss秒", "")
        },
    });


    var NoSecondsFieldDateTime = FieldDateTime.extend({
        type_of_date: "datetime",

        init: function () {
            this._super.apply(this, arguments);
            if (this.value) {
                // 默认值秒设置为0
                this.value._d.setSeconds(0)
            }
        },

        _makeDatePicker: function () {
            return new NoSecondsDateTimeWidget(this, this.datepickerOptions);
        },

        _renderReadonly: function () {
            if (this.value) {

                var format = time.getLangDatetimeFormat()
                var value = this.value.clone().add(session.getTZOffset(this.value), 'minutes')
                var v = value.format(format.replace(":ss", "").replace("ss秒", ""));

                this.$el.empty().text(v);
                return
            }

            this.$el.empty().text(this.value);
        },

    })

    fieldRegistry.add('no_seconds_datetime', NoSecondsFieldDateTime);

    return {
        NoSecondsFieldDateTime: NoSecondsFieldDateTime,
    };


})