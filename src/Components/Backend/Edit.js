import { useBlockProps } from "@wordpress/block-editor";
import { useEffect, useState } from "react";
import { produce } from "immer";
import { withSelect } from "@wordpress/data";


import Style from '../Common/Style';
import Settings from "./Settings/Settings";
import {  getCardContentEdit } from "../../utils/function";
import { usePremiumInEditor } from "../../../../bpl-tools/hooks";



const Edit = ({ attributes, setAttributes, clientId ,device}) => {
  const { isPremium } = usePremiumInEditor("ssbUtils", "ssbPremiumChecker");
  const { cards,theme } = attributes;
 const isBacked=true;
 const [activeIndex, setActiveIndex] = useState(0);
 const [isProModalOpen, setIsProModalOpen] = useState(false);

  useEffect(() => {
    clientId && setAttributes({ clientId });
  }, [clientId]);

  function updateCard(index, property, value) {
    const cardsCopy = produce(cards, (draft) => {
      draft[index][property] = value;
    });
    setAttributes({ cards: cardsCopy });
  }
 const premiumProps = { isPremium, setIsProModalOpen };
 

  return (
    <div {...useBlockProps()}>
      <Settings attributes={attributes} isProModalOpen={isProModalOpen} setIsProModalOpen={setIsProModalOpen} setAttributes={setAttributes} updateCard={updateCard} clientId={clientId} device={device} activeIndex={activeIndex} isPremium={isPremium} />

      <div id={`icbCards-${clientId}`}>
        <Style isBack = {true} attributes={attributes} id={`icbCards-${clientId}`} />

      {
        getCardContentEdit(theme,attributes,updateCard,setAttributes,isBacked,activeIndex,setActiveIndex,premiumProps)
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



