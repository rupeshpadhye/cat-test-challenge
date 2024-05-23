# Zania Test Challenge 


### Local Setup 
```
    npm install && npm run dev
```


###  Functionalities 
- [x] Part 1: Cards Layout & Ordering 
    - Cards are displayed using Grid css
    - Card Reording implemented using HTML5 drag and drop API  
    - Card Details are shown in modal when one clicks on card

- [x] Part 2: Mock

- [x] Part 3: Data Fetching & Synching Changes
    - Data Fetching is implemented using React Query 
    - Reordering of cards is synced after every 5 sec
    - Showing time difference between current time and last synced time e.g. `Synced 5 min ago`

- [x] Part 4: Deployment


- [x] Part 5: API Design


 **Prefix** - We can prefix api endpoints with `/api` so that we can route to API endpoint via proxy when deployed on same domain.

 **API Versioning** -  Versioning can help to release breaking api  e.g. `/v1`, `/v2` 

 **Entity** - Card with `type` as unique slug 



 | Method   | URL                                      | Description                              
| -------- | ---------------------------------------- | ----------------------------------------
| `GET`    | `/v1/cards`                               | Retrieve all cards.                     |
| `POST`   | `/v1/cards`                             | Create a new card.                        |  
| `GET`    | `/v1/cards/:type`                       | Retrieve card by type.                    |
| `PATCH`  | `/v1/cards/:type`                       | Update data in card by type.              |




### Libraries
- React Query - Data Fetching & Caching
- Jotai - Global Client State Management
- react-responsive-modal - Accessbile Modals

