update decks
set public = not public
where deck_id = $1
returning *;