const createCardModel = (cardObj) => {
  
  console.log(cardObj)
    const element = `
    
    <div class="Undergraduate-Admissions-Profile-Card-Snippet-Alternate-CardWrapper">
    <div class="Undergraduate-Admissions-Profile-Card-Snippet-Alternate-Card" style="background-image:url('${cardObj.imageUrl}')">
        <div class="Undergraduate-Admissions-Profile-Card-Snippet-Alternate-Card-Bottom">
            <div class="Undergraduate-Admissions-Profile-Card-Snippet-Alternate-Card-Bottom-Caption">
                <div class="Undergraduate-Admissions-Profile-Card-Snippet-Alternate-Card-Bottom-Caption-Name">${cardObj.cardName}</div>
                <div class="Undergraduate-Admissions-Profile-Card-Snippet-Alternate-Card-Bottom-Caption-Location">${cardObj.cardFrontLocation}</div>
            </div>
            <div class="Undergraduate-Admissions-Profile-Card-Snippet-Alternate-Card-Bottom-Caption-Button"><button onclick="window.open('${cardObj.LinkUrl}');">Register</button></div>
        </div>
    </div>
</div>
    
    `;



    return element;
};


export default createCardModel