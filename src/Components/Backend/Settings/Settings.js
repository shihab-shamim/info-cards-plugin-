import { InspectorControls } from "@wordpress/block-editor";

import { TabPanel } from "@wordpress/components";

import General from "./General/General";
import Style from "./Style/Style";

export default function ({ attributes, setAttributes, updateCard,device }) {
  //   const updateAllCard = (property, value) => {
  //     // const cardsCopy = produce(cards, (draft) => {
  //     // 	draft[index][property] = value;
  //     //   });
  //     //   setAttributes({ cards: cardsCopy });
  //     const newCards = [...cards];
  //     newCards.map((social, index) => {
  //       newCards[index][property] = value;
  //     });
  //     setAttributes({ cards: newCards });
  //   };

  return (
    <InspectorControls>
      <TabPanel
        className="bPlTabPanel"
        activeClass="activeTab"
        tabs={[
          { name: "general", title: "General" },
          { name: "style", title: "Style" },
        ]}
      >
        {(tab) => (
          <>
            {"general" === tab.name && (
              <General
                attributes={attributes}
                setAttributes={setAttributes}
                updateCard={updateCard}
                device={device}
              />
            )}

            {"style" === tab.name && (
              <Style
                attributes={attributes}
                setAttributes={setAttributes}
                updateCard={updateCard}
                device={device}

              />
            )}
          </>
        )}
      </TabPanel>
    </InspectorControls>
  );
}
