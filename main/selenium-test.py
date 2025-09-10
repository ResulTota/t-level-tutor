import time

from selenium import webdriver

driver = webdriver.Chrome()

driver.get("https://www.google.com")

print("Page title:", driver.title)

time.sleep(10)

driver.quit()