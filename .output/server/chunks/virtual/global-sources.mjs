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
            },
            {
                "loc": "/words/allegory",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/bucolic",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/cinephile",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/ephemeral",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/ethereal",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/memento",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/nostalgia",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/eternal",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/petrichor",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/zenith",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/shrinkflation",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/colorism",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/essential",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/peripheral",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/serendipity",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/mediocrity",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/epiphany",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/epistemology",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/adversity",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/mellifluous",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/vellichor",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/luminous",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/fortuity",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/bibliophilia",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/quarantine",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/salary",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/robot",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/barbecue",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/boycott",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/soccer",
                "changefreq": "weekly"
            },
            {
                "loc": "/words/sumud",
                "changefreq": "weekly"
            },
            {
                "loc": "/authors/abraham-lincoln",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/ahmet-hamdi-tanpinar",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/albert-camus",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/albert-einstein",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/alexander-graham-bell",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/alexander-pushkin",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/amelia-barr",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/anton-chekhov",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/aristotle",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/arthur-schopenhauer",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/baruch-spinoza",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/benjamin-franklin",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/bernard-baruch",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/bob-marley",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/bruce-lee",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/buddha",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/cenap-sahabettin",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/charles-dickens",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/charlie-chaplin",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/domenico-fetti-archimedes",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/edward-elgar",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/elbert-hubbard",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/eleanor-roosevelt",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/ernest-hemingway",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/fidel-castro",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/frank-sinatra",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/franz-kafka",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/frida-kahlo",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/friedrich-nietzsche",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/fyodor-dostoevsky",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/galileo-galilei",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/george-orwell",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/george-washington",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/guy-de-maupassant",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/helen-keller",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/henry-ford",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/herbert-simon",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/hermann-hesse",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/honore-de-balzac",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/immanuel-kant",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/isaac-newton",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/jack-london",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/jane-austen",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/jean-jacques-rousseau",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/jean-paul-sartre",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/jim-rohn",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/johann-wolfgang-von-goethe",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/john-f-kennedy",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/john-steinbeck",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/josef-stalin",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/jules-verne",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/julius-caesar",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/karl-marx",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/leo-tolstoy",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/leonardo-da-vinci",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/ludwig-van-beethoven",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/malcolm-x",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/mamatha-gandhi",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/marie-curie",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/mark-twain",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/martin-luther-king-jr",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/max-weber",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/maxim-gorky",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/maya-angelou",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/michel-de-montaigne",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/moliere",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/muhammad-ali",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/namik-kemal",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/napoleon-hill",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/nazim-hikmet",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/nelson-mandela",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/nikola-tesla",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/nikolai-gogol",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/orhan-veli-kanik",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/pablo-neruda",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/pablo-picasso",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/plato",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/ralph-waldo-emerson",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/rene-descartes",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/robert-frost",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/salvador-dali",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/sigmund-freud",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/socrates",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/stephen-hawking",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/steve-jobs",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/tevfik-fikret",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/thomas-edison",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/victor-hugo",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/vincent-van-gogh",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/virginia-woolf",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/voltaire",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/walt-disney",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/walt-whitman",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/william-faulkner",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/william-shakespeare",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/winston-churchill",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/wolfgang-amadeus-mozart",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/yahya-kemal-beyatli",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/yunus-emre",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/isaac-asimov",
                "changefreq": "monthly"
            },
            {
                "loc": "/authors/mustafa-kemal-ataturk",
                "changefreq": "monthly"
            },
            {
                "loc": "/preverbs/a-watched-pot-never-boils",
                "changefreq": "monthly"
            },
            {
                "loc": "/preverbs/every-cloud-has-a-silver-lining",
                "changefreq": "monthly"
            },
            {
                "loc": "/preverbs/the-pen-is-mightier-than-the-sword",
                "changefreq": "monthly"
            },
            {
                "loc": "/preverbs/the-early-bird-catches-the-worm",
                "changefreq": "monthly"
            },
            {
                "loc": "/preverbs/you-cant-judge-a-book-by-its-cover",
                "changefreq": "monthly"
            },
            {
                "loc": "/preverbs/all-that-glitters-is-not-gold",
                "changefreq": "monthly"
            },
            {
                "loc": "/preverbs/strike-while-the-iron-is-hot",
                "changefreq": "monthly"
            },
            {
                "loc": "/preverbs/you-reap-what-you-sow",
                "changefreq": "monthly"
            },
            {
                "loc": "/preverbs/too-many-cooks-spoil-the-broth",
                "changefreq": "monthly"
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
                "lastmod": "2025-10-06T00:37:48.618Z"
            },
            {
                "loc": "/words",
                "lastmod": "2025-10-06T14:55:13.549Z"
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
