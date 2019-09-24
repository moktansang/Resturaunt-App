UNIVERSITY OF NORTH TEXAS

College of Engineering

Department of Computer Science

For Restaurant-App Prepared By: Roshan Mainali, Sangita Moktan, Wassim Lagnaoui, Jesse Sainz 

September 20, 2019

# SOFTWARE REQUIREMENTS  SPECIFICATION

### 1) Introduction
The purpose of this system is to record the orders made by the customer on a tablet at the table, transfer those orders to the wait staff and kitchen staff all while being able to help the customer at a moment's notice if they need assistance.

The best way to decrease expenses and increase profit in the restaurant business is to decrease the number of employees as each individual employee can handle more tables at times.
The proposed system will increase order accuracy and decrease the time between the customer sitting down and receiving their food. It will also decrease the time the customer has to wait to pay for their order. This should increase the overall satisfaction of the customer, promoting return business.

### 1.1) Scope
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
- Include a help button that will notify the wait staff that a table needs assistance

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
Each type of user is only expected to have a minimal amount of computer literacy. The overall goal of the system to make the restaurant experience quick and easy to use for each type of user.

Staff can be trained to use the system. However, if customers aren’t comfortable using the system, they will be free to put their order through with the server as well.

### 3.1) User Interface
The user interface will feature a styling GUI for users to interact with their orders and the restaurant's menu. 
The UI will have buttons to select items to add to their order, as well as a section to keep track of items currently on their order. 
They will also be able to remove items from their order on this screen. Once they have added everything to the order, 
they will be able to “submit” the order on the same screen.

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





 
 
