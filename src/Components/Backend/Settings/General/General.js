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
import ThemeEightInfoSetting from "../../../Common/theme8/ThemeEightInfoSetting";

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
    styles,
    productsInfo
  } = attributes;



 
  const [device, setDevice] = useState("desktop");
   const themeSixNewCard = {
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
 const themeSevenNewCard = {
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
   const themeEightNewCard = {
    id: 1,
    name: "Demo Name",
    title: "Demo Title ",
    company: "Demo Company",
    status: "Online",
    bio: "Developing effective marketing strategies for brands. Specializing in digital marketing and growth.",
    state: [
      { name: "posts", quantity: 70 },
      { name: "followers", quantity: 5640 },
      { name: "following", quantity: 5010 },
    ],
    profileImg:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070",
    social: [
      {
        name: "twitter",
        link: "#",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>`,
      },
      {
        name: "instagram",
        link: "#",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
      },
      {
        name: "linkedin",
        link: "#",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
      },
      {
        name: "email",
        link: "#",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>`,
      },
    ],
    button: {
      text: "Message",
      link: "#",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="message-icon"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
    },
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
          newItem={themeSixNewCard}
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
          newItem={themeSevenNewCard}
          design="sortable"
          attributes={attributes}
          setAttributes={setAttributes}
          arrKey="productsInfo"
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

        <Label>Row Gap </Label>
        <UnitControl
          value={styles?.rowGap}
          onChange={(value) =>
            setAttributes({ styles: updateData(styles, value, "rowGap") })
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

      {
        theme==="theme8" &&  <>
      <PanelBody
        className="bPlPanelBody"
        title={__(" Cards", "info-cards")}
        initialOpen={false}
      >
        <ItemsPanel
          newItem={themeEightNewCard}
          design="sortable"
          attributes={attributes}
          setAttributes={setAttributes}
          arrKey="productsInfo"
          itemLabel="Card"
          ItemSettings={ThemeEightInfoSetting}
        />
      </PanelBody>

 
      <PanelBody
        className="bPlPanelBody"
        title={__("Layout", "info-cards")}
        initialOpen={false}
      >
         <BoxControl
          label={__("Margin", "info-cards")}
          values={styles?.margin}
          onChange={(value) =>
            setAttributes({ styles: updateData(styles, value, "margin") })
          }
        />
        <BoxControl
          label={__("Padding", "info-cards")}
          values={styles?.padding}
          onChange={(value) =>
            setAttributes({ styles: updateData(styles, value, "padding") })
          }
        />
        <PanelRow>
          <Label>Columns</Label>
          <Device />
        </PanelRow>
        <RangeControl
          value={styles?.columns[device]}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "columns", device),
            })
          }
        />

        <PanelRow>
          <Label>Column Gap</Label> <Device />{" "}
        </PanelRow>

        <UnitControl
          value={styles?.columnGap?.[device]}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "columnGap", device),
            })
          }
        />

        <PanelRow>
          <Label>Row Gap</Label> <Device />{" "}
        </PanelRow>

        <UnitControl
          value={styles?.rowGap?.[device]}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "rowGap", device),
            })
          }
        />
      </PanelBody>

      {/* options  */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Options", "info-cards")}
        initialOpen={false}
      >
        <Label>
          {" "}
          <FormToggle
            checked={options?.isStatusShow}
            onChange={() =>
              setAttributes({
                options: updateData(
                  options,
                  !options?.isStatusShow,
                  "isStatusShow"
                ),
              })
            }
          />{" "}
          <strong>Show Status</strong>
        </Label>

        <Label>
          {" "}
          <FormToggle
            checked={options?.isStateShow}
            onChange={() =>
              setAttributes({
                options: updateData(
                  options,
                  !options?.isStateShow,
                  "isStateShow"
                ),
              })
            }
          />{" "}
          <strong>Show State</strong>
        </Label>

        <Label>
          {" "}
          <FormToggle
            checked={options?.isSocialMediaShow}
            onChange={() =>
              setAttributes({
                options: updateData(
                  options,
                  !options?.isSocialMediaShow,
                  "isSocialMediaShow"
                ),
              })
            }
          />{" "}
          <strong>Show Social Media</strong>
        </Label>

        <Label>
          {" "}
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
          />{" "}
          <strong>Show Button</strong>
        </Label>

        <Label>
          {" "}
          <FormToggle
            checked={options?.isOpenUrlNewTab}
            onChange={() =>
              setAttributes({
                options: updateData(
                  options,
                  !options?.isOpenUrlNewTab,
                  "isOpenUrlNewTab"
                ),
              })
            }
          />{" "}
          <strong>Open the URL in a new tab</strong>
        </Label>
      </PanelBody>
    </>
      }
    </>
  );
};

export default General;
