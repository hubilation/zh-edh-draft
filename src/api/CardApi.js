import request from "superagent";

export default class CardApi {
  static GetDraftQueueForPlayer(ownerId) {
    return request
      .get("http://localhost:4000/draftqueue")
      .query({ ownerId, _sort: "queueTime" })
      .then(q => q.body);
  }

  static QueueCard(card, owner) {
    return request.post(`http://localhost:4000/draftqueue/`).send({
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
      .then(f => {});
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
    var inputWithCommander = input + "+format:commander";
    return new Promise(resolve => {
      return request
        .get("https://api.scryfall.com/cards/search?q="+inputWithCommander)
        .end((error, response) => {
          if (error) {
            return resolve([]);
          }
          var cards = response.body.data;
          var selectedCards = this.GetSelectedCards();

          var result = cards.map(card => {
            var selectedCard = selectedCards.filter(c => c.name === card.name);
            if (selectedCard.length > 0) {
              card.ownedBy = selectedCard[0].owner;
            }

            return card;
          });

          return resolve(result.slice(0,20));
        });
    });
  }
}
