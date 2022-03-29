
 setAverageChildrenApi = async(families, age) => {
 
    return new Promise(function (resolve, reject) {
   setTimeout( () => {
            let sum = 0;
            let childrenNumberArray = families.filter( family => family.childrenNumber > 0);
              for (let i = 0; i < childrenNumberArray.length; i++) {
              sum += childrenNumberArray[i].childrenNumber;
              }
              let avg = sum / childrenNumberArray.length;
            families.map(family=>{
                family.fatherName == "Yves" ||  family.fatherName == "yves" ? reject("Yves is not an allowed dad in 2022") :'';
                family.average = avg;
            });

         resolve(families);
           

        },
            1000);
  
    });
 }
 

 let families = [
     {fatherName:"ken",motherName:"salah",childrenNumber:5},
     {fatherName:"tiff",motherName:"bella",childrenNumber:2},
     {fatherName:"eddy",motherName:"keza",childrenNumber:2}
    ]

  setAverageChildrenApi(families).then(data =>{ console.log(data)}).catch(err =>console.log(`Error occured : ${err}`));