# News App
<img src="https://user-images.githubusercontent.com/64878501/102041573-d123d380-3df5-11eb-8154-b460034f46c5.gif" width="100%">

## Conversational Voice Controlled React News Application


### Tech-Stack

- React Hooks
- Alan AI Voice Assistant - @alan-ai/alan-sdk-web
- MaterialUI - @material-ui/core
- classnames
- words-to-numbers

### Introduction

- Alan AI is a revolutionary speech recognition software that allows you to add voice capabilities to your applications.
- It allows you to control absolutely everything in the app using your voice.
- Another huge benefit is that it's extremely easy to integrate it

### Wire frame:
<img src="https://user-images.githubusercontent.com/64878501/102041013-58704780-3df4-11eb-9e2e-7399f7d86b13.PNG" width="100%">

### Function

- Using Voice Assistant to choose type of news:
  - Latest news.
  - News by Categories : Business, Entertainment, General, Health, Science, Sports, Technology in U.S
  - News by Terms: Corona, PlayStation 5, Smartphones,...
  - News by Sources: CNN, ABC News, BBC News,....
- You can choose
  - Read news by yourself
  - Or Alan AI Voice Assistant can help you to read that
- Gives responses to casual conversation

### Resources

- Alan AI Studio: https://alan.app
- API news: https://newsapi.org/

### Screenshot

<img src="https://media.giphy.com/media/kHxwr6ohazm1FQwyuX/giphy.gif" />

### After this project

I have improve for myself about

- Material-UI
  - Create Card component
  - styles component
  - Write CSS by makeStyles
  - Responsive App with Grid, Grow
- Merge different className to one with `classnames`
- Fetch API

I have understand about

- Fetch API in Alan Studio
- using voice to get data from API
- `words-to-numbers`
  - convert words string to number
  - guess the word has same sound to the true number (such as: for ~> 4)
- Scroll window to article currently reading
- Opening the new URL by use Voice Assistant
- Make casual conversation that we didn't set up in our original script

## How to run

### `npm install`

It installs the current package context (ie, the current working directory) as a global package. 
By default, npm install will install all modules listed as dependencies in package. json

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
