const Apify = require('apify');

Apify.main(async () => {
    const input = "Francisco";
    
    // pushing to default dataset
    await Apify.pushData({input});

    // named datasets
   
    let namedDataset = await Apify.openDataset('example');
    let data = await namedDataset.getData();

    console.log(data.items);


    // await namedDataset.pushData({input});

});
