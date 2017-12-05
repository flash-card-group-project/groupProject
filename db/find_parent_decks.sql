select * from decks
where parent_id is null 
and creator_id = $1;