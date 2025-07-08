import {
  InspectorControls,
  BlockControls,
  AlignmentToolbar,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";


import { TabPanel } from "@wordpress/components";

import General from "./General/General";
import Style from "./Style/Style";

export default function ({ attributes, setAttributes, updateCard, device,activeIndex }) {
  const {alignment}=attributes;
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
    <>
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
                  editDevice={device}
                />
              )}

              {"style" === tab.name && (
                <Style
                  attributes={attributes}
                  setAttributes={setAttributes}
                  updateCard={updateCard}
                  editDevice={device}
                  activeIndex={activeIndex}
                />
              )}
            </>
          )}
        </TabPanel>
      </InspectorControls>
      <BlockControls>
        <AlignmentToolbar
          value={alignment}
          onChange={(val) => setAttributes({ alignment: val })}
          describedBy={__("Block Name Alignment")}
          alignmentControls={[
            {
              title: __("Block Name in left", "textdomain"),
              align: "left",
              icon: "align-left",
            },
            {
              title: __("Block Name in center", "textdomain"),
              align: "center",
              icon: "align-center",
            },
            {
              title: __("Block Name in right", "textdomain"),
              align: "right",
              icon: "align-right",
            },
          ]}
        />
      </BlockControls>
    </>
  );
}
