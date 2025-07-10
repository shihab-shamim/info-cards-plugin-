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
        draft["styles"]["radius"] = {
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
        };

        draft["styles"]["width"] = {
          desktop: "100%",
          tablet: "100%",
          mobile: "100%",
        };

        draft["styles"]["padding"] = {
          desktop: {
            top: "10px",
            left: "0px",
            right: "0px",
            bottom: "10px",
          },
          tablet: {
            top: "10px",
            left: "0px",
            right: "0px",
            bottom: "10px",
          },
          mobile: {
            top: "10px",
            left: "10px",
            right: "10px",
            bottom: "10px",
          },
        };
        draft["styles"]["margin"] = {
          desktop: {
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px",
          },
          tablet: {
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px",
          },
          mobile: {
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px",
          },
        };
        draft["styles"]["contentAlignment"] = "center";
        draft["styles"]["columnGap"] = "20px";
        draft["styles"]["rowGap"] = "20px";
        draft["options"] = {
          isOpenInNewTab: true,
          isVariantShow: true,
          isButtonShow: true,
          isVisibleCircle: true,
          isTagShow: true,
          isNewTabOpen: true,
          isHoverRotated: true,
        };
        draft["styles"]["card"] = {
          width: "400px",
          height: "660px",
          bg: { type: "solid", color: "#ffffff" },
          radius: {
            top: "10px",
            left: "10px",
            right: "10px",
            bottom: "10px",
          },
          padding: {
            top: "10px",
            left: "20px",
            right: "20px",
            bottom: "10px",
          },
          shadow: [
            {
              hOffset: "0px",
              vOffset: "0px",
              blur: "10px",
              spreed: "0px",
              color: "rgba(99,99,99,0.2)",
              isInset: false,
            },
            {
              hOffset: "0px",
              vOffset: "5px",
              blur: "6px",
              spreed: "0px",
              color: "rgba(99,99,99,0.2)",
              isInset: false,
            },
          ],
          image: {
            width: "360px",
            height: "362px",
            position: "contain",
          },
          circle: {
            width: "300px",
            height: "270px",
            radius: {
              top: "50%",
              left: "50%",
              right: "50%",
              bottom: "50%",
            },
            bg: {
              type: "gradient",
              gradient:
                "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3), rgba(0, 217, 255, 0.5))",
            },
          },
          title: {
            typo: {
              fontFamily: "Archivo",
              fontCategory: "sans-serif",
              fontWeight: "",
              fontVariant: "400",
              isUploadFont: true,
              fontSize: {
                desktop: 30,
                tablet: 30,
                mobile: 22,
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px",
            },
            color: "#000000",
            alignment: "center",
          },
          description: {
            color: "#000000",
            typo: {
              fontFamily: "Archivo",
              fontCategory: "sans-serif",
              fontWeight: "",
              fontVariant: "400",
              isUploadFont: true,
              fontSize: {
                desktop: 20,
                tablet: 20,
                mobile: 16,
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "1.5",
              letterSpace: "0px",
            },
            alignment: "justify",
          },
          variantState: {
            bg: "#ffffff",
            padding: {
              top: "10px",
              right: "20px",
              bottom: "10px",
              left: "20px",
            },
            radius: {
              top: "2px",
              right: "2px",
              bottom: "2px",
              left: "2px",
            },
            shadow: [
              {
                hOffset: "0px",
                vOffset: "0px",
                blur: "2px",
                spreed: "0px",
                color: "#666666",
                isInset: false,
              },
            ],
            typo: {
              fontFamily: "Archivo",
              fontCategory: "sans-serif",
              fontWeight: "",
              fontVariant: "400",
              isUploadFont: true,
              fontSize: {
                desktop: 15,
                tablet: 15,
                mobile: 15,
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "1px",
            },
            color: "#000000",
            gap: "5px",
            alignment: "space-between",
            active: {
              color: "#fff ",
              bg: "#444",
            },
          },
          button: {
            bg: "#0bf2f2",
            color: "#000000",
            padding: {
              top: "10px",
              left: "20px",
              right: "20px",
              bottom: "10px",
            },
            radius: {
              top: "6px",
              left: "6px",
              right: "6px",
              bottom: "6px",
            },
            shadow: [
              {
                hOffset: "0px",
                vOffset: "0px",
                blur: "2px",
                spreed: "0px",
                color: "#666666",
                isInset: false,
              },
            ],
            hover: {
              color: "#0bf2f2 ",
              bg: "#444",
            },
            width: "100%",
            alignment: "center",
            typo: {
              fontFamily: "Archivo",
              fontCategory: "sans-serif",
              fontWeight: "",
              fontVariant: "400",
              isUploadFont: true,
              fontSize: {
                desktop: 18,
                tablet: 18,
                mobile: 18,
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "",
              letterSpace: "0px",
            },
          },
        };
        draft["productsInfo"] = [
          {
            title: "Alienware Gaming Laptop",
            description:
              "Alienware Laptop is one of the best Gaming Laptops. Every gamer loves it.",
            variant: ["i3", "i5", "i6", "i9"],
            image:
              "https://templates.bplugins.com/wp-content/uploads/2025/05/Alienware-Laptop.png",
            button: {
              text: "Buy Now",
              link: "",
            },
          },
          {
            title: "Alienware Gaming Laptop",
            description:
              "Alienware Laptop is one of the best Gaming Laptops. Every gamer loves it.",
            variant: ["i3", "i5", "i6", "i9"],
            image:
              "https://templates.bplugins.com/wp-content/uploads/2025/05/Alienware-Laptop.png",
            button: {
              text: "Buy Now",
              link: "",
            },
          },
          {
            title: "Alienware Gaming Laptop",
            description:
              "Alienware Laptop is one of the best Gaming Laptops. Every gamer loves it.",
            variant: ["i3", "i5", "i6", "i9"],
            image:
              "https://templates.bplugins.com/wp-content/uploads/2025/05/Alienware-Laptop.png",
            button: {
              text: "Buy Now",
              link: "",
            },
          },
        ];
        break;

      case "theme7":
        draft["styles"]["bg"] = {
          type: "solid",
          color: "#191919",
        };
        draft["styles"]["radius"] = {
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px",
        };

        draft["styles"]["width"] = {
          desktop: "100%",
          tablet: "100%",
          mobile: "100%",
        };
        draft["styles"]["padding"] = {
          desktop: {
            top: "50px",
            left: "0px",
            bottom: "50px",
            right: "0px",
          },
          tablet: {
            top: "50px",
            left: "0px",
            bottom: "50px",
            right: "0px",
          },
          mobile: {
            top: "50px",
            left: "0px",
            bottom: "50px",
            right: "0px",
          },
        };

        draft["styles"]["margin"] = {
          desktop: {
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px",
          },
          tablet: {
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px",
          },
          mobile: {
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px",
          },
        };
        draft["styles"]["contentAlignment"] = "center";
        draft["styles"]["columnGap"] = "100px";
        draft["styles"]["rowGap"] = "100px";
        draft["options"] = {
          isOpenInNewTab: true,
          isVariantShow: true,
          isButtonShow: true,
          isVisibleCircle: true,
          isTagShow: true,
          isNewTabOpen: true,
          isHoverRotated: true,
        };

        draft["styles"]["card"] = {
          width: {
            desktop: "300px",
            tablet: "300px",
            mobile: "300px",
          },
          height: {
            desktop: "400px",
            tablet: "400px",
            mobile: "400px",
          },
          contentBg: { type: "solid", color: "#4379F2" },
          contentRadius: {
            top: "0px",
            right: "0px",
            bottom: "10px",
            left: "10px",
          },
          radius: {
            top: "10px",
            right: "10px",
            bottom: "10px",
            left: "10px",
          },
          tag: {
            bg: "#191919",
            width: "70px",
            height: "70px",
            position: {
              left: 25,
              top: 75,
            },
            radius: {
              top: "10px",
              left: "10px",
              right: "10px",
              bottom: "10px",
            },
            padding: {
              top: "12px",
              left: "12px",
              right: "12px",
              bottom: "12px",
            },
            color: "#ffffff",
            typo: {
              fontFamily: "Archivo",
              fontCategory: "sans-serif",
              fontWeight: 700,
              fontVariant: "400",
              isUploadFont: true,
              fontSize: {
                desktop: 12,
                tablet: 12,
                mobile: 12,
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "135%",
              letterSpace: "1px",
            },
            value: {
              color: "#FFEB00",
              typo: {
                fontFamily: "Archivo",
                fontCategory: "sans-serif",
                fontWeight: 900,
                fontVariant: "400",
                isUploadFont: true,
                fontSize: {
                  desktop: 19,
                  tablet: 19,
                  mobile: 19,
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "135%",
                letterSpace: "",
              },
            },
          },
          title: {
            color: "#f0f8ff",
            typo: {
              fontFamily: "Archivo",
              fontCategory: "sans-serif",
              fontWeight: 900,
              fontVariant: "400",
              isUploadFont: true,
              fontSize: {
                desktop: 25,
                tablet: 25,
                mobile: 25,
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "135%",
              letterSpace: "1px",
            },
          },
          description: {
            color: "#b5b7b9",
            typo: {
              fontFamily: "Archivo",
              fontCategory: "sans-serif",
              fontWeight: 400,
              fontVariant: "400",
              isUploadFont: true,
              fontSize: {
                desktop: 12,
                tablet: 12,
                mobile: 12,
              },
              fontStyle: "normal",
              textTransform: "none",
              textDecoration: "none",
              lineHeight: "135%",
              letterSpace: "",
            },
          },
          button: {
            color: "#FFEB00",
            typo: {
              fontFamily: "Archivo",
              fontCategory: "sans-serif",
              fontWeight: 900,
              fontVariant: "400",
              isUploadFont: true,
              fontSize: {
                desktop: 10,
                tablet: 10,
                mobile: 10,
              },
              fontStyle: "normal",
              textTransform: "uppercase",
              textDecoration: "none",
              lineHeight: "135%",
              letterSpace: "",
            },
          },
          contentPadding: {
            top: "50px",
            left: "25px",
            right: "25px",
            bottom: "25px",
          },
          cardPadding: {
            top: "100px",
            left: "0px",
            right: "0px",
            bottom: "0px",
          },
          cardRoted: 20,
        };

        draft["productsInfo"] = [
          {
            title: "Nicotine",
            content:
              "Nicotine is a poisonous, addictive chemical found in tobacco plants. It is also present in most e-cigarettes, and is used in some insecticides.",
            button: {
              text: "See more",
              link: "#",
              color: "#FFEB00",
            },
            tag: {
              name: "View",
              value: "3D",
            },
            tagStyle: {
              name: "#ffffff",
              value: "#FFEB00",
            },
            backgroundImage: {
              type: "image",
              image: {
                alt: "",
                url: "https://img.freepik.com/premium-photo/broken-space-ai-technology-generated-image_1112-11087.jpg",
                title: "backgrouns",
              },
              position: "top center",
            },
            backgroundColor: "#4379F2",
            titleColor: "#f0f8ff",
            descriptionColor: "#b5b7b9",
            shadow: [
              {
                blur: "50px",
                color: "#4379F2",
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
                color: "#0000f3",
                isInset: false,
              },
              {
                hOffset: "0px",
                vOffset: "18px",
                blur: "36px",
                spreed: "-18px",
                color: "#0000f0",
                isInset: false,
              },
            ],
          },
          {
            title: "Caffeine",
            content:
              "Caffeine is a central nervous system stimulant found in coffee, tea, and energy drinks. It's the most commonly consumed psychoactive substance in the world.",
            tag: {
              name: "View",
              value: "3D",
            },
            tagStyle: {
              name: "#ffffff",
              value: "#53F6FF",
            },
            button: {
              text: "See more",
              link: "#",
              color: "#53F6FF",
            },
            backgroundImage: {
              type: "image",
              image: {
                alt: "",
                url: "https://img.freepik.com/premium-photo/broken-space-ai-technology-generated-image_1112-11087.jpg",
                title: "backgrouns",
              },
              position: "top center",
            },
            backgroundColor: "#E05F25",
            titleColor: "#f0f8ff",
            descriptionColor: "#b5b7b9",
            shadow: [
              {
                blur: "50px",
                color: "#E05F25",
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
                color: "#E05F25",
                isInset: false,
              },
              {
                hOffset: "0px",
                vOffset: "18px",
                blur: "36px",
                spreed: "-18px",
                color: "#E05F25",
                isInset: false,
              },
            ],
          },
          {
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
                title: "backgrouns",
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
          },
          {
            title: "Oxytocin",
            content:
              "Oxytocin is a hormone that plays lorem50 a role in reproduction, social bonding, and childbirth. It's also known as the love hormone.",
            tag: {
              name: "View",
              value: "3D",
            },
            tagStyle: {
              name: "#ffffff",
              value: "#01FFBE",
            },
            button: {
              text: "See more",
              link: "#",
              color: "#01FFBE",
            },
            backgroundImage: {
              type: "image",
              image: {
                alt: "",
                url: "https://img.freepik.com/premium-photo/broken-space-ai-technology-generated-image_1112-11087.jpg",
                title: "backgrouns",
              },
              position: "top center",
            },
            backgroundColor: "#F24CA9",
            titleColor: "#f0f8ff",
            descriptionColor: "#b5b7b9",
            shadow: [
              {
                blur: "50px",
                color: "#F24CA9",
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
                color: "#F24CA9",
                isInset: false,
              },
              {
                hOffset: "0px",
                vOffset: "18px",
                blur: "36px",
                spreed: "-18px",
                color: "#F24CA9",
                isInset: false,
              },
            ],
          },
        ];

        break;

      case "theme8":
        draft["styles"] = {
          radius: {
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px",
          },
          columns: {
            desktop: 3,
            tablet: 2,
            mobile: 1,
          },
          columnGap: {
            desktop: "50px",
            tablet: "20px",
            mobile: "20px",
          },
          rowGap: {
            desktop: "50px",
            tablet: "20px",
            mobile: "20px",
          },
          bg: "#FFFFFF",
          margin: {
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px",
          },
          padding: {
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px",
          },
          card: {
            profileImage: {
              border: { color: "#ffffff", style: "solid", width: "3px" },
              width: "70px",
              height: "70px",
              radius: {
                top: "10px",
                right: "10px",
                bottom: "10px",
                left: "10px",
              },
            },
            company: {
              color: "#666",
              typo: {
                fontFamily: "",
                fontCategory: "sans-serif",
                fontWeight: "",
                fontSize: {
                  desktop: 14,
                  tablet: 12,
                  mobile: 10,
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
            },
            bg: {
              type: "gradient",
              gradient: "linear-gradient(to bottom right, #f7f7f6, #f3faf8)",
            },
            padding: {
              top: "0px",
              left: "0px",
              bottom: "0px",
              right: "0px",
            },
            margin: {
              top: "0px",
              left: "0px",
              bottom: "0px",
              right: "0px",
            },
            radius: {
              top: "16px",
              left: "16px",
              bottom: "16px",
              right: "16px",
            },
            shadow: [
              {
                hOffset: "0px",
                vOffset: "4px",
                blur: "15px",
                spreed: "0px",
                color: "rgba(0, 0, 0, 0.1)",
                isInset: false,
              },
            ],
            header: {
              name: {
                color: "#222",
                typo: {
                  fontFamily: "",
                  fontCategory: "sans-serif",
                  fontWeight: "",
                  fontSize: {
                    desktop: 20,
                    tablet: 16,
                    mobile: 14,
                  },
                  fontStyle: "normal",
                  textTransform: "none",
                  textDecoration: "none",
                  lineHeight: "",
                  letterSpace: "0px",
                },
                alignment: "center",
              },
              title: {
                color: "#f13a59",
                typo: {
                  fontFamily: "",
                  fontCategory: "sans-serif",
                  fontWeight: 600,
                  fontSize: {
                    desktop: 16,
                    tablet: 14,
                    mobile: 9,
                  },
                  fontStyle: "normal",
                  textTransform: "none",
                  textDecoration: "none",
                  lineHeight: "",
                  letterSpace: "0px",
                },
              },
              status: {
                color: "#00c07f",
                typo: {
                  fontFamily: "",
                  fontCategory: "sans-serif",
                  fontWeight: 500,
                  fontSize: {
                    desktop: 14,
                    tablet: 14,
                    mobile: 14,
                  },
                  fontStyle: "normal",
                  textTransform: "none",
                  textDecoration: "none",
                  lineHeight: "",
                  letterSpace: "0px",
                },
              },
              description: {
                color: "#555",
                typo: {
                  fontFamily: "",
                  fontCategory: "sans-serif",
                  fontWeight: 400,
                  fontSize: {
                    desktop: 14,
                    tablet: 14,
                    mobile: 14,
                  },
                  fontStyle: "normal",
                  textTransform: "none",
                  textDecoration: "none",
                  lineHeight: "1.5",
                  letterSpace: "0px",
                },
                alignment: "center",
              },
            },
            messageButton: {
              bg: "#f13a59",
              color: "white",
              radius: {
                top: "8px",
                left: "8px",
                bottom: "8px",
                right: "8px",
              },
              padding: {
                top: "12px",
                left: "12px",
                bottom: "12px",
                right: "12px",
              },
              typo: {
                fontFamily: "",
                fontCategory: "sans-serif",
                fontWeight: 600,
                fontSize: {
                  desktop: 16,
                  tablet: 16,
                  mobile: 16,
                },
                fontStyle: "normal",
                textTransform: "none",
                textDecoration: "none",
                lineHeight: "",
                letterSpace: "0px",
              },
              size: "20px",
            },

            states: {
              bg: "#fff",
              padding: {
                top: "10px",
                left: "20px",
                bottom: "10px",
                right: "20px",
              },
              radius: {
                top: "8px",
                left: "8px",
                bottom: "8px",
                right: "8px",
              },
              number: {
                color: "#222",
                typo: {
                  fontFamily: "",
                  fontCategory: "sans-serif",
                  fontWeight: 700,
                  fontSize: {
                    desktop: 18,
                    tablet: 18,
                    mobile: 18,
                  },
                  fontStyle: "normal",
                  textTransform: "none",
                  textDecoration: "none",
                  lineHeight: "",
                  letterSpace: "0px",
                },
              },
              text: {
                color: "#666",
                typo: {
                  fontFamily: "",
                  fontCategory: "sans-serif",
                  fontWeight: "",
                  fontSize: {
                    desktop: 14,
                    tablet: 14,
                    mobile: 14,
                  },
                  fontStyle: "normal",
                  textTransform: "none",
                  textDecoration: "none",
                  lineHeight: "",
                  letterSpace: "0px",
                },
              },
            },
          },
        };

        draft["productsInfo"]=[
        {
          "id": 1,
          "name": "Aisha Patel",
          "title": "Marketing Strategist",
          "company": "GrowthBoost",
          "status": "Online",
          "bio": "Developing effective marketing strategies for brands. Specializing in digital marketing and growth.",
          "state": [
            { "name": "posts", "quantity": 70 },
            { "name": "followers", "quantity": 5640 },
            { "name": "following", "quantity": 5010 }
          ],
          "profileImg": "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070",
          "social": [
            {
              "name": "twitter",
              "link": "#",
              "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z\"></path></svg>",
              "color":"#1da1f2",
              "show":true
            },
            {
              "name": "instagram",
              "link": "#",
              "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\" ry=\"5\"></rect><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"></path><line x1=\"17.5\" y1=\"6.5\" x2=\"17.51\" y2=\"6.5\"></line></svg>",
              "color":"#e1306c",
              "show":true
            },
            {
              "name": "linkedin",
              "link": "#",
              "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path><rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"></rect><circle cx=\"4\" cy=\"4\" r=\"2\"></circle></svg>",
              "color":"#666",
              "show":true
            },
            {
              "name": "email",
              "link": "#",
              "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94\"></path></svg>",
              "color":"#0077b5",
              "show":true
            }
          ],
          "button": {
            "text": "Message",
            "link": "#",
            "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"message-icon\"><path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path></svg>"
          }
        },
        {
          "id": 2,
          "name": "John Doe",
          "title": "Product Manager",
          "company": "InnovateX",
          "status": "Online",
          "bio": "Leading product development and improving user experiences.",
          "state": [
            { "name": "posts", "quantity": 120 },
            { "name": "followers", "quantity": 8920 },
            { "name": "following", "quantity": 540 }
          ],
          "profileImg": "https://randomuser.me/api/portraits/men/75.jpg",
          "social": [
            {
              "name": "twitter",
              "link": "#",
              "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z\"></path></svg>",
              "color":"#1da1f2",
              "show":true
            },
            {
              "name": "instagram",
              "link": "#",
              "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\" ry=\"5\"></rect><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"></path><line x1=\"17.5\" y1=\"6.5\" x2=\"17.51\" y2=\"6.5\"></line></svg>",
              "color":"#e1306c",
              "show":true
            },
            {
              "name": "linkedin",
              "link": "#",
              "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path><rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"></rect><circle cx=\"4\" cy=\"4\" r=\"2\"></circle></svg>",
              "color":"#666",
              "show":true
            },
            {
              "name": "email",
              "link": "#",
              "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94\"></path></svg>",
              "color":"#0077b5",
              "show":true
            }
          ],
          "button": {
            "text": "Message",
            "link": "#",
            "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"message-icon\"><path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path></svg>"
            
          }
        },
        {
          "id": 3,
          "name": "Sara Lee",
          "title": "UX Designer",
          "company": "Creatives",
          "status": "Online",
          "bio": "Passionate about creating intuitive and beautiful user interfaces.",
          "state": [
            { "name": "posts", "quantity": 45 },
            { "name": "followers", "quantity": 3200 },
            { "name": "following", "quantity": 120 }
          ],
          "profileImg": "https://randomuser.me/api/portraits/women/68.jpg",
         "social": [
            {
              "name": "twitter",
              "link": "#",
              "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z\"></path></svg>",
              "color":"#1da1f2",
              "show":true
            },
            {
              "name": "instagram",
              "link": "#",
              "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5\" ry=\"5\"></rect><path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"></path><line x1=\"17.5\" y1=\"6.5\" x2=\"17.51\" y2=\"6.5\"></line></svg>",
              "color":"#e1306c",
              "show":true
            },
            {
              "name": "linkedin",
              "link": "#",
              "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"></path><rect x=\"2\" y=\"9\" width=\"4\" height=\"12\"></rect><circle cx=\"4\" cy=\"4\" r=\"2\"></circle></svg>",
              "color":"#666",
              "show":true
            },
            {
              "name": "email",
              "link": "#",
              "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94\"></path></svg>",
              "color":"#0077b5",
              "show":true
            }
          ],
          "button": {
            "text": "Message",
            "link": "#",
            "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"message-icon\"><path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path></svg>"
          }
        }
      ];

      draft["options"]={
			"isSocialMediaShow":true,
			"isStateShow":true,
			"isButtonShow":true,
			"isStatusShow":true,
			"isOpenUrlNewTab":true,
      "messageButtonIcon":"<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"message-icon\"><path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"></path></svg>"
		}

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
