Feature: Bootcamp E2E

Background: 
  Given I open the home page
  And I close the promo banner if it appears
@search
Scenario: Search bar
  When I enter the word "Windows" in the search bar
  And I click the search
  Then I should see at least one item appears

@logo
Scenario: Internet shop logo button
  When I open "Today's Best Deals" tab
  And I click on the Internet shop logo top right corner
  Then I should see that the main page is open