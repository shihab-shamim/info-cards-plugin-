import { useBlockProps } from "@wordpress/block-editor";
import { useEffect, useState } from "react";
import { produce } from "immer";
import { withSelect } from "@wordpress/data";


import Style from '../Common/Style';
import Settings from "./Settings/Settings";
import {  getCardContentEdit } from "../../utils/function";



const Edit = ({ attributes, setAttributes, clientId ,device}) => {
  const { cards,theme } = attributes;
 const isBacked=true;
 const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    clientId && setAttributes({ clientId });
  }, [clientId]);

  function updateCard(index, property, value) {
    const cardsCopy = produce(cards, (draft) => {
      draft[index][property] = value;
    });
    setAttributes({ cards: cardsCopy });
  }

  return (
    <div {...useBlockProps()}>
      <Settings attributes={attributes} setAttributes={setAttributes} updateCard={updateCard} clientId={clientId} device={device} activeIndex={activeIndex} />

      <div id={`icbCards-${clientId}`}>
        <Style attributes={attributes} id={`icbCards-${clientId}`} />

      {
        getCardContentEdit(theme,attributes,updateCard,setAttributes,isBacked,activeIndex,setActiveIndex)
      }



      </div>
    </div>
  );
}
export default withSelect((select) => {
  const { getDeviceType } = select('core/editor');
  return {
    device: getDeviceType()?.toLowerCase(),
  };
})(Edit);



