# phoneshop_back_Soamee_CodeTest_RubenTigre

This is my take on the back to the CodeTest app required from Soamee. 
In this case, we use lowDb to serve and write our json Db. I did in a Json because i had mine MongoDB free cluster already working and it will be a mess. I want to be the fast
i can.

I added some scripts to improve some of the tedious task, like add the build folder.

We have:

  npm start: 
    
    execute node index.js.
  npm run build:ui: 
  
    deletes current Build folder, then navigate to the Front folder to use the script to generate a new build, finally it copies it on our back.

Be sure both, Front and Back, are on the same folder or the buil:ui script will fail.

Also, the app is configured to work with Heroku.
I added some npm scripts to make this easier.
We have:

  "deploy": 
  
    push current git to Heroku.
  "deploy:full": 
     
     create an updated build and then push it to Heroku.
  
  "logs:prod":  
  
    logs of Heroku.
  
  "open:prod": 
  
    scale our dynos to 1 and open in the browser.
  
  "stop:prod" : 
  
    scale our dynos to 0 to stop.
  
//about the API:

We use NodeJS and Express to create and handle the requests. This implementation has all CRUD request handled. There is a folder of Request prepared to test that.
Keep in mind our react app is a Single Page App and we use React Router to manage the Nav Bar.

  GET /phones/ :
  
    Request phones to our LowDb server (phones.json) asking for the object Phones. If it is not undefined, return all the phones.
    
  GET /phones/:id :
  
    Request an especific phone with an ID that match the one in the params of the request. If the id is not added, it will return a bad request.
    If that id are undefined, it will return a 404 status. Finally if it exist, it will return that phone.
    
  DELETE /phones/:id :
  
    Search for an especific phone with ID that match the params of the request. If the id is not added, it will return a bad request. If that id are undefined, a 404 status.
    Finally, if it exist, that object will be returned and deleted.
  
  POST /phones/ :
  
    In case we need to add a new phone to our database, we can make a Post Request with an object. In case there is no object, this will return a bad request.
    In case there is any missed entry on the object, this also will return a bad request. Finally if all the entries exist, it will add an id to the object and
    write it to the JSON file.
    
  PUT /phones/:id :
  
    In case we need to update any entry of any of our phone objects, we can make a PUT request with the id we want to change. In this case, it will return a bad request in case
    the id is not added or if no one of the entries of the targeted phone are changed.
    In case the id is not undefined on our database, we will construct a new object with the new data of the entries or the current one if there is no change.
    Then we will save it only if there is any change.
  
