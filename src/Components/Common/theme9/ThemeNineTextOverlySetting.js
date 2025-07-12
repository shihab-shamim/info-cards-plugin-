import {
  FormToggle,
  TextareaControl,
  TextControl,
} from "@wordpress/components";
import { InlineMediaUpload, Label } from "../../../../../bpl-tools/Components";
import { updateData } from "../../../utils/function";

const ThemeNineTextOverlySetting = (props) => {
  const { attributes, setAttributes, index } = props;
  const { productsInfo } = attributes;
  const item = productsInfo[index];
  return (
    <div>
      <InlineMediaUpload
        label="Image"
        value={item?.imageUrl}
        onChange={(value) =>
          setAttributes({
            productsInfo: updateData(productsInfo, value, index, "imageUrl"),
          })
        }
      />

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

      <TextareaControl
        placeholder="description..."
        label="Description"
        value={item?.description}
        onChange={(value) =>
          setAttributes({
            productsInfo: updateData(productsInfo, value, index, "description"),
          })
        }
      />

      <TextControl
        placeholder="button text ..."
        label="Button Text"
        value={item?.buttonText}
        onChange={(value) =>
          setAttributes({
            productsInfo: updateData(productsInfo, value, index, "buttonText"),
          })
        }
      />
      <TextControl
        placeholder="button URL ..."
        label="Button URL"
        value={item?.buttonLink}
        onChange={(value) =>
          setAttributes({
            productsInfo: updateData(productsInfo, value, index, "buttonLink"),
          })
        }
      />

      <Label>
        Link Open in New Tab{" "}
        <FormToggle
          checked={item?.newTab}
          onChange={() =>
            setAttributes({
              productsInfo: updateData(
                productsInfo,
                !item?.newTab,
                index,
                "newTab"
              ),
            })
          }
        />
      </Label>
    </div>
  );
};

export default ThemeNineTextOverlySetting;
