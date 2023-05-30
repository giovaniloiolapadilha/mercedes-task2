@classA @hatchback 
Feature: Class A Models

  Scenario: As a user, I want validate A class models price are between £15,000 and £60,000
    Given I am on the Hatchbacks A Class - Build Your Car page
    When I filter by fuel type "Diesel"
    And I take a screenshoot of the results with name "classA.png"
    And I create a text file with the highest and lowest price results with name "classA.txt"
    Then there is a "classA.png" in folder
    And there is a "classA.txt" in folder with the highest and lowest price results