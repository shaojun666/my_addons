{
    "name": "No Seconds Datetime",
    "summary": "No Seconds Datetime",
    "author": "shaojun",
    "website": "https://odooiot.com",
    "category": "Tools",
    'description': """
        Usage:
            <field name="my_datetime_field" widget="no_seconds_datetime" />
    """,
    "version": "14.0.0.1",
    "depends": ["base", "web"],
    "data": [
        "views/assets.xml",
    ],
    'bootstrap': True,
}
