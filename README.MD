https://floating-basin-56424.herokuapp.com/

alternatively from cmd line: heroku open
alternatively from heroku site: "open app" button

How to deploy to heroku:
- Create production build from frontend's folder: npm run build:ui (updates build folder on this backend)
- Commit/push frontend and backend changes to git
- Deploy to heroku from backend folder: 
    heroku login
    git push heroku master
    heroku config:set MONGODB_PHONEBOOK_URL='...'

Testing locally:
- npm run dev
- open browser to http://localhost:3001/