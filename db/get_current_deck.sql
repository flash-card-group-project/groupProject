-- select *
-- from decks
-- inner join cards on decks.deck_id = cards.parent_id
-- where decks.deck_id = $1
-- and decks.creator_id = $2;

-- The command below this comment only gets decks, not cards.
select * from decks
where deck_id=$1;
-- and creator_id=$2;