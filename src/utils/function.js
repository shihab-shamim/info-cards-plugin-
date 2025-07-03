import { produce } from "immer";
import Cards from "../Components/Backend/Cards";
import Theme6 from "../Components/Common/theme6/Theme6";
export const getBoxValue = (object) => Object.values(object).join(" ");




export const themeSwitch = (theme = "default", attributes) =>
  produce(attributes, (draft) => {
    console.log(attributes?.align);
    // setAttributes({theme:theme}) 
    draft["theme"] = theme;
    draft["align"] = "full";

  });





//  getCardContentEdit(theme,attributes,updateCard,setAttributes,isBacked)

  export  function getCardContentEdit(theme, attributes, updateCard,setAttributes,isBacked) {
  if (["default", "theme1", "theme2", "theme3", "theme4", "theme5"].includes(theme)) {
    return (
      <Cards
        attributes={attributes}
        clientId={attributes.clientId}
        updateCard={updateCard}
      />
    );
  } if(theme=== "theme6"){
    return <Theme6 attributes={attributes} setAttributes={setAttributes} isBacked={isBacked} />
  }
}



