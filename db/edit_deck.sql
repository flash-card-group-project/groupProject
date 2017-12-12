update decks
set category = $1,
    deck_name = $2
where deck_id = $3
returning *;