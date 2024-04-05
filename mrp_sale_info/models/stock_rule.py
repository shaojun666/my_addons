# Copyright 2019 Rubén Bravo <rubenred18@gmail.com>
# Copyright 2020 Tecnativa - Pedro M. Baeza
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html)

from odoo import models


class StockRule(models.Model):
    _inherit = "stock.rule"

    def _prepare_mo_vals(self, product_id, product_qty, product_uom, location_dest_id, name, origin, company_id, values, bom):
        res = super()._prepare_mo_vals(product_id, product_qty, product_uom, location_dest_id, name, origin, company_id, values, bom)

        if values.get("group_id", False):
            group_id =  values.get("group_id")
            res["source_procurement_group_id"] = group_id.id
            res['sale_id'] = group_id.sale_id and group_id.sale_id.id
            res['partner_id'] = group_id.partner_id and group_id.partner_id.id
        return res
