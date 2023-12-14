# -*- coding: utf-8 -*-
{
    "name": "Web Extend",
    "summary": "Web Extend",
    "author": "shaojun",
    "website": "https://odooiot.com",
    "category": "Tools",
    "version": "16.0.0.1",
    "depends": ["base", "web"],
    "data": [
        "views/webclient_templates.xml",
    ],
    'assets': {
        'web.assets_backend': [
            'web_ext/static/src/js/user_menu.js',
            'web_ext/static/src/js/webclient.js',
        ],
    },
    'bootstrap': True,
}
