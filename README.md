<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/lozanasc-archives/restoms">
    <img src="src/assets/restoms-logo/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">RestoMS</h3>

  <p align="center">
    A web-based Restaurant Management System-ish... 😅
    <br />
    <br />
    <a href="">Demo not available</a>
    ·
    <a href="https://github.com/lozanasc-archives/restoms/issues">Report Bug</a>
    ·
    <a href="https://github.com/lozanasc-archives/restoms/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot](https://github.com/lozanasc-archives/restoms/blob/main/samples/Screenshot%202021-09-16%20164810.png?raw=true)

The main purpose of this project is to hopefully help businesses mainly in the Food Industry to create an overall good experience for Customers when dining in especially with heavy restrictions set by the IATF due to the pandemic. The system does not only serve the purpose of improving 'Customer' experience but also for the Clients' convenience, we aim to create a system that is affordable to implement, easy to use and since the system is developed using Web technologies it can be used almost in any platform available and for this, it already has cut down the cost of having to build different native application codebases in each platform. Another purpose of this project is to encourage the use of Technology more in businesses especially here in the locality.  

The Restaurant Management System has three (3) different components, one is for the Customer; this includes the Logging feature for IATF protocol compliance, next is the Menu that customers can choose food from, another is a Table management feature where customers can pick their table of choice before completing the order session, this can also serve as a piece of additional traceable information for the authorities if need be and lastly is the Checkout where the customer is given two (2) payment method of choices which are: cash or electronic(includes credit/debit card, Pay Maya, GCash, etc.…), while the system gives out the option for cash, the system also encourages electronic through a discount point each time you pay electronically this will serve as an incentive for helping the community by reducing human contact.


The 2nd service is the Worker service wherein the Worker can log in and will be given access to a dashboard that contains all existing order sessions. The Worker can also edit the order items if the Customer wished to order additional food. The Worker can end the order session and proceed to the billing and checkout, once a checkout session is successful the table associated with that session will be freed therefore can be acquired by other customers. The worker can also log out and end his/her session that will also serve as the time in and time out for that day. Lastly, we have the Admin service where the admin can log in and view a dashboard analytic for best-selling food, most popular people's table of choice, and the Worker with the most order session completed. The admin can also create, retrieve, update and delete Worker information, Order session information, and Food item information on the database, next is the Admin can also change the theme color of the User Interface, and lastly the Admin can log out and end-user session. All these services are all under but 1 main system divided into three (3) sub-components, and each feature is also a component on its own for re-usability purposes.

### Built With
This system was built with the following technologies:  
* [ReactJS](https://reactjs.org/)
* [NodeJS](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [MySQL](https://www.mysql.com/)



<!-- GETTING STARTED -->
## Getting Started

Hey there! You might be new, if you don't know how to run a MERN project locally, no worries just follow the instructions below!  

You'll be alright 💪  

### Prerequisites

Let's start with the prerequisites, make sure you have the following installed in your local machine
* [npm](https://nodejs.org/en/)
  ```sh
  npm install npm@latest -g
  ```  
* [nodejs](https://nodejs.org/en/)
  ```sh
  # To check if its installed
  node -v
  ```  
* [mysql server and workbench](https://dev.mysql.com/downloads/windows/installer/8.0.html)  
* [mysql](https://www.mysql.com/)
  ```sh
  mysql -h 127.0.0.1 -u root -p
  ```  

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/lozanasc-archives/restoms.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run it! ✨
   ```sh
   npm start
   ```



<!-- USAGE EXAMPLES -->
## Usage
Here are the sample images of what you do with the system...  
  
### Worker and Admin  
![Dashboard](https://github.com/lozanasc-archives/restoms/blob/main/samples/Dashboard%20Sample.png?raw=true)  
![Transaction](https://github.com/lozanasc-archives/restoms/blob/main/samples/Transaction%20Sample.png?raw=true)  
![Inventory](https://github.com/lozanasc-archives/restoms/blob/main/samples/Inventory%20Sample.png?raw=true)  
![Settings](https://github.com/lozanasc-archives/restoms/blob/main/samples/Settings%20Sample.png?raw=true)  
  
### Customer
![Table](https://github.com/lozanasc-archives/restoms/blob/main/samples/Table%20Sample.png?raw=true)  
![Menu](https://github.com/lozanasc-archives/restoms/blob/main/samples/Menu%20Sample.png?raw=true)  
![Completion](https://github.com/lozanasc-archives/restoms/blob/main/samples/Completion%20Sample.png?raw=true)  


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/lozanasc-archives/restoms/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Your Name - [@devzana](https://twitter.com/devzana) - email@example.com

Project Link: [https://github.com/lozanasc-archives/restoms](https://github.com/lozanasc-archives/restoms)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
**Developer/Designer/Analyist/Researcher:** _Sean Christian Lozana_
