import React from 'react';
import { Label } from '../../../../../bpl-tools/Components';
import { TextControl } from "@wordpress/components";
import { updateData } from '../../../../../bpl-tools/utils/functions';


const SevenInfoCardSetting = (props) => {
      const { attributes, setAttributes, index } = props;
  const { productsInfo } = attributes;
  const item = productsInfo[index];
    return (
        <div>
      <span>Tag</span>
      <Label className="mt5">
        {" "}
        <TextControl
          placeholder="name..."
          label="Name"
          value={item?.tag?.name}
          onChange={(value) =>
            setAttributes({
              productsInfo: updateData(productsInfo, value, index, "tag", "name"),
            })
          }
        />
        <TextControl
          placeholder="value..."
          label="Value"
          value={item?.tag?.value}
          onChange={(value) =>
            setAttributes({
              productsInfo: updateData(productsInfo, value, index, "tag", "value"),
            })
          }
        />
      </Label>

      <TextControl
        placeholder="title..."
        label="Title"
        value={item?.title}
        onChange={(value) =>
          setAttributes({
            productsInfo: updateData(productsInfo, value, index, "title"),
          })
        }
      />

      <TextControl
        placeholder="description..."
        label="Description"
        value={item?.content}
        onChange={(value) =>
          setAttributes({
            productsInfo: updateData(productsInfo, value, index, "content"),
          })
        }
      />

      <span>Button</span>
      <Label className="mt5">
        {" "}
        <TextControl
          placeholder="name..."
          label="Name"
          value={item?.button?.text}
          onChange={(value) =>
            setAttributes({
              productsInfo: updateData(productsInfo, value, index, "button", "text"),
            })
          }
        />
        <TextControl
          placeholder="url..."
          label="URL"
          value={item?.button?.link}
          onChange={(value) =>
            setAttributes({
              productsInfo: updateData(productsInfo, value, index, "button", "link"),
            })
          }
        />
      </Label>
    </div>
    );
};

export default SevenInfoCardSetting;  