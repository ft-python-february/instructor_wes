from flask import Flask, request, render_template, redirect
from mysqlconnection import connectToMySQL

app = Flask(__name__)
SCHEMA = 'demo_users'

@app.route('/')
def index():
    db = connectToMySQL(SCHEMA)
    # What type of data is my query going to return?
    users_list = db.query_db('SELECT * FROM users;')
    return render_template('index.html', users=users_list)

@app.route('/users/create', methods=['POST'])
def create_user():
    db = connectToMySQL(SCHEMA)
    query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (%(first)s, %(last)s, %(email)s, %(pw)s, NOW(), NOW());"
    data = {
        'first': request.form['first_name'],
        'last': request.form['last_name'],
        'email': request.form['email'],
        'pw': request.form['password'],
    }
    db.query_db(query, data)
    return redirect('/')

if __name__ == "__main__":
    app.run(debug=True)
