const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [
            {
                "loc": "/",
                "priority": 1
            },
            {
                "loc": "/authors",
                "priority": 0.8
            },
            {
                "loc": "/words",
                "priority": 0.8
            },
            {
                "loc": "/preverbs",
                "priority": 0.8
            }
        ],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "@nuxt/content@v3:urls",
            "description": "Generated from your markdown files.",
            "tips": [
                "Parsing the following collections: "
            ]
        },
        "fetch": "/__sitemap__/nuxt-content-urls.json",
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/about",
                "lastmod": "2025-10-05T03:56:55.320Z"
            },
            {
                "loc": "/",
                "lastmod": "2025-10-05T17:19:21.231Z"
            },
            {
                "loc": "/words",
                "lastmod": "2025-10-05T06:44:07.812Z"
            },
            {
                "loc": "/authors",
                "lastmod": "2025-10-05T05:51:25.538Z"
            },
            {
                "loc": "/preverbs",
                "lastmod": "2025-10-05T07:50:45.122Z"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
