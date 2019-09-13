INSERT INTO users
(username,password, profile_pic)
VALUES($1,$2,'https://i.pinimg.com/236x/c2/7c/27/c27c277903bc87b329a29005a1a371b2--funny-facebook-picture-collection.jpg')RETURNING id,username,profile_pic