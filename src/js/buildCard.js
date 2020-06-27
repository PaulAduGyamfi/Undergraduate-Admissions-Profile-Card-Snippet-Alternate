const UndergraduateAdmissionsCardAlternate = () =>{
    let imageUrl =''
    let cardName =''
    let cardFrontLocation =''
    let LinkUrl =''

    return {
        
        withImageUrl(value){
            imageUrl = value;
            return this;
        },
        withCardName(value){
            cardName = value;
            return this;
        },
        withCardFrontLocation(value){
            cardFrontLocation = value;
            return this;
        },
        withLinkUrl(value){
            LinkUrl = value;
            return this;
        },

        build(){
            return{
                imageUrl,
                cardName,
                cardFrontLocation,
                LinkUrl
            }
        }
    
    }

}



export default UndergraduateAdmissionsCardAlternate