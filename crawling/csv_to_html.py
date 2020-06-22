##import pandas as pd
##
##df = pd.read_csv('S.csv')
##
##df.to_html('sTable.htm', justify = 'left)
##
##htmlTable = df.to_html



import pandas as pd


files = ['H.csv', "A.csv", "U.csv", "S.csv"]
table =[]

for file in files:
    df = pd.read_csv(file)
    htmlTable = df.to_html(str(file)+'.htm', justify = 'left')



##
##import pandas as pd
##
##
##files = ['H.csv', "A.csv", "U.csv", "S.csv"]
##table =[]
##
##for file in files:
##    df = pd.read_csv(file)
##    table.append(df)
##
##all_csv = pd.concat(table)
##
##htmlTable = all_csv.to_html('table.htm', justify = 'left')
##
