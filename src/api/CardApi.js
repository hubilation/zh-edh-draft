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

  static GetDraftQueueForPlayer(ownerId){
    return request
      .get('http://localhost:4000/draftqueue')
      .query({ownerId, _sort: "queueTime"})
      .then(q=>q.body);
  }

  static QueueCard(card, owner) {
    return request
      .post(`http://localhost:4000/draftqueue/`)
      .send({
        card: card,
        ownerId: owner,
        queueTime: new Date()
      });
  }

  static SelectCard(card, owner) {
    return request
      .post("http://localhost:4000/selectedCards")
      .send({
        name: card.name,
        id: card.id,
        owner
      })
      .then(f => {
      });
  }

  static GetSelectedCardsFromDb() {
    return request
      .get("http://localhost:4000/selectedCards")
      .then(selectedCards => selectedCards.body);
  }

  static GetSelectedCards() {
    return [
      { name: "Counterspell", owner: "Me" },
      { name: "Negate", owner: "you" }
    ];
  }

  static GetDistinctCardsByName(input) {
    return request
      .get("https://api.scryfall.com/cards/search")
      .query({ q: input })
      .then(cardResults => {
        var cards = cardResults.body.data;
        var selectedCards = this.GetSelectedCards();

        var result = cards.map(card => {
          var selectedCard = selectedCards.filter(c => c.name === card.name);
          if (selectedCard.length > 0) {
            card.ownedBy = selectedCard[0].owner;
          }

          return card;
        });

        return result;
      });
  }
}
