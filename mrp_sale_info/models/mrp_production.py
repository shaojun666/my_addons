from odoo import fields, models, api


class MrpProduction(models.Model):
    _inherit = "mrp.production"

    source_procurement_group_id = fields.Many2one(
        comodel_name="procurement.group",
        readonly=True,
    )
    sale_id = fields.Many2one(comodel_name="sale.order", string="订单")
    partner_id = fields.Many2one(comodel_name="res.partner", string="合作伙伴")
    commitment_date = fields.Datetime(related="sale_id.commitment_date", string="Commitment Date", store=True)
    client_order_ref = fields.Char(related="sale_id.client_order_ref", string="Customer Reference", store=True)

    @api.model
    def _prepare_procurement_group_vals(self, values):
        res = super(MrpProduction, self)._prepare_procurement_group_vals(values)
        if values.get('partner_id'):
            res['partner_id'] = values.get('partner_id')
        return res
