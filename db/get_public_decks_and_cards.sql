select 
decks.deck_id, 
decks.deck_name, 
decks.category, 
decks.parent_id, 
decks.creator_id, 
cards.card_id, 
cards.question, 
cards.answer, 
cards.parent_id, 
cards.creator_id
from decks 
inner join cards on cards.parent_id = decks.deck_id
where decks.public = true
and decks.deck_id = $1;