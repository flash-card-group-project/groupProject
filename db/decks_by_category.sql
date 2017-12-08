select * from decks
where category = $1
returning *;