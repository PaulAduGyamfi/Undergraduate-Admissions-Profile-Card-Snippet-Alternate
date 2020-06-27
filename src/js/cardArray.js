import UndergraduateAdmissionsCardAlternate from './buildCard'

const isDefined = (string) => string != null || string != undefined

let cardArray = []


const cardMaker = ({
        imageUrl,
        cardName,
        cardFrontLocation,
        LinkUrl
}) =>{

    const card = UndergraduateAdmissionsCardAlternate();
    
    if(isDefined(imageUrl)) card.withImageUrl(imageUrl)
    if(isDefined(cardName)) card.withCardName(cardName)
    if(isDefined(cardFrontLocation)) card.withCardFrontLocation(cardFrontLocation)
    if(isDefined(LinkUrl)) card.withLinkUrl(LinkUrl)


    cardArray.push(card.build())

}

export {cardMaker, cardArray}