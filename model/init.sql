DROP TABLE IF EXISTS Mountains; CREATE TABLE Mountains(id int AUTO_INCREMENT PRIMARY KEY, mountainName VARCHAR(100) NOT NULL, heightm VARCHAR(100) NOT NULL, heightft VARCHAR(100) NOT NULL, country VARCHAR (25) NOT NULL, gridReference VARCHAR(100) NOT NULL, dateClimbed DATE, infoText VARCHAR(1500), img VARCHAR(500) NOT NULL,  userEntry VARCHAR (100), mapLink VARCHAR(500), infoShort VARCHAR (1000));

/*Scotland Mountains*/

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference, infoText, img, mapLink, infoShort
) VALUES (
"Ben Nevis", 
"1345",
"4411",
"Scotland",
"NN166712",
"The routes to Ben Nevis's summit are numerous. The obvious choice for most visitors is the Mountain Track, which heads up a gentle incline from Glen Nevis, twisting and turning as it climbs.For the more adventurous hillwalker, Ben Nevis is connected to its eastern neighbour, Carn Mor Dearg via the fabulous Carn Mor Dearg arete (often referred to as the CMD arete) and this makes for a fine introduction to rock-scrambling in Scotland. This route can be stretched to include the Munro summits of Aonach Mor and Aonach Beag, together referred to as the Lochaber 4000s.",
"https://img.atlasobscura.com/VzouJMH91MLbmvs8jHOmV6bEBLl_yT_vLau09tgtd20/rt:fit/h:390/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy8yZGJi/N2M1YTEyYmU0OWFh/NzZfQmVuX05ldmlz/X3NvdXRoX2ZhY2Uu/anBn.jpg",
"https://www.google.com/maps/place/Ben+Nevis/@56.7968554,-5.0210601,3481m/data=!3m1!1e3!4m6!3m5!1s0x488932978af1e5f3:0x6e948b77ffad9a71!8m2!3d56.7968571!4d-5.0035505!16zL20vMDFrNmM",
"Ben Nevis is the highest mountain in the UK and most people head up this huge mountain via the gently climbing 'Mountain Track'. But look around the other side, the North Face has much more to offer."
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference, infoText, img, mapLink, infoShort
) VALUES (
"Ben Macdui [Beinn Macduibh]", 
"1309",
"4295",
"Scotland",
"NN988989",
 "It’s the second highest mountain in the UK and provides unbeatable views over the Cairngorm mountains, so how do you go about walking Ben Macdui? Firstly, don’t be put off by the size of it. Although it’s a decent walk – around 5 hours – it’s not hugely strenuous and you certainly won’t be scrambling at the top.",
"https://www.wiredforadventure.com/wp-content/uploads/2018/09/ben-macdui-cairngorms-scotland-1.jpeg",
"https://www.google.com/maps/place/Ben+Macdui/@57.0710066,-3.7346153,15299m/data=!3m1!1e3!4m6!3m5!1s0x4885f0c82878e349:0x1d0c681aff302730!8m2!3d57.0703611!4d-3.6691111!16zL20vMDQxX3I1",
"Most readily accessed from the north and never to be under-estimated in winter."
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference, img, infoText, mapLink, infoShort
) VALUES (
"Braeriach", 
"1296",
"4252",
"Scotland",
"NN953999",
"https://www.walkhighlands.co.uk/cairngorms/1_24/1_24_4l.JPG",
"In the northern Cairngorms, Braeriach is a vast sprawling mountain, its huge summit plateau sitting above several coires and lochans. Braeriach's summit rests above the massive cliffs of Coire Bhrochain, where snow lies later than just about anywhere else in Scotland. Wreckage from two crashed WWII planes can still be found on eastern slopes of Braeriach.",
"https://www.google.com/maps/place/Braeriach/@57.1091759,-3.9807937,66687m/data=!3m1!1e3!4m6!3m5!1s0x4885f76b0e3749cd:0xd59b2fe2ee4de479!8m2!3d57.0781388!4d-3.7285555!16zL20vMDRoMnhs",
"In the Cairngorms, west of the Lairig Ghru, Braeriach is UK's third highest mountain. Its summit rests above massive cliffs of Coire Bhrochain, where snow lies later than just about anywhere else in Scotland."
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference, img
) VALUES (
"Cairn Toul", 
"1291",
"4236",
"Scotland",
"NN963972",
"https://sp-images.summitpost.org/1071112.JPG?auto=format&fit=max&ixlib=php-2.1.1&q=35&w=1024&s=4cee4754ef376db01b34b992bbb3b06d"
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference, img
) VALUES (
"Aonach Beag", 
"1234",
"4049",
"Scotland",
"NN939982",
"https://www.walkhighlands.co.uk/cairngorms/2_30/2_30_4l.JPG"
);

/*England Mountains*/

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference, infoText, img
) VALUES (
"Scafell Pike", 
"978",
"3209",
"England",
"NY215072",
"Highest mountain in England",
"https://www.thebmc.co.uk/Handlers/ArticleImageHandler.ashx?id=8278&index=0&w=605&h=434"
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference, img
) VALUES (
"Scafell", 
"964",
"3162",
"England",
"NY206064",
"https://upload.wikimedia.org/wikipedia/commons/4/43/Scafell_massif_enclosures.jpg"
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference, img
) VALUES (
"Helvellyn", 
"950",
"3117",
"England",
"NY342151", 
"https://kittiaroundtheworld.com/wp-content/uploads/2021/08/Helvellyn-Striding-Edge-and-Swirral-Edge.jpg"
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference, img
) VALUES (
"Broad Crag", 
"935",
"3069",
"England",
"NY218075", 
"https://3.bp.blogspot.com/-T0BqvEa38Pc/WMMHlPUQchI/AAAAAAACAMk/dsj7Va3BoR0-TkPeS27EK7Ko-oNLsovlACLcB/s1600/IMG_0597.JPG"
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference, img
) VALUES (
"Skiddaw", 
"931",
"3117",
"England",
"NY260290", 
"http://english-lake-district.info/skiddaw/images/skiddaw-summit-ridge.jpg"
);


/*Wales Mountains*/

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference, infoText, img
) VALUES (
"Snowdon", 
"1085",
"3560",
"Wales",
"SH609543",
"Highest mountain in Wales",
"https://www.muchbetteradventures.com/magazine/content/images/2019/06/13131934/view-from-snowdon-summit-1600x1067.jpeg"
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference, img
) VALUES (
"Crib y Ddysgl", 
"1065",
"3495",
"Wales",
"SH610551",
"https://2.bp.blogspot.com/-d42VQ5r9Lig/V0dieqC87II/AAAAAAAAbns/Jbk9KrBVEhYUpr672KM63FiSl6Tpzxa5ACLcB/s1600/IMG_2995.JPG"
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference, img
) VALUES (
"Carnedd Llewelyn", 
"1064",
"3491",
"Wales",
"SH683643",
"https://thewanderingwildflower.co.uk/wp-content/uploads/2022/03/Pen-Yr-Ole-Wen-Carnedd-Dafydd-and-Carnedd-Llewelyn-Carneddau-Walk-Snowdonia-Ogwen-Valley-Walks-from-The-Wandering-Wildflower-14-1024x768.jpg?ezimgfmt=rs:371x278/rscb1/ngcb1/notWebP"
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference, img
) VALUES (
"Carnedd Dafydd", 
"1044",
"3425",
"Wales",
"SH662630",
"https://www.snowdoniaguide.com/images/images_6/carnedd%20dafydd_2.jpg"
);

INSERT INTO Mountains (mountainName, heightm, heightft, country, gridReference, img
) VALUES (
"Glyder Fawr", 
"1001",
"3284",
"Wales",
"SH642579",
"https://upload.wikimedia.org/wikipedia/commons/5/5d/Glyder_Fawr_rocks.JPG"
);