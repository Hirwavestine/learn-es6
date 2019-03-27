const cafe={
    name:"Progate cafe",
    businessHours:{
        opening:"10:00(AM)",
        closing:"17:00(PM)"
    },
     // Add a menus property and assign an array to it
    menus:["coffee", "the", "chocolate cake"]
};
    console.log(`Name: ${cafe.name}`);
    console.log(`From ${cafe.businessHours.opening} to $(cafe.businessHours.closing)`);
    console.log(`----------`);
    console.log('Menu Recommandations');
    // Use a for loop to print the contents of the menu array
    for(let i=0; i<cafe.menus.length; i++){
        console.log(cafe.menus[i]);
    }
