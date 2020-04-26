const React = require("react");
const { MediaSelector, MediaSelectorItem } = require("react-alegrify-ui");

const HUG_TYPES = require("../config/hug-types");

function HugSelector() {
  return (
    <MediaSelector>
      {HUG_TYPES.map((hug, index) => (
        <MediaSelectorItem
          key={hug.title}
          name="hug_type"
          checked={index === 0}
          value={hug.image}
          image={hug.image}
          alt={hug.alt}
          width={hug.width || 300}
          height={hug.height || 300}
          title={hug.title}
          description={hug.content}
        />
      ))}
    </MediaSelector>
  );
}

module.exports = HugSelector;
