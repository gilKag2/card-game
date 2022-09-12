const SUITES = [ "♠", "♣", "♥", "♦" ];
const VALUES = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" ];

export default class Deck {
    constructor(cards = createFreshDeck()) {
        this.cards = cards;
    }

    get numberOfCards() {
        return this.cards.length;
    }

    pop() {
        return this.cards.shift();
    }

    push(card) {
        this.cards.push(card);
    }

    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            // random a new index for the current card(index should be less then i) 
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.cards[ newIndex ];
            // switch the cards
            this.cards[ newIndex ] = this.cards[ i ];
            this.cards[ i ] = oldValue;
        }
    }
}

class Card {
    constructor(suite, value) {
        this.suite = suite;
        this.value = value;
    }

    get color() {
        return this.suite === "♠" || this.suite == "♣" ? 'black' : 'red';
    }

    getHTML() {
        const cardDiv = document.createElement('div');
        cardDiv.innerText = this.suite;
        cardDiv.classList.add("card", this.color);
        cardDiv.dataset.value = `${this.value} ${this.suite}`;
        return cardDiv;
    }
}

function createFreshDeck() {
    return SUITES.flatMap(suite => {
        return VALUES.map(value => {
            return new Card(suite, value);
        });
    });
}