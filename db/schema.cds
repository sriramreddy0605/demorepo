namespace my.productshop;

entity Products {
    key ID          : UUID;
    title       : String(100);
    description : String(500);
    price       : Decimal(9,2);
    stock       : Integer;
    category    : Association to Categories;
}

entity Categories {
    key ID   : UUID;
    name : String(50);
    products : Association to many Products on products.category = $self;
}

entity Supplier{
    keyID: UUID;
    name: String;
    
}