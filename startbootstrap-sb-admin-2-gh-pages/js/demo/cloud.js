anychart.onDocumentReady(function () {
    var data = [{
        "x": "fabulous",
        "value": 900,
  
      },
      {
        "x": "friendly",
        "value": 983,
  
      },
      {
        "x": "essential",
        "value": 544,
  
      },
      {
        "x": "clean",
        "value": 527,
  
      },
      {
        "x": "quality",
        "value": 422,
  
      },
      {
        "x": "beautiful",
        "value": 281,
      },
  
      {
        "x": "reward",
        "value": 267,
  
      },
      {
        "x": "excellent",
        "value": 261,
  
      },
      {
        "x": "delightful",
        "value": 229,
  
      },
      {
        "x": "welcome",
        "value": 229,
  
      },
      {
        "x": "cool",
        "value": 150,
  
      },
      {
        "x": "active",
        "value": 148,
  
      },
      {
        "x": "perfect",
        "value": 129,
  
      },
      {
        "x": "efficient",
        "value": 119,
  
      },
      {
        "x": "protected",
        "value": 80,
  
      },
      {
        "x": "easy",
        "value": 90,
  
      },
      {
        "x": "laugh",
        "value": 71,
  
      },
      {
        "x": "popular",
        "value": 89,
  
      },
      {
        "x": "simple",
        "value": 63,
  
      },
      {
        "x": "attractive",
        "value": 78,
  
      },
      {
        "x": "worthy",
        "value": 198,
  
      },
      {
        "x": "divine",
        "value": 250,
  
      },
      {
        "x": "suprising",
        "value": 290,
  
      },
      {
        "x": "fresh",
        "value": 115,
  
      },
      {
        "x": "simple",
        "value": 121,
  
      },
      {
        "x": "dazzling",
        "value": 178,
  
      },
      {
        "x": "awesome",
        "value": 200,
  
      }
  
    ];
  
    // create a tag (word) cloud chart
    var chart = anychart.tagCloud(data);
  
    // set a chart title
    //chart.title('15 most spoken languages')
    // set an array of angles at which the words will be laid out
    chart.angles([0])
    // enable a color range
    chart.colorRange(true);
    // set the color range length
    chart.colorRange().length('80%');
  
    // display the word cloud chart
    chart.container("poscloud");
    chart.draw();
  });
  
  anychart.onDocumentReady(function () {
    var data = [{
  
        "x": "bad",
  
        "value": 90000000,
  
      },
  
      {
  
        "x": "terrible",
  
        "value": 93000000,
  
      },
  
      {
  
        "x": "obstruct",
  
        "value": 544000000,
  
      },
  
      {
  
        "x": "slow",
  
        "value": 527000000,
  
      },
  
      {
  
        "x": "late",
  
        "value": 422000000,
  
      },
  
      {
  
        "x": "broken",
  
        "value": 281000000,
  
      },
  
      {
  
        "x": "damage",
  
        "value": 967000000,
  
      },
  
      {
  
        "x": "crash",
  
        "value": 261000000,
  
      },
  
      {
  
        "x": "lag",
  
        "value": 229000000,
  
      },
  
      {
  
        "x": "check",
  
        "value": 229000000,
  
      },
  
      {
  
        "x": "delivery",
  
        "value": 150000000,
  
      },
  
      {
  
        "x": "bad response",
  
        "value": 148000000,
  
      },
  
      {
  
        "x": "boring",
  
        "value": 129000000,
  
      },
  
      {
  
        "x": "worst",
  
        "value": 129000000,
  
      },
  
      {
  
        "x": "unfair",
  
        "value": 121000000,
  
      },
  
      {
  
        "x": "confused",
  
        "value": 129000000,
  
      },
  
      {
  
        "x": "scarcity",
  
        "value": 129000000,
  
      },
  
      {
  
        "x": "ignorant",
  
        "value": 129000000,
  
      },
  
      {
  
        "x": "garbage",
  
        "value": 129000000,
  
      },
  
    ];
  
    // create a tag (word) cloud chart
    var chart = anychart.tagCloud(data);
  
    // set a chart title
    //chart.title('15 most spoken languages')
    // set an array of angles at which the words will be laid out
    chart.angles([0])
    // enable a color range
    chart.colorRange(true);
    // set the color range length
    chart.colorRange().length('80%');
  
    // display the word cloud chart
    chart.container("negcloud");
    chart.draw();
  });