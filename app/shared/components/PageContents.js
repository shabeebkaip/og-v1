import React from 'react'

const PageContents = ({ pageContent1, text }) => {
  return (
    <span>
      {text?.split(pageContent1?.borderText).map((splitText, index) => (
        <div key={index} style={{ display: 'inline' }}>
          {index > 0 && (
            <span
              className="py-2 px-5 border rounded-[23px]"
              style={{
                color:
                  pageContent1?.textColor?.trim().toLowerCase() === pageContent1.borderText.trim().toLowerCase() ||
                    pageContent1?.textColor_1?.trim().toLowerCase() === pageContent1.borderText_1.trim().toLowerCase()
                    ? '#FF8500'
                    : 'inherit',
                borderColor: '#FF8500', // Apply border color based on borderText
                borderWidth: '1px',
              }}
            >
              {pageContent1?.borderText}
            </span>
          )}
          {splitText.split(pageContent1?.borderText_1).map((innerSplitText, innerIndex) => (

            <span key={innerIndex}>

              {innerSplitText.split(' ').map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  style={{
                    color:
                      pageContent1?.textColor?.split(' ').includes(word.replace(/[.,]/g, '')) ||
                        pageContent1?.textColor_1?.split(' ').includes(word.replace(/[.,]/g, ''))
                        ? '#FF8500'
                        : 'inherit',
                    border: 'none', // Remove border from words
                  }}
                >
                  {word}
                  {wordIndex < innerSplitText.split(' ').length - 1 && ' '}
                </span>
              ))}
              {innerIndex < splitText.split(pageContent1?.borderText_1).length - 1 && (
                <span
                  className="py-2 px-5 border rounded-[23px]"
                  style={{
                    color:
                      pageContent1?.textColor?.trim().toLowerCase() === pageContent1.borderText_1?.trim().toLowerCase() ||
                        pageContent1?.textColor_1?.trim().toLowerCase() === pageContent1.borderText_1?.trim().toLowerCase()
                        ? '#FF8500'
                        : 'inherit',
                    borderColor: '#FF8500', // Apply border color based on borderText_1
                    borderWidth: '1px',
                  }}
                >
                  {pageContent1?.borderText_1}
                </span>
              )}
            </span>
          ))}
        </div>
      ))}
    </span>
  )
}

export default PageContents