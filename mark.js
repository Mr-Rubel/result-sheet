function result_btn(){
    var bangla1th = document.querySelector("#b_1st_theory").value;
    var bangla1prc = document.querySelector("#b_1st_prc").value;
    var bangla1mcq = document.querySelector("#b_1st_mcq").value;
    var mark = parseInt(bangla1th);
    var markp = parseInt(bangla1prc);
    var marks = parseInt(bangla1mcq);

    var ban1total =mark+markp+marks;
            if(ban1total>="80" || mark>="80" || marks>="80"){
                document.querySelector("#b_1st_total").value = "A+";

            }
                
            else if(ban1total==" " || mark==" " || marks==" "){
                document.querySelector("#b_1st_total").value = "Invalid Mark";
            }

            else if(ban1total>="70" || mark>="70" || marks>="70"){
                document.querySelector("#b_1st_total").value = "A";
            }

            else if(ban1total>="60" || mark>="60" || marks>="60"){
                document.querySelector("#b_1st_total").value = "A-";
            }

            else if(ban1total>="50" || mark>="50" || marks>="50"){
                document.querySelector("#b_1st_total").value = "B";
            }

            else if(ban1total>="40" || mark>="40" || marks>="40"){
                document.querySelector("#b_1st_total").value = "C";
            }

            else if(ban1total>="33" || mark>="33" || marks>="33"){
                document.querySelector("#b_1st_total").value = "D";
            }

            else if(ban1total<="32" || mark<="32" || marks<="32"){
                document.querySelector("#b_1st_total").value = "F";
            }
            else{
                document.querySelector("#b_1st_total").value = "Invalid mark";
            }







            
    var bangla2th = document.querySelector("#b_2nd_theory").value;
    var bangla2prc = document.querySelector("#b_2nd_prc").value;
    var bangla2mcq = document.querySelector("#b_2nd_mcq").value;
    var mark = parseInt(bangla2th);
    var markp = parseInt(bangla2prc);
    var marks = parseInt(bangla2mcq);

    var ban2total =mark+markp+marks;
            if(ban2total>="80" || mark>="80" || marks>="80"){
                document.querySelector("#b_2nd_total").value = "A+";

            }
                
            else if(ban2total==" " || mark==" " || marks==" "){
                document.querySelector("#b_2nd_total").value = "Invalid Mark";
            }

            else if(ban2total>="69" || mark>="69" || marks>="69"){
                document.querySelector("#b_2nd_total").value = "A";
            }

            else if(ban2total>="59" || mark>="59" || marks>="59"){
                document.querySelector("#b_2nd_total").value = "A-";
            }

            else if(ban2total>="49" || mark>="49" || marks>="49"){
                document.querySelector("#b_2nd_total").value = "B";
            }

            else if(ban2total>="39" || mark>="39" || marks>="39"){
                document.querySelector("#b_2nd_total").value = "C";
            }

            else if(ban2total>="33" || mark>="33" || marks>="33"){
                document.querySelector("#b_2nd_total").value = "D";
            }

            else if(ban2total<="32" || mark<="32" || marks<="32"){
                document.querySelector("#b_2nd_total").value = "F";
            }
            else{
                document.querySelector("#b_2nd_total").value = "Invalid mark";
            }






            
    var en1th = document.querySelector("#e_1st_theory").value;
    var en1prc = document.querySelector("#e_1st_prc").value;
    var en1mcq = document.querySelector("#e_1st_mcq").value;
    var mark = parseInt(en1th);
    var markp = parseInt(en1prc);
    var marks = parseInt(en1mcq);

    var en1total =mark+markp+marks;
            if(en1total>="80" || mark>="80" || marks>="80"){
                document.querySelector("#e_1st_total").value = "A+";

            }
                
            else if(en1total==" " || mark==" " || marks==" "){
                document.querySelector("#e_1st_total").value = "Invalid Mark";
            }

            else if(en1total>="69" || mark>="69" || marks>="69"){
                document.querySelector("#e_1st_total").value = "A";
            }

            else if(en1total>="59" || mark>="59" || marks>="59"){
                document.querySelector("#e_1st_total").value = "A-";
            }

            else if(en1total>="49" || mark>="49" || marks>="49"){
                document.querySelector("#e_1st_total").value = "B";
            }

            else if(en1total>="39" || mark>="39" || marks>="39"){
                document.querySelector("#e_1st_total").value = "C";
            }

            else if(en1total>="33" || mark>="33" || marks>="33"){
                document.querySelector("#e_1st_total").value = "D";
            }

            else if(en1total<="32" || mark<="32" || marks<="32"){
                document.querySelector("#e_1st_total").value = "F";
            }
            else{
                document.querySelector("#e_1st_total").value = "Invalid mark";
            }




            
            
    var en2th = document.querySelector("#e_2nd_theory").value;
    var en2prc = document.querySelector("#e_2nd_prc").value;
    var en2mcq = document.querySelector("#e_2nd_mcq").value;
    var mark = parseInt(en2th);
    var markp = parseInt(en2prc);
    var marks = parseInt(en2mcq);

    var en2total =mark+markp+marks;
            if(en2total>="80" || mark>="80" || marks>="80"){
                document.querySelector("#e_2nd_total").value = "A+";

            }
                
            else if(en2total==" " || mark==" " || marks==" "){
                document.querySelector("#e_2nd_total").value = "Invalid Mark";
            }

            else if(en2total>="69" || mark>="69" || marks>="69"){
                document.querySelector("#e_2nd_total").value = "A";
            }

            else if(en2total>="59" || mark>="59" || marks>="59"){
                document.querySelector("#e_2nd_total").value = "A-";
            }

            else if(en2total>="49" || mark>="49" || marks>="49"){
                document.querySelector("#e_2nd_total").value = "B";
            }

            else if(en2total>="39" || mark>="39" || marks>="39"){
                document.querySelector("#e_2nd_total").value = "C";
            }

            else if(en2total>="33" || mark>="33" || marks>="33"){
                document.querySelector("#e_2nd_total").value = "D";
            }

            else if(en2total<="32" || mark<="32" || marks<="32"){
                document.querySelector("#e_2nd_total").value = "F";
            }
            else{
                document.querySelector("#e_2nd_total").value = "Invalid mark";
            }




            
            
    var mathth = document.querySelector("#math_theory").value;
    var mathprc = document.querySelector("#math_prc").value;
    var mathmcq = document.querySelector("#math_mcq").value;
    var mark = parseInt(mathth);
    var markp = parseInt(mathprc);
    var marks = parseInt(mathmcq);

    var mathtotal =mark+marks;
            if(mathtotal>="80" || mark>="80" || marks>="80"){
                document.querySelector("#math_total").value = "A+";

            }
                
            else if(mathtotal==" " || mark==" " || marks==" "){
                document.querySelector("#math_total").value = "Invalid Mark";
            }

            else if(mathtotal>="69" || mark>="69" || marks>="69"){
                document.querySelector("#math_total").value = "A";
            }

            else if(mathtotal>="59" || mark>="59" || marks>="59"){
                document.querySelector("#math_total").value = "A-";
            }

            else if(mathtotal>="49" || mark>="49" || marks>="49"){
                document.querySelector("#math_total").value = "B";
            }

            else if(mathtotal>="39" || mark>="39" || marks>="39"){
                document.querySelector("#math_total").value = "C";
            }

            else if(mathtotal>="33" || mark>="33" || marks>="33"){
                document.querySelector("#math_total").value = "D";
            }

            else if(mathtotal<="32" || mark<="32" || marks<="32"){
                document.querySelector("#math_total").value = "F";
            }
            else{
                document.querySelector("#math_total").value = "Invalid mark";
            }




                   
    var ictth = document.querySelector("#ict_theory").value;
    var ictprc = document.querySelector("#ict_prc").value;
    var ictmcq = document.querySelector("#ict_mcq").value;
    var mark = parseInt(ictth);
    var markp = parseInt(ictprc);
    var marks = parseInt(ictmcq);

    var icttotal =mark+markp+marks;
            if(icttotal>="80" || mark>="80" || marks>="80"){
                document.querySelector("#ict_total").value = "A+";

            }
                
            else if(icttotal==" " || mark==" " || marks==" "){
                document.querySelector("#ict_total").value = "Invalid Mark";
            }

            else if(icttotal>="69" || mark>="69" || marks>="69"){
                document.querySelector("#ict_total").value = "A";
            }

            else if(icttotal>="59" || mark>="59" || marks>="59"){
                document.querySelector("#ict_total").value = "A-";
            }

            else if(icttotal>="49" || mark>="49" || marks>="49"){
                document.querySelector("#ict_total").value = "B";
            }

            else if(icttotal>="39" || mark>="39" || marks>="39"){
                document.querySelector("#ict_total").value = "C";
            }

            else if(icttotal>="33" || mark>="33" || marks>="33"){
                document.querySelector("#ict_total").value = "D";
            }

            else if(icttotal<="32" || mark<="32" || marks<="32"){
                document.querySelector("#ict_total").value = "F";
            }
            else{
                document.querySelector("#ict_total").value = "Invalid mark";
            }


            
                   
    var histth = document.querySelector("#hist_theory").value;
    var histprc = document.querySelector("#hist_prc").value;
    var histmcq = document.querySelector("#hist_mcq").value;
    var mark = parseInt(histth);
    var markp = parseInt(histprc);
    var marks = parseInt(histmcq);

    var histtotal =mark+markp+marks;
            if(histtotal>="80" || mark>="80" || marks>="80"){
                document.querySelector("#hist_total").value = "A+";

            }
                
            else if(histtotal==" " || mark==" " || marks==" "){
                document.querySelector("#hist_total").value = "Invalid Mark";
            }

            else if(histtotal>="69" || mark>="69" || marks>="69"){
                document.querySelector("#hist_total").value = "A";
            }

            else if(histtotal>="59" || mark>="59" || marks>="59"){
                document.querySelector("#hist_total").value = "A-";
            }

            else if(histtotal>="49" || mark>="49" || marks>="49"){
                document.querySelector("#hist_total").value = "B";
            }

            else if(histtotal>="39" || mark>="39" || marks>="39"){
                document.querySelector("#hist_total").value = "C";
            }

            else if(histtotal>="33" || mark>="33" || marks>="33"){
                document.querySelector("#hist_total").value = "D";
            }

            else if(histtotal<="32" || mark<="32" || marks<="32"){
                document.querySelector("#hist_total").value = "F";
            }
            else{
                document.querySelector("#hist_total").value = "Invalid mark";
            }



                         
    var geoth = document.querySelector("#geo_theory").value;
    var geoprc = document.querySelector("#geo_prc").value;
    var geomcq = document.querySelector("#geo_mcq").value;
    var mark = parseInt(geoth);
    var markp = parseInt(geoprc);
    var marks = parseInt(geomcq);

    var geototal =mark+markp+marks;
            if(geototal>="80" || mark>="80" || marks>="80"){
                document.querySelector("#geo_total").value = "A+";

            }
                
            else if(geototal==" " || mark==" " || marks==" "){
                document.querySelector("#geo_total").value = "Invalid Mark";
            }

            else if(geototal>="69" || mark>="69" || marks>="69"){
                document.querySelector("#geo_total").value = "A";
            }

            else if(geototal>="59" || mark>="59" || marks>="59"){
                document.querySelector("#geo_total").value = "A-";
            }

            else if(geototal>="49" || mark>="49" || marks>="49"){
                document.querySelector("#geo_total").value = "B";
            }

            else if(geototal>="39" || mark>="39" || marks>="39"){
                document.querySelector("#geo_total").value = "C";
            }

            else if(geototal>="33" || mark>="33" || marks>="33"){
                document.querySelector("#geo_total").value = "D";
            }

            else if(geototal<="32" || mark<="32" || marks<="32"){
                document.querySelector("#geo_total").value = "F";
            }
            else{
                document.querySelector("#geo_total").value = "Invalid mark";
            }



                                 
    var dhormoth = document.querySelector("#dhormo_theory").value;
    var dhormoprc = document.querySelector("#dhormo_prc").value;
    var dhormomcq = document.querySelector("#dhormo_mcq").value;
    var mark = parseInt(dhormoth);
    var markp = parseInt(dhormoprc);
    var marks = parseInt(dhormomcq);

    var dhormototal =mark+markp+marks;
            if(dhormototal>="80" || mark>="80" || marks>="80"){
                document.querySelector("#dhormo_total").value = "A+";

            }
                
            else if(dhormototal==" " || mark==" " || marks==" "){
                document.querySelector("#dhormo_total").value = "Invalid Mark";
            }

            else if(dhormototal>="69" || mark>="69" || marks>="69"){
                document.querySelector("#dhormo_total").value = "A";
            }

            else if(dhormototal>="59" || mark>="59" || marks>="59"){
                document.querySelector("#dhormo_total").value = "A-";
            }

            else if(dhormototal>="49" || mark>="49" || marks>="49"){
                document.querySelector("#dhormo_total").value = "B";
            }

            else if(dhormototal>="39" || mark>="39" || marks>="39"){
                document.querySelector("#dhormo_total").value = "C";
            }

            else if(dhormototal>="33" || mark>="33" || marks>="33"){
                document.querySelector("#dhormo_total").value = "D";
            }

            else if(dhormototal<="32" || mark<="32" || marks<="32"){
                document.querySelector("#dhormo_total").value = "F";
            }
            else{
                document.querySelector("#dhormo_total").value = "Invalid mark";
            }



                                 
    var bioth = document.querySelector("#bio_theory").value;
    var bioprc = document.querySelector("#bio_prc").value;
    var biomcq = document.querySelector("#bio_mcq").value;
    var mark = parseInt(bioth);
    var markp = parseInt(bioprc);
    var marks = parseInt(biomcq);

    var biototal =mark+markp+marks;
            if(biototal>="80" || mark>="80" || marks>="80"){
                document.querySelector("#bio_total").value = "A+";

            }
                
            else if(biototal==" " || mark==" " || marks==" "){
                document.querySelector("#bio_total").value = "Invalid Mark";
            }

            else if(biototal>="69" || mark>="69" || marks>="69"){
                document.querySelector("#bio_total").value = "A";
            }

            else if(biototal>="59" || mark>="59" || marks>="59"){
                document.querySelector("#bio_total").value = "A-";
            }

            else if(biototal>="49" || mark>="49" || marks>="49"){
                document.querySelector("#bio_total").value = "B";
            }

            else if(biototal>="39" || mark>="39" || marks>="39"){
                document.querySelector("#bio_total").value = "C";
            }

            else if(biototal>="33" || mark>="33" || marks>="33"){
                document.querySelector("#bio_total").value = "D";
            }

            else if(biototal<="32" || mark<="32" || marks<="32"){
                document.querySelector("#bio_total").value = "F";
            }
            else{
                document.querySelector("#bio_total").value = "Invalid mark";
            }



                                 
    var chemth = document.querySelector("#chem_theory").value;
    var chemprc = document.querySelector("#chem_prc").value;
    var chemmcq = document.querySelector("#chem_mcq").value;
    var mark = parseInt(chemth);
    var markp = parseInt(chemprc);
    var marks = parseInt(chemmcq);

    var chemtotal =mark+markp+marks;
            if(chemtotal>="80" || mark>="80" || marks>="80"){
                document.querySelector("#chem_total").value = "A+";

            }
                
            else if(chemtotal==" " || mark==" " || marks==" "){
                document.querySelector("#chem_total").value = "Invalid Mark";
            }

            else if(chemtotal>="69" || mark>="69" || marks>="69"){
                document.querySelector("#chem_total").value = "A";
            }

            else if(chemtotal>="59" || mark>="59" || marks>="59"){
                document.querySelector("#chem_total").value = "A-";
            }

            else if(chemtotal>="49" || mark>="49" || marks>="49"){
                document.querySelector("#chem_total").value = "B";
            }

            else if(chemtotal>="39" || mark>="39" || marks>="39"){
                document.querySelector("#chem_total").value = "C";
            }

            else if(chemtotal>="33" || mark>="33" || marks>="33"){
                document.querySelector("#chem_total").value = "D";
            }

            else if(chemtotal<="32" || mark<="32" || marks<="32"){
                document.querySelector("#chem_total").value = "F";
            }
            else{
                document.querySelector("#chem_total").value = "Invalid mark";
            }



                                 
    var phyth = document.querySelector("#phy_theory").value;
    var phyprc = document.querySelector("#phy_prc").value;
    var phymcq = document.querySelector("#phy_mcq").value;
    var mark = parseInt(phyth);
    var markp = parseInt(phyprc);
    var marks = parseInt(phymcq);

    var phytotal =mark+markp+marks;
            if(phytotal>="80" || mark>="80" || marks>="80"){
                document.querySelector("#phy_total").value = "A+";

            }
                
            else if(phytotal==" " || mark==" " || marks==" "){
                document.querySelector("#phy_total").value = "Invalid Mark";
            }

            else if(phytotal>="69" || mark>="69" || marks>="69"){
                document.querySelector("#phy_total").value = "A";
            }

            else if(phytotal>="59" || mark>="59" || marks>="59"){
                document.querySelector("#phy_total").value = "A-";
            }

            else if(phytotal>="49" || mark>="49" || marks>="49"){
                document.querySelector("#phy_total").value = "B";
            }

            else if(phytotal>="39" || mark>="39" || marks>="39"){
                document.querySelector("#phy_total").value = "C";
            }

            else if(phytotal>="33" || mark>="33" || marks>="33"){
                document.querySelector("#phy_total").value = "D";
            }

            else if(phytotal<="32" || mark<="32" || marks<="32"){
                document.querySelector("#phy_total").value = "F";
            }
            else{
                document.querySelector("#phy_total").value = "Invalid mark";
            }




            // var totalMarks1 = ban1total+ban2total+en1total+biototal+chemtotal+phytotal;
            // var totalMarks4 = parseInt("ban1total+ban2total");
            // // var totalMarks2 = en2total+mathtotal+icttotal+histtotal+geototal+dhormototal;
            // // var totalMarks3 = totalMarks1+totalMarks2;
            // document.querySelector("#total-input").value = totalMarks4;



            // function  result_btn(){

                
            //     var b1the = document.querySelector("#b_1st_theory").value;
            //     var b1cth= parseInt(b1th);
            //     var b1prc = document.querySelector("#b_1st_prc").value;
            //     var b1cpr= parseInt(b1prc);
            //     var b1mcq = document.querySelector("#b_1st_mcq").value;
            //     var b1cmc= parseInt(b1mcq);
                        
            //     var b2the = document.querySelector("#b_2nd_theory").value;
            //     var b2cth= parseInt(b2the);
            //     var b2prc = document.querySelector("#b_2nd_prc").value;
            //     var b2cpr= parseInt(b2prc);
            //     var b2mcq = document.querySelector("#b_2nd_mcq").value;
            //     var b2cmc= parseInt(b2mcq);

            //     var bb1total = b1cth+b1cpr+b1cmc+b2cth+b2cpr+b2cmc;
            //     document.querySelector("#total-input").value = "bb1total";

            // }
            

    
}