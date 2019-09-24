### 1.1) Purpose
The main purpose of this application is to decrease the time between when 
the customer comes into the restaurant and when they leave the restaurant.

### 1.2) Scope
To start, we are going to focus only on the customers, the servers, and the kitchen. By providing a middle-system, we will be able to speed up the 
process of ordering food, getting the order to the kitchen, and getting completed orders to tables. Not only will this system benefit the customer, 
but servers will now be able to manage their tables and orders more efficiently.

### 2.1) Product Functions
**Customers**
- The system will allow the customer to place an order with menu items.
- The system shall allow customers to add comments on their order meals to assign the allergies or special requests. 
- The system will allow the customer to filter menu items by tags that were defined by management. The system will allow
the customer to edit menu items by the addition, substitution or omission.
- After the meal is delivered, and the customer is ready to pay, they can choose to pay using our system, or have the server take care of it.

**Wait Staff**

The system will give the wait staff an overview of tables they are in charge in and give staff different visual prompts depending on various situations defined below.
- The system will notify the wait staff when they need to process cash payments.
- The system will notify the wait staff if the customer pressed the help button.
- The system will notify the wait staff when food is ready to bring out.
- The system will allow wait staff to clear these prompts once the issue has been dealt with.
- The system will allow wait staff to take or edit the orders for customers if needed.

**Kitchen Staff**
- The system will allow the kitchen to see all the orders they need to cook, with menu items, and any modifications and/or comments listed.
- As soon as the customer puts in an order, the server and kitchen staff will see that order come through. This way the kitchen can immediately start working on it.
- The system will allow the kitchen to mark orders as complete, and prompt wait staff to pick up food.
- The system will allow the kitchen to prompt wait staff if there is any clarification needed.

After the meal is delivered, and the customer is ready to pay, they can choose to pay using our system, or have the server take care of it.

### 2.2) User Characteristics
We are assuming the customer would like to be in and out in the least amount of time. And if not, they would at least like to receive their
order in the shortest time possible. With this system, the user will have to have at least a minimal understanding of touch sensitive technology, 
as the customer interface will take place on a tablet.

Same goes for kitchen and server staff, as their interface will most likely be on a smartphone or tablet as well.

### 2.3) Constraints / Assumptions
If we are to include a payment system, we need to a solid security system to manage payments.

We are also assuming that customers and staff have an understanding of modern technology which isn‚Äôt always the case. 
Staff can be trained to use the system. However, if customers aren‚Äôt comfortable using the system, they will be free to put their order through with the server as well.

### 3.1) User Interface
The user interface will feature a styling GUI for users to interact with their orders and the restaurant's menu. 
The UI will have buttons to select items to add to their order, as well as a section to keep track of items currently on their order. 
They will also be able to remove items from their order on this screen. Once they have added everything to the order, 
they will be able to ‚Äúsubmit‚Äù the order on the same screen.

### 3.2) Hardware
Each table will have a tablet that the users will be able to interact with. The Kitchen will most likely have a tablet as well 
to see orders being placed. The wait staff will carry smartphones with the system application on it. This makes mobility easier 
since wait staff are constantly moving around. The API will also have to be running on a server with enough CPU power to handle a significant number of requests to it.

### 3.3) Software Interface
There will be 3 separate interfaces. The user interface, the API, and the database. 
The user interface will send messages to the API to signal events such as an order being placed. 
The API will also send data (such as the order) to both kitchen and wait staff. The API will use a database to 
organize the corresponding data (i.e. servers, orders, tables, etc.).

### 3.4) Communication Interface
The user interfaces will need a way to communicate to each other through the API. The API will be RESTful, 
meaning it uses http. This means will need a port accessible by the user interfaces but will only allow authorized devices to communicate with it.

UNIVERSITY OF NORTH TEXAS
College of Engineering
Department of Computer Science

SOFTWARE REQUIREMENTS  SPECIFICATION

















For Restaurant-App Prepared By: Roshan Mainali, Sangita Moktan, Wassim Lagnaoui, Jesse Sainz                							                                                                                                             September 20, 2019






 1.    Introduction:  
 The purpose of this system is to record the orders made by the customer on a tablet at the table, transfer those orders to the wait staff and kitchen staff all while being able to help the customer at a moment's notice if they need assistance.
The best way to decrease expenses and increase profit in the restaurant business is to decrease the number of employees as each individual employee can handle more tables at times.
The proposed system will increase order accuracy and decrease the time between the customer sitting down and receiving their food. It will also decrease the time the customer has to wait to pay for their order. This should increase the overall satisfaction of the customer, promoting return business.
2. Users and Their Goals
There are 4 different users for this software: the customer, the wait staff, the kitchen, and management. Each type of user is only expected to have a minimal amount of computer literacy. The overall goal of the system to make the restaurant experience quick and easy to use for each type of user.
Scope:
On our app there are two sides; the management side and the customer side. In todayís context, where people are always in-rush, our app will help to order their food without being physically present at the location and only go for the pickup. Lots of people may order at the same time so the main purpose of this project is to bridge that gap by creating a mobile app, that will facilitate the customers to communicate with their food department in the restaurant.
The app will have a good scope in the digital market as people will be able to order the food instantly plus having a login account will account, they can look into their selected dishes later whenever they can. The premise behind the idea is that both the restaurant management and customers will be benefited from time consumption and quality food services under proper customer preferences. The restaurant world is an area in which mobile apps have had a large influence, and one of the highest growth rates compared to other fields.

Purpose:
The main purpose of a mobile app for a restaurant is obviously to provide the foodservice and become accessible for the customer. The app will help to save time and customers can select their favorite dishes before coming to the location. On the other hand, the waiting staff and the kitchen section will be able to prepare the food and get it ready on the arrival of the customers. Similarly, there is no hassle for both the sector to understand the food order. Likewise, the use of this mobile app technology helps restaurant owners solidify their presence in the market while simultaneously helping them promote their brand online.

4. References and Acknowledgements: 
ï	The document builds on the following references
ï	The course textbook ìSoftware Engineering ñ A Practitionerís Approach ñ Seventh Editionî
ï	Sample SRS documents available for download through the UNT Course Blackboard.
ï	Currently, this SRS does not reference any outside resources. 

5.   Intended Audience and Reading Suggestions
 
This document has been prepared as a request from professor Kaushik Mandala as one of the requirements for our class CSCE-3444 in order to successfully complete the course. Therefore, the intended reading audience for the meantime consists of our professor, his teaching assistant, and anyone enrolled in this course.
The document is divided into different sections and subsections using sequential numbers, and the reader is advised to read the document using the same sequence. 

6.  References and Acknowledgements
The document builds on the following references:
ï	The course textbook ìSoftware Engineering ñ A Practitionerís Approach ñ Seventh Editionî.
ï	Sample SRS documents available for download through the UNT Course Blackboard.
ï	Currently, this SRS does not reference any outside resources. 
7. Functional Requirement:
 Customer Requirements
The system will allow the customer to place an order with menu items.
The system shall allow customers to add comments on their order meals to assign the allergies or special requests. 
ï	The system will allow the customer to filter menu items by tags that were defined by management. The system will allow the customer to edit menu items by the addition, substitution or omission.
ï	
ï	 Add a deal that the special holiday cookie is discounted to $1 if they order an entree. Up to one discounted cookie per entree ordered. It may be combined with any free kidís meal nights or other coupons.
ï	 Record information about comped items so that a manager may review a report at any time that summarizes this info for each comped item:
A.  	Item comped
B.  	Dollar Amount
C.  	Waitstaff name that comped the item
D.  	Reason for comped item
E.   	Date and timestamp
7.2 The system will allow customers to choose the payment method any time after placing the order (credit card, debit card or cash).
ï	The system will prompt the wait staff to collect cash if the customer selects the ìcashî payment method.
ï	The system will process any credit or debit card payment if the customer selects the ìcredit/Debitî payment method.
ï	The system will allow the customer to apply a tip to purchase with a range of set amounts from 0% to 30% or enter a custom amount.
ï	The system will automatically apply running deals, such as the ìfree kidís meal Sundayî.
ï	The system will give the customer the option to email or print receipt if they choose to do so.
ï	The system will allow the customer to apply coupons to a meal if they have any.
7.3 The system will allow the customer to access the ìKidís Areaî where they have the option to play ìTic tac toeî, ìdotsî, and snake. (2%)
7.4 The system will give the customer constant access to a ìhelpî button that will prompt wait staff to table.
7.5 The system will give the customer constant access to a ìrefillî button after they ordered drinks that will prompt wait staff to bring new drinks to the table.
ï	The system will allow the customer to change the drink type when refilling.
7.6 The system will allow the customer to create an account for a rewards system. The system will allow the customer to store their email, phone, password, and name to their account.
7.7 Wait Staff Requirements
ï	The system will give the wait staff an overview of tables they are in charge in and give staff different visual prompts depending on various situations defined below.
ï	The system will notify the wait staff when they need to process cash payments.
ï	The system will notify the wait staff when they need to bring refills for drinks.
ï	The system will notify the wait staff if the customer pressed the help button.
ï	The system will notify the wait staff when a table has been set.
ï	The system will notify the wait staff when food is ready to bring out.
ï	The system will notify the wait staff when a table needs to be cleaned.
ï	The system will notify the wait staff to visit an occupied table if 5 minutes elapsed with no other prompts occurring.
ï	The system will allow wait staff to clear these prompts once the issue has been dealt with.
ï	The system will allow wait staff to print receipts for any orders from store open time to current time
ï	The system will allow wait staff to take or edit the orders for customers if needed.

    7.8.   Kitchen Staff Requirements.
ï	The system will allow the kitchen to see all the orders they need to cook, with menu items, and any modifications and/or comments listed.
ï	The system will keep the time elapsed for each order since the time from order placement to ensure quick service.
ï	The system will allow the kitchen to mark orders as complete, and prompt wait staff to pick up food.
ï	The system will allow the kitchen to prompt wait staff if there is any clarification needed.
7.9.  Management Requirements.
ï	The system will allow management to print out sales reports for the day, week, month, quarter, year, or a lifetime, timescale. 
ï	The system will allow management to perform Customer satisfaction options such as discounting or comping an order.
ï	The system will manage to make permanent modifications to menu items, allowing them to change the name, ingredients, calories, price, and tags that the menu item has.
ï	The system will allow management to view survey results.
8. Non-Functional Requirements
ï	The system will run on a windows platform.
ï	The system will store Menu information in a single file
ï	The system will store information for each type of sales report will be stored in each of their own files for ease of use when sharing
ï	The system will function without internet access
ï	The system will utilize a graphical user interface.
ï	The system will keep track of time and date.
ï	Glossary
ï	Account- Consists of name, password, phone, and email. This is used to store the reward system and favorites information.
ï	Customer- One of the users of the system, will order, pay, register an account, and use accounts with this software.
ï	Deal- Consists of menu items, timeframe, and discount amount. An example of this is ìkids eat free Sundaysî.
ï	Kitchen- One of the users of the system, they use the software to get instructions on what to prepare and notify a wait staff.
ï	Management- One of the users of the system. They use the software for performing customer satisfaction actions, and for handling the financial aspects of the restaurant business
ï	Menu items- Consists of the name, price, ingredients, calories, and tags.
ï	Survey- A series a question that asks the customer to rate aspects of their experience from 1-5.
ï	Tag- attributes that can be added to menu items in order to describe them and use for the filter system. An example of a tag would be vegan, or low calorie.
ï	Wait Staff- One of the users of the system. They set the software by tracking tables and responding to the prompts the system gives them
 
 
 









 
 
 
