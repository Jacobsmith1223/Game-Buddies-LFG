CREATE TABLE posts(
id SERIAL PRIMARY KEY,
thread_id INTEGER REFERENCES threads(id),
title TEXT,
content TEXT,
image TEXT 
)