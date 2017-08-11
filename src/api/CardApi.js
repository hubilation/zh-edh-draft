import mtg from "mtgsdk";
import request from "superagent";

export default class CardApi {
  // static GetDistinctCardsByName(input) {
  //   var names = [];
  //   return mtg.card
  //     .where({ name: input, gameFormat: "commander" })
  //     .then(cardResults => {
  //       var distinct = [];
  //       cardResults.map(function(cardResult) {
  //         if (names.indexOf(cardResult.name) > -1) {
  //           return;
  //         }
  //         names.push(cardResult.name);
  //         distinct.push(cardResult);
  //       });
  //       return distinct;
  //     });
  // }

  static GetDistinctCardsByName(input){
    return request
      .get('https://api.scryfall.com/cards/search')
      .query({q:input})
      .then(cardResults=>{
        var cards = cardResults.body.data;
        return cards;
      })
  }
}
