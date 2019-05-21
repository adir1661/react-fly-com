'use strict';

module.exports.data = async (event) => {

    return {
        statusCode: 200,
        body: JSON.stringify({
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
            },
            message: 'Go Serverless v1.0! Your function executed successfully!',
            input: event
        }, null, 2),
    };
    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
module.exports.search = async (event) => {
    let obj = JSON.stringify({
        "antennas": [
            {
                "address": "dfdfd",
                "reports": [
                    [{"id": "title", "name": "the april problem"},
                        {"id": "date", "name": "29.4.2019"},
                        {"id": "category", "name": "winter"},
                        {"id": "img", "name": "assets/img/items/2.jpg"},
                        {
                            "id": "antenna-intergity", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "the antenna power is very low"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "cabels-integrity", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "the cable is tattered"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "connectors-tightness", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "unwanted-cabels", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "monitor-lightness", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "blocking", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "stickers", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "some of the stickers are broken"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        }],
                    [{"id": "title", "name": "the march is good"},
                        {"id": "date", "name": "29.3.2019"},
                        {"id": "category", "name": "winter"},
                        {"id": "img", "name": "assets/img/items/2.jpg"},
                        {
                            "id": "antenna-intergity", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "the antenna power is very low"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "cabels-integrity", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "the cable is tattered"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "connectors-tightness", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "unwanted-cabels", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "monitor-lightness", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "blocking", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "stickers", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "some of the stickers are broken"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        }],
                    [{"id": "title", "name": "the february is good"},
                        {"id": "date", "name": "29.3.2019"},
                        {"id": "category", "name": "winter"},
                        {"id": "img", "name": "assets/img/items/2.jpg"},
                        {
                            "id": "antenna-intergity", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "the antenna power is very low"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "cabels-integrity", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "the cable is tattered"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "connectors-tightness", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "unwanted-cabels", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "monitor-lightness", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "blocking", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "stickers", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "some of the stickers are broken"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        }]
                ]
            },
            {
                "address": "dfdfd",
                "reports": [
                    [{"id": "title", "name": "the april problem"},
                        {"id": "date", "name": "29.4.2019"},
                        {"id": "category", "name": "winter"},
                        {"id": "img", "name": "assets/img/items/2.jpg"},
                        {
                            "id": "antenna-intergity", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "the antenna power is very low"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "cabels-integrity", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "the cable is tattered"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "connectors-tightness", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "unwanted-cabels", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "monitor-lightness", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "blocking", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "stickers", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "some of the stickers are broken"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        }],
                    [{"id": "title", "name": "the march is good"},
                        {"id": "date", "name": "29.3.2019"},
                        {"id": "category", "name": "winter"},
                        {"id": "img", "name": "assets/img/items/2.jpg"},
                        {
                            "id": "antenna-intergity", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "the antenna power is very low"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "cabels-integrity", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "the cable is tattered"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "connectors-tightness", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "unwanted-cabels", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "monitor-lightness", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "blocking", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "stickers", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "some of the stickers are broken"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        }],
                    [{"id": "title", "name": "the february is good"},
                        {"id": "date", "name": "29.3.2019"},
                        {"id": "category", "name": "winter"},
                        {"id": "img", "name": "assets/img/items/2.jpg"},
                        {
                            "id": "antenna-intergity", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "the antenna power is very low"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "cabels-integrity", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "the cable is tattered"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "connectors-tightness", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "unwanted-cabels", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "monitor-lightness", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "blocking", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "stickers", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "some of the stickers are broken"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        }]
                ]
            },
            {
                "address": "dfdfd", "reports": [
                    [{"id": "title", "name": "the april problem"},
                        {"id": "date", "name": "29.4.2019"},
                        {"id": "category", "name": "winter"},
                        {"id": "img", "name": "assets/img/items/2.jpg"},
                        {
                            "id": "antenna-intergity", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "the antenna power is very low"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "cabels-integrity", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "the cable is tattered"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "connectors-tightness", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "unwanted-cabels", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "monitor-lightness", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "blocking", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "stickers", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "some of the stickers are broken"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        }],
                    [{"id": "title", "name": "the march is good"},
                        {"id": "date", "name": "29.3.2019"},
                        {"id": "category", "name": "winter"},
                        {"id": "img", "name": "assets/img/items/2.jpg"},
                        {
                            "id": "antenna-intergity", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "the antenna power is very low"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "cabels-integrity", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "the cable is tattered"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "connectors-tightness", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "unwanted-cabels", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "monitor-lightness", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "blocking", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "stickers", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "some of the stickers are broken"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        }],
                    [{"id": "title", "name": "the february is good"},
                        {"id": "date", "name": "29.3.2019"},
                        {"id": "category", "name": "winter"},
                        {"id": "img", "name": "assets/img/items/2.jpg"},
                        {
                            "id": "antenna-intergity", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "the antenna power is very low"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "cabels-integrity", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "the cable is tattered"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "connectors-tightness", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "unwanted-cabels", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "monitor-lightness", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "blocking", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "good"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        },
                        {
                            "id": "stickers", "name": [
                                {"id": "status", "name": "stable"},
                                {"id": "issue-num", "name": 1243},
                                {"id": "describle", "name": "some of the stickers are broken"},
                                {"id": "img", "name": "assets/img/antenna5.jpg"},
                                {"id": "rating", "name": 57}
                            ]
                        }]
                ]
            }
            ]
    });
    obj = JSON.parse(obj);
    //console.log(obj.antennas[0].reports[0][1].name);
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
        },
        body: JSON.stringify({
            message: obj,
            input: event
        }, null, 2),
    };
}

exports.database = (event, context, callback) => {
    console.log(JSON.stringify(event, null, 2));
    event.Records.forEach(function (record) {
        console.log(record.eventID);
        console.log(record.eventName);
        console.log('DynamoDB Record: %j', record.dynamodb);
    });
    callback(null, "message");
};

