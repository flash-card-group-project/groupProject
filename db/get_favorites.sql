select * from users
where id=$1
and favorites is not null;