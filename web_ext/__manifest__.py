# -*- coding: utf-8 -*-
{
    "name": "Web Extend",
    "summary": "Web Extend",
    "author": "shaojun",
    "website": "https://odooiot.com",
    "category": "Tools",
    "version": "14.0.0.1",
    "depends": ["base", "web"],
    "qweb": [
        "static/src/xml/base.xml",
    ],
    'data': [
        "views/assets.xml",
        "views/webclient_templates.xml",
    ],
    'bootstrap': True,
}
