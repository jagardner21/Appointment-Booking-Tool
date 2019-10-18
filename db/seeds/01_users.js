exports.seed = function (knex) {
    return knex('users').del()
        .then(function () {
            return knex('users').insert([
                {
                  "name": "Lena Wooten",
                  "email": "lenawooten@zerbina.com",
                  "password": "c92e3dc99",
                  "created_at": "2019-07-04T05:52:07 +07:00"
                },
                {
                  "name": "Barlow Cobb",
                  "email": "barlowcobb@zerbina.com",
                  "password": "c95df86dd",
                  "created_at": "2014-04-29T04:54:40 +07:00"
                },
                {
                  "name": "Slater Best",
                  "email": "slaterbest@zerbina.com",
                  "password": "c9d6d2755",
                  "created_at": "2018-12-18T04:05:19 +07:00"
                },
                {
                  "name": "Herrera Reynolds",
                  "email": "herrerareynolds@zerbina.com",
                  "password": "c9e506226",
                  "created_at": "2019-10-08T08:15:46 +07:00"
                },
                {
                  "name": "Salazar Hill",
                  "email": "salazarhill@zerbina.com",
                  "password": "c9510915a",
                  "created_at": "2017-11-21T10:36:20 +07:00"
                },
                {
                  "name": "Wyatt Curry",
                  "email": "wyattcurry@zerbina.com",
                  "password": "c9fd105c6",
                  "created_at": "2016-11-08T06:24:20 +07:00"
                },
                {
                  "name": "Johnston Hubbard",
                  "email": "johnstonhubbard@zerbina.com",
                  "password": "c9a805568",
                  "created_at": "2018-03-21T05:37:28 +07:00"
                },
                {
                  "name": "Armstrong Bolton",
                  "email": "armstrongbolton@zerbina.com",
                  "password": "c974dc7ae",
                  "created_at": "2017-10-06T08:15:52 +07:00"
                },
                {
                  "name": "Simmons Tyler",
                  "email": "simmonstyler@zerbina.com",
                  "password": "c98cdd82d",
                  "created_at": "2018-07-07T05:11:20 +07:00"
                },
                {
                  "name": "Teri Whitfield",
                  "email": "teriwhitfield@zerbina.com",
                  "password": "c944e442c",
                  "created_at": "2017-09-16T10:33:23 +07:00"
                },
                {
                  "name": "Mcleod Long",
                  "email": "mcleodlong@zerbina.com",
                  "password": "c943dde2c",
                  "created_at": "2014-05-03T08:39:34 +07:00"
                },
                {
                  "name": "Colleen Castro",
                  "email": "colleencastro@zerbina.com",
                  "password": "c990b74cb",
                  "created_at": "2014-02-15T08:23:34 +07:00"
                },
                {
                  "name": "Lawanda Snider",
                  "email": "lawandasnider@zerbina.com",
                  "password": "c92dac75c",
                  "created_at": "2014-04-08T02:10:56 +07:00"
                },
                {
                  "name": "Alison Silva",
                  "email": "alisonsilva@zerbina.com",
                  "password": "c91a79ccb",
                  "created_at": "2014-06-02T03:23:53 +07:00"
                },
                {
                  "name": "Bryan Rojas",
                  "email": "bryanrojas@zerbina.com",
                  "password": "c9c60c004",
                  "created_at": "2015-12-29T12:20:44 +07:00"
                },
                {
                  "name": "Wilkinson Martin",
                  "email": "wilkinsonmartin@zerbina.com",
                  "password": "c90ae4a94",
                  "created_at": "2014-12-31T01:30:18 +07:00"
                },
                {
                  "name": "Rodriquez Booker",
                  "email": "rodriquezbooker@zerbina.com",
                  "password": "c9fd8a658",
                  "created_at": "2015-04-15T11:56:48 +07:00"
                },
                {
                  "name": "Elena Christian",
                  "email": "elenachristian@zerbina.com",
                  "password": "c9d9de986",
                  "created_at": "2018-05-25T01:55:54 +07:00"
                },
                {
                  "name": "Julia Gaines",
                  "email": "juliagaines@zerbina.com",
                  "password": "c92f34e79",
                  "created_at": "2015-06-29T03:48:43 +07:00"
                },
                {
                  "name": "Rose Patterson",
                  "email": "rosepatterson@zerbina.com",
                  "password": "c92201dde",
                  "created_at": "2016-10-23T10:35:10 +07:00"
                },
                {
                  "name": "Kaitlin Hughes",
                  "email": "kaitlinhughes@zerbina.com",
                  "password": "c91e608d9",
                  "created_at": "2016-03-08T09:15:08 +07:00"
                },
                {
                  "name": "Penelope Carrillo",
                  "email": "penelopecarrillo@zerbina.com",
                  "password": "c964b466c",
                  "created_at": "2016-02-03T02:56:51 +07:00"
                },
                {
                  "name": "Mavis Morris",
                  "email": "mavismorris@zerbina.com",
                  "password": "c9f5b7b3e",
                  "created_at": "2015-01-09T02:47:11 +07:00"
                },
                {
                  "name": "Lessie Yang",
                  "email": "lessieyang@zerbina.com",
                  "password": "c93a767e9",
                  "created_at": "2015-05-01T05:48:09 +07:00"
                },
                {
                  "name": "Courtney Lambert",
                  "email": "courtneylambert@zerbina.com",
                  "password": "c98d6acfa",
                  "created_at": "2019-03-05T02:22:33 +07:00"
                },
                {
                  "name": "Estes Joyner",
                  "email": "estesjoyner@zerbina.com",
                  "password": "c9825d1af",
                  "created_at": "2017-10-02T07:10:16 +07:00"
                },
                {
                  "name": "Susanna Quinn",
                  "email": "susannaquinn@zerbina.com",
                  "password": "c9a3f20dc",
                  "created_at": "2018-03-30T07:52:08 +07:00"
                },
                {
                  "name": "Patsy Sykes",
                  "email": "patsysykes@zerbina.com",
                  "password": "c91b04e91",
                  "created_at": "2019-02-26T12:43:06 +07:00"
                },
                {
                  "name": "Stark Ford",
                  "email": "starkford@zerbina.com",
                  "password": "c982a1601",
                  "created_at": "2015-06-11T01:45:14 +07:00"
                },
                {
                  "name": "Lolita Crane",
                  "email": "lolitacrane@zerbina.com",
                  "password": "c95fd73aa",
                  "created_at": "2016-11-05T05:43:26 +07:00"
                },
                {
                  "name": "Olsen Hurst",
                  "email": "olsenhurst@zerbina.com",
                  "password": "c976e716c",
                  "created_at": "2016-04-11T12:47:32 +07:00"
                },
                {
                  "name": "Tabatha Wilder",
                  "email": "tabathawilder@zerbina.com",
                  "password": "c911b006d",
                  "created_at": "2016-03-11T11:35:54 +07:00"
                },
                {
                  "name": "Joanne Callahan",
                  "email": "joannecallahan@zerbina.com",
                  "password": "c90ed3b1d",
                  "created_at": "2014-10-15T05:09:36 +07:00"
                },
                {
                  "name": "Garrett Rivas",
                  "email": "garrettrivas@zerbina.com",
                  "password": "c99fd8bce",
                  "created_at": "2016-12-13T03:07:18 +07:00"
                },
                {
                  "name": "Frye Mcfarland",
                  "email": "fryemcfarland@zerbina.com",
                  "password": "c9da3f845",
                  "created_at": "2014-01-09T10:05:40 +07:00"
                },
                {
                  "name": "Salinas Thomas",
                  "email": "salinasthomas@zerbina.com",
                  "password": "c91d5832f",
                  "created_at": "2014-06-29T08:08:32 +07:00"
                },
                {
                  "name": "Gibson Collier",
                  "email": "gibsoncollier@zerbina.com",
                  "password": "c908bf2f8",
                  "created_at": "2014-10-01T06:59:08 +07:00"
                },
                {
                  "name": "Ilene Walsh",
                  "email": "ilenewalsh@zerbina.com",
                  "password": "c95249aa0",
                  "created_at": "2018-06-14T08:01:15 +07:00"
                },
                {
                  "name": "Horn Byrd",
                  "email": "hornbyrd@zerbina.com",
                  "password": "c9f49ccbf",
                  "created_at": "2014-04-02T04:01:00 +07:00"
                },
                {
                  "name": "Katy Wise",
                  "email": "katywise@zerbina.com",
                  "password": "c9beb31b4",
                  "created_at": "2016-06-02T01:01:16 +07:00"
                },
                {
                  "name": "Caldwell Hunt",
                  "email": "caldwellhunt@zerbina.com",
                  "password": "c9d81e77c",
                  "created_at": "2019-08-22T04:53:16 +07:00"
                },
                {
                  "name": "Haney Morgan",
                  "email": "haneymorgan@zerbina.com",
                  "password": "c9013d476",
                  "created_at": "2014-04-17T08:43:32 +07:00"
                },
                {
                  "name": "Love Zamora",
                  "email": "lovezamora@zerbina.com",
                  "password": "c94e85c6f",
                  "created_at": "2015-03-04T04:33:42 +07:00"
                },
                {
                  "name": "Beach Paul",
                  "email": "beachpaul@zerbina.com",
                  "password": "c9627c73a",
                  "created_at": "2015-03-09T05:18:22 +07:00"
                },
                {
                  "name": "Caitlin Battle",
                  "email": "caitlinbattle@zerbina.com",
                  "password": "c9d27eb71",
                  "created_at": "2018-03-20T09:48:02 +07:00"
                },
                {
                  "name": "Herring Stafford",
                  "email": "herringstafford@zerbina.com",
                  "password": "c97657722",
                  "created_at": "2016-02-11T10:22:04 +07:00"
                },
                {
                  "name": "Hodges Conner",
                  "email": "hodgesconner@zerbina.com",
                  "password": "c93106048",
                  "created_at": "2015-05-24T06:14:29 +07:00"
                },
                {
                  "name": "Strickland Molina",
                  "email": "stricklandmolina@zerbina.com",
                  "password": "c9f4f915a",
                  "created_at": "2015-08-16T12:05:53 +07:00"
                },
                {
                  "name": "Bonner Tucker",
                  "email": "bonnertucker@zerbina.com",
                  "password": "c97879c38",
                  "created_at": "2019-06-26T12:33:33 +07:00"
                },
                {
                  "name": "Elva Herman",
                  "email": "elvaherman@zerbina.com",
                  "password": "c9c7ee806",
                  "created_at": "2019-03-13T04:58:28 +07:00"
                },
                {
                  "name": "Cecelia Hogan",
                  "email": "ceceliahogan@zerbina.com",
                  "password": "c97335e92",
                  "created_at": "2016-07-28T07:46:20 +07:00"
                },
                {
                  "name": "Strong Mcmillan",
                  "email": "strongmcmillan@zerbina.com",
                  "password": "c954e2396",
                  "created_at": "2014-10-22T09:15:11 +07:00"
                },
                {
                  "name": "Mcclain Cole",
                  "email": "mcclaincole@zerbina.com",
                  "password": "c994b1a48",
                  "created_at": "2019-05-02T04:04:51 +07:00"
                },
                {
                  "name": "Celia Sims",
                  "email": "celiasims@zerbina.com",
                  "password": "c99870bb4",
                  "created_at": "2018-05-28T01:49:30 +07:00"
                },
                {
                  "name": "Joan Sparks",
                  "email": "joansparks@zerbina.com",
                  "password": "c92ad16c3",
                  "created_at": "2018-02-13T03:26:14 +07:00"
                },
                {
                  "name": "Wagner Blackwell",
                  "email": "wagnerblackwell@zerbina.com",
                  "password": "c98fff93f",
                  "created_at": "2019-09-19T07:22:41 +07:00"
                },
                {
                  "name": "Beulah Larsen",
                  "email": "beulahlarsen@zerbina.com",
                  "password": "c9ea70e26",
                  "created_at": "2019-09-29T09:54:25 +07:00"
                },
                {
                  "name": "Cross Montgomery",
                  "email": "crossmontgomery@zerbina.com",
                  "password": "c9f0f41b9",
                  "created_at": "2015-04-16T12:43:25 +07:00"
                },
                {
                  "name": "Tameka Frank",
                  "email": "tamekafrank@zerbina.com",
                  "password": "c91b6b4ee",
                  "created_at": "2014-12-30T08:00:55 +07:00"
                },
                {
                  "name": "Horne Thompson",
                  "email": "hornethompson@zerbina.com",
                  "password": "c9da6d2ba",
                  "created_at": "2017-08-03T12:17:33 +07:00"
                },
                {
                  "name": "Lakisha Madden",
                  "email": "lakishamadden@zerbina.com",
                  "password": "c95130860",
                  "created_at": "2018-02-01T01:19:43 +07:00"
                },
                {
                  "name": "Delacruz Espinoza",
                  "email": "delacruzespinoza@zerbina.com",
                  "password": "c9b987d1a",
                  "created_at": "2015-06-07T07:17:13 +07:00"
                },
                {
                  "name": "Melissa Williamson",
                  "email": "melissawilliamson@zerbina.com",
                  "password": "c92dccb57",
                  "created_at": "2017-03-19T12:23:40 +07:00"
                },
                {
                  "name": "Fry Moran",
                  "email": "frymoran@zerbina.com",
                  "password": "c966b24cd",
                  "created_at": "2018-07-11T07:38:03 +07:00"
                },
                {
                  "name": "Eddie Lester",
                  "email": "eddielester@zerbina.com",
                  "password": "c9866bc29",
                  "created_at": "2014-03-16T10:05:52 +07:00"
                },
                {
                  "name": "Antonia Stephens",
                  "email": "antoniastephens@zerbina.com",
                  "password": "c97c8ab1e",
                  "created_at": "2015-08-08T01:25:06 +07:00"
                },
                {
                  "name": "Doreen Bowers",
                  "email": "doreenbowers@zerbina.com",
                  "password": "c9fae2723",
                  "created_at": "2014-02-28T04:40:33 +07:00"
                },
                {
                  "name": "Phelps Watson",
                  "email": "phelpswatson@zerbina.com",
                  "password": "c9d2e7384",
                  "created_at": "2017-09-07T03:47:24 +07:00"
                },
                {
                  "name": "Knowles Fitzgerald",
                  "email": "knowlesfitzgerald@zerbina.com",
                  "password": "c9ecdda78",
                  "created_at": "2014-03-06T09:02:42 +07:00"
                },
                {
                  "name": "Reid Stein",
                  "email": "reidstein@zerbina.com",
                  "password": "c95fb2180",
                  "created_at": "2017-12-22T05:31:32 +07:00"
                },
                {
                  "name": "Moss Bryan",
                  "email": "mossbryan@zerbina.com",
                  "password": "c92bf060c",
                  "created_at": "2014-06-17T03:30:57 +07:00"
                },
                {
                  "name": "Melba Wynn",
                  "email": "melbawynn@zerbina.com",
                  "password": "c9bb888fe",
                  "created_at": "2015-11-20T06:19:21 +07:00"
                },
                {
                  "name": "White Martinez",
                  "email": "whitemartinez@zerbina.com",
                  "password": "c9187e495",
                  "created_at": "2014-01-22T06:56:37 +07:00"
                },
                {
                  "name": "Gilbert Riggs",
                  "email": "gilbertriggs@zerbina.com",
                  "password": "c9fe8187f",
                  "created_at": "2017-07-14T04:58:33 +07:00"
                },
                {
                  "name": "Trisha Hopkins",
                  "email": "trishahopkins@zerbina.com",
                  "password": "c9cf60816",
                  "created_at": "2015-10-31T02:07:54 +07:00"
                },
                {
                  "name": "Cara Greene",
                  "email": "caragreene@zerbina.com",
                  "password": "c919a2039",
                  "created_at": "2018-09-26T01:20:16 +07:00"
                },
                {
                  "name": "Flynn Shannon",
                  "email": "flynnshannon@zerbina.com",
                  "password": "c90b4c7c7",
                  "created_at": "2017-09-27T07:39:43 +07:00"
                },
                {
                  "name": "Alford Pollard",
                  "email": "alfordpollard@zerbina.com",
                  "password": "c9d7e22b9",
                  "created_at": "2017-08-20T03:37:11 +07:00"
                },
                {
                  "name": "Mccarty Odom",
                  "email": "mccartyodom@zerbina.com",
                  "password": "c95909f69",
                  "created_at": "2018-05-28T12:54:25 +07:00"
                },
                {
                  "name": "Mercer Clay",
                  "email": "mercerclay@zerbina.com",
                  "password": "c9b35cd4b",
                  "created_at": "2016-09-19T10:07:35 +07:00"
                },
                {
                  "name": "Samantha Mckay",
                  "email": "samanthamckay@zerbina.com",
                  "password": "c9a443964",
                  "created_at": "2016-05-18T12:06:06 +07:00"
                },
                {
                  "name": "Lavonne Coffey",
                  "email": "lavonnecoffey@zerbina.com",
                  "password": "c96e54148",
                  "created_at": "2017-06-06T07:44:03 +07:00"
                },
                {
                  "name": "Sullivan Aguirre",
                  "email": "sullivanaguirre@zerbina.com",
                  "password": "c9947ecd7",
                  "created_at": "2014-12-15T08:08:20 +07:00"
                },
                {
                  "name": "Evans Hurley",
                  "email": "evanshurley@zerbina.com",
                  "password": "c9133af78",
                  "created_at": "2017-03-12T06:43:17 +07:00"
                },
                {
                  "name": "Bush Carpenter",
                  "email": "bushcarpenter@zerbina.com",
                  "password": "c9009a9a8",
                  "created_at": "2017-07-02T03:31:50 +07:00"
                },
                {
                  "name": "Julianne Nash",
                  "email": "juliannenash@zerbina.com",
                  "password": "c96a2c17a",
                  "created_at": "2014-09-05T08:02:45 +07:00"
                },
                {
                  "name": "Grimes David",
                  "email": "grimesdavid@zerbina.com",
                  "password": "c977c0fad",
                  "created_at": "2017-12-10T01:53:31 +07:00"
                },
                {
                  "name": "Glenda Murphy",
                  "email": "glendamurphy@zerbina.com",
                  "password": "c96a22350",
                  "created_at": "2017-03-01T11:34:12 +07:00"
                },
                {
                  "name": "Pam Roy",
                  "email": "pamroy@zerbina.com",
                  "password": "c983551f1",
                  "created_at": "2016-01-18T08:36:40 +07:00"
                },
                {
                  "name": "Richard Bowen",
                  "email": "richardbowen@zerbina.com",
                  "password": "c9be3b8e0",
                  "created_at": "2017-12-22T01:05:51 +07:00"
                },
                {
                  "name": "Inez Sherman",
                  "email": "inezsherman@zerbina.com",
                  "password": "c98bd39f3",
                  "created_at": "2016-03-28T02:53:17 +07:00"
                },
                {
                  "name": "Mann Donovan",
                  "email": "manndonovan@zerbina.com",
                  "password": "c90a21610",
                  "created_at": "2015-06-12T07:56:33 +07:00"
                },
                {
                  "name": "Kirsten Lawson",
                  "email": "kirstenlawson@zerbina.com",
                  "password": "c903df70a",
                  "created_at": "2017-09-17T06:27:07 +07:00"
                },
                {
                  "name": "Mcknight Reid",
                  "email": "mcknightreid@zerbina.com",
                  "password": "c955823d3",
                  "created_at": "2014-10-05T08:57:38 +07:00"
                },
                {
                  "name": "Banks Sanders",
                  "email": "bankssanders@zerbina.com",
                  "password": "c97ee24f3",
                  "created_at": "2018-02-22T09:00:48 +07:00"
                },
                {
                  "name": "Sofia Rowland",
                  "email": "sofiarowland@zerbina.com",
                  "password": "c92c4ba4b",
                  "created_at": "2018-02-13T03:19:21 +07:00"
                },
                {
                  "name": "Bessie Davidson",
                  "email": "bessiedavidson@zerbina.com",
                  "password": "c96b57927",
                  "created_at": "2017-09-15T03:00:54 +07:00"
                },
                {
                  "name": "Jeanine Dudley",
                  "email": "jeaninedudley@zerbina.com",
                  "password": "c9704764e",
                  "created_at": "2015-08-05T11:07:57 +07:00"
                },
                {
                  "name": "Angelina Mack",
                  "email": "angelinamack@zerbina.com",
                  "password": "c9b674eb7",
                  "created_at": "2016-06-04T03:23:34 +07:00"
                },
                {
                  "name": "Yvonne Knowles",
                  "email": "yvonneknowles@zerbina.com",
                  "password": "c9a82208a",
                  "created_at": "2016-01-31T09:29:15 +07:00"
                }
              ])
        })
}