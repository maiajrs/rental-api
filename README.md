# rental-api
Application name: Rental API
Version 1.0
Stacks: Node JS, TypeScript, Express, Postgres and other libraries. 
About the API: This API provides features and business rules for a car rental company. The database with information about cars, customers and administrators of the resources offered in the application can be managed through this application. This application was built with NodeJS, Express and Postgres as database.
who am i: Maia Jr.

# create car
**RF**
it should be able to register a car
it should be able to list all categories

**RN**
it should no be able to register a car with a already existing license plate
it should no be able to change a license plate of a already registered car
car should be registed as available for default 
only a admin should be able to register a car

# list cars
**RF**
it should be able to list all available cars
it should be able to list all available cars by category name
it should be able to list all available cars by brand name
it should be able to list all available cars by car name

**RN**
user do not need to be registered in application to list all available cars

# create specification car
**RF**
it should be able to register a car specification 
it should be able to list all specifications
it should be able to list all cars

**RN**
it should not be able to register a specification for a not registered car
it should not be able to register a specification for a car that already has a specification registered 
only a admin should be able to register a specification

# register an image for a car
**RF**
it should be able to register an image for a car
it should be able to list all cars

**RNF**
use multer to upload images

**RN**
user should be able to register more than one image for a car
only a admin should be able to register an image for a car

# car rentals
**RF**
it should be able to register a rental

**RN**
a rental car duration should be at least for 24 hours
it should not be able to register a new rental for an user that already has a rental running
it should not be able to register a new rental for a car that already has a rental running
