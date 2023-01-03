let game = {

    lockMode: false,
    firstCard: null,
    secondCard: null,

    companies : ['amazon', 'apple', 'facebook', 'google', 
    'ibm','intel', 'microsoft', 'samsung', 
    'tesla', 'xiaomi'],

    cards : null,

    setCard: function (id) {

        let card = this.cards.filter(card=> card.id === id)[0];

        if(card.flipped || this.lockMode){
            return false;
        }

        if(!this.firstCard){
            this.firstCard = card;
            this.firstCard.flipped = true;
            return true;
        } else {
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockMode = true;
            return true;
        }
    },

    checkMatch: function () {
        if(!this.firstCard || !this.secondCard){
            return false;
        }
        return this.firstCard.icon === this.secondCard.icon;
    },

    clearCards: function(){
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },
    unflipCards() {
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();
    },

    checkGameOver() {

        return this.cards.filter(card =>!card.flipped).length == 0;
    },

    createCards: function () {

        this.cards = [];

        this.companies.forEach((company) => {
            this.cards.push(this.createPairForCards(company));
        })

        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards();
        return this.cards;
    },

    createPairForCards: function (company) {
            
        return [{
            id: this.createIdForCards(company),
            icon: company,
            flipped: false
        }, {
            id: this.createIdForCards(company),
            icon: company,
            flipped: false
        }]
    },

    createIdForCards: function (company){

        return company + parseInt(Math.random() * 1000);
    },

    shuffleCards: function (cards){
    
        let currentIndex = this.cards.length;
        let randomIndex = 0;
    
        while (currentIndex !== 0){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
    
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }
    }
}