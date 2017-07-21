import time
from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities   
d = DesiredCapabilities.CHROME
d['loggingPrefs'] = { 'browser':'ALL' }
#change the location of chromedriver.exe 
driver = webdriver.Chrome('C:/Users/achhipa/Python/achhipa/chromedriver.exe',desired_capabilities=d)

#change the URL
driver.get('http://localhost/buckfizz/index.html')

# Wait for 5 seconds
time.sleep(5)

#Search textbox for initial (2) and final (15) value by their name and send data to those
search_box = driver.find_element_by_name('inputinitial')
search_box.send_keys('2')
search_box = driver.find_element_by_name('inputfinal')
search_box.send_keys('15')

#search submit button by its name and click
driver.find_element_by_name('submit_button').click()

#Wait for 10 seconds
time.sleep(10)

#print browser log on console and find the message data from it
for entry in driver.get_log('browser'):
    print(entry)	
message_entry = entry['message']

#proc to filter actual data from message using regex
def filter(text):      
    import re
    matches=re.findall(r'\"(.+?)\"',text)
    return ",".join(matches)

actual_output=filter(message_entry)
print(actual_output)

#Expected Output from range 2 t0 15
expected_output="2,Fizz,4,Buck,Fizz,7,8,Fizz,Buck,11,Fizz,13,14,BuckFizz"
print(expected_output)

#Check if actual output is same as expected, paas/fail criteria
if actual_output == expected_output:
    print("PASSED")
else:
    print("FAILED")
 
driver.quit()

