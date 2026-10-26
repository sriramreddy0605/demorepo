using { my.productshop as my } from '../db/schema';

service ProductService {
    entity Products as projection on my.Products;
    entity Categories as projection on my.Categories;
    entity Suppiler as projection on my.Supplier;

    // Bound or unbound custom operations
    function printthehelloworld(input : String) returns String;
    action calculateDiscount(productID : UUID, percentage : Decimal) returns Decimal;
}