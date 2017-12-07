insert into decks(
    deck_name,
    category, 
    deck_card, 
    public
)
values( $1, 
$2, 
$3, 
$4)
returning *;