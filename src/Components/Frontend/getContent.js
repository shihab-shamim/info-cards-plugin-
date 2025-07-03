  
  
  import Theme6 from '../Common/theme6/Theme6';
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
}