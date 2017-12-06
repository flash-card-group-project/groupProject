CREATE TABLE "USERS" (
	"user_id" integer NOT NULL UNIQUE,
	"first_name" TEXT NOT NULL,
	"last_name" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"favorites" integer,
	"user_decks" TEXT,
	CONSTRAINT USERS_pk PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "DECKS" (
	"deck_id" integer NOT NULL,
	"deck_name" TEXT NOT NULL,
	"category" TEXT NOT NULL,
	"parentID" integer,
	"deck_card" BINARY NOT NULL,
	"public" BOOLEAN NOT NULL,
	CONSTRAINT DECKS_pk PRIMARY KEY ("deck_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "CARDS" (
	"id" integer NOT NULL,
	"question" TEXT NOT NULL,
	"answer" TEXT NOT NULL,
	"parentID" integer,
	"multiple1" TEXT,
	"multiple2" TEXT,
	"multiple3" TEXT,
	"multiple4" TEXT,
	"multiple_answer4" TEXT,
	CONSTRAINT CARDS_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "DECKS" ADD CONSTRAINT "DECKS_fk0" FOREIGN KEY ("parentID") REFERENCES "DECKS"("deck_id");

ALTER TABLE "CARDS" ADD CONSTRAINT "CARDS_fk0" FOREIGN KEY ("parentID") REFERENCES "DECKS"("deck_id");

