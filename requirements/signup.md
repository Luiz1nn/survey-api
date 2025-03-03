# Sign Up

> ## Success Case

1.  ❌ Receives a **POST** request on the **/api/signup** route.
2.  ❌ Validates mandatory data: **name**, **email**, **password**, and **passwordConfirmation**.
3.  ❌ Validates that **password** and **passwordConfirmation** are the same.
4.  ❌ Validates that the **email** field is a valid email.
5.  ❌ **Validates** if a user with the provided email already exists.
6.  ❌ Generates an **encrypted** password (this password cannot be decrypted).
7.  ❌ **Creates** an account for the user with the provided data, **replacing** the password with the encrypted password.
8.  ❌ Generates an access **token** from the user's ID.
9.  ❌ **Updates** the user's data with the generated access token.
10. ❌ Returns **200** with the access token and the user's name.

> ## Exceptions

1.  ❌ Returns a **404** error if the API does not exist.
2.  ❌ Returns a **400** error if name, email, password, or passwordConfirmation are not provided by the client.
3.  ❌ Returns a **400** error if password and passwordConfirmation are not the same.
4.  ❌ Returns a **400** error if the email field is an invalid email.
5.  ❌ Returns a **403** error if the provided email is already in use.
6.  ❌ Returns a **500** error if there is an error while trying to generate an encrypted password.
7.  ❌ Returns a **500** error if there is an error while trying to create the user's account.
8.  ❌ Returns a **500** error if there is an error while trying to generate the access token.
9.  ❌ Returns a **500** error if there is an error while trying to update the user with the generated access token.
