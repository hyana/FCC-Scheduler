import requests
from bs4 import BeautifulSoup
import pandas as pd
##
##class courseInfo:
##    def __init__(self, college, courseName, subject, ctype, number, section, prof, time):
##        self.college = college
##        self.courseName = courseName
##        self.subject = subject
##        self.section = section
##        self.number = number
##        self.prof = prof
##        self.time = time
##
##    def day_and_time(time):
##        print(time)
##
##    ## each_course = []
##    
##    def save(college, courseName, subject, ctype, number, section, prof, time):
##        for item in zip(courseName, subject, ctype, number, section, prof, time):
##            each_course.append(
##                {
##                    'name': item[0],
##                    'sub' : item[1],
##                    'type': item[2],
##                    'num' : item[3],
##                    'sec' : item[4],
##                    'prof': item[5],
##                    'day' : item[6],
##                    'time': item[7]
##                    })
##        ## 이러면 하나하나 저장되는거 아닌가..?
##        data = pd.DataFrame(each_course)
##        data.to_csv(college + '.csv')
##        

## make it as an oop
## max_pages = crawl할 페이지 수
def parsing(max_pages, institution):
    page = 0
    each_course = []
    while page < max_pages:
        url = 'https://www.fivecolleges.edu/academics/courses?field_course_semester_value=F&field_course_year_value=2020&field_course_institution_value%5B0%5D=' +str(institution)+ '&combine=&course_instructor=&combine_1=&field_course_number_value=&field_course_subject_name_value=&field_course_subject_value=&page=0%2C0%2C' + str(page)
        source_code = requests.get(url)
        plain_text = source_code.text
        soup = BeautifulSoup(plain_text, 'lxml')
        
        for div in soup.find(class_='view-content').find_all('tr'):
            info = div.find('a')
            ## course information(year, semester, college)
            if info:
                #info_sub_list = info.get('href')
                title = info.string.strip()
            else:
                title = None
                
            ## course subject
            sub = div.find('td', class_="views-field views-field-field-course-subject")
            if sub:
                s = sub.string.strip()
            else:
                s = None
            ## course number
            number = div.find('td', class_="views-field views-field-field-course-number")
            if number:
                n = number.string.strip()
            else:
                n = None
            ## course section number
            snumber = div.find('td', class_="views-field views-field-field-course-section-number")
            if snumber:
                sn = snumber.string.strip()
            else:
                sn = None
            ## course type
            typ = div.find('td', class_="views-field views-field-field-course-type")
            if typ:
                t = typ.string.strip()
            else:
                t = None
            ## instructor
            prof = div.find('td', class_="views-field views-field-field-course-instructor")
            if prof:
                p = prof.string.strip()
            else:
                p = None
            ## meeting time
            time = div.find('td', class_="views-field views-field-field-course-meeting-info")
            if time:
                time_sub = time.string.strip()
            else:
                time_sub = None

            ## to exclude unnecessary lines
            if title != None:
                each_course.append(
                    {
                        'Subject' : s,
                        'Name': title,
                        'Type': t,
                        'Number' : n,
                        'Section' : sn,
                        'Instructor': p,
                        'Date' : time_sub
                        })
        page+=1
    data = pd.DataFrame(each_course)
    data.to_csv(institution + '.csv')
              
parsing(14, 'S')
parsing(14, 'A')
parsing(2, 'H')
## Mount Holyoke hasn't submitted their schedule yet
##parsing(??, 'M')
parsing(154, 'U')
