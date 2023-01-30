DROP TABLE IF EXISTS entries;

CREATE TABLE entries (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  description VARCHAR(500) NOT NULL,
  image VARCHAR(500) NOT NULL,
  location VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO entries (
  title,
  description,
  image,
  location
) VALUES (
  'Summer trip', 
  'It was so fun :D',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Verschneiter_Waldweg_am_Bonstapel_in_Vlotho.jpg/1200px-Verschneiter_Waldweg_am_Bonstapel_in_Vlotho.jpg',
  'Andorra'
);