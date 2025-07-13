/_
Header - Logo - NavItems
Body - Search - RestaurantContainer - RestaurantCard - Img - Name of res, Star rating, cuisine, delivery time
Footer - CopyRight - Links - Address - Contact
_/

# Important notes

Two types of export import -

1. Default export/import -
   eg. export default Component
   eg. import Component from "path"

2. Named import/export
   eg. export const Component
   eg. import {Component} from "path"

# React Hooks

Normal JS utility funcitons written in the react library, written by facebook devs,.
2 most Important hooks - useState() and useEffect()

# Redux

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Create cart slice
- Dispatch an action
- Selector

# Types of testing

- Unit testing
- Integration testing
- End to End testing - e2e testing

# Setting up testing in the app

- Install React testing library
- Install Jest
- Install babel dependencies for jest, from jest docs
- Add babel config file for jest
- Configure .parcelrc file to override default babel transpilation, see parcel docs, parcel/javascript/#babel
- Now, the config will be picked from babel.config.js
- npx create-jest, and enter the (js dom testing env)
- Install jsdom library (as we are using jest verion above 28)
