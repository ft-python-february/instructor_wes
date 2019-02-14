def create_checkerboard(x, y):
    checkerboard = []
    row = []
    for i in range(x):
        row.append(None)
    for i in range(y):
        checkerboard.append(row)

    for i in range(len(checkerboard)):
        for j in range(len(checkerboard[i])):
            if i % 2 == 0:
                if j % 2 == 0:
                    checkerboard[i][j] = "red"
                else:
                    checkerboard[i][j] = "black"
            else:
                if j % 2 == 0:
                    checkerboard[i][j] = "red"
                else:
                    checkerboard[i][j] = "black"
    return checkerboard


print(create_checkerboard(3, 5))