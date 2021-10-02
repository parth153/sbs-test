@backend
Feature: Back end coding challenge

  Scenario: Validate the API response object
    Given the API endpoint is called
    Then the API endpoint response status is 200
    Then the API response validates against the schema
    Then the response contains valid mp3 files