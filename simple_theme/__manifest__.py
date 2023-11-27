# -*- coding: utf-8 -*-
{
    "name": "Simple Theme",
    "summary": "Simple Theme",
    "author": "shaojun",
    "website": "https://odooiot.com",
    "category": "Tools",
    "version": "15.0.0.1",
    "depends": ["base", "web"],
    'assets': {
        'web.assets_backend': [
            'simple_theme/static/src/js/libs/nice_admin/style.css',
            'simple_theme/static/src/js/action_container.js',
            'simple_theme/static/src/js/web_client.js',
            'simple_theme/static/src/js/dropdown_item.js',
            'simple_theme/static/src/js/dropdown.js',
            'simple_theme/static/src/js/navbar.js',

        ],
        'web.assets_qweb': [
            'simple_theme/static/src/js/dropdown.xml',
            'simple_theme/static/src/xml/webclient.xml',
            'simple_theme/static/src/js/dropdown_item.xml',
            'simple_theme/static/src/js/navbar.xml',

        ],
    },
    'bootstrap': True,
}
