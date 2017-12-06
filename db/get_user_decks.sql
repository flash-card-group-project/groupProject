select * from decks
where creator_id = $1
returning *;