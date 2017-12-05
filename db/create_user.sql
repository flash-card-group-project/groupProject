insert into users (
    first_name, 
    last_name, 
    email, 
    auth_id
)

values (
    $1,
    $2,
    $3,
    $4
)

returning * ;