import {
  getBackgroundCSS,
  getBoxCSS,
  getColorsCSS,
  getMultiShadowCSS,
  getTypoCSS,
} from "../../../../bpl-tools/utils/getCSS";
import { getBoxValue } from "../../../../bpl-tools/utils/functions";
import {
  mobileBreakpoint,
  tabBreakpoint,
} from "../../../../bpl-tools/utils/data";

const Style = ({ attributes, id }) => {
  const {
    cards,
    background,
    btnPadding,
    padding,
    titleColor,
    titleTypo,
    descColor,
    descTypo,
    btnTypo,
    contentAlign,
    btnRadius,
    contentPadding,
    cardPadding,
    cardShadow,
    cardRadius,
    imgHeight,
    columnGap,
    rowGap,
    btnAlign,
    btnColors,
    btnHovColors,
    styles,
    alignment,
    productsInfo,options
  } = attributes;




  const mainSl = `#${id}`;

  //  first 1-5 (default ta dhore 6 ta )  theme ar jonno 
  const cardsSl = `#${id} .icbCards`;


  // theme 6 theke (default dhore 7 ) selector 
  const productInfoCards = `${mainSl} .productInfoCards`;
  const cardSl = `${productInfoCards} .card`;
  const imgboxSl = `${cardSl} .imgbox`;
  const productImageSl = `${imgboxSl} .productImage`;
  const circleSl = `${imgboxSl} .circle`;
  const productDescSl = `${cardSl} .productDesc`;
  const productTitlecSl = `${productDescSl} .productTitle`;
  const productDescriptionSl = `${productDescSl} .productDescription`;
  const processorcSl = `${cardSl} .processor`;
  const productInfoBtnSl = `${processorcSl} .productInfoBtn`;
  const buyboxSl = `${cardSl} .buybox`;
  const productBuyBtnSl = `${buyboxSl} .productBuyBtn`;

  // theme 7 theke selector  
 const containerWrapperrSl = `${mainSl} .InfoContainerWrapper`;
  const threeDContainerSl = `${containerWrapperrSl} .infoThreeDContainer`;
  const parentSl = `${threeDContainerSl} .infoParent`;
  const infoCardSl = `${parentSl} .threeDinfoCard`;
  const contentBoxSl = `${infoCardSl} .threeDinfoCardContentBox`;
  const dateBoxSl = `${infoCardSl} .date-box`;
  const nameSl = `${dateBoxSl} .month`;
  const valueSl = `${dateBoxSl} .date`;
  const titleSl = `${contentBoxSl} .threeDinfoCardTitle`;
  const cardContentSl = `${contentBoxSl} .threeDinfoCardDescription`;
  const buttonSl = `${contentBoxSl} .threeDinfoSeeMore`;

   const dynamicCardStyle = productsInfo
    .map((card, index) => {
      return `
			.threeDinfoCard${index}{
				${getBackgroundCSS(card.backgroundImage)}
			}
			.threeDinfoCardContentBox${index}{
			background:${card?.backgroundColor};
			box-shadow:${getMultiShadowCSS(card?.shadow)};
			padding:${getBoxCSS(styles?.card?.contentPadding)}
			}
			${dateBoxSl}${index}{
			box-shadow:${getMultiShadowCSS(card?.tagShadow)};

			}
		
		
		
			`;
    })
    .join("\n");
 

  return (
    <style>
      {`
        ${getTypoCSS("", titleTypo)?.googleFontLink}
        ${getTypoCSS("", descTypo)?.googleFontLink}
        ${getTypoCSS("", btnTypo)?.googleFontLink}
        ${getTypoCSS("", styles?.card?.title?.typo)?.googleFontLink}
		${getTypoCSS("", styles?.card?.description?.typo)?.googleFontLink}
		${getTypoCSS("", styles?.card?.variantState?.typo)?.googleFontLink}
		${getTypoCSS("", styles?.card?.button?.typo)?.googleFontLink}
        ${getTypoCSS("", styles?.card?.tag?.typo)?.googleFontLink}
		${getTypoCSS("", styles?.card?.tag?.value?.typo)?.googleFontLink}
		${getTypoCSS("", styles?.card?.title?.typo)?.googleFontLink}
		${getTypoCSS("", styles?.card?.description?.typo)?.googleFontLink}
		${getTypoCSS("", styles?.card?.button?.typo)?.googleFontLink}
		
		

        ${
          getTypoCSS(
            `${cardsSl} .first4Theme .content h2, ${cardsSl} .theme5 .content .details h2`,
            titleTypo
          )?.styles
        }
        ${
          getTypoCSS(
            `${cardsSl} .first4Theme .content p, ${cardsSl} .theme5 .content .details p`,
            descTypo
          )?.styles
        }
        ${
          getTypoCSS(
            `${cardsSl} .theme5 .content .details .actionBtn button, ${cardsSl} .first4Theme .content .btnWrapper a`,
            btnTypo
          )?.styles
        }
        ${getTypoCSS(productTitlecSl, styles?.card?.title?.typo)?.styles}
		${getTypoCSS(productDescriptionSl, styles?.card?.description?.typo)?.styles}
		${getTypoCSS(productInfoBtnSl, styles?.card?.variantState?.typo)?.styles}
		${getTypoCSS(productBuyBtnSl, styles?.card?.button?.typo)?.styles}
    
       ${getTypoCSS(nameSl, styles?.card?.tag?.typo)?.styles} 
		${getTypoCSS(valueSl, styles?.card?.tag?.value?.typo)?.styles} 
		${getTypoCSS(titleSl, styles?.card?.title?.typo)?.styles} 
		${getTypoCSS(cardContentSl, styles?.card?.description?.typo)?.styles} 
		${getTypoCSS(buttonSl, styles?.card?.button?.typo)?.styles} 
		

        
        ${cardsSl}{
            ${getBackgroundCSS(background)}
            column-gap: ${columnGap};
            row-gap: ${rowGap};
            padding: ${getBoxValue(padding)};
        }
        ${cardsSl} .first4Theme, ${cardsSl} .theme5 .content{
            border-radius: ${cardRadius};
            padding: ${getBoxValue(cardPadding)};
            box-shadow: ${getMultiShadowCSS(cardShadow)};
        }
        ${cardsSl} .first4Theme img{
            height: ${imgHeight}
        }
        ${cardsSl} .vertical .card img{
            max-height: ${imgHeight}
        }
        ${cardsSl} .first4Theme .content, ${cardsSl} .theme5 .content {
            padding: ${getBoxValue(contentPadding)};
            text-align: ${contentAlign};
        }
        ${cardsSl} .first4Theme .content h2, ${cardsSl} .theme5 .content .details h2{
            color: ${titleColor};
            text-align: ${contentAlign};
        }
        ${cardsSl} .first4Theme .content p, ${cardsSl} .theme5 .content .details  p{
            text-align: ${contentAlign};
            color: ${descColor};
        }
        ${cardsSl} .first4Theme .content .btnWrapper, ${cardsSl} .theme5 .content .details .actionBtn{
            justify-content: ${btnAlign}
        }
        ${cardsSl}  .first4Theme .content a, ${cardsSl} .theme5 .content .details .actionBtn button{

            ${getColorsCSS(btnColors)};
            border-radius: ${btnRadius};
            padding: ${getBoxValue(btnPadding)}
        }
        ${cardsSl}  .first4Theme .content a:hover, ${cardsSl} .theme5 .content .details .actionBtn button:hover {
            ${getColorsCSS(btnHovColors)}
        }
    `}
      {cards.map((card, index) => {
        const { background } = card;
        return `
        ${cardsSl} .first4Theme.card-${index}, ${cardsSl} .theme5.card-${index} .content{
            ${getBackgroundCSS(background, true, true, false)}
        }






		  



            ${productInfoCards} {
		${getBackgroundCSS(styles?.bg)}
		padding:${getBoxCSS(styles?.padding?.desktop)};
		margin:${getBoxCSS(styles?.margin?.desktop)};
		border-radius:${getBoxCSS(styles?.radius)};
		width:${styles?.width?.desktop};
		justify-content:${styles?.contentAlignment};
		row-gap:${styles?.rowGap};
		column-gap:${styles?.columnGap};
        

		}
		${cardSl}{
		max-width:${styles?.card?.width};
		min-height:${styles?.card?.height};
		border-radius:${getBoxCSS(styles?.card?.radius)};
		${getBackgroundCSS(styles?.card?.bg)}
		padding:${getBoxCSS(styles?.card?.padding)};
		box-shadow:${getMultiShadowCSS(styles?.card?.shadow)};
		}
		${productImageSl}{
			 max-width:${styles?.card?.image?.width};
             min-height: ${styles?.card?.image?.height};
			 object-fit: ${styles?.card?.image?.position};
		

		}
			 ${circleSl}{
			   width: ${styles?.card?.circle?.width};
               height: ${styles?.card?.circle?.width};
			   border-radius:${getBoxCSS(styles?.card?.circle?.radius)};
			   ${getBackgroundCSS(styles?.card?.circle?.bg)}
			 
			 }
			   ${productTitlecSl}{
			   color:${styles?.card?.title?.color};
			   text-align: ${styles?.card?.title?.alignment};
			   }
			   ${productDescriptionSl}{
			   color:${styles?.card?.description?.color};
			   text-align: ${styles?.card?.description?.alignment};
			   }
			   ${productInfoBtnSl}{
			    background:${styles?.card?.variantState?.bg};
			    color:${styles?.card?.variantState?.color};
				padding:${getBoxCSS(styles?.card?.variantState?.padding)};
				border-radius:${getBoxCSS(styles?.card?.variantState?.radius)};
				box-shadow:${getMultiShadowCSS(styles?.card?.variantState?.shadow)};
			   }

			   ${processorcSl}{
			   gap:${styles?.card?.variantState?.gap};
			   justify-content: ${styles?.card?.variantState?.alignment};
			   }
			   ${processorcSl} .active{
			   color:${styles?.card?.variantState?.active?.color} !important;
			   background:${styles?.card?.variantState?.active?.bg} !important;
			   } 
			   ${productBuyBtnSl}{
			   color:${styles?.card?.button?.color};
			   background:${styles?.card?.button?.bg};
			   padding:${getBoxCSS(styles?.card?.button?.padding)};
			   border-radius:${getBoxCSS(styles?.card?.button?.radius)};
			   box-shadow:${getMultiShadowCSS(styles?.card?.button?.shadow)};
			   width:${styles?.card?.button?.width};

			   
			   }
			   ${productBuyBtnSl}:hover{
			   background-color:${styles?.card?.button?.hover?.bg} !important;
               color:${styles?.card?.button?.hover?.color} !important;
			   }
			   ${buyboxSl}{
			   display:flex;
			   justify-content:${styles?.card?.button?.alignment};
			   
			   }


		 ${tabBreakpoint}{
		 ${productInfoCards}{
		padding:${getBoxCSS(styles?.padding?.tablet)};
		margin:${getBoxCSS(styles?.margin?.tablet)};
		width:${styles?.width?.tablet}
		}
		
		}

		  ${mobileBreakpoint}{
			${productInfoCards}{
		padding:${getBoxCSS(styles?.padding?.mobile)};
		margin:${getBoxCSS(styles?.margin?.mobile)};
		width:${styles?.width?.mobile}
            }}








            ${dynamicCardStyle}
		${containerWrapperrSl}{
		display:flex;
		justify-content:${alignment};

		}
		
		${threeDContainerSl} {
		${getBackgroundCSS(styles?.bg)}
		padding:${getBoxCSS(styles?.padding?.desktop)};
		margin:${getBoxCSS(styles?.margin?.desktop)};
		width:${styles?.width?.desktop};
		justify-content:${styles?.contentAlignment};
		row-gap:${styles?.rowGap};
		column-gap:${styles?.columnGap};
		border-radius:${getBoxCSS(styles?.radius)};
			
		}

		${parentSl}{
		 width:${styles?.card?.width?.desktop};
		}
		 ${infoCardSl}{
		 min-height:${styles?.card?.height?.desktop} !important;
		 border-radius:${getBoxCSS(styles?.card?.radius)};
		 padding:${getBoxCSS(styles?.card?.cardPadding)};

		 }
		 ${infoCardSl}:hover{
		 transform: rotate3d(0.5, 1, 0, ${
       options?.isHoverRotated
         ? `${styles?.card?.cardRoted}deg`
         : "0deg"
     });
		 }
		 ${contentBoxSl}{
		 border-radius:${getBoxCSS(styles?.card?.contentRadius)};
		 }
		 ${dateBoxSl}{
		 background-color:${styles?.card?.tag?.bg};
		 width:${styles?.card?.tag?.width};
		 height:${styles?.card?.tag?.height};
		 left:${styles?.card?.tag?.position?.left}px;
		 top:${styles?.card?.tag?.position?.top}px;
		 border-radius:${getBoxCSS(styles?.card?.tag?.radius)};
		 padding:${getBoxCSS(styles?.card?.tag?.padding)};
		 
		 }
		${dateBoxSl} .month{
		 color:${styles?.card?.tag?.color};
		
		 }
		 ${valueSl}{
		 color:${styles?.card?.tag?.value?.color};
		 }

		 ${titleSl}{
		 color:${styles?.card?.title?.color};
		 
		 }
		 ${cardContentSl}{
          color:${styles?.card?.description?.color};

		 }
		  ${buttonSl}{
		  color:${styles?.card?.button?.color};
		  }







		${tabBreakpoint}{
		${threeDContainerSl}{
		padding:${getBoxCSS(styles?.padding?.tablet)};
		margin:${getBoxCSS(styles?.margin?.tablet)};
		width:${styles?.width?.tablet}
		}
		${parentSl}{
		 width:${styles?.card?.width?.tablet};
		}
		  ${infoCardSl}{
		 min-height:${styles?.card?.height?.tablet} !important;
		 }
		
		}

		${mobileBreakpoint}{
		${threeDContainerSl}{
		padding:${getBoxCSS(styles?.padding?.mobile)};
		margin:${getBoxCSS(styles?.margin?.mobile)};
		width:${styles?.width?.mobile}
		}
		${parentSl}{
		 width:${styles?.card?.width?.mobile};
		}
		  ${infoCardSl}{
		 min-height:${styles?.card?.height?.mobile} !important;
		 }
		
		}

        
    `;
      })}
    </style>
  );
};

export default Style;
