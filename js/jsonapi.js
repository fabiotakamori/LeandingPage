$(document).ready(function() {
    let qtd = 0
    fetch('http://mirai.commercesuite.com.br/web_api/products?limit=10')
    .then((response) => response.json()
    )
    .then((json) =>json.Products.forEach(function(element, i) {
       
        if(element.Product.ProductImage[0] !=null){
            
            if(qtd <= 4){          
                document.getElementById('productl-'+(qtd+1)).href=element.Product.url.https
                document.getElementById('img-'+(qtd+1)).src=element.Product.ProductImage[0].http
                document.getElementById('prodt-'+(qtd+1)).innerHTML = element.Product.name;
                document.getElementById('price-'+(qtd+1)).innerHTML = "<span>R$</span>: " +element.Product.price;
            }
            qtd+=1
        }
        
    }));
})