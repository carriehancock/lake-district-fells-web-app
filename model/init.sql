DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
  id VARCHAR(10) NOT NULL,
  group VARCHAR(75) NOT NULL,
  sub_group VARCHAR(75) NOT NULL,
  fell_name VARCHAR(75) NOT NULL,
  fell_height VARCHAR(10) NOT NULL,
  grid_reference VARCHAR(15) NOT NULL,
  date_climbed DATE NOT NULL
);

INSERT INTO entries (
  id,
  group,
  sub_group,
  fell_name
  fell_height
  grid_reference
  date_climbed
) VALUES (
  'SKD-1'
  'Northern Fells', 
  'Skiddaw Group',
  'Skiddaw'
  '931'
  'NY260290'
  '31/01/2023'
);

