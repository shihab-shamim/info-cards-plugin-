import { __ } from "@wordpress/i18n";
import { produce } from "immer";

import {
  PanelBody,
  PanelRow,
  __experimentalBoxControl as BoxControl,
  __experimentalUnitControl as UnitControl,
  SelectControl,
  contentAlign,
  BorderControl 
} from "@wordpress/components";

import {
  Background,
  ColorsControl,
  Typography,
  ShadowControl,
  ColorControl,
  Label,
  Device,
  BButtonGroup,
  BoxControl as BoxControls,
  IconLibrary
} from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../bpl-tools/utils/functions";
import { RangeControl } from "@wordpress/components";

const Style = ({ attributes, setAttributes ,editDevice,activeIndex}) => {
  const {
    theme,
    background,
    padding,
    cardPadding,
    cardShadow,
    contentPadding,
    titleColor,
    titleTypo,
    descColor,
    descTypo,
    btnColors,
    btnHovColors,
    btnAlign,
    btnTypo,
    btnPadding,
    cardRadius,
    btnRadius,
    styles,
    options,
    productsInfo
  } = attributes;

  return (
    <>
      {["default", "theme1", "theme2", "theme3", "theme4", "theme5"].includes(
        theme
      ) && (
        <>
          <PanelBody
            className="bPlPanelBody"
            title={__("Cards", "info-cards")}
            initialOpen={true}
          >
            <Background
              label={__("background", "info-cards")}
              defaults={{ color: "#0000" }}
              value={background}
              onChange={(val) => setAttributes({ background: val })}
            />

            <PanelRow className="mt20">
              <BoxControl
                label={__("Padding", "info-cards")}
                values={padding}
                resetValues={{
                  top: "0px",
                  right: "0x",
                  bottom: "0px",
                  left: "0px",
                }}
                onChange={(value) => setAttributes({ padding: value })}
              />
            </PanelRow>
          </PanelBody>

          {/* Card */}
          <PanelBody
            initialOpen={false}
            title={__("Card", "info-cards")}
            className="bPlPanelBody"
          >
            <BoxControl
              label={__("Padding", "info-cards")}
              values={cardPadding}
              resetValues={{
                top: "0px",
                right: "0x",
                bottom: "0px",
                left: "0px",
              }}
              onChange={(value) => setAttributes({ cardPadding: value })}
            />

            <UnitControl
              className="mt20"
              label={__("Border radious", "info-cards")}
              labelPosition="left"
              value={cardRadius}
              onChange={(val) => setAttributes({ cardRadius: val })}
            />

            <ShadowControl
              className="mt20"
              value={cardShadow}
              onChange={(val) => setAttributes({ cardShadow: val })}
              produce={produce}
            />
          </PanelBody>

          {/* Content */}
          <PanelBody
            initialOpen={false}
            title={__("Content", "info-cards")}
            className="bPlPanelBody"
          >
            <SelectControl
              label={__("Alignment", "info-cards")}
              labelPosition="left"
              value={contentAlign}
              onChange={(val) => setAttributes({ contentAlign: val })}
              options={[
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
              ]}
            />

            <PanelRow className="mt20">
              <BoxControl
                label={__("Padding", "info-cards")}
                values={contentPadding}
                resetValues={{
                  top: "0px",
                  right: "0x",
                  bottom: "0px",
                  left: "0px",
                }}
                onChange={(value) => setAttributes({ contentPadding: value })}
              />
            </PanelRow>
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Title", "info-cards")}
            initialOpen={false}
          >
            <Typography
              label={__("Typography", "info-cards")}
              value={titleTypo}
              onChange={(val) => setAttributes({ titleTypo: val })}
              defaults={{ fontSize: 16 }}
              produce={produce}
            />

            <ColorControl
              label={__("Color", "info-cards")}
              value={titleColor}
              onChange={(val) => setAttributes({ titleColor: val })}
            />
          </PanelBody>

          <PanelBody
            className="bPlPanelBody"
            title={__("Description", "info-cards")}
            initialOpen={false}
          >
            <Typography
              label={__("Typography", "info-cards")}
              value={descTypo}
              onChange={(val) => setAttributes({ descTypo: val })}
              produce={produce}
            />

            <ColorControl
              label={__("Color", "info-cards")}
              value={descColor}
              onChange={(val) => setAttributes({ descColor: val })}
            />
          </PanelBody>

          {/* Button */}
          <PanelBody
            initialOpen={false}
            title={__("Button", "info-cards")}
            className="bPlPanelBody"
          >
            <Typography
              label={__("Typography", "info-cards")}
              value={btnTypo}
              onChange={(val) => setAttributes({ btnTypo: val })}
            />

            <SelectControl
              className="mt20"
              label={__("Alignment", "info-cards")}
              labelPosition="left"
              value={btnAlign}
              onChange={(val) => setAttributes({ btnAlign: val })}
              options={[
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
              ]}
            />

            <ColorsControl
              className="mt20"
              label={__("Colors", "info-cards")}
              value={btnColors}
              onChange={(val) => setAttributes({ btnColors: val })}
            />

            <ColorsControl
              label={__("Hover Colors", "info-cards")}
              value={btnHovColors}
              onChange={(val) => setAttributes({ btnHovColors: val })}
            />

            <PanelRow className="mt20">
              <BoxControl
                label={__("Padding", "info-cards")}
                values={btnPadding}
                resetValues={{
                  top: "0px",
                  right: "0x",
                  bottom: "0px",
                  left: "0px",
                }}
                onChange={(value) => setAttributes({ btnPadding: value })}
              />
            </PanelRow>

            <UnitControl
              className="mt20"
              label={__("Border Radious", "info-cards")}
              labelPosition="left"
              value={btnRadius}
              onChange={(val) => setAttributes({ btnRadius: val })}
            />
          </PanelBody>
        </>
      )}


     {theme ==="theme6" &&  <>
      <PanelBody
      
        className="bPlPanelBody"
        title={__(" Section", "info-cards")}
        initialOpen={false}
      >
          <Background label={__(" Background", "info-cards")} value={styles?.bg} onChange={(value)=>setAttributes({styles:updateData(styles,value,"bg")})} />
          <BoxControls label={__("Radius ", "info-cards")} values={styles?.radius} onChange={(value)=>setAttributes({styles:updateData(styles,value,"radius")})} />
       
        
      
      </PanelBody>

      <PanelBody className="bPlPanelBody"
        title={__("Card", "info-cards")}
        initialOpen={false}>
          <UnitControl  step={1} label={__("Width ", "info-cards")} value={styles?.card?.width} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","width")})} />
          <UnitControl step={1} style={{marginTop:"10px"}} label={__("Height ", "info-cards")} value={styles?.card?.height} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","height")})} />

          <Background label={__(" Background", "info-cards")}  value={styles?.card?.bg} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","bg")})} />



            <BoxControls style={{marginTop:"10px"}} label={__("Padding ", "info-cards")} values={styles?.card?.padding} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","padding")})} />
            <BoxControls style={{marginTop:"10px"}} label={__("Radius ", "info-cards")} values={styles?.card?.radius} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","radius")})} />


              <ShadowControl value={styles?.card?.shadow} label={__(" Shadow", "info-cards")} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","shadow")})}  />

        
      </PanelBody>

      <PanelBody className="bPlPanelBody"
        title={__("Image", "info-cards")}
        initialOpen={false}>
           <UnitControl step={1}  label={__("Width ", "info-cards")} value={styles?.card?.image?.width} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","image","width")})} />
           {/* <UnitControl step={1} style={{marginTop:"10px"}} label={__("Height ", "info-cards")} value={styles?.card?.image?.height} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","image","height")})} /> */}

                        <SelectControl
                          label={ __( 'Select Image Fit' ) }
                          value={ styles?.card?.image?.position } 
                              onChange={ ( value ) => setAttributes({styles:updateData(styles,value,"card","image","position")}) }
              options={ [
                { value: null, label: 'Select a Image Position', disabled: true },
                { value: 'cover', label: 'Cover' },
                { value: 'contain', label: 'Contain' },
                { value: 'scale-down', label: 'Scale-Down' },
              ] }
/>
      </PanelBody>


     {options?.isVisibleCircle && <PanelBody 
      className="bPlPanelBody"
        title={__("Circle", "info-cards")}
        initialOpen={false}>
            <Background  label={__("Background ", "info-cards")} value={styles?.card?.circle?.bg} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","circle","bg")})} />
          <UnitControl  step={1} label={__("Circle Radius ", "info-cards")} value={styles?.card?.circle?.width} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","circle","width")})} />
          {/* <UnitControl  style={{marginTop:"10px"}}   label={__("Height ", "info-cards")} value={styles?.card?.circle?.height} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","circle","height")})} /> */}

            <BoxControls style={{marginTop:"10px"}}  label={__("Border Radius ", "info-cards")} values={styles?.card?.circle?.radius} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","circle","radius")})}  />


      </PanelBody>}

      <PanelBody className="bPlPanelBody"
        title={__("Title", "info-cards")}
        initialOpen={false}>

          <ColorControl label={__("Color ", "info-cards")} value={styles?.card?.title?.color} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","title","color")})}  />
          <Typography label={__("Typography ", "info-cards")} value={styles?.card?.title?.typo} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","title","typo")})}  />

            <BButtonGroup style={{marginTop:"10px"}} label={__("Alignment", "info-cards")} value={styles?.card?.title?.alignment} options={[
              {label:"Left" ,value:"left"},
              {label:"Center" ,value:"center"},
              {label:"Right" ,value:"right"},
              {label:"Justify" ,value:"justify"}
            ]}
            onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","title","alignment")})}
            
            />
      </PanelBody>

       <PanelBody className="bPlPanelBody"
        title={__("Description", "info-cards")}
        initialOpen={false}>

          <ColorControl label={__("Color ", "info-cards")} value={styles?.card?.description?.color} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","description","color")})}  />
          <Typography label={__("Typography ", "info-cards")} value={styles?.card?.description?.typo} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","description","typo")})}  />

            <BButtonGroup label={__("Alignment", "info-cards")} value={styles?.card?.description?.alignment} options={[
              {label:"Left" ,value:"left"},
              {label:"Center" ,value:"center"},
              {label:"Right" ,value:"right"},
              {label:"Justify" ,value:"justify"}
            ]}
            onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","description","alignment")})}
            
            />
      </PanelBody>

    {  options?.isVariantShow && <PanelBody
      className="bPlPanelBody"
        title={__("Variants", "info-cards")}
        initialOpen={false}
      >
      

                <ColorControl  label={__(" Color", "info-cards")} value={styles?.card?.variantState?.color} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","variantState","color")})} />
                <ColorControl  label={__("Background Color", "info-cards")} value={styles?.card?.variantState?.bg} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","variantState","bg")})} />

                <ColorControl  label={__("Active Color", "info-cards")} value={styles?.card?.variantState?.active?.color} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","variantState","active","color")})} />
                <ColorControl  label={__(" Active Background Color", "info-cards")} value={styles?.card?.variantState?.active?.bg} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","variantState","active","bg")})} />
                  <Typography value={styles?.card?.variantState?.typo}  onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","variantState","typo")})} />

                <BoxControls label={__("Padding ", "info-cards")} values={styles?.card?.variantState?.padding} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","variantState","padding")})}  />
                <BoxControls label={__("Radius ", "info-cards")} values={styles?.card?.variantState?.radius} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","variantState","radius")})}  />
                  <ShadowControl value={styles?.card?.variantState?.shadow} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","variantState","shadow")})} />

                    <SelectControl 
                    label={__("Justify Content ", "info-cards")}
                    value={styles?.card?.variantState?.alignment}
                   options ={ [
  { value: null, label: 'Select a Justify-Content', disabled: true },
  { value: 'flex-start', label: 'Flex Start' },
  { value: 'flex-end', label: 'Flex End' },
  { value: 'center', label: 'Center' },
  { value: 'space-between', label: 'Space Between' },
  { value: 'space-around', label: 'Space Around' },
  { value: 'space-evenly', label: 'Space Evenly' }
]} 
onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","variantState","alignment")})}
                    />

                    <Label>Gap <UnitControl step={1}  value={styles?.card?.variantState?.gap} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","variantState","gap")})} /></Label>

      </PanelBody>}
 
 {
  options?.isButtonShow && <PanelBody 
   className="bPlPanelBody"
        title={__("Button", "info-cards")}
        initialOpen={false}
  >
     
    
                 <Label className="mt0">Width <UnitControl step={1} value={styles?.card?.button?.width} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","button","width")})} /> </Label>

                 <BButtonGroup
                 style={{marginTop:"10px"}}
                 label= {__("Alignment", "info-cards")}
                  value={styles?.card?.button?.alignment}  options={[
              {label:"Left" ,value:"left"},
              {label:"Center" ,value:"center"},
              {label:"Right" ,value:"right"},
              
            ]} 
            onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","button","alignment")})}
             />



            <ColorControl  label={__(" Color", "info-cards")} value={styles?.card?.button?.color} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","button","color")})} />
                <ColorControl  label={__("Background Color", "info-cards")} value={styles?.card?.button?.bg} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","button","bg")})} />

                <ColorControl  label={__("Hover Color", "info-cards")} value={styles?.card?.button?.hover?.color} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","button","hover","color")})} />
                <ColorControl  label={__(" Hover Background Color", "info-cards")} value={styles?.card?.button?.hover?.bg} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","button","hover","bg")})} />
                 
                  <Typography label={__(" Typography", "info-cards")}  value={styles?.card?.button?.typo} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","button","typo")})}  />

                <BoxControls  label={__("Padding ", "info-cards")} values={styles?.card?.button?.padding} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","button","padding")})} />

                <BoxControls  label={__("Radius ", "info-cards")} values={styles?.card?.button?.radius} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","button","radius")})} />

                <ShadowControl  label={__("Shadow ", "info-cards")} value={styles?.card?.button?.shadow} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","button","shadow")})} />




  </PanelBody>

 }

    </>}
     
      {
        theme ==="theme7" && <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Section", "info-cards")}
        initialOpen={false}
      >
        <Background
          label={__("Background", "info-cards")}
          value={styles?.bg}
          onChange={(value) =>
            setAttributes({ styles: updateData(styles, value, "bg") })
          }
        />

        <BoxControls
          label={__("Radius", "info-cards")}
          values={styles?.radius}
          onChange={(value) =>
            setAttributes({ styles: updateData(styles, value, "radius") })
          }
        />
       
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Card", "info-cards")}
        initialOpen={false}
      >
         <PanelRow>
          <Label className="mt0"> Width</Label>
          <Device />
        </PanelRow>
        <UnitControl
          value={styles?.card?.width[editDevice]}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "card", "width", editDevice),
            })
          }
        />
        <PanelRow>
          <Label className="mt0"> Height</Label>
          <Device />
        </PanelRow>
        <UnitControl
          value={styles?.card?.height[editDevice]}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "card", "height", editDevice),
            })
          }
        />
        <BoxControls style={{marginTop:"10px"}}
          label={__(" Content Padding", "info-cards")}
          values={styles?.card?.contentPadding}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "card", "contentPadding"),
            })
          }
        />
        <Background
          label={__("Background", "info-cards")}
          value={productsInfo[activeIndex]?.backgroundImage}
          onChange={(value) =>
            setAttributes({
              productsInfo: updateData(
                productsInfo,
                value,
                activeIndex,
                "backgroundImage"
              ),
            })
          }
        />
        <BoxControls
         label={__("Padding", "info-cards")}
          values={styles?.card?.cardPadding}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "card", "cardPadding"),
            })
          }
        />
        <BoxControls
          label={__("Radius", "info-cards")}
          values={styles?.card?.radius}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "card", "radius"),
            })
          }
        />

        <ColorControl
          label={__("Content Background", "info-cards")}
          value={productsInfo[activeIndex]?.backgroundColor}
          onChange={(value) =>
            setAttributes({
              productsInfo: updateData(
                productsInfo,
                value,
                activeIndex,
                "backgroundColor"
              ),
            })
          }
        />

        <ShadowControl
          label={__("Content  Shadow", "info-cards")}
          value={productsInfo[activeIndex]?.shadow}
          onChange={(value) =>
            setAttributes({
              productsInfo: updateData(productsInfo, value, activeIndex, "shadow"),
            })
          }
        />
        <BoxControls
          label={__("Content  Radius", "info-cards")}
          values={styles?.card?.contentRadius}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "card", "contentRadius"),
            })
          }
        />

        <Label>Hover Rotation (deg)</Label>

        {options?.isHoverRotated && (
          <RangeControl
            max={200}
            value={styles?.card?.cardRoted}
            onChange={(value) =>
              setAttributes({
                styles: updateData(styles, value, "card", "cardRoted"),
              })
            }
          />
        )}
      </PanelBody>

      {options?.isTagShow && (
        <PanelBody
          className="bPlPanelBody"
          title={__("Tag", "info-cards")}
          initialOpen={false}
        >
          <Label className="mt0">
            Width{" "}
            <UnitControl
              value={styles?.card?.tag?.width}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "tag", "width"),
                })
              }
            />
          </Label>
          <Label className="mt15 mb15">
            Height{" "}
            <UnitControl
              value={styles?.card?.tag?.height}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(styles, value, "card", "tag", "height"),
                })
              }
            />
          </Label>

          <ColorControl
            label={__("Background-Color", "info-cards")}
            value={styles?.card?.tag?.bg}
            onChange={(value) =>
              setAttributes({
                styles: updateData(styles, value, "card", "tag", "bg"),
              })
            }
          />
          <ShadowControl
            label={__("Shadow ", "info-cards")}
            value={productsInfo[activeIndex]?.tagShadow}
            onChange={(value) =>
              setAttributes({
                productsInfo: updateData(
                  productsInfo,
                  value,
                  activeIndex,
                  "tagShadow"
                ),
              })
            }
          />
          <BoxControls
            label={__("Radius ", "info-cards")}
            values={styles?.card?.tag?.radius}
            onChange={(value) =>
              setAttributes({
                styles: updateData(styles, value, "card", "tag", "radius"),
              })
            }
          />
          <BoxControls
            label={__("Padding ", "info-cards")}
            values={styles?.card?.tag?.padding}
            onChange={(value) =>
              setAttributes({
                styles: updateData(styles, value, "card", "tag", "padding"),
              })
            }
          />

          <Label>TranslateX </Label>
          <RangeControl
            max={300}
            value={styles?.card?.tag?.position?.left}
            onChange={(value) =>
              setAttributes({
                styles: updateData(
                  styles,
                  value,
                  "card",
                  "tag",
                  "position",
                  "left"
                ),
              })
            }
          />
          <Label>TranslateY </Label>
          <RangeControl
            max={300}
            value={styles?.card?.tag?.position?.top}
            onChange={(value) =>
              setAttributes({
                styles: updateData(
                  styles,
                  value,
                  "card",
                  "tag",
                  "position",
                  "top"
                ),
              })
            }
          />

          <ColorControl
            label={__("Name Color ", "info-cards")}
            value={styles?.card?.tag?.color}
            onChange={(value) =>
              setAttributes({
                styles: updateData(styles, value, "card", "tag", "color"),
              })
            }
          />
          <Typography
            label={__("Name Typography ", "info-cards")}
            value={styles?.card?.tag?.typo}
            onChange={(value) =>
              setAttributes({
                styles: updateData(styles, value, "card", "tag", "typo"),
              })
            }
          />
          <ColorControl
            label={__("Value Color ", "info-cards")}
            value={styles?.card?.tag?.value?.color}
            onChange={(value) =>
              setAttributes({
                styles: updateData(
                  styles,
                  value,
                  "card",
                  "tag",
                  "value",
                  "color"
                ),
              })
            }
          />
          <Typography
            label={__("Value Typography ", "info-cards")}
            value={styles?.card?.tag?.value?.typo}
            onChange={(value) =>
              setAttributes({
                styles: updateData(
                  styles,
                  value,
                  "card",
                  "tag",
                  "value",
                  "typo"
                ),
              })
            }
          />
        </PanelBody>
      )}

      <PanelBody
        className="bPlPanelBody"
        title={__("Title", "info-cards")}
        initialOpen={false}
      >
        <ColorControl
          label={__("Color ", "info-cards")}
          value={styles?.card?.title?.color}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "card", "title", "color"),
            })
          }
        />
        <Typography
          label={__("Typography ", "info-cards")}
          value={styles?.card?.title?.typo}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "card", "title", "typo"),
            })
          }
        />
      </PanelBody>
      <PanelBody
        lassName="bPlPanelBody"
        title={__("Description", "info-cards")}
        initialOpen={false}
      >
        <ColorControl
          label={__("Color ", "info-cards")}
          value={styles?.card?.description?.color}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "card", "description", "color"),
            })
          }
        />
        <Typography
          label={__("Typography ", "info-cards")}
          value={styles?.card?.description?.typo}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "card", "description", "typo"),
            })
          }
        />
      </PanelBody>

      {options?.isButtonShow && (
        <PanelBody
          lassName="bPlPanelBody"
          title={__("Button", "info-cards")}
          initialOpen={false}
        >
          <ColorControl
            label={__("Color ", "info-cards")}
            value={styles?.card?.button?.color}
            onChange={(value) =>
              setAttributes({
                styles: updateData(styles, value, "card", "button", "color"),
              })
            }
          />
          <Typography
            label={__("Typography ", "info-cards")}
            value={styles?.card?.button?.typo}
            onChange={(value) =>
              setAttributes({
                styles: updateData(styles, value, "card", "button", "typo"),
              })
            }
          />
        </PanelBody>
      )}
    </>
      }

      {
        theme ==="theme8" &&  <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Section", "info-cards")}
        initialOpen={false}
      >
        <Background
          value={styles?.bg}
          onChange={(value) =>
            setAttributes({ styles: updateData(styles, value, "bg") })
          }
        />

       

        <BoxControls label={__("Radius", "info-cards")}  values={styles?.radius}
          onChange={(value) =>
            setAttributes({ styles: updateData(styles, value, "radius") })
          } />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Card", "info-cards")}
        initialOpen={false}
      >
        <Background
          value={styles?.card?.bg}
          onChange={(value) =>
            setAttributes({ styles: updateData(styles, value, "card", "bg") })
          }
        />
        <BoxControls
          label={__("Margin", "info-cards")}
          values={styles?.card?.margin}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "card", "margin"),
            })
          }
        />
        <BoxControls
          label={__("Padding", "info-cards")}
          values={styles?.card?.padding}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "card", "padding"),
            })
          }
        />
        <BoxControls
          label={__("Radius", "info-cards")}
          values={styles?.card?.radius}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "card", "radius"),
            })
          }
        />

        <ShadowControl
          label={__("Box-Shadow", "info-cards")}
          value={styles?.card?.shadow}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "card", "shadow"),
            })
          }
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Header", "info-cards")}
        initialOpen={false}
      >
        <Label> <span style={{width:"120px"}}>Image Width</span> <UnitControl  value={styles?.card?.profileImage?.width}    onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","profileImage","width")})} /></Label>
        <Label> <span style={{width:"120px"}}>Image Height</span> <UnitControl  value={styles?.card?.profileImage?.height} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","profileImage","height")})}   /></Label>

        <BoxControls label={__("Image Radius", "info-cards")} values={styles?.card?.profileImage?.radius} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","profileImage","radius")})} />
          <BorderControl label={__("Image Border", "info-cards")}  value={styles?.card?.profileImage?.border} onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","profileImage","border")})} />
        <ColorControl
          label={__("Name Color", "info-cards")}
          value={styles?.card?.header?.name?.color}
          onChange={(value) =>
            setAttributes({
              styles: updateData(
                styles,
                value,
                "card",
                "header",
                "name",
                "color"
              ),
            })
          }
        />

        <Typography
          label={__("Name Typography", "info-cards")}
          value={styles?.card?.header?.name?.typo}
          onChange={(value) =>
            setAttributes({
              styles: updateData(
                styles,
                value,
                "card",
                "header",
                "name",
                "typo"
              ),
            })
          }
        />

        <ColorControl
          label={__("Title Color", "info-cards")}
          value={styles?.card?.header?.title?.color}
          onChange={(value) =>
            setAttributes({
              styles: updateData(
                styles,
                value,
                "card",
                "header",
                "title",
                "color"
              ),
            })
          }
        />

        <Typography
          label={__("Title Typography", "info-cards")}
          value={styles?.card?.header?.title?.typo}
          onChange={(value) =>
            setAttributes({
              styles: updateData(
                styles,
                value,
                "card",
                "header",
                "title",
                "typo"
              ),
            })
          }
        />

            <ColorControl
          label={__("Company Color", "info-cards")}
          value={styles?.card?.company?.color}
          onChange={(value) =>
            setAttributes({
              styles: updateData(
                styles,
                value,
                "card",
                "company",
                
                "color"
              ),
            })
          }
        />
           <Typography
          label={__("Company Typography", "info-cards")}
          value={styles?.card?.company?.typo}
          onChange={(value) =>
            setAttributes({
              styles: updateData(
                styles,
                value,
                "card",
                "company",
                "typo"
              ),
            })
          }
        />

        {options?.isStatusShow && (
          <>
            <ColorControl
              label={__("Status Color", "info-cards")}
              value={styles?.card?.header?.status?.color}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "card",
                    "header",
                    "status",
                    "color"
                  ),
                })
              }
            />

            <Typography
              label={__("Status Typography", "info-cards")}
              value={styles?.card?.header?.status?.typo}
              onChange={(value) =>
                setAttributes({
                  styles: updateData(
                    styles,
                    value,
                    "card",
                    "header",
                    "status",
                    "typo"
                  ),
                })
              }
            />
          </>
        )}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Description", "info-cards")}
        initialOpen={false}
      >
        <ColorControl
          label={__("Description Color", "info-cards")}
          value={styles?.card?.header?.description?.color}
          onChange={(value) =>
            setAttributes({
              styles: updateData(
                styles,
                value,
                "card",
                "header",
                "description",
                "color"
              ),
            })
          }
        />

        <Typography
          label={__("Description Typography", "info-cards")}
          value={styles?.card?.header?.description?.typo}
          onChange={(value) =>
            setAttributes({
              styles: updateData(
                styles,
                value,
                "card",
                "header",
                "description",
                "typo"
              ),
            })
          }
        />


        <BButtonGroup style={{marginTop:"10px"}} value={styles?.card?.header?.description?.alignment}  label={__("Alignment", "info-cards")}  options={[
    { label: 'Left', value: 'left' },
    { label: 'Center', value: 'center' },
    { label: 'Right', value: 'right' },
  ]} 
  onChange={(value)=>setAttributes({
              styles: updateData(
                styles,
                value,
                "card",
                "header",
                "description",
                "alignment"
              ),
            })}
  
  />
      </PanelBody>
        
     { options?.isStateShow &&  <PanelBody className="bPlPanelBody"
        title={__("States", "info-cards")}
        initialOpen={false}>

          <ColorControl label={__("Background Color", "info-cards")}  value={styles?.card?.states?.bg} onChange={(value)=>setAttributes({styles: updateData(
                styles,
                value,
                "card",
                "states",
                "bg",
                
              )})}  />

              <BoxControls
          label={__("Padding", "info-cards")}
          values={styles?.card?.states?.padding}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "card", "states","padding"),
            })
          }
        />
              <BoxControls
          label={__("Radius", "info-cards")}
          values={styles?.card?.states?.radius}
          onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "card", "states","radius"),
            })
          }
        />
        <ColorControl   label={__("Number Color", "info-cards")} value={styles?.card?.states?.number?.color} onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "card", "states","number","color"),
            })
          }  />


            <Typography   label={__("Number Typo", "info-cards")} value={styles?.card?.states?.number?.typo} onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "card", "states","number","typo"),
            })
          }  />

          <ColorControl   label={__("Label Color", "info-cards")} value={styles?.card?.states?.text?.color} onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "card", "states","text","color"),
            })
          }  />

            <Typography   label={__("Label Typo", "info-cards")} value={styles?.card?.states?.text?.typo} onChange={(value) =>
            setAttributes({
              styles: updateData(styles, value, "card", "states","text","typo"),
            })
          }  />

        </PanelBody> 
        }

      {  options?.isButtonShow &&  <PanelBody  className="bPlPanelBody"
        title={__("Button", "info-cards")}
        initialOpen={false}>

          <ColorControl label={__("Background", "info-cards")} value={styles?.card?.messageButton?.bg} onChange={( value)=>setAttributes({styles:updateData(styles,value,"card","messageButton","bg")})} />
          <ColorControl label={__("Color", "info-cards")} value={styles?.card?.messageButton?.color} onChange={( value)=>setAttributes({styles:updateData(styles,value,"card","messageButton","color")})} />
          <Typography label={__("Typography", "info-cards")} value={styles?.card?.messageButton?.typo} onChange={( value)=>setAttributes({styles:updateData(styles,value,"card","messageButton","typo")})} />

          <BoxControls label={__("Radius", "info-cards")} values={styles?.card?.messageButton?.radius} onChange={( value)=>setAttributes({styles:updateData(styles,value,"card","messageButton","radius")})} />
          <BoxControls label={__("Padding", "info-cards")} values={styles?.card?.messageButton?.padding} onChange={( value)=>setAttributes({styles:updateData(styles,value,"card","messageButton","padding")})} />

           <IconLibrary label={__("Button Icon", "info-cards")} value={options?.messageButtonIcon} onChange={(value)=>{
            setAttributes({options:updateData(options,value,"messageButtonIcon")})
           }} />
           
           <Label><span>Icon size </span> <span style={{width:"180px"}}><UnitControl onChange={(value)=>setAttributes({styles:updateData(styles,value,"card","messageButton","size")})} value={styles?.card?.messageButton?.size}   /></span></Label>
         </PanelBody>}
        
    </>
      }

    </>
  );
};

export default Style;
