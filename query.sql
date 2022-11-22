insert into autor(id_autor, nome_autor) values(1, 'Monteiro Lobato')
insert into autor(id_autor, nome_autor) values(2, 'Machado de Assis')

select * from autor

insert into cliente(matricula, nome_cliente, telefone_cliente) values(1, 'José Lucas', '(51) 98497-2422')
insert into cliente(matricula, nome_cliente, telefone_cliente) values(2, 'Fernando Silva', '(51) 9221-2122')

select * from cliente

insert into livro(id_livro, nome_livro, editora, ano_publicacao, id_autor) values(1, 'O Saci', 'O Globo', '1999-10-11', 1)
insert into livro(id_livro, isnb, nome_livro, editora, ano_publicacao, id_autor) values(2, 'Dom Casmurro', 'Editora Toth', '1982-01-10', 2)
insert into livro(id_livro, isnb, nome_livro, editora, ano_publicacao, id_autor) values(3, 'A Chave do Tamanho', 'Ciranda Cultural ', '1944-01-10', 1)

select * from livro

select livro.nome_livro, livro.editora, livro.ano_publicacao, livro.id_autor, autor.nome_autor 
from livro, autor where livro.id_autor = autor.id_autor

