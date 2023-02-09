"""
An extra day is added to the calendar almost every four years as February 29,
and the day is called a leap day. It corrects the calendar for the fact that our
planet takes approximately 365.25 days to orbit the sun. A leap year contains
a leap day.

In the Gregorian calendar, three conditions are used to identify leap years:

    The year can be evenly divided by 4, is a leap year, unless:
        The year can be evenly divided by 100, it is NOT a leap year, unless:
            The year is also evenly divisible by 400. Then it is a leap year.

This means that in the Gregorian calendar, the years 2000 and 2400 are leap years,
while 1800, 1900, 2100, 2200, 2300 and 2500 are NOT leap years.
"""

def is_leap(year):
    leap = False
    
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                leap = True
        else:
            leap = True
        
    
    return leap



input1 = is_leap(2004)
input2 = is_leap(2023)
input3 = is_leap(1800)
input4 = is_leap(2000)

print("*** input1: ", input1)
print("*** input2: ", input2)
print("*** input3: ", input3)
print("*** input4: ", input4)