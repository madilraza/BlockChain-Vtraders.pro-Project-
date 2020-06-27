! function() {
    "use strict";

     // Generate data
          
        var data = [];

        var time = new Date('Dec 1, 2013 12:00').valueOf();

        var h = Math.floor(Math.random() * 100);
        var l = h - Math.floor(Math.random() * 20);
        var o = h - Math.floor(Math.random() * (h - l));
        var c = h - Math.floor(Math.random() * (h - l));

        var v = Math.floor(Math.random() * 1000);
          
        for (var i = 0; i < 30; i++) {
            data.push([time, o, h, l, c, v]);
            h += Math.floor(Math.random() * 10 - 5);
            l = h - Math.floor(Math.random() * 20);
            o = h - Math.floor(Math.random() * (h - l));
            c = h - Math.floor(Math.random() * (h - l));
            v += Math.floor(Math.random() * 100 - 50);
            time += 30 * 60000; // Add 30 minutes
        }

    $(document).ready(function() {
        $(function() {
            $('#example-8').jqCandlestick({
              data: data,
              theme: 'light',
              yAxis: [{
                height: 9, // 7 / (7 + 3)
              }, {
                height: 3, // 3 / (7 + 3)
              }],
              series: [{
                type: 'candlestick',
                upStroke: '#0C0',
                downStroke: '#C00',
                downColor: 'rgba(255, 0, 0, 0.4)',
              }, {
                type: 'column',
                name: 'VOLUME',
                yAxis: 1,
                stroke: '#00C',
                color: 'rgba(0, 0, 255, 0.5)',
              }],
            });
          });
         




    })
}();