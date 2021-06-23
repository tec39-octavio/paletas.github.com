let count_oreo=0;
let count_fresa_leche=0;
let count_fresa_queso=0;
let count_mamey=0;
let count_queso_zarzamora=0;
let count_pina_coco=0;
let count_arroz_leche=0;
let count_cafe=0;
let count_chocolate_galleta=0;
let count_pay_limon=0;
let count_nuez=0;
let count_mango_chile=0;
let count_nuez_entera=0;
let count_pinon=0;
let count_pistache=0;
let total=0;
function addQty(product,qty){
        switch(product){
            case 'oreo':
                if(qty=='+'){
                    count_oreo = count_oreo + 1;
                    total = total + 15;
                }else{
                    count_oreo = count_oreo - 1;
                    total = total - 15;
                }
                document.getElementById('btn-oreo').textContent = count_oreo;
            break;
            case 'fresa-leche':
                if(qty=='+'){
                    count_fresa_leche = count_fresa_leche + 1;
                    total = total + 15;
                }else{
                    count_fresa_leche = count_fresa_leche - 1;
                    total = total - 15;
                }
                document.getElementById('btn-fresa-leche').textContent = count_fresa_leche;
            break;
            case 'fresa-queso':
                if(qty=='+'){
                    count_fresa_queso = count_fresa_queso + 1;
                    total = total + 15;
                }else{
                    count_fresa_queso = count_fresa_queso - 1;
                    total = total - 15;
                }
                document.getElementById('btn-fresa-queso').textContent = count_fresa_queso;
            break;
            case 'mamey':
                if(qty=='+'){
                    count_mamey = count_mamey + 1;
                    total = total + 15;
                }else{
                    count_mamey = count_mamey - 1;
                    total = total - 15;
                }
                document.getElementById('btn-mamey').textContent = count_mamey;
            break;                        
            case 'queso-zarzamora':
                if(qty=='+'){
                    count_queso_zarzamora = count_queso_zarzamora + 1;
                    total = total + 15;
                }else{
                    count_queso_zarzamora = count_queso_zarzamora - 1;
                    total = total - 15;
                }
                document.getElementById('btn-queso-zarzamora').textContent = count_queso_zarzamora;
            break; 
            case 'pina-coco':
                if(qty=='+'){
                    count_pina_coco = count_pina_coco + 1;
                    total = total + 15;
                }else{
                    count_pina_coco = count_pina_coco - 1;
                    total = total - 15;
                }
                document.getElementById('btn-pina-coco').textContent = count_pina_coco;
            break;                                    
            case 'arroz-leche':
                if(qty=='+'){
                    count_arroz_leche = count_arroz_leche + 1;
                    total = total + 15;
                }else{
                    count_arroz_leche = count_arroz_leche - 1;
                    total = total - 15;
                }
                document.getElementById('btn-arroz-leche').textContent = count_arroz_leche;
            break;
            case 'cafe':
                if(qty=='+'){
                    count_cafe = count_cafe + 1;
                    total = total + 15;
                }else{
                    count_cafe = count_cafe - 1;
                    total = total - 15;
                }
                document.getElementById('btn-cafe').textContent = count_cafe;
            break;   
            case 'chocolate-galleta':
                if(qty=='+'){
                    count_chocolate_galleta = count_chocolate_galleta + 1;
                    total = total + 15;
                }else{
                    count_chocolate_galleta = count_chocolate_galleta - 1;
                    total = total - 15;
                }
                document.getElementById('btn-chocolate-galleta').textContent = count_chocolate_galleta;
            break; 
            case 'pay-limon':
                if(qty=='+'){
                    count_pay_limon = count_pay_limon + 1;
                    total = total + 15;
                }else{
                    count_pay_limon = count_pay_limon - 1;
                    total = total - 15;
                }
                document.getElementById('btn-pay-limon').textContent = count_pay_limon;
            break;
            case 'nuez':
                if(qty=='+'){
                    count_nuez = count_nuez + 1;
                    total = total + 15;
                }else{
                    count_nuez = count_nuez - 1;
                    total = total - 15;
                }
                document.getElementById('btn-nuez').textContent = count_nuez;
            break;   
            case 'mango-chile':
                if(qty=='+'){
                    count_mango_chile = count_mango_chile + 1;
                    total = total + 15;
                }else{
                    count_mango_chile = count_mango_chile - 1;
                    total = total - 15;
                }
                document.getElementById('btn-mango-chile').textContent = count_mango_chile;
            break;
            /////////////cambia el precio a 30
            case 'nuez-entera':
                if(qty=='+'){
                    count_nuez_entera = count_nuez_entera + 1;
                    total = total + 30;
                }else{
                    count_nuez_entera = count_nuez_entera - 1;
                    total = total - 30;
                }
                document.getElementById('btn-nuez-entera').textContent = count_nuez_entera;
            break;                                                   
            case 'pinon':
                if(qty=='+'){
                    count_pinon = count_pinon + 1;
                    total = total + 30;
                }else{
                    count_pinon = count_pinon - 1;
                    total = total - 30;
                }
                document.getElementById('btn-pinon').textContent = count_pinon;
            break;                                                               
            case 'pistache':
                if(qty=='+'){
                    count_pistache = count_pistache + 1;
                    total = total + 30;
                }else{
                    count_pistache = count_pistache - 1;
                    total = total - 30;
                }
                document.getElementById('btn-pistache').textContent = count_pistache;
            break;                                                               
        }
        document.getElementById('labelTitle').textContent = "$"+total+".00";
}

function sendMessage(id){
    
    if(total < 150){
        alert("Recuerda que el envio es gratis a partir de $150. Gracias por tu comprensión");
    }
    const resultado = "https://api.whatsapp.com/send?phone=+522462333225&text=" + buildMessage();
    document.getElementById(id).href = resultado;
        
}

function buildMessage(){

    textWhats = "Hola%20este%20es%20mi%20pedido%20";
    if(count_oreo > 0)
        textWhats = textWhats + count_oreo+"%20"+"oreo ";
    if(count_fresa_leche > 0)
        textWhats = textWhats + count_fresa_leche+"%20"+"fresa-leche ";
    if(count_fresa_queso > 0)
        textWhats = textWhats + count_fresa_queso+"%20"+"fresa-queso ";
    if(count_mamey > 0)
        textWhats = textWhats + count_mamey+"%20"+"mamey ";        
    if(count_queso_zarzamora > 0)
        textWhats = textWhats + count_queso_zarzamora+"%20"+"queso-zarzamora ";        
    if(count_pina_coco > 0)
        textWhats = textWhats + count_pina_coco+"%20"+"pina-coco ";        
    if(count_arroz_leche > 0)
        textWhats = textWhats + count_arroz_leche+"%20"+"arroz-leche ";        
    if(count_cafe > 0)
        textWhats = textWhats + count_cafe+"%20"+"cafe ";        
    if(count_chocolate_galleta > 0)
        textWhats = textWhats + count_chocolate_galleta+"%20"+"choco-galleta ";        
    if(count_pay_limon > 0)
        textWhats = textWhats + count_pay_limon+"%20"+"pay-limon ";                
    if(count_nuez > 0)
        textWhats = textWhats + count_nuez+"%20"+"nuez ";                
    if(count_mango_chile > 0)
        textWhats = textWhats + count_mango_chile+"%20"+"mango-chile ";                        
    if(count_nuez_entera > 0)
        textWhats = textWhats + count_nuez_entera+"%20"+"nuez-entera ";             
    if(count_pinon > 0)
        textWhats = textWhats + count_pinon+"%20"+"pinon ";                   
    if(count_pistache > 0)
        textWhats = textWhats + count_pistache+"%20"+"pistache ";                           

    textWhats=textWhats+"Total%20"+total;

    return textWhats;
}
