# The-Diet-App#

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**The Diet App** is an application that will give you nutritional values of food based on your query._


<br>

## MVP

_The **Diet App** is an application that will allow to find any data you want about a certain food (fat, calories, daily suggested intake) to help you define a better diet for yourself._

<br>

### Goals

- _Render all nutritional values of queried food on page._
- _Create ability to save different foods_
- _Show foods as a percentage of daily caloric intake_

<br>

### Libraries and Dependencies

> 

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front end architecture to render data on page_ |
|   React Router   | _Will be used to change re-direct to each view_ |
| Rails | _Will be used as the backend framework_ |

<br>

### Client (Front End)

#### Wireframes

![https://wireframe.cc/UWzwbu](url)

- Desktop Landing

![https://wireframe.cc/eNSvq5](url)

- Desktop Food Display

![https://wireframe.cc/eUXVz0](url)

- Profile Display

#### Component Hierarchy


``` structure

src
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ Main.jsx
      |__ FoodSearch.jsx
      |__ FoodDisplay.jsx
      |__ Profile Page.jsx
      
|__ services/
   |__ auth.js
   |__ api-helper.js
   |__ Foods.jsx
   |__ Recipes.jsx
```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|     Main    |  functional    |   y   |   n   | _This will be the main view with a search bar and some example foods_      |
| Food search | functional |   y   |   y   | _User will make a GET request from this component to display nutritional value_                 |
|    Food Display    | functional |   y   |   y   | _Current nutritional value will be disiplayed_ |
|    Profile Page    | functional |   y   |   y   | _Page will display saved recipes and foods_ |


#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| User Auth + File Structure   |    H    |     8hrs    |      TBD   |    TBD   |
| Food recipes/items crud |    H     |     8hrs      |    TBD     |     TBD     |
| Rendering and storing data |    H     |     8hrs      |    TBD     |     TBD     |
| Initial CSS |    H     |     8hrs      |    TBD     |     TBD     |
| Post MVP and recipe suggestions |    H     |     8hrs      |    TBD     |     TBD     |
| TOTAL               |          |     40 hrs      |     TBD    |     TBD     |

<br>

### Server (Back End)

#### ERD Model

https://app.lucidchart.com/invitations/accept/8393550c-1514-48ee-992c-54eb04df0220

<br>

***

## Post-MVP

> I'd love to use a different api to find recipe and food suggestions. I would like to be able to put in nutrition criteria and have suggestions populated based on the query.

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
