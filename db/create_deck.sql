insert into decks(
    deck_name,
    category, 
    deck_card, 
    creator_id,
    parent_id
)
values( $1, 
$2, 
$3,
$4,
$5)
returning *;