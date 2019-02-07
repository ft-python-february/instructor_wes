from flask import Flask, render_template, redirect, request

app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/other')
def other():
  return render_template('other.html')

@app.route('/process', methods=['POST'])
def process():
  print(request.form)
  return redirect('/other')

if __name__ == "__main__":
  app.run(debug=True)