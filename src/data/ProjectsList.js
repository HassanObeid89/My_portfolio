import vegan from '../assets/card_images/vegan-restuarant.png';
import shoppingList from '../assets/card_images/shopping-list.png';
import package_tracker from '../assets/card_images/package-tracker.png';
import Tdd_todo_list from '../assets/card_images/Tdd_todo_list.png';
import BBQ from '../assets/card_images/BBQ1.png';
import learning_platform from '../assets/card_images/learning_platform.jpg';
import netflix from '../assets/card_images/netflix.jpg';
import defektabilar from '../assets/card_images/defekta-bilar.png'
import currencyConverter from '../assets/card_images/currencyConverter.gif'
export const data= [
  {
    "id": 1,
    "title": "Shopping list",
    "image": shoppingList,
    "description":"A shopping list web app that allow the user to create new items, mark them as completed and sort the list by name and price.",
    "pills":['React', 'FireBase', 'Tailwind CSS', 'Yup', 'React-hook-form',],
    "appUrl":'https://shopping-list-4265b.web.app/',
    "github":'https://github.com/HassanObeid89/shopping-list',
    "completed":true
  },
  {
    "id": 2,
    "title": "Vegan restaurant",
    "image": vegan,
    "description":"A vegan restaurant webapp where users can see the product categories, each category is a direct link from the navigation so they can find easly what they are looking for with alot of information about each category, dishes and drinks. A contact page that prepared to implement the booking system later on.",
    "pills":['React', 'FireBase', 'CSS', 'React-router','Json'],
    "appUrl":'https://vegan-restaurant-f9e2a.web.app/',
    "github":'https://github.com/HassanObeid89/vegan-restaurant',
    "completed":true
  },
  {
    "id": 3,
    "title": "Defekta bilar köpes",
    "image": defektabilar,
    "description":"Car web app that makes selling used cars easier. Users only needs to submit a form then the owner will receive Email with the filled information and starts making the deal. This is a published web app please don't submit the form",
    "pills":['React', 'FireBase', 'Semantic UI', 'Yup','EmailJs','Formik',"typewriter effect"],
    "appUrl":'https://www.xn--defektabilarkpes-ywb.se/',
    "github":'https://github.com/HassanObeid89/abraham-bil',
    "completed":true
  },
  {
    "id": 4,
    "title": "Currency converter",
    "image": currencyConverter,
    "description":"Currency converter app created using react native and C# endpoint that fetch the currencies rates from Fixer.io Api. ",
    "pills":['React-native', 'C#'],
    "appUrl":'',
    "github":'https://github.com/HassanObeid89/CurrencyConverter',
    "completed":true
  },
  {
    "id": 4,
    "title": "Package tracker",
    "image": package_tracker,
    "description":"This project is a Package Tracker app for customers that displays a list of orders with some details fetched from API endpoint, and shows the location of the parcel on the map. this project integrated google maps API. It uses:",
    "pills":['React', 'FireBase', 'CSS', 'Moment', 'Google-Map-React','React-Spinners','React-Icons'],
    "appUrl":'https://package-tracker-46db9.web.app/',
    "github":'https://github.com/HassanObeid89/package-tracker',
    "completed":true
  },
  {
    "id": 5,
    "title": "Todo list TTD",
    "image": Tdd_todo_list,
    "description":"This is not a new shopping list app, it is Eika app that allow users to add items to their shopping list, but with unit testing.",
    "pills":['React', 'FireBase', 'CSS','react-icons','Jest','React-testing-library'],
    "appUrl":'https://todo-app-4761c.web.app/',
    "github":'https://github.com/HassanObeid89/testing-todo-app',
    "completed":true
  },
  {
    "id": 6,
    "title": "BBQ restaurant",
    "image": BBQ,
    "description":"This is a BBQ Restuarant web app, that allow users to navigate easily between categories and have a detailed information for each products. An admin page that can be access adding '/admin' to the base URL. The admin page allows the owner to add, delete, edit products. It uses:",
    "pills":['React', 'FireBase', 'FireStore' ,'CSS', 'Context-Api'],
    "appUrl":'https://bbq-restaurant-7211b.web.app/',
    "github":'https://github.com/HassanObeid89/bbq-restaurant',
    "completed":true
  },
  {
    "id": 7,
    "title": "Learning platform",
    "image": learning_platform,
    "description":"This project is about A, B, C where users can do D, E, F, so they can obtain G, H, I benefit. It uses:",
    "pills":['React', 'FireBase', 'Tailwind CSS', 'Yup', 'React-hook-form'],
    "completed":false
  },
  {
    "id": 8,
    "title": "Netflix clone",
    "image": netflix,
    "description":"This project is about A, B, C where users can do D, E, F, so they can obtain G, H, I benefit. It uses:",
    "pills":['React', 'FireBase', 'Tailwind CSS', 'Yup', 'React-hook-form'],
    "completed":false
  }
]
