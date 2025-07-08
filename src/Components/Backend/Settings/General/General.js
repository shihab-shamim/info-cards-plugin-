import {
  RangeControl,
  PanelBody,
  PanelRow,
  TextControl,
  __experimentalUnitControl as UnitControl,
  Button,
  Dashicon,
  SelectControl,
  ToggleControl,
  FormToggle
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import {
  Label,
  Background,
  InlineMediaUpload,
  ItemsPanel,
  Device,
  BoxControl,
  BButtonGroup,
   BoxControl as BoxControls,
   ShadowControl
} from "../../../../../../bpl-tools/Components";
import { useState } from "react";
import { BDevice } from "../../../../../../bpl-tools/Components/Deprecated";
import { gearIcon } from "../../../../../../bpl-tools/utils/icons";
import { themeSwitch } from "../../../../utils/function";
import { updateData } from "../../../../../../bpl-tools/utils/functions";
import ProductInfoSetting from "../../../Common/theme6/ProductInfoSetting";
import SevenInfoCardSetting from "../../../Common/theme7/SevenInfoCardSetting";
// import ProductInfoSetting from "../../../Common/theme6/ProductInfoSetting";

const General = ({ attributes, setAttributes, updateCard,editDevice }) => {
  const {
    cards,
    layout,
    theme,
    columns,
    columnGap,
    rowGap,
    isImg,
    imgPos,
    imgHeight,
    isTab,
    options,
    themeSevenStyles,
    styles
  } = attributes;
  // console.log("styles",styles?.bg);
  const [device, setDevice] = useState("desktop");
   const newProduct = {
    title: "Alienware Gaming Laptop",
    description:
      "Alienware Laptop is one of the best Gaming Laptops. Every gamer loves it.",
    variant: ["i3", "i5", "i6", "i9"],
    image:
      "https://templates.bplugins.com/wp-content/uploads/2025/05/Alienware-Laptop.png",
    button: {
      text: "Buy Now",
      link: "#",
    },
  };
 const cardData = {
    title: "Serotonin",
    content:
      "Progressively seize enabled experiences through sticky web-readiness. Proactively facilitate one-to-one.",
    tag: {
      name: "View",
      value: "3D",
    },
    tagStyle: {
      name: "#ffffff",
      value: "#FFA88B",
    },
    button: {
      text: "See more",
      link: "#",
      color: "#FFA88B",
    },
    backgroundImage: {
      type: "image",
      image: {
        alt: "",
        url: "https://img.freepik.com/premium-photo/broken-space-ai-technology-generated-image_1112-11087.jpg",
        title: "background",
      },
      position: "top center",
    },
    backgroundColor: "#009C88",
    titleColor: "#f0f8ff",
    descriptionColor: "#b5b7b9",
    shadow: [
      {
        blur: "50px",
        color: "#009C88",
        hOffset: "0px",
        vOffset: "20px",
        spreed: "-20px",
        isInset: false,
      },
    ],
    tagShadow: [
      {
        hOffset: "0px",
        vOffset: "20px",
        blur: "60px",
        spreed: "0px",
        color: "#009C88",
        isInset: false,
      },
      {
        hOffset: "0px",
        vOffset: "18px",
        blur: "36px",
        spreed: "-18px",
        color: "#009C88",
        isInset: false,
      },
    ],
  };

  const onAddCard = () => {
    const newCards = [
      ...cards,
      {
        background: cards?.[0]?.background || {
          color: "#fff",
        },
        img: "",
        title: `Title of the ${cards?.length + 1} number card`,
        desc: `Description of the ${cards?.length + 1} number card`,
        btnLabal: cards?.[0]?.btnLabal || "Button",
        btnUrl: "#",
        isBtn: true,
        cardUrl: "",
      },
    ];
    setAttributes({ cards: newCards });
  };
  function handleCardDelete(index) {
    const newCards = [...cards];
    newCards.splice(index, 1);
    setAttributes({ cards: newCards });
  }
  const onDuplicateCard = (e, index) => {
    e.preventDefault();
    const newCards = [...cards];
    newCards.splice(index, 0, cards[index]);
    setAttributes({ cards: newCards });
  };

  return (
    <>
    <PanelBody className="bPlPanelBody"
        title={__("Themes ", "info-cards")}
        initialOpen={true}>
            <SelectControl
          className="mt20"
          label={__("Theme", "info-cards")}
          labelPosition="left"
          value={theme}
          onChange={(val) => {
            const newCards = cards.map((card) => ({
              ...card,
              background: ["default", "theme1", "theme2", "theme3"].includes(
                val
              )
                ? { color: "#fff" }
                : { color: "#570DF8" },
            }));

            "default" === val &&
              setAttributes({
                cards: newCards,
                theme: val,
                columns: { ...columns, desktop: 3 },
                layout: "vertical",
                titleColor: "#000",
                descColor: "#000",
                isImg: true,
                imgPos: "first",
                cardPadding: { top: "0", right: "0", bottom: "0", left: "0" },
                btnColors: { color: "#fff", bg: "#4527a4" },
                btnHovColors: { color: "#fff", bg: "#fe6601" },
              });
            // updateAllCard("background", { color: "#fff" })

            "theme1" === val &&
              setAttributes({
                cards: newCards,
                theme: val,
                columns: { ...columns, desktop: 3 },
                layout: "vertical",
                titleColor: "#000",
                descColor: "#000",
                isImg: true,
                imgPos: "last",
                cardPadding: { top: "0", right: "0", bottom: "0", left: "0" },
                btnColors: { color: "#fff", bg: "#4527a4" },
                btnHovColors: { color: "#fff", bg: "#fe6601" },
              });
            // updateAllCard("background", { color: "#fff" })

            "theme2" === val &&
              setAttributes({
                cards: newCards,
                theme: val,
                columns: { ...columns, desktop: 3 },
                layout: "vertical",
                titleColor: "#000",
                descColor: "#000",
                isImg: true,
                imgPos: "first",
                cardPadding: {
                  top: "15px",
                  right: "15px",
                  bottom: "15px",
                  left: "15px",
                },
                btnColors: { color: "#fff", bg: "#4527a4" },
                btnHovColors: { color: "#fff", bg: "#fe6601" },
              });
            // updateAllCard("background", { color: "#fff" })

            "theme3" === val &&
              setAttributes({
                cards: newCards,
                theme: val,
                columns: { ...columns, desktop: 2 },
                layout: "horizontal",
                titleColor: "#000",
                descColor: "#000",
                isImg: true,
                imgPos: "first",
                cardPadding: { top: "0", right: "0", bottom: "0", left: "0" },
                btnColors: { color: "#fff", bg: "#4527a4" },
                btnHovColors: { color: "#fff", bg: "#fe6601" },
              });
            // updateAllCard("background", { color: "#fff" })

            "theme4" === val &&
              setAttributes({
                cards: newCards,
                theme: val,
                columns: { ...columns, desktop: 3 },
                layout: "vertical",
                isImg: true,
                imgPos: "first",
                titleColor: "#fff",
                descColor: "#fff",
                cardPadding: { top: "0", right: "0", bottom: "0", left: "0" },
                btnColors: { color: "#fff", bg: "#000" },
                btnHovColors: { color: "#ffffffb3", bg: "#000000b3" },
              });
            // updateAllCard("background", { color: "#570DF8" }));

            "theme5" === val &&
              setAttributes({
                cards: newCards,
                theme: val,
                columns: { ...columns, desktop: 3 },
                layout: "vertical",
                isImg: true,
                imgPos: "first",
                titleColor: "#fff",
                descColor: "#fff",
                cardPadding: { top: "0", right: "0", bottom: "0", left: "0" },
                btnColors: { color: "#fff", bg: "#000" },
                btnHovColors: { color: "#ffffffb3", bg: "#000000b3" },
              });

            // updateAllCard("background", { color: "#570DF8" })

            if (
              val === "theme6" ||
              val === "theme7" ||
              val === "theme8" ||
              val === "theme9" ||
              val === "theme10"
            ) {
              setAttributes(themeSwitch(val, attributes, setAttributes));
            }
          }}
          options={[
            { label: "Default", value: "default" },
            { label: "Theme 1", value: "theme1" },
            { label: "Theme 2", value: "theme2" },
            { label: "Theme 3", value: "theme3" },
            { label: "Theme 4", value: "theme4" },
            { label: "Theme 5", value: "theme5" },
            { label: "Theme 6", value: "theme6" },
            { label: "Theme 7", value: "theme7" },
            { label: "Theme 8", value: "theme8" },
            { label: "Theme 9", value: "theme9" },
            { label: "Theme 10", value: "theme10" },
          ]}
        />


    </PanelBody>
      
      {["default", "theme1", "theme2", "theme3", "theme4", "theme5"].includes(
        theme
      ) && (
        <>
        <PanelBody
        className="bPlPanelBody"
        title={__("Add or Remove Cards", "info-cards")}
      >
        {cards.map((card, index) => {
          const { background, img, btnLabal, btnUrl, isBtn, title, cardUrl } =
            card;

          return (
            <PanelBody
              key={index}
              className="bPlPanelBody"
              title={title}
              initialOpen={false}
            >
              <Background
                label={__("Background", "info-cards")}
                value={background}
                onChange={(val) => updateCard(index, "background", val)}
                isImage={false}
              />

              <TextControl
                className="mt10"
                label={__("Card Url", "info-cards")}
                value={cardUrl}
                onChange={(content) => updateCard(index, "cardUrl", content)}
              />

              {isImg && (
                <InlineMediaUpload
                  value={img}
                  onChange={(val) => updateCard(index, "img", val)}
                  placeholder={__("Enter Image URL", "info-cards")}
                />
              )}

              {/* <BColor
                                        label={__("Description Color", "info-cards")}
                                        value={descColor}
                                        onChange={(val) =>
                                            updateCard(index, "descColor", val)
                                        }
                                    /> */}

              {btnLabal && <Label>{__("Button Url:", "info-cards")}</Label>}
              {btnLabal && (
                <TextControl
                  value={btnUrl}
                  onChange={(content) => updateCard(index, "btnUrl", content)}
                />
              )}

              <ToggleControl
                label={__("Button Show", "info-cards")}
                className="mt10"
                checked={isBtn}
                onChange={(val) => updateCard(index, "isBtn", val)}
              />

              <PanelRow className="itemAction mt20">
                {1 < cards?.length && (
                  <Button
                    className="removeItem"
                    onClick={() => handleCardDelete(index)}
                  >
                    <Dashicon icon="no" /> Delete
                  </Button>
                )}

                <Button
                  className="duplicateItem"
                  onClick={(e) => onDuplicateCard(e, index)}
                >
                  {gearIcon} Duplicate
                </Button>
              </PanelRow>
            </PanelBody>
          );
        })}

        <div className="addItem mt15">
          <Button onClick={() => onAddCard()}>
            <Dashicon icon="plus" /> Add New Card
          </Button>
        </div>
      </PanelBody>

      <PanelBody
        title={__("Layout", "info-cards")}
        className="bPlPanelBody"
        initialOpen={false}
      >
        <SelectControl
          label={__("Layout", "info-cards")}
          labelPosition="left"
          value={layout}
          onChange={(val) => {
            let deskCol = 2;
            if (val == "vertical") {
              deskCol = 3;
            }
            setAttributes({
              layout: val,
              columns: { ...columns, desktop: deskCol },
            });
          }}
          options={[
            { label: "Vertical", value: "vertical" },
            { label: "Horizontal", value: "horizontal" },
          ]}
        />

        <SelectControl
          className="mt20"
          label={__("Theme", "info-cards")}
          labelPosition="left"
          value={theme}
          onChange={(val) => {
            const newCards = cards.map((card) => ({
              ...card,
              background: ["default", "theme1", "theme2", "theme3"].includes(
                val
              )
                ? { color: "#fff" }
                : { color: "#570DF8" },
            }));

            "default" === val &&
              setAttributes({
                cards: newCards,
                theme: val,
                columns: { ...columns, desktop: 3 },
                layout: "vertical",
                titleColor: "#000",
                descColor: "#000",
                isImg: true,
                imgPos: "first",
                cardPadding: { top: "0", right: "0", bottom: "0", left: "0" },
                btnColors: { color: "#fff", bg: "#4527a4" },
                btnHovColors: { color: "#fff", bg: "#fe6601" },
              });
            // updateAllCard("background", { color: "#fff" })

            "theme1" === val &&
              setAttributes({
                cards: newCards,
                theme: val,
                columns: { ...columns, desktop: 3 },
                layout: "vertical",
                titleColor: "#000",
                descColor: "#000",
                isImg: true,
                imgPos: "last",
                cardPadding: { top: "0", right: "0", bottom: "0", left: "0" },
                btnColors: { color: "#fff", bg: "#4527a4" },
                btnHovColors: { color: "#fff", bg: "#fe6601" },
              });
            // updateAllCard("background", { color: "#fff" })

            "theme2" === val &&
              setAttributes({
                cards: newCards,
                theme: val,
                columns: { ...columns, desktop: 3 },
                layout: "vertical",
                titleColor: "#000",
                descColor: "#000",
                isImg: true,
                imgPos: "first",
                cardPadding: {
                  top: "15px",
                  right: "15px",
                  bottom: "15px",
                  left: "15px",
                },
                btnColors: { color: "#fff", bg: "#4527a4" },
                btnHovColors: { color: "#fff", bg: "#fe6601" },
              });
            // updateAllCard("background", { color: "#fff" })

            "theme3" === val &&
              setAttributes({
                cards: newCards,
                theme: val,
                columns: { ...columns, desktop: 2 },
                layout: "horizontal",
                titleColor: "#000",
                descColor: "#000",
                isImg: true,
                imgPos: "first",
                cardPadding: { top: "0", right: "0", bottom: "0", left: "0" },
                btnColors: { color: "#fff", bg: "#4527a4" },
                btnHovColors: { color: "#fff", bg: "#fe6601" },
              });
            // updateAllCard("background", { color: "#fff" })

            "theme4" === val &&
              setAttributes({
                cards: newCards,
                theme: val,
                columns: { ...columns, desktop: 3 },
                layout: "vertical",
                isImg: true,
                imgPos: "first",
                titleColor: "#fff",
                descColor: "#fff",
                cardPadding: { top: "0", right: "0", bottom: "0", left: "0" },
                btnColors: { color: "#fff", bg: "#000" },
                btnHovColors: { color: "#ffffffb3", bg: "#000000b3" },
              });
            // updateAllCard("background", { color: "#570DF8" }));

            "theme5" === val &&
              setAttributes({
                cards: newCards,
                theme: val,
                columns: { ...columns, desktop: 3 },
                layout: "vertical",
                isImg: true,
                imgPos: "first",
                titleColor: "#fff",
                descColor: "#fff",
                cardPadding: { top: "0", right: "0", bottom: "0", left: "0" },
                btnColors: { color: "#fff", bg: "#000" },
                btnHovColors: { color: "#ffffffb3", bg: "#000000b3" },
              });

            // updateAllCard("background", { color: "#570DF8" })

            if (
              val === "theme6" ||
              val === "theme7" ||
              val === "theme8" ||
              val === "theme9" ||
              val === "theme10"
            ) {
              setAttributes(themeSwitch(val, attributes, setAttributes));
            }
          }}
          options={[
            { label: "Default", value: "default" },
            { label: "Theme 1", value: "theme1" },
            { label: "Theme 2", value: "theme2" },
            { label: "Theme 3", value: "theme3" },
            { label: "Theme 4", value: "theme4" },
            { label: "Theme 5", value: "theme5" },
            { label: "Theme 6", value: "theme6" },
            { label: "Theme 7", value: "theme7" },
            { label: "Theme 8", value: "theme8" },
            { label: "Theme 9", value: "theme9" },
            { label: "Theme 10", value: "theme10" },
          ]}
        />

        <PanelRow className="mt20">
          <Label className="mb5">{__("Columns:", "info-cards")}</Label>
          <BDevice device={device} onChange={(val) => setDevice(val)} />
        </PanelRow>

        <RangeControl
          value={columns[device]}
          onChange={(val) => {
            setAttributes({ columns: { ...columns, [device]: val } });
          }}
          min={1}
          max={6}
          step={1}
          beforeIcon="grid-view"
        />

        <UnitControl
          className="mt20"
          label={__("Column Gap", "info-cards")}
          labelPosition="left"
          value={columnGap}
          onChange={(val) => setAttributes({ columnGap: val })}
        />

        <UnitControl
          className="mt20"
          label={__("Row Gap", "info-cards")}
          labelPosition="left"
          value={rowGap}
          onChange={(val) => setAttributes({ rowGap: val })}
        />
      </PanelBody>

      <PanelBody
        title={__("Elements", "info-cards")}
        className="bPlPanelBody"
        initialOpen={false}
      >
        <ToggleControl
          help={__("Open Card Url In New Tab", "info-cards")}
          label={__("Open In New Tab", "info-cards")}
          checked={isTab}
          onChange={(val) => setAttributes({ isTab: val })}
        />

        <ToggleControl
          className="mt10"
          label={__("Show Image", "info-cards")}
          checked={isImg}
          onChange={(val) => setAttributes({ isImg: val })}
        />

        {isImg && (
          <>
            <SelectControl
              className="mt20"
              label={__("Image Position", "info-cards")}
              labelPosition="left"
              value={imgPos}
              onChange={(val) => setAttributes({ imgPos: val })}
              options={[
                {
                  label: "vertical" === layout ? "Top" : "Left",
                  value: "first",
                },
                {
                  label: "vertical" === layout ? "Bottom" : "Right",
                  value: "last",
                },
              ]}
            />

            <UnitControl
              className="mt20"
              label={__("Image Height", "info-cards")}
              labelPosition="left"
              value={imgHeight}
              onChange={(val) => setAttributes({ imgHeight: val })}
            />
          </>
        )}
      </PanelBody>
        
        </>
      )}

      {
        theme ==="theme6" &&  <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Add or Remove Cards ", "info-cards")}
        initialOpen={false}
      >
        <ItemsPanel
          newItem={newProduct}
          design="sortable"
          attributes={attributes}
          setAttributes={setAttributes}
          arrKey="productsInfo"
          itemLabel="Card"
          ItemSettings={ProductInfoSetting}
        />
      </PanelBody >

      <PanelBody className="bPlPanelBody"
        title={__("Layout ", "info-cards")}
        initialOpen={false}>
           <PanelRow><Label>Section Width</Label> <Device/> </PanelRow>
                    <UnitControl step={1} label={__(" ", "info-cards")} value={styles?.width[editDevice]} onChange={(value)=>setAttributes({styles:updateData(styles,value,"width",editDevice)})} />
          
                     <PanelRow><Label>Section Padding</Label> <Device/> </PanelRow>
                    <BoxControls label={__(" ", "info-cards")} values={styles?.padding[editDevice]} onChange={(value)=>setAttributes({styles:updateData(styles,value,"padding",editDevice)})} />
          
                     <PanelRow><Label>Section Margin</Label> <Device/> </PanelRow>
                    <BoxControls label={__(" ", "info-cards")} values={styles?.margin[editDevice]} onChange={(value)=>setAttributes({styles:updateData(styles,value,"margin",editDevice)})} />
          
          
                      <BButtonGroup  style={{marginTop:"10px"}}  value={styles?.contentAlignment}  label={__("Alignment ", "info-cards")} options={[
                        {label:"Left",value:"left"},
                        {label:"Center",value:"center"},
                        {label:"Right",value:"right"}
                      ]} 
                      onChange={(value)=>setAttributes({styles:updateData(styles,value,"contentAlignment")})}
                      />
          
                      <Label>Column Gap  </Label>
                      <UnitControl step={1} value={styles?.columnGap} onChange={(value)=>setAttributes({styles:updateData(styles,value,"columnGap")})}   />
                      <Label>Row Gap </Label>
                      <UnitControl  step={1} value={styles?.rowGap} onChange={(value)=>setAttributes({styles:updateData(styles,value,"rowGap")})}   /> 
                
                </PanelBody>
          
             

      <PanelBody
        className="bPlPanelBody"
        title={__("Options", "info-cards")}
        initialOpen={false}
      >
        <Label>
          Open in a New Tab{" "}
          <FormToggle
            checked={options?.isOpenInNewTab}
            onChange={() =>
              setAttributes({
                options: updateData(
                  options,
                  !options?.isOpenInNewTab,
                  "isOpenInNewTab"
                ),
              })
            }
          />
        </Label>

        <Label>
          Show The Variant{" "}
          <FormToggle
            checked={options?.isVariantShow}
            onChange={() =>
              setAttributes({
                options: updateData(
                  options,
                  !options?.isVariantShow,
                  "isVariantShow"
                ),
              })
            }
          />
        </Label>
        
        <Label>
          Display the Button{" "}
          <FormToggle
            checked={options?.isButtonShow}
            onChange={() =>
              setAttributes({
                options: updateData(
                  options,
                  !options?.isButtonShow,
                  "isButtonShow"
                ),
              })
            }
          />
        </Label>
        <Label>
            Background Circle {" "}
          <FormToggle
            checked={options?.isVisibleCircle}
            onChange={() =>
              setAttributes({
                options: updateData(
                  options,
                  !options?.isVisibleCircle,
                  "isVisibleCircle"
                ),
              })
            }
          />
        </Label>
      </PanelBody>
    </>
      }
        {
        theme ==="theme7" &&  <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Add or Remove Cards", "info-cards")}
        initialOpen={false}
      >
        <ItemsPanel
          newItem={cardData}
          design="sortable"
          attributes={attributes}
          setAttributes={setAttributes}
          arrKey="themeSevenInfo"
          itemLabel="Card"
          ItemSettings={SevenInfoCardSetting}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Layout", "info-cards")}
        initialOpen={false}
      >
        <PanelRow>
          <Label className="mt0">Section Width</Label>
          <Device />
        </PanelRow>
        <UnitControl
          value={styles?.width[editDevice]}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "width", editDevice),
            })
          }
        />
        <PanelRow>
          {" "}
          <Label className="mt0"> Section Padding</Label> <Device />{" "}
        </PanelRow>
        <BoxControl
          values={styles?.padding[editDevice]}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "padding", editDevice),
            })
          }
        />

        <PanelRow>
          {" "}
          <Label className="mt0"> Section Margin</Label> <Device />{" "}
        </PanelRow>
        <BoxControl
          values={styles?.margin[editDevice]}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "margin", editDevice),
            })
          }
        />

       

        <BButtonGroup
          value={styles?.contentAlignment}
          style={{ marginTop: "5px" }}
          label={__(" Alignment", "info-cards")}
          options={[
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ]}
          onChange={(value) =>
            setAttributes({ styles: updateData(styles, value, "contentAlignment") })
          }
        />

        <Label>Column Gap</Label>
        <UnitControl
          value={styles?.columnGap}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "columnGap"),
            })
          }
        />

        <Label>Row Gap Gap</Label>
        <UnitControl
          value={themeSevenStyles?.gap?.row}
          onChange={(value) =>
            setAttributes({ themeSevenStyles: updateData(themeSevenStyles, value, "gap", "row") })
          }
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Options", "info-cards")}
        initialOpen={false}
      >
        <Label>
          {" "}
          <strong>Enable Tag Visibility</strong>{" "}
          <FormToggle
            checked={options?.isTagShow}
            onChange={() =>
              setAttributes({
                options: updateData(options, !options?.isTagShow, "isTagShow"),
              })
            }
          />
        </Label>

        <Label>
          {" "}
          <strong>Enable Button Visibility</strong>{" "}
          <FormToggle
            checked={options?.isButtonShow}
            onChange={() =>
              setAttributes({
                options: updateData(
                  options,
                  !options?.isButtonShow,
                  "isButtonShow"
                ),
              })
            }
          />
        </Label>

        <Label>
          {" "}
          <strong>Link open in new tab</strong>{" "}
          <FormToggle
            checked={options?.isNewTabOpen}
            onChange={() =>
              setAttributes({
                options: updateData(
                  options,
                  !options?.isNewTabOpen,
                  "isNewTabOpen"
                ),
              })
            }
          />
        </Label>

        <Label>
          {" "}
          <strong>The element rotates on hover</strong>{" "}
          <FormToggle
            checked={options?.isHoverRotated}
            onChange={() =>
              setAttributes({
                options: updateData(
                  options,
                  !options?.isHoverRotated,
                  "isHoverRotated"
                ),
              })
            }
          />
        </Label>
      </PanelBody>

    </>
      }
    </>
  );
};

export default General;
