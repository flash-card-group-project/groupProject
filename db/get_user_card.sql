select * from cards
where creator_id = $1
returning *;