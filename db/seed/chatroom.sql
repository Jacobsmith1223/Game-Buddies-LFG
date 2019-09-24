CREATE TABLE chatroom (
id SERIAL PRIMARY KEY,
post_id INTEGER REFERENCES posts(id),
users_id INTEGER REFERENCES users(id),
message TEXT
)