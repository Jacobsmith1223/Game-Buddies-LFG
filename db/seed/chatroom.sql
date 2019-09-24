CREATE TABLE chatroom (
id SERIAL PRIMARY KEY,
post_id INTEGER REFERENCES posts(id),
group_name TEXT,
message TEXT
)