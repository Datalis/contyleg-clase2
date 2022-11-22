function consultaDigitoVerificador_NITColombia(identificacion){
    var vpri, x, y, z, i, dv1;
    // Identificacion sin digito verificador (NIT o RUC, Cedula de Colombia)
   
    if(isNaN(identificacion)){
      return -1;
    }else{
        vpri = new Array(16); 
        x=0 ; y=0 ; z=identificacion.length;
        vpri[1]=3;
        vpri[2]=7;
        vpri[3]=13; 
        vpri[4]=17;
        vpri[5]=19;
        vpri[6]=23;
        vpri[7]=29;
        vpri[8]=37;
        vpri[9]=41;
        vpri[10]=43;
        vpri[11]=47;  
        vpri[12]=53;  
        vpri[13]=59; 
        vpri[14]=67; 
        vpri[15]=71;
    
        for(i=0 ; i<z ; i++){
          y=(identificacion.substr(i,1));
          console.log("y "+y)
          x+=(y*vpri[z-i]);
          console.log("vpri[z-i] "+vpri[z-i]+"  x "+x)
        }
        y=x%11;
        console.log("mod "+y)     
        if(y >1){
          dv1=11-y;
        }else{
          dv1=y;
        }
        
      return dv1;  
    }
  }
  console.log(consultaDigitoVerificador_NITColombia('79732805'))