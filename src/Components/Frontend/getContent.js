  
  
  import Theme6 from '../Common/theme6/Theme6';
import SevenInfoCard from '../Common/theme7/SevenInfoCard';
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
}

