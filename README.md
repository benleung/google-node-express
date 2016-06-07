Okta Node.js Express sample
===========================

This application shows how to protect your application using Okta. Packages passport and passport-saml and are used to handle the SAML authentication and connect was used to compress the requests from the node server.

For the sample configuration, please refer the my.thoughtworks.com page for okta samples.

Setup your Okta Application
-----
In order to configure your okta application, remember to create it from the SAML 2.0 Template using the following parameters:

| Setting              | Value                                                     |
| ---------------------|---------------------------------------------------------- |
| Post Back URL        | http://localhost:3000/login/callback                      |
| ID Format            | EmailAddress                                              |
| Recipient            | http://localhost:3000/                                    |
| Audience Restriction | http://localhost:3000/                                    |
| authnContextClassRef | PasswordProtectedTransport                                |
| Response             | Signed                                                    |
| Assertion            | Signed                                                                                              |
| Destination          | http://localhost:3000/login/callback                      |
| Attribute Statements | email: user.email<br>firstName: user.firstName<br>lastName: user.lastName<br>login: user.login |

Setup this Application (SP)
-----
Update the parameters in <b>config.json</b>. You can get these details from your okta application admin page (Sign On > View Setup Instruction).

| Setting              | What is it?                                                     |
| ---------------------|---------------------------------------------------------- |
| cert        | X.509 Certificate                      |
| entryPoint            | Identity Provider Single Sign-On URL       |

If you don't change anything, you're using my Okta test application. You can try logging in my test account with benlcp@gmail.com (Benleung1)

Running
-------
1. `npm install`
2. `npm start`

http://localhost:3333/ is now available
