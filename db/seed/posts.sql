CREATE TABLE posts(
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(id),
title TEXT,
content TEXT,
image TEXT 
)