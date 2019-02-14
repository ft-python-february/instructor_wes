from random import randint

form = {
    "location": "cave"
}

# print(form['location'])

locationMap = {
    "cave": randint(2, 5),
    "house": randint(10, 20),
    "casino": randint(-50, 50)
}

# print(locationMap['casino'])

# curr_location = form['location']
# print(locationMap[curr_location])

# print(locationMap[form['location']])