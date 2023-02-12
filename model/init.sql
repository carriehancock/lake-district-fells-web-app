DROP TABLE IF EXISTS Scotland; CREATE TABLE Mountains(id int AUTO_INCREMENT PRIMARY KEY, mountainName VARCHAR(100) NOT NULL, heightm VARCHAR(100) NOT NULL, heightft VARCHAR(100) NOT NULL, country VARCHAR (25) NOT NULL, gridReference VARCHAR(100) NOT NULL, dateClimbed DATE, infoText VARCHAR(500), userEntry VARCHAR (100));

/*Scotland Mountains*/

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference, infoText
) VALUES (
"Ben Nevis", 
"1345",
"4411",
"Scotland",
"NN166712",
"Highest mountain in Scotland and the UK"

);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference
) VALUES (
"Ben Macdui [Beinn Macduibh]", 
"1309",
"4295",
"Scotland",
"NN988989"
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference
) VALUES (
"Braeriach", 
"1296",
"4252",
"Scotland",
"NN953999"
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference
) VALUES (
"Cairn Toul", 
"1291",
"4236",
"Scotland",
"NN963972"
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference
) VALUES (
"Aonach Beag", 
"1234",
"4049",
"Scotland",
"NN939982"
);

/*England Mountains*/

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference, infoText
) VALUES (
"Scafell Pike", 
"978",
"3209",
"England",
"NY215072",
"Highest mountain in England"
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference
) VALUES (
"Scafell", 
"964",
"3162",
"England",
"NY206064"
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference
) VALUES (
"Helvellyn", 
"950",
"3117",
"England",
"NY342151"
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference
) VALUES (
"Broad Crag", 
"935",
"3069",
"England",
"NY218075"
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference
) VALUES (
"Skiddaw", 
"931",
"3117",
"England",
"NY260290"
);


/*Wales Mountains*/

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference, infoText
) VALUES (
"Snowdon", 
"1085",
"3560",
"Wales",
"SH609543",
"Highest mountain in Wales"
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference
) VALUES (
"Crib y Ddysgl", 
"1065",
"3495",
"Wales",
"SH610551"
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference
) VALUES (
"Carnedd Llewelyn", 
"1064",
"3491",
"Wales",
"SH683643"
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference
) VALUES (
"Carnedd Dafydd", 
"1044",
"3425",
"Wales",
"SH662630"
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference
) VALUES (
"Glyder Fawr", 
"1001",
"3284",
"Wales",
"SH642579"
);