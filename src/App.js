import React , { useState, useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';




const alanKey = 'b1d9a56aa77fb67e2cae87a21148a53f2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App =() =>{
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();


  useEffect(()=>{
    alanBtn({
      key:alanKey,
      onCommand:({command, articles, number})=>{
        if(command === 'newHeadlines'){
          setNewsArticles(articles);
          setActiveArticle(-1);
        }else if(command === 'highlight'){
          setActiveArticle((prevActiveArticle)=> prevActiveArticle+1);

        }else if(command === 'open'){
          const parsedNumber = number.length > 2 ?  wordsToNumbers(number ,{fuzzy:true}) : number;
          const article = articles[parsedNumber -1];
          
          if(parsedNumber > 20 ){
            alanBtn().playText('Please try that again .')
          } else if(article){
              window.open(article.url,'_blank');
              alanBtn().playText('Opening ....');
          }

          window.open(articles[number].url, '_blank');
        }
      }
    })    
  },[])

  return (
      <div>
        <div className = {classes.logoContainer}>
          <img src="https://user-images.githubusercontent.com/64878501/102020587-174e4800-3da0-11eb-8645-a7a5a9c66bca.jpg" className={classes.alanLogo} alt="LogoImage"/>
        </div>
        <NewsCards articles = {newsArticles} activeArticle={activeArticle}/>
      </div>
  );
}

export default App;