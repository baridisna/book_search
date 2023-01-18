-- public.wishlist definition

-- Drop table

-- DROP TABLE public.wishlist;

CREATE TABLE public.wishlist (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	book_id varchar NOT NULL,
	title varchar NULL,
	authors text NULL,
	average_rating numeric NULL,
	thumbnail varchar NULL
);

INSERT INTO public.wishlist (book_id,title,authors,average_rating,thumbnail) VALUES
	 ('6EzmlAEACAAJ','API Design for C++','Martin Reddy',3,'http://books.google.com/books/content?id=6EzmlAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'),
	 ('2ABEAQAAIAAJ','The Java 3D API Specification','Henry A. Sowizral; Kevin Rushforth; Michael Deering',0,'http://books.google.com/books/content?id=2ABEAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'),
	 ('7Ro3EAAAQBAJ','Unyielding Circumstances of Chronicles Undefined','Dr. Octavia Kincy-Moten',0,'http://books.google.com/books/content?id=7Ro3EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'),
	 ('adGkDAAAQBAJ','The Undefined Process','Bill Mc Neice',0,'http://books.google.com/books/content?id=adGkDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'),
	 ('A4PhXnRAdRkC','30 Hari mencari cinta','Nova Riyanti Yusuf; Upi Avianto',3.5,'http://books.google.com/books/content?id=A4PhXnRAdRkC&printsec=frontcover&img=1&zoom=1&source=gbs_api');