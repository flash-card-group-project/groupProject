insert into cards(
    parent_id,
    question,
    answer, 
    multiple1,
    multiple2, 
    multiple3, 
    multiple4
)
values( 
$1, 
$2, 
$3, 
$4,
$5,
$6,
$7
)
returning *;