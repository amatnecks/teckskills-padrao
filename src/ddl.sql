create table clientes (
    id serial primary key,
    nome varchar(100) not null,
    cpf varchar(11) not null,
    email varchar(100) not null,
    data_nasc date,
    data_cadastro timestamp defalt now(),

);

create table enderecos (
    id serial primary key,
    logradouro varchar (150) not null,
    numero varchar (10) not null,
    bairro varchar (60) not null,
    cep varchar (8) not null,
    complemento varchar (100),
    referencia varchar (200),
    cidade varchar (100) not null,
    uf varchar (2) not null,
);

create table enderecos_cliente (

    cliente_id integer not null,
    endereco_id integer not null,
    tipo varchar (30) not null check ('entrega', 'cobranca'),

    constraint pk_enderecos_cliente primary key (cliente_id, endereco_id)
    
    constraint fk_cliente_id foreign key (cliente_id)
        references clientes (id),
    constraint fk_endereco_id foreign key (endereco_id)
        references enderecos (id)


);

create table pedidos (
    id serial primary key,
    cliente_id integer not null,
    descricao varchar (500),
    data_pedido timestamp not null,
    data_entrega timestamp not null,

    constraint fk_cliente_pedido foreign key (cliente_id)
        references clientes (id)
);

create table itens (
    id serial primary key,
    nome varchar (100) not null,
    descricao varchar (500),
    valor numeric (10,2) not null check (valor > 0),
    tempo_preparo interval,
    imagem varchar (200),
);

create table item_pedido (
    item_id integer not null,
    pedido_id integer not null,
    quantidade integer not null check (quantidade > 0),

        constraint pk_item_pedido primary key (item_id, pedido_id),
        constraint fk_item foreign key (item_id)
        references itens (id),
        constraint fk_pedidos foreign key (pedido_id)
        references pedido (id)
        
);

