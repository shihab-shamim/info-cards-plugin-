  
  
  import Theme6 from '../Common/theme6/Theme6';
import SevenInfoCard from '../Common/theme7/SevenInfoCard';
import ThemeEightInfoProfile from '../Common/theme8/ThemeEightInfoProfile';
import ThemeNineTexOverly from '../Common/theme9/ThemeNineTexOverly';
import Cards from './Cards';
  
  
  
  export  function getCardContentFront(theme, attributes, isBacked) {
  if (["default", "theme1", "theme2", "theme3", "theme4", "theme5"].includes(theme)) {
    return (
      <Cards
        attributes={attributes}
        clientId={attributes.clientId}
      />
    );
  } if(theme=== "theme6"){
    return <Theme6 attributes={attributes}  isBacked={isBacked} />
  }
  if(theme=== "theme7"){
    return <SevenInfoCard
           isBackend={false}
          
          attributes={attributes}
         />

  }
  if(theme ==="theme8"){

    return(  <div className="infoProfileMain">
        
         {
          attributes?.productsInfo?.map((infoProfile,index)=> <ThemeEightInfoProfile  isBackend={false} infoProfile={infoProfile} index={index} key={index} attributes={attributes} />)
         }

        </div>)
  }
  if(theme==="theme9"){
     return <ThemeNineTexOverly attributes={attributes}  isBackend={false}/>
  }
}

