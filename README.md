# Password check prototype

A simplistic password checking prototype for my HCI course at Gatech.
It was used as part of a survey for password entry for a website
registration process.

DO NOT USE FOR PRODUCTION SYSTEMS.

This prototype is for password validation interface testing.
It is the second version with additional complexity checks
and interactive feedback on requirements along with a show
password option.

It currently tests for validity of the password strength.
Prevents submission until a valid value is entered.
Provides interactive feedback for the current state of the password.

Uses jQuery for most of the operations. The CSS involved is very
limited but a known flaw exists for the coloration of the feedback
not being green and red.

A label for the "complexity" indicator to the right of the password
field should be introduced to provide the user information about it.

This is a very simplistic example for prototyping purposes only.

Code quality is secondary to feature evaluation goals.

TODO: Fix known issue with redundant code for evaluations of password complexity.
TODO: Combine all files into a single HTML file for ease of distribution.
