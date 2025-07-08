import React from 'react';
import { Label } from '../../../../../bpl-tools/Components';
import { TextControl } from "@wordpress/components";
import { updateData } from '../../../../../bpl-tools/utils/functions';


const SevenInfoCardSetting = (props) => {
      const { attributes, setAttributes, index } = props;
  const { themeSevenInfo } = attributes;
  const item = themeSevenInfo[index];
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
              themeSevenInfo: updateData(themeSevenInfo, value, index, "tag", "name"),
            })
          }
        />
        <TextControl
          placeholder="value..."
          label="Value"
          value={item?.tag?.value}
          onChange={(value) =>
            setAttributes({
              themeSevenInfo: updateData(themeSevenInfo, value, index, "tag", "value"),
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
            themeSevenInfo: updateData(themeSevenInfo, value, index, "title"),
          })
        }
      />

      <TextControl
        placeholder="description..."
        label="Description"
        value={item?.content}
        onChange={(value) =>
          setAttributes({
            themeSevenInfo: updateData(themeSevenInfo, value, index, "content"),
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
              themeSevenInfo: updateData(themeSevenInfo, value, index, "button", "text"),
            })
          }
        />
        <TextControl
          placeholder="url..."
          label="URL"
          value={item?.button?.link}
          onChange={(value) =>
            setAttributes({
              themeSevenInfo: updateData(themeSevenInfo, value, index, "button", "link"),
            })
          }
        />
      </Label>
    </div>
    );
};

export default SevenInfoCardSetting;