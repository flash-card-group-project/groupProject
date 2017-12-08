select * from cards
where card_id = $1
returning *;