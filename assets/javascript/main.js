// $('input').on('input',function (){
// 	console.log(this.value);

// 	$('div').velocity ('stop').velocity({
// 	'width': this.value , 
// 	'height': this.value 
// 	}, 10000);
// });

// $('div').velocity ({
// 	'width' :100,
// 	'height' : 100
// }, 50).velocity ({
// 	'width' :10,
// 	'height' : 10
// }, 2000).velocity ({
// 	'width' :50,
// 	'height' : 50
// }, 200).velocity ({
// 	'width' :0,
// 	'height' : 0
// })

// introguide.start();

// introguide.setOptions({
//     steps: [
//         {
//           element: 'h1',
//           intro: 'This guided tour will explain the Hongkiat demo page interface.<br><br>Use the arrow keys for navigation or hit ESC to exit the tour immediately.',
//           position: 'bottom'
//         },
//         {
//           element: '.nav-logo',
//           intro: 'Click this main logo to view a list of all Hongkiat demos.',
//           position: 'bottom'
//         },
//         {
//           element: '.nav-title',
//           intro: 'Hover over each title to display a longer description.',
//           position: 'bottom'
//         },
//         {
//           element: '.readtutorial a',
//           intro: 'Click this orange button to view the tutorial article in a new tab.',
//           position: 'right'
//         },
//         {
//           element: '.nav-menu',
//           intro: "Each demo will link to the previous & next entries.",
//           position: 'bottom'
//         }
//     ]
// });



var bar = new ProgressBar.Circle(container, {
  color: '#555555',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 30000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#555555', width: 1 },
  to: { color: '#47FFA6', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"open-sans", Helvetica, sans-serif';
bar.text.style.fontSize = '3rem';

bar.animate(1.0);  // Number from 0.0 to 1.0



 	$('#rPanel').hide();
 	$('#cPanel').show();
 $('#fleetBtn').on('click',function (){
 	$('#cPanel').hide();
 	$('#rPanel').show();
});


 $('#back').on('click',function (){
 	$('#rPanel').hide();
 	$('#cPanel').show();
 	
});



// // -------bots--------

//  $("#botsdrop").hide();

// $(".bots").mouseover(function () {
//     $("#botsdrop").slideDown('medium');
// });

// $(".bots").mouseleave(function () {
//     $("#botsdrop").slideUp('medium');
// });




// // -----------bots2------and so on

//  $("#botsdrop2").hide();

// $(".bots2").mouseover(function () {
//     $("#botsdrop2").slideDown('medium');
// });

// $(".bots2").mouseleave(function () {
//     $("#botsdrop2").slideUp('medium');
// });



// // -------bots3--------

//  $("#botsdrop3").hide();

// $(".bots3").mouseover(function () {
//     $("#botsdrop3").slideDown('medium');
// });

// $(".bots3").mouseleave(function () {
//     $("#botsdrop3").slideUp('medium');
// });




// -----------bots4------and so on

 $("#botsdrop4").hide();

$(".bots4").mouseover(function () {
    $("#botsdrop4").slideDown('medium');
});

$(".bots4").mouseleave(function () {
    $("#botsdrop4").slideUp('medium');
});




// -------bots5--------

 $("#botsdrop5").hide();

$(".bots5").mouseover(function () {
    $("#botsdrop5").slideDown('medium');
});

$(".bots5").mouseleave(function () {
    $("#botsdrop5").slideUp('medium');
});




// -----------bots6------and so on

 $("#botsdrop6").hide();

$(".bots6").mouseover(function () {
    $("#botsdrop6").slideDown('medium');
});

$(".bots6").mouseleave(function () {
    $("#botsdrop6").slideUp('medium');
});








  

