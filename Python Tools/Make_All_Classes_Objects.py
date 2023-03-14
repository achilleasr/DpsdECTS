import pandas


df = pandas.read_excel('all.xlsx')
eks = 1
'''
for i in range(92):
    if(df.iloc[i,0] == "Τίτλος"):
        eks += 1
    else:
        str1 = "lesson = { "
        str1 += "name: '" + df.iloc[i,0] +"' ,"
        str1 += "type: '" + df.iloc[i,2] +"' ,"
        str1 += "ects: '" + str(df.iloc[i,4]) +"' ,"
        str1 += "semester: '" + str(eks) +"' ,"
        str1 += "}; lessons.push(lesson);"
        print(str1)
'''

for i in range(92):
    if(df.iloc[i,0] == "Τίτλος"):
        eks += 1
    else:
        str1 = "{ "
        str1 += "name: '" + df.iloc[i,0] +"' ,"
        str1 += "code: '" + str(df.iloc[i,1]) +"' ,"
        str1 += "type: '" + df.iloc[i,2] +"' ,"
        str1 += "ects: '" + str(df.iloc[i,4]) +"' ,"
        str1 += "semester: '" + str(eks) +"' ,"
        str1 += "selected: false,"
        str1 += "},"
        print(str1)

