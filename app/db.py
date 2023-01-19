import sqlite3

conn = sqlite3.connect('webapp.db')

curs = conn.cursor()

#users(id, name, password)
#curs.execute(
#    'CREATE TABLE users(id INTEGER PRIMARY KEY AUTOINCREMENT, name String, password String)'
#)

#conn.commit()

#curs.execute(
#    'INSERT INTO users(name, password) values("admin", "password")'
#)
#conn.commit()

#curs.execute(
#    'INSERT INTO users(name, password) values("iino", "hcs2023")'
#)
#conn.commit()

#books(title, author, year)
#curs.execute(
#    'CREATE TABLE books(title STRING PRIMARY KEY, author String, year int)'
#)
#conn.commit()

#curs.execute(
#    'INSERT INTO books(title, author, year) values("セキュリティエンジニアのための機械学習", "オライリージャパン", 1996)'
#)
#conn.commit()

curs.execute(
    'SELECT * FROM books;'
)
#db = curs.fetchall()

#for i in db:
#    print(i[0])
curs.close()
conn.close()
