update users
set favorites=$1
where id=$2
returning *;



