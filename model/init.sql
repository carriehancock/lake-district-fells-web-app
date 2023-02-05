DROP TABLE IF EXISTS entries; CREATE TABLE entries(id VARCHAR(50) NOT NULL PRIMARY KEY, fellGroup VARCHAR(100) NOT NULL, fellSubGroup VARCHAR(100) NOT NULL, fellName VARCHAR(100) NOT NULL, fellHeight VARCHAR(100) NOT NULL, gridReference VARCHAR(100) NOT NULL, dateClimbed DATE);

INSERT INTO entries (id,fellGroup, fellSubGroup, fellName, fellHeight, gridReference, dateClimbed
) VALUES (
"SKD-1",
"Northern Fells", 
"Skiddaw Group",
"Skiddaw",
"931",
"NY260290",
"2023/01/31"
);