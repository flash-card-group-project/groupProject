--new updated schema(NC): 

create table users (
	id serial not null primary key,
	first_name varChar(100) not null, 
	last_name varCHar(100) not null, 
	email varChar(50), 
	favorites integer[15],
	user_decks integer[],
	auth_id integer not null
)

create table decks (
	deck_id serial not null primary key, 
	deck_name varChar(200) not null, 
	category text not null, 
	parent_id integer references decks(deck_id),
	deck_card text not null, 
	public boolean, 
	creator_id integer references users(id),
	cards_array integer[]
)

create table cards (
	card_id serial not null primary key, 
	question text not null, 
	answer text not null, 
	parent_id integer references decks(deck_id), 
	multiple1 text, 
	multiple2 text, 
	multiple3 text, 
	multiple4 text,
	creator_id integer references users(id),
	cards_array integer[]
)
