## Files needed
* One main html file: final.htm
* Two js files: jquery-3.5.1.min.js, index.js
* One css files: style.css

## Explanation of how to open final.html
1. Download "final.htm", "jquery-3.5.1.min.js", and "index.js". Make sure that they are all in the same directory
2. Open "final.htm" with Chrome or other Internet browsers(I personally recommend Chrome)
3. Click "Search" Button on the tab
4. Choose the institution that you want to find the course using the select box. 
   Smith Collge's courses will be displayed as a default
5. Wait until checkboxes appear on the first column of the table.
6. If all checkboxes appear, select the courses you want to take in that institution by clicking checkboxes
7. If you are done with choosing courses in that institution, you can always go back to 3 and repeat the same thing. Selected courses will be saved
8. Click "Submit" button on the top if you choose all the courses you want to take
9. New window will pop up and show the courses that you selected and their information in table feature 

## Purpose of this website
College students in the past days used to use freecollegeschedulermaker.com to make their visual course scheduler.
But this website was somewhat annoying to make a course schedule since its users are required to input all the information about each course(course title, days, times, instructor, location, etc)
So Coursicle.com was developed. Unlike freecollegeschedulermaker, Coursicle's users don't need to input all those information one-by-one anymore; they only need to choose which institution they are attending because the website will automatically input all the other information about the courses.
However, as a student of Smith College which is the part of Five College Consortium, I felt uncomfortable using Coursicle since it allows users to choose only one institution.
For students in five colleges who take at least one course in other neighboring institutions of Five college consortium, making a course scheduler was still boresome.
So I'm developing this Five College Consortium Interactive Scheduler for letting five college students spend less time on making a scheduler.

**Mount Holyoke hasn't released their course schedule

# Architecture of the code
I used Pandas, BeautifulSoup, jQuery for better performance
For more specific information about each function, please refer to the inline comments in each file.  

# Remaining Challenges:
* Loading Time for UMass courses
* How to export the result from search tab to schedule tab
* Import each course's credits from five college consortium website 
* Parse time and days from date
* Make a visually interactive scheduler like Coursicle
* Add Mount Holyoke College

## Description about dummy_files, crawled_data, crawling folders
* crawling: I crawled course information from the official five college consortium website: colleges.edu/academics/courses using crawling.py. Then I converted csv files(crawled_data) to html files(table feature) using csv_to_html.py
* crawled.data: csv files and html files that I used to get <table> results of course information
* dummy_files: files will be used in the future

# References 

