import pandas as pd
import csv
import io



# Function to write CSV file
def csvWritter(tweet_list):
    file_name ="updated_data.csv"

    with io.open(file_name, "w", encoding="utf-8") as csvfile:
        writer = csv.writer(csvfile, lineterminator="\n", delimiter=",", quotechar='"')

        # Assigning the header in CSV
        header = ["Name", "Email", "Product", "Feedback","polarity","subjectivity"]

        # write header row to spreadsheet
        writer.writerow(header)
        print(len(tweet_list))
        for i in tweet_list:
            if len(i["_name"]) > 0:
                newrow = (
                    i["_name"],
                    i["_email"],
                    i["_product"],
                    i["_feedback"],
                    i["_polarity"],
                    i["_subjectivity"],
                )
                writer.writerow(newrow)
            else:
                pass


# To read a CSV file
df = pd.read_csv('data.csv')
#df = pd.DataFrame({'sentence': ['I am very happy', 'I am very sad', 'I am sad but I am happy too']})

from textblob import TextBlob
import csv
# The x in the lambda function is a row (because I set axis=1)
# Apply iterates the function accross the dataframe's rows
name=df['Name']
email=df['Email']
product=df['Product']
feedback=df['Feedback']
df['polarity'] = df.apply(lambda x: TextBlob(x['Feedback']).sentiment.polarity, axis=1)
df['subjectivity'] = df.apply(lambda x: TextBlob(x['Feedback']).sentiment.subjectivity, axis=1)
#print(df)
polarity=df['polarity']
subjectivity=df['subjectivity']
tweet_list=[]
for i in range(len(df['polarity'])):
    tweet_data = {
            "_name":name[i] ,
            "_email": email[i],
            "_product": product[i],
            "_feedback": feedback[i],
            "_polarity":polarity[i],
            "_subjectivity":subjectivity[i],
        }
    tweet_list.append(tweet_data)
    csvWritter(tweet_list)