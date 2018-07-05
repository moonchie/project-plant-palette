import requests
import csv
import pymongo

mongo_url = "127.0.0.1:27017"

client = pymongo.MongoClient(mongo_url)

DATABASE = "myDatabase"
db = client[DATABASE]

COLLECTION = "myCollection"
db_coll = db[COLLECTION ]


with open("San_Francisco_Plant_Finder_Data", "r") as csvfile:
    reader = csv.reader(csvfile)

    for line in reader:
        print("# line = {line}, typeOfLine = {type(line)}, lenOfLine = {len(line)}")