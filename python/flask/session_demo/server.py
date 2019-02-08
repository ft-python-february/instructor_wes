from flask import Flask, redirect, render_template, session, request

app = Flask(__name__)
app.secret_key = "asdf;lkajsdfkdlkjsdf"

@app.route('/')
def index():
    if 'thing' not in session:
        session['thing'] = "This is from the index!"

    print(session['thing'])
    return render_template('index.html')

@app.route('/other')
def other():
    session['thing'] = "This is in session!"
    return render_template('other.html')

if __name__ == "__main__":
    app.run(debug=True)