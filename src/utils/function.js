import { produce } from "immer";
import Cards from "../Components/Backend/Cards";
import Theme6 from "../Components/Common/theme6/Theme6";
import SevenInfoCard from "../Components/Common/theme7/SevenInfoCard";
export const getBoxValue = (object) => Object.values(object).join(" ");




export const themeSwitch = (theme = "default", attributes) =>
  produce(attributes, (draft) => {
    // console.log(attributes?.align);
    // setAttributes({theme:theme}) 
    draft["theme"] = theme;
    draft["align"] = "full";

  });
  





//     getCardContentEdit(theme,attributes,updateCard,setAttributes,isBacked,activeIndex,setActiveIndex)

  export  function getCardContentEdit(theme, attributes, updateCard,setAttributes,isBacked,activeIndex,setActiveIndex) {
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
  if(theme=== "theme7"){
    return <SevenInfoCard isBackend={isBacked}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          attributes={attributes}
          setAttributes={setAttributes}/>

  }
}



