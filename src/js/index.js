  import UndergraduateAdmissionsCardAlternate from './buildCard'
import { cardMaker, cardArray } from './cardArray'
import createCardModel from './cardModel'





cardMaker({
    imageUrl:'https://cdn.vox-cdn.com/thumbor/ZbHT_HB51FBfJDn7mVkEOal3sHQ=/0x54:3047x2085/1200x800/filters:focal(0x54:3047x2085)/cdn.vox-cdn.com/uploads/chorus_image/image/30109923/20130215_mje_aw8_487.0.jpg',
    cardName:'Christopher Ryan',
    cardFrontLocation:'New York, Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho',
    LinkUrl:'https://www.stonybrook.edu',
  })
cardMaker({
    imageUrl:'https://cdn.vox-cdn.com/thumbor/ZbHT_HB51FBfJDn7mVkEOal3sHQ=/0x54:3047x2085/1200x800/filters:focal(0x54:3047x2085)/cdn.vox-cdn.com/uploads/chorus_image/image/30109923/20130215_mje_aw8_487.0.jpg',
    cardName:'Christopher Ryan',
    cardFrontLocation:'New York, Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho',
    LinkUrl:'https://www.stonybrook.edu',
  })
cardMaker({
    imageUrl:'https://cdn.vox-cdn.com/thumbor/ZbHT_HB51FBfJDn7mVkEOal3sHQ=/0x54:3047x2085/1200x800/filters:focal(0x54:3047x2085)/cdn.vox-cdn.com/uploads/chorus_image/image/30109923/20130215_mje_aw8_487.0.jpg',
    cardName:'Christopher Ryan',
    cardFrontLocation:'New York, Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho',
    LinkUrl:'https://www.stonybrook.edu',
  })
cardMaker({
    imageUrl:'https://cdn.vox-cdn.com/thumbor/ZbHT_HB51FBfJDn7mVkEOal3sHQ=/0x54:3047x2085/1200x800/filters:focal(0x54:3047x2085)/cdn.vox-cdn.com/uploads/chorus_image/image/30109923/20130215_mje_aw8_487.0.jpg',
    cardName:'Christopher Ryan',
    cardFrontLocation:'New York, Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho',
    LinkUrl:'https://www.stonybrook.edu',
  })
cardMaker({
    imageUrl:'https://cdn.vox-cdn.com/thumbor/ZbHT_HB51FBfJDn7mVkEOal3sHQ=/0x54:3047x2085/1200x800/filters:focal(0x54:3047x2085)/cdn.vox-cdn.com/uploads/chorus_image/image/30109923/20130215_mje_aw8_487.0.jpg',
    cardName:'Christopher Ryan',
    cardFrontLocation:'New York, Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho',
    LinkUrl:'https://www.stonybrook.edu',
  })
cardMaker({
    imageUrl:'https://cdn.vox-cdn.com/thumbor/ZbHT_HB51FBfJDn7mVkEOal3sHQ=/0x54:3047x2085/1200x800/filters:focal(0x54:3047x2085)/cdn.vox-cdn.com/uploads/chorus_image/image/30109923/20130215_mje_aw8_487.0.jpg',
    cardName:'Christopher Ryan',
    cardFrontLocation:'New York, Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho',
    LinkUrl:'https://www.stonybrook.edu',
  })





let UndergraduateAdmissionsProfileCardSnippetContainer = document.querySelector('#Undergraduate-Admissions-Profile-Card-Snippet-Alternate #Undergraduate-Admissions-Profile-Card-Snippet-Alternate-Container')
  
  cardArray.map(item => createCardModel(item))
  .forEach(card => {
    UndergraduateAdmissionsProfileCardSnippetContainer.innerHTML += card
  })