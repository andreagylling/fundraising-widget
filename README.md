### Fundraising widget (frontend exercise)

- fundraising-widget/server - node server.js
- fundraising-widget/client - npm start

----

**Problem description**

Shady Fundraising Inc. wants a new fundraising widget for their website. The widget should have clear communication about the fundraising progress and allow the users to enter the amount they wish to pledge.

Their web designer has created most of the HTML and CSS that is needed for the fundraising widget, but you need to write the JavaScript so it actually is dynamic and modify the HTML and CSS to make it work as expected.

**Problem requirements**
 - The progress bar must update to reflect to the progress of the fundraising, the progress is currently static at 75%. If the fundraising has reached it's goal the progressbar must become green (#1CBC2C), otherwise it should be orange (#EF5F3C).

 - The web designer forgot to implement the styles for the progress bar colors, so you need to do this in addition to make the progress bar update based on the progress.

 - The thank you notice must be hidden from the start and only shown if a successful pledge has been submitted.

 - Initial state of the "Thank you notice" is hidden.

 - When a successful pledge has been made the "Thank you notice" must be shown and the "Pledge input controls" must be hidden.

 - When the "Thank you notice" is dismissed the "Pledge input controls" must be shown.

 - The pledge amount must only accept integer values and the value must be cleared on successful pledge.

 - If an invalid value is entered in the pledge input an error message to the user must be shown, the web designer forgot to think of error handling so you need to implement the design for the it.

 - A successful pledge must update the progress bar, how many percent of the goal that has been funded and how many dollars that has been raised in total.
