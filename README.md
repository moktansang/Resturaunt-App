# Resturaunt-App


### Contributors:
Jesse Sainz, Sangita Moktan, Roshan Mainali, Wassim Lagnaoui

---

Problem Statement:
> Creating a restaurant management system is one of the trending requirements in app building business. One of the main purposes behind creating the system is to showcase our computer skill as a senior student of UNT and finish the project on time. The proposed system will increase order accuracy and decrease the time between the customer sitting down after ordering the food and receiving it. It will also decrease the time that the customer has to wait to pay for their orders. This should increase the overall satisfaction of the customer which automatically increases the business.

We understand the users of this app especially the customer and working staffs will be having minimal knowledge of the computer literacy so we will be more focusing on easy and quick access for each types of users for their respective sections. 


# Users and Their Goals
There are 4 different users for this software: the customer, the wait staff, the kitchen, and management. Each type of user is only expected to have a minimal amount of computer literacy. The overall goal of the system to make the restaurant experience quick and easy to use for each type of usr.

List of users:

- Customer: 
	One of the users of the system who will be ordering and paying for the items. They can also register an account so that the name pops up for next time and use it under their own accounts. 
	
- Kitchen:
	This department will use the app to get instructions on what to prepare and notify the waiters if the food is ready or not.
	
- Waiting staffs:
	These people use the app to enter the food items of the customers and call them up or say serve after the food is being ready. They need to notify the kitchen after and have good communication with them.
	
- Management:
	The app can be used under management system where the manager or the owner will be able to see the reports, edit the menu items or change the price in order to handle the financial aspects. Also, they will be responsible to perform the customer satisfaction actions where they will be focusing on answering the customer reviews.

- Admin:
	The creator of this app should be able to modify the features on time-being even after creating the app on the request of the owner of the restaurant. 
	
- Others: 
Other people who do not want to order the food but still check on the app for their future reference.

### Functionality Requirements:

For Customers:
1. The system will allow customers to place an order.
2. The system will allow customers  to add some comments according to their preferences.
3. Addition and subraction of the menu items while placing order.
4. The payment options like card or cash for the customers.
5. Allow to print the receipt of the order.
6. Create an account for future accessibility.

For Waiting Staff:
1. Notify if the food is ready for the customer.
2. Process the payment for customers.
3. To clear the prompts once the order has been dealt with.

For kitchen staff:
i. allow kitchen staff to see all orders needed to be made with menu items and read the comments.
ii.Mark whether the order has been completed or needs to be waited.
iii.Allow to prompt wait staff if there is any clarification needed.

For management:
1. See the overall sales of the day.
2. Replying the queries of customer regarding the service for the saske of customer service.
3. edit the menu items and their respective prices.

non-functional Requirement:
1. keep track of time and date.
2. Store menu information in single file.
3. Adding more graphical user interface.

---

# Technologies
We will have three main components to this application
1. The frontend application that the users see
2. The API / brain of the application
3. The database containing the information for the app.
(menu items, possibly staff, user information, etc.)

### Application
The application itself will be a native app to run on a tablet. This will be done
using **React-Native** to render web-views on a native device. This will only be web views
and will rely on calling our API for most of the information.

### API
We have come up with the decision to create a **RESTless API** created in **Java using Spring**, a web framework.
This way the native app can call endpoints on our api to send and recieve information easily.

### Database
We aren't entirely sure of what database system we are going to use quite yet, but have started looking at possibilites such as **Firebase or MongoDB**. We'd like to find one that has an API for Java to easily implement communication between our API and the Database.
