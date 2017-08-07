import mtg from "mtgsdk";

export default class CardApi {
  static GetDistinctCardsByName(input) {
    var names = [];
    return mtg.card
      .where({ name: input, gameFormat: "commander" })
      .then(cardResults => {
        var distinct = [];
        cardResults.map(function(cardResult) {
          if (names.indexOf(cardResult.name) > -1) {
            return;
          }
          names.push(cardResult.name);
          distinct.push(cardResult);
        });
        return distinct;
      });
  }
}
