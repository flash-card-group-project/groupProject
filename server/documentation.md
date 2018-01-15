Endpoint Documentation:
Decks
1) ‘/api/public/decks’
   Method: get
   Req Params: none
   Response:
       [{deck_id: num,
       deck_name: ‘string’,
       category: ‘string’,
       parent_id: null or num,
       deck_card: deck,
       public: t / f,
       creator_id: num},
       {...}, …]
2) ‘/api/user/decks’
   Method: get
   Req Params: user.id
   Response:
       [{deck_id: num,
       deck_name: ‘string’,
       category: ‘string’,
       parent_id: null or num,
       deck_card: deck,
       public: t / f,
       creator_id: user.id},
       {...}, …]
3) ‘/api/deck/currentDeck/:deck_id’
   Method: get
   Req Params: deck.deck_id, user.id
   Response:
       [{deck_id: num,
       deck_name: ‘string’,
       category: ‘string’,
       parent_id: null or num,
       deck_card: deck,
       public: t / f,
       creator_id: num}]
4) ‘/api/create/deck’
   Method: post
   Req Params: none
   Response:
       [{deck_id: num,
       deck_name: ‘string’,
       category: ‘string’,
       deck_card: ‘deck’,
       creator_id: user.id,
       parent_id: null or num,
       public: t}]
5) ‘/api/decks/private-toggle/:deckid’
   Method: put
   Req Params: deckid
   Response:
       [{deck_id: num,
       deck_name: ‘string’,
       category: ‘string’,
       deck_card: ‘deck’,
       creator_id: user.id,
       parent_id: null or num,
       public: f}]
6) ‘/api/delete/deck/:deckId’
   Method: delete
   Req Params: deckId
   Response:
       [{deck_id: num,
       deck_name: ‘string’,
       category: ‘string’,
       parent_id: null or num,
       deck_card: deck,
       public: t / f,
       creator_id: user.id},
       {...}, …]
   **won’t find deleted deck with matching deck_id from param
7) ‘/api/deck/edit/:deck_id’
   Method: put
   Req Params: deck_id
   Response:
       [{deck_id: num,
       deck_name: ‘new string’,
       category: ‘new string’,
       parent_id: null or num,
       deck_card: deck,
       public: t / f,
       creator_id: num}]
8) ‘/api/user/favorites’
   Method: get
   Req Params: user.id, deckId
   Response:
       [{deck_id: num,
       deck_name: ‘string’,
       category: ‘string’,
       deck_card: ‘deck’,
       creator_id: user.id,
       parent_id: null or num,
       public: t}]
9) ‘/api/add/favorites/:deckId’
   Method: post
   Req Params: user.id, deckId
   Response:
       [{deck_id: num,
       deck_name: ‘string’,
       category: ‘string’,
       parent_id: null or num,
       deck_card: deck,
       public: t / f,
       creator_id: user.id},
       {...}, …]
10) ‘/api/delete/favorites/:deckId’
   Method: delete
   Req Params: user.id, deckId
   Response: 
       [{deck_id: num,
       deck_name: ‘string’,
       category: ‘string’,
       parent_id: null or num,
       deck_card: deck,
       public: t / f,
       creator_id: user.id},
       {...}, …]
   **won’t find deleted favorite deck with matching deck_id from param
Cards:
1) ‘/api/create/card/:deck_id’
   Method: post
   Req Params: deck_id
   Response:
       [{ card_id: num,
       question: ‘string’,
       answer: ‘string’,
       parent_id: deck_id,
       multiple1: null,
       multiple2: null,
       multiple3: null,
       multiple4: null,
       creator_id: user.id},
       {...}, …]
   Note: multiple# fields were not used, kept for further development in future
2) ‘/api/card/delete/:cardId’
   Method: delete
   Req Params: cardId
   Response:
       [{ card_id: num,
       question: ‘string’,
       answer: ‘string’,
       parent_id: deck_id,
       multiple1: null,
       multiple2: null,
       multiple3: null,
       multiple4: null,
       creator_id: user.id},
       {...}, …]
   ** all but deleted card with card_id matching req param
   Note: multiple# fields were not used, kept for further development in future
