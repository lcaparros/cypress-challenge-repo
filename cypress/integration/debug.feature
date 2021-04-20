Feature: Test cases defined with Gherking

    Scenario: Yahoo register form
        Given Yahoo register form
        When Submission button is clicked
        Then Password error is shown with message: Este dato es obligatorio.
