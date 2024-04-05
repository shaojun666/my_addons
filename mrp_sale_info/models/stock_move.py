# -*- coding: utf-8 -*-

import logging

from odoo import api, fields, models
from odoo.exceptions import ValidationError
from odoo.addons.sale.models.sale_order import LOCKED_FIELD_STATES

_logger = logging.getLogger(__name__)


class StockMove(models.Model):
    _inherit = 'stock.move'

    def _prepare_procurement_values(self):
        res = super()._prepare_procurement_values()
        if self.sale_line_id:
            res['sale_line_id'] = self.sale_line_id.id
        if self.partner_id:
            res['partner_id'] = self.partner_id.id
        return res
