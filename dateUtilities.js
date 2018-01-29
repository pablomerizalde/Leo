function escribirFecha(f){
    if(navigator.oscpu="Linux x86_64"){
        f=f.split("-");
        
        console.log(f);	
    }
    
    f = new Date(f +" 10:00:00 ");
    console.log(f);
    var fech = (diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
    return fech;
}



function queHora(h){
    if(h<12){
        return "s " + h + " a.m.";
    }else if(h==12){
        return "s "+ h + " m.";
    }else{
        if(h!=13)return "s "+(h-12) + " p.m.";
        return " "+(h-12) + " p.m."
    }
}

function addDays(days, iDate){
    if(navigator.oscpu="Linux x86_64"){
        iDate=iDate.split("-");
        
        console.log(iDate);	
    }
    dat  = new Date(iDate +" 10:00:00 ");
    dat.setDate(dat.getDate() + days);
    var fech = (diasSemana[dat.getDay()] + ", " + dat.getDate() + " de " + meses[dat.getMonth()] + " de " + dat.getFullYear());
     return fech;

}


function MaysPrimera(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}