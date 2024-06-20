import React from 'react'

const PageContents = ({ item,index }) => {

  const borderColor = '#4C4C4D';
  const textColor = '#FF8500'; // Adjust this to your desired color

  const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
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
      const isBorderText = borderTexts.some(text => part.toLowerCase() === text.toLowerCase());
      const isTextColor = textColors.some(text => part.toLowerCase() === text.toLowerCase());
      return (
        <span
          key={index}
          style={{
            border: isBorderText ? `2px solid ${borderColor}` : 'none',
            color: isTextColor ? textColor : 'inherit',
            borderRadius:isBorderText ? `53px` : 'none',
            padding:isBorderText ? `7px` : 'none'
          }}
        >
          {part}
        </span>
      );
    });
  };
  return (
    <span>
      {getTextWithStyles(item?.text, matchingBorderTexts, matchingTextColors)}

    </span>
  )
}

export default PageContents