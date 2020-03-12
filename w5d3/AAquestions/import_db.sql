PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL

);

DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  author_id INTEGER NOT NULL,
  
  FOREIGN KEY (author_id) REFERENCES users(id)
);

DROP TABLE IF EXISTS questions_follows;

CREATE TABLE questions_follows (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,

  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

DROP TABLE IF EXISTS replies;

CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  parent_reply_id INTEGER,
  author_reply_id INTEGER NOT NULL,
  body TEXT NOT NULL,

  FOREIGN KEY (parent_reply_id) REFERENCES replies(id),
  FOREIGN KEY (author_reply_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)

);


DROP TABLE IF EXISTS question_likes;

CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO
  users (fname,lname)
VALUES
  ('Peter', 'Koe'),
  ('Pedro', 'Siqueira'),
  ('Dwight', 'Schrute'),
  ('Michael', 'Scott');

INSERT INTO
  questions (title,body,author_id)
VALUES
  ('Lunch?', 'When is lunch.... I''m hungry',
    (SELECT id FROM users WHERE fname = 'Peter'AND lname = 'Koe') ),
  ('sleep?', 'When do we leave... I''m tired!',
    (SELECT id FROM users WHERE fname = 'Pedro'AND lname = 'Siqueira') );


INSERT INTO
  replies (question_id,parent_reply_id,author_reply_id,body)
VALUES
((SELECT id FROM questions WHERE title = 'sleep?' ), NULL,
  (SELECT id FROM users WHERE fname = 'Peter'AND lname = 'Koe'), 'wow thats a really good question');

INSERT INTO
  replies (question_id,parent_reply_id,author_reply_id,body)
VALUES
  ((SELECT id FROM questions WHERE title = 'sleep?' ),(SELECT id FROM replies WHERE body ='wow thats a really good question'),
(SELECT id FROM users WHERE fname = 'Pedro'AND lname = 'Siqueira'), 'really dude, true');


INSERT INTO
  questions_follows (question_id,user_id)
VALUES
  ((SELECT id FROM questions WHERE title = 'sleep?' ),
    (SELECT id FROM users WHERE fname = 'Peter'AND lname = 'Koe')),
  ((SELECT id FROM questions WHERE title = 'Lunch?' ),
    (SELECT id FROM users WHERE fname = 'Pedro'AND lname = 'Siqueira')),
((SELECT id FROM questions WHERE title = 'Lunch?' ),
    (SELECT id FROM users WHERE fname = 'Peter'AND lname = 'Koe'));

INSERT INTO
  question_likes (user_id, question_id)

VALUES

((SELECT id FROM users WHERE fname = 'Peter'AND lname = 'Koe'),
  (SELECT id FROM questions WHERE title = 'sleep?' )),
((SELECT id FROM users WHERE fname = 'Pedro'AND lname = 'Siqueira'),
  (SELECT id FROM questions WHERE title = 'Lunch?' )),
  ((SELECT id FROM users WHERE fname = 'Peter'AND lname = 'Koe'),
  (SELECT id FROM questions WHERE title = 'Lunch?' ));