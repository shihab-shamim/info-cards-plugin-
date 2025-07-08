import { produce } from "immer";
import Cards from "../Components/Backend/Cards";
import Theme6 from "../Components/Common/theme6/Theme6";
import SevenInfoCard from "../Components/Common/theme7/SevenInfoCard";
export const getBoxValue = (object) => Object.values(object).join(" ");

export const themeSwitch = (theme = "default", attributes) =>
  produce(attributes, (draft) => {
    console.log(theme);
    // setAttributes({theme:theme})
    draft["theme"] = theme;
    draft["align"] = "full";
    switch (theme) {
      case "theme6":
        draft["styles"]["bg"] = {};
        draft["styles"]["radius"] ={
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px"
        };

        draft["styles"]["width"] ={
          desktop: "100%",
          tablet :"100%",
          mobile: "100%"
        };

        draft["styles"]["padding"] ={
          "desktop": {
            "top": "10px",
            "left": "0px",
            "right": "0px",
            "bottom": "10px"
          },
          "tablet": {
            "top": "10px",
            "left": "0px",
            "right": "0px",
            "bottom": "10px"
          },
          "mobile": {
            "top": "10px",
            "left": "10px",
            "right": "10px",
            "bottom": "10px"
          }
        };
          draft["styles"]["margin"] ={
          "desktop": {
            "top": "0px",
            "left": "0px",
            "bottom": "0px",
            "right": "0px"
          },
          "tablet": {
            "top": "0px",
            "left": "0px",
            "bottom": "0px",
            "right": "0px"
          },
          "mobile": {
            "top": "0px",
            "left": "0px",
            "bottom": "0px",
            "right": "0px"
          }
        };
        draft["styles"]["contentAlignment"] ="center";
        draft["styles"]["columnGap"] ="20px";
        draft["styles"]["rowGap"] ="20px";
      draft["options"] ={
        "isOpenInNewTab": true,
        "isVariantShow": true,
        "isButtonShow": true,
        "isVisibleCircle": true, 
        "isTagShow": true,
        "isNewTabOpen": true,
        "isHoverRotated": true
      };

        break;




      case "theme7":
        draft["styles"]["bg"] = {
          type: "solid",
          color: "#191919",
        };
          draft["styles"]["radius"] ={
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px"
        };
        
          draft["styles"]["width"] ={
          desktop: "100%",
          tablet :"100%",
          mobile: "100%"
        };
          draft["styles"]["padding"] ={
          "desktop": {
            "top": "50px",
            "left": "0px",
            "bottom": "50px",
            "right": "0px"
          },
          "tablet": {
            "top": "50px",
            "left": "0px",
            "bottom": "50px",
            "right": "0px"
          },
          "mobile": {
            "top": "50px",
            "left": "0px",
            "bottom": "50px",
            "right": "0px"
          }
        };

          draft["styles"]["margin"] ={
          "desktop": {
            "top": "0px",
            "left": "0px",
            "bottom": "0px",
            "right": "0px"
          },
          "tablet": {
            "top": "0px",
            "left": "0px",
            "bottom": "0px",
            "right": "0px"
          },
          "mobile": {
            "top": "0px",
            "left": "0px",
            "bottom": "0px",
            "right": "0px"
          }
        };
        draft["styles"]["contentAlignment"] ="center";
        draft["styles"]["columnGap"] ="100px";
        draft["styles"]["rowGap"] ="100px";
        draft["options"] ={
        "isOpenInNewTab": true,
        "isVariantShow": true,
        "isButtonShow": true,
        "isVisibleCircle": true, 
        "isTagShow": true,
        "isNewTabOpen": true,
        "isHoverRotated": true
      };


        break;
    }
  });

//     getCardContentEdit(theme,attributes,updateCard,setAttributes,isBacked,activeIndex,setActiveIndex)

export function getCardContentEdit(
  theme,
  attributes,
  updateCard,
  setAttributes,
  isBacked,
  activeIndex,
  setActiveIndex
) {
  if (
    ["default", "theme1", "theme2", "theme3", "theme4", "theme5"].includes(
      theme
    )
  ) {
    return (
      <Cards
        attributes={attributes}
        clientId={attributes.clientId}
        updateCard={updateCard}
      />
    );
  }
  if (theme === "theme6") {
    return (
      <Theme6
        attributes={attributes}
        setAttributes={setAttributes}
        isBacked={isBacked}
      />
    );
  }
  if (theme === "theme7") {
    return (
      <SevenInfoCard
        isBackend={isBacked}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        attributes={attributes}
        setAttributes={setAttributes}
      />
    );
  }
}
