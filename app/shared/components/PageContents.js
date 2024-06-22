import React from 'react';

const PageContents = ({ item, head }) => {
  const borderColor = '#4C4C4D';
  const textColor = '#FF8500';

  const escapeRegExp = (string) => {
    return string.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/,/g, '');
  };

  const getMatchingText = (text, list) => {
    if (!list) return [];
    return Array.isArray(list) ? list : [list];
  };

  const matchingBorderTexts = getMatchingText(item?.text, item?.borderText).filter(Boolean);
  const matchingTextColors = getMatchingText(item?.text, item?.textColor).filter(Boolean);

  const getTextWithStyles = (text, borderTexts, textColors) => {
    if (!borderTexts.length && !textColors.length) return text;

    const escapedBorderTexts = borderTexts.map(escapeRegExp).join('|');
    const escapedTextColors = textColors.map(escapeRegExp).join('|');
    const combinedPattern = `${escapedBorderTexts}|${escapedTextColors}`;

    const parts = text.split(new RegExp(`(${combinedPattern})`, 'gi'));

    return parts.map((part, index) => {
      const lowerPart = part.toLowerCase();
      const isBorderText = borderTexts.some(text => lowerPart === text.toLowerCase());
      const isTextColor = textColors.some(text => lowerPart === text.toLowerCase());

      return (
        <span
          key={index}
          style={{
            border: isBorderText ? `2px solid ${borderColor}` : 'none',
            color: isTextColor ? textColor : '#6D6E71',
            borderRadius: isBorderText ? '53px' : 'none',
            padding: isBorderText ? '7px' : 'none',
          }}
        >
          {part}
          {head ? <br /> : null}
        </span>
      );
    });
  };

  return (
    <span>
      {getTextWithStyles(item?.text, matchingBorderTexts, matchingTextColors)}
    </span>
  );
};

export default PageContents;
