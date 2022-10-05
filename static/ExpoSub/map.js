if (screen.width > 1366) {
  // create custom icon
  var waterpoolIcon = L.icon({
    iconUrl: 'static/ExpoSub/MapImages/KioskLogos/FH.png',
    iconSize: [240, 130], // size of the icon
    popupAnchor: [0, -15]
  });
  var columbusIcon = L.icon({
    iconUrl: '/static/ExpoSub/MapImages/KioskLogos/TN.png',
    iconSize: [300, 120], // size of the icon
    popupAnchor: [0, -15]
  });
  var giantwheelIcon = L.icon({
    iconUrl: '/static/ExpoSub/MapImages/KioskLogos/DOW.png',
    iconSize: [320, 130], // size of the icon
    popupAnchor: [0, -15]
  });
  var shootingIcon = L.icon({
    iconUrl: '/static/ExpoSub/MapImages/KioskLogos/ES.png',
    iconSize: [300, 122], // size of the icon
    popupAnchor: [0, -15]
  });
  var bouncyIcon = L.icon({
    iconUrl: '/static/ExpoSub/MapImages/KioskLogos/MOI.png',
    iconSize: [300, 110], // size of the icon
    popupAnchor: [0, -15]
  });
  var rollerCoasterIcon = L.icon({
    iconUrl: '/static/ExpoSub/MapImages/KioskLogos/RR.png',
    iconSize: [300, 120], // size of the icon
    popupAnchor: [0, -15]
  });
  var wonderLandIcon = L.icon({
    iconUrl: '/static/ExpoSub/MapImages/KioskLogos/CIW.png',
    iconSize: [300, 110], // size of the icon
    popupAnchor: [0, -15]
  });
  var dropzoneIcon = L.icon({
    iconUrl: '/static/ExpoSub/MapImages/KioskLogos/SW.png',
    iconSize: [310, 115], // size of the icon
    popupAnchor: [0, -15]
  });
  var infoIcon = L.icon({
    iconUrl: '/static/ExpoSub/MapImages/KioskLogos/EC.png',
    iconSize: [290, 110], // size of the icon
    popupAnchor: [0, -15]
  });
  var merryGoRoundIcon = L.icon({
    iconUrl: '/static/ExpoSub/MapImages/KioskLogos/SMR.png',
    iconSize: [270, 120], // size of the icon
    popupAnchor: [0, -15]
  });
  var helpdeskIcon = L.icon({
    iconUrl: '/static/ExpoSub/MapImages/KioskLogos/HD.png',
    iconSize: [310, 130], // size of the icon
    popupAnchor: [0, -15]
  });
  var visitedIcon = L.icon({
    iconUrl: '/static/ExpoSub/MapImages/visited-logo-1.png',
    iconSize: [50, 50], // size of the icon
  });

} else {
  // create custom icon
  var waterpoolIcon = L.icon({
    iconUrl: 'static/ExpoSub/MapImages/KioskLogos/FH.png',
    iconSize: [150, 80], // size of the icon
    popupAnchor: [0, -15],
    className: 'markerIcon'
  });
  var columbusIcon = L.icon({
    iconUrl: '/static/ExpoSub/MapImages/KioskLogos/TN.png',
    iconSize: [190, 70], // size of the icon
    popupAnchor: [0, -15],
    className: 'markerIcon'
  });
  var giantwheelIcon = L.icon({
    iconUrl: '/static/ExpoSub/MapImages/KioskLogos/DOW.png',
    iconSize: [200, 75], // size of the icon
    popupAnchor: [0, -15],
    className: 'markerIcon'
  });
  var shootingIcon = L.icon({
    iconUrl: '/static/ExpoSub/MapImages/KioskLogos/ES.png',
    iconSize: [200, 70], // size of the icon
    popupAnchor: [0, -15],
    className: 'markerIcon'
  });
  var bouncyIcon = L.icon({
    iconUrl: '/static/ExpoSub/MapImages/KioskLogos/MOI.png',
    iconSize: [180, 70], // size of the icon
    popupAnchor: [0, -15],
    className: 'markerIcon'
  });
  var rollerCoasterIcon = L.icon({
    iconUrl: '/static/ExpoSub/MapImages/KioskLogos/RR.png',
    iconSize: [180, 75], // size of the icon
    popupAnchor: [0, -15],
    className: 'markerIcon'
  });
  var wonderLandIcon = L.icon({
    iconUrl: '/static/ExpoSub/MapImages/KioskLogos/CIW.png',
    iconSize: [180, 75], // size of the icon
    popupAnchor: [0, -15],
    className: 'markerIcon'
  });
  var dropzoneIcon = L.icon({
    iconUrl: '/static/ExpoSub/MapImages/KioskLogos/SW.png',
    iconSize: [180, 80], // size of the icon
    popupAnchor: [0, -15],
    className: 'markerIcon'
  });
  var infoIcon = L.icon({
    iconUrl: '/static/ExpoSub/MapImages/KioskLogos/EC.png',
    iconSize: [170, 70], // size of the icon
    popupAnchor: [0, -15],
    className: 'markerIcon'
  });
  var merryGoRoundIcon = L.icon({
    iconUrl: '/static/ExpoSub/MapImages/KioskLogos/SMR.png',
    iconSize: [150, 75], // size of the icon
    popupAnchor: [0, -15],
    className: 'markerIcon'
  });
  var helpdeskIcon = L.icon({
    iconUrl: '/static/ExpoSub/MapImages/KioskLogos/HD.png',
    iconSize: [190, 85], // size of the icon
    popupAnchor: [0, -15],
    className: 'markerIcon'
  });
  var visitedIcon = L.icon({
    iconUrl: '/static/ExpoSub/MapImages/visited-logo-1.png',
    iconSize: [40, 40], // size of the icon
  });
}
//Basic map settings for non-geographical map
let mapOptions;
let map;
//Setting the boundary coordinates of the map
var bounds = [[0, 0], [930, 1780]];
var max_map_bounds = [[-110, -280], [980, 1980]];
if (screen.width > 1366) {
  mapOptions = {
    crs: L.CRS.Simple,
    maxZoom: 18,
    minZoom: 0,
    zoomControl: false,
    attributionControl: false,
    zoomDelta: 0.25,
    zoomSnap: 0,
    maxBounds: max_map_bounds
  }
  console.log("large screen");
  console.log(map);
  if (map != undefined) {
    map.off()
    map.remove();
    console.log(map);
  }
  //Initializing map with settings
  // if (map != undefined) { map.remove(); }
  map = L.map('map', mapOptions);
}
else {
  mapOptions = {
    crs: L.CRS.Simple,
    maxZoom: 18,
    minZoom: -0.6,
    zoomControl: false,
    attributionControl: false,
    zoomDelta: 0.25,
    zoomSnap: 0,
    maxBounds: max_map_bounds
  }
  if (map != undefined) {
    map.off();
    map.remove();
  }
  //Initializing map with settings
  // if (map != undefined) { map.remove(); }
  map = L.map('map', mapOptions);
}



// // // Create a media condition that targets viewports at least 1366px wide
// const mediaQuery = window.matchMedia('(min-width: 1366px)')
// //alert("Your screen resolution is: " + screen.width + "x" + screen.height);
// function handleTabletChange(e) {
//   // Check if the media query is true
//   if (mediaQuery.matches) {
//     mapOptions = {
//       crs: L.CRS.Simple,
//       maxZoom: 18,
//       minZoom: 0,
//       zoomControl: false,
//       attributionControl: false,
//       zoomDelta: 0.25,
//       zoomSnap: 0
//     }
//     console.log("large screen");
//     console.log(map);
//     if(map != undefined){
//       map.off()
//       map.remove();
//       console.log(map);
//     }
//     //Initializing map with settings
//     // if (map != undefined) { map.remove(); }
//     map = L.map('map', mapOptions);
//   }
//   else {
//     mapOptions = {
//       crs: L.CRS.Simple,
//       maxZoom: 18,
//       minZoom: -0.4,
//       zoomControl: false,
//       attributionControl: false,
//       zoomDelta: 0.25,
//       zoomSnap: 0
//     }
//     console.log("small screen");
//     console.log(map);
//     if(map != undefined){
//       map.off();
//       map.remove();
//       console.log(map);
//     }
//     //Initializing map with settings
//     // if (map != undefined) { map.remove(); }
//     map = L.map('map', mapOptions);
//   }
// }
// }
// var mapOptions = {
//   crs: L.CRS.Simple,
//   maxZoom: 18,
//   minZoom: 0,
//   zoomControl: false,
//   attributionControl: false
// }
// // Register event listener
// mediaQuery.addListener(handleTabletChange);
// // Initial check
// handleTabletChange(mediaQuery);

//Initializing map with settings
// var map = L.map('map', mapOptions);
// //Setting the boundary coordinates of the map
// var bounds = [[0, 0], [930, 1780]];
//Displaying map in specified boundaries
map.fitBounds(bounds);
var prevZoom = map.getZoom();
var baseImageBounds = [[-130, -340], [1200, 1900]];
//Adding the main map image as an overlay [[0,0],[4600,9500]]
var baseImage = L.imageOverlay('/static/ExpoSub/MapImages/baseImageFinal1.png', baseImageBounds).addTo(map);

//Rollercoaster Ride Implementation
var kiosk_2 = new L.Marker([676, 610], { icon: rollerCoasterIcon }).addTo(map);
var kiosk_2_popup = kiosk_2.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: orange;\">Welcome to Rapid O' Response </div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" href=\"/rollercoaster\">Enter Kiosk</a></div>").addTo(map);
kiosk_2.on('click', function (e) {
  zoomInOutClick(e, kiosk_2_popup);
});
var roller_coaster_overlay_bounds = [[390, 173.9833], [682.611278, 652.971572]];
var roller_coaster_overlay = L.imageOverlay('/static/ExpoSub/MapImages/Img 2.png', roller_coaster_overlay_bounds, {
  opacity: 1,
  interactive: true
});
roller_coaster_overlay.addTo(map);
roller_coaster_overlay.on('mouseover', function (ev) {
  kiosk_2.getElement().classList.add("glow-2");
  roller_coaster_overlay.getElement().classList.add("glow-2");
});
roller_coaster_overlay.on('mouseout', function (e) {
  kiosk_2.getElement().classList.remove("glow-2");
  roller_coaster_overlay.getElement().classList.remove("glow-2");
});
kiosk_2.on('mouseover', function (ev) {
  kiosk_2.getElement().classList.add("glow-2");
  roller_coaster_overlay.getElement().classList.add("glow-2");
});
kiosk_2.on('mouseout', function (e) {
  kiosk_2.getElement().classList.remove("glow-2");
  roller_coaster_overlay.getElement().classList.remove("glow-2");
});
var roller_coater_popup = roller_coaster_overlay.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: orange;\">Welcome to Rapid O' Response </div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" href=\"/rollercoaster\">Enter Kiosk</a></div>").addTo(map);
roller_coaster_overlay.on('click', function (e) {
  zoomInOutClick(e, roller_coater_popup);
});

//Water pool Implementation
var kiosk_1 = new L.Marker([850, 247], { icon: waterpoolIcon }).addTo(map);
var kiosk_1_popup = kiosk_1.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: orange;\">Welcome to First Hand Foundation</div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" href=\"/waveSwinger\">Enter Kiosk</a></div>").addTo(map);
kiosk_1.on('click', function (e) {
  zoomInOutClick(e, kiosk_1_popup);
});
var water_park_overlay_bounds = [[580, -10], [896, 352]];
var water_park_overlay = L.imageOverlay('/static/ExpoSub/MapImages/waveSwinger1.png', water_park_overlay_bounds, {
  opacity: 1,
  interactive: true
});
water_park_overlay.addTo(map);
water_park_overlay.on('mouseover', function (ev) {
  kiosk_1.getElement().classList.add("glow-1");
  water_park_overlay.getElement().classList.add("glow-1");
});
water_park_overlay.on('mouseout', function (e) {
  water_park_overlay.getElement().classList.remove("glow-1");
  kiosk_1.getElement().classList.remove("glow-1");
});
kiosk_1.on('mouseover', function (ev) {
  kiosk_1.getElement().classList.add("glow-1");
  water_park_overlay.getElement().classList.add("glow-1");
});
kiosk_1.on('mouseout', function (e) {
  kiosk_1.getElement().classList.remove("glow-1");
  water_park_overlay.getElement().classList.remove("glow-1");
});
var water_park_popup = water_park_overlay.bindPopup("<div class=\"text-container\" style=\"color: orange;\"><div class=\"flux\">Welcome to First Hand Foundation</div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" href=\"/waveSwinger\">Enter Kiosk</a></div>").addTo(map);
water_park_overlay.on('click', function (e) {
  zoomInOutClick(e, water_park_popup);
});


// WonderLand Implementation
var kiosk_3 = new L.Marker([660, 1200], { icon: wonderLandIcon }).addTo(map);
var kiosk_3_popup = kiosk_3.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: orange;\">Welcome to Infra Wonderland </div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" href=\"/wonderland\">Enter Kiosk</a></div>").addTo(map);
kiosk_3.on('click', function (e) {
  zoomInOutClick(e, kiosk_3_popup);
});
var wonderland_overlay_bounds = [[658, 1080], [880, 1336]];
var wonderland_overlay = L.imageOverlay('/static/ExpoSub/MapImages/Img 3.png', wonderland_overlay_bounds, {
  opacity: 1,
  interactive: true
});
wonderland_overlay.addTo(map);
wonderland_overlay.on('mouseover', function (ev) {
  kiosk_3.getElement().classList.add("glow-3");
  wonderland_overlay.getElement().classList.add("glow-3");
});
wonderland_overlay.on('mouseout', function (e) {
  kiosk_3.getElement().classList.remove("glow-3");
  wonderland_overlay.getElement().classList.remove("glow-3");
});
kiosk_3.on('mouseover', function (ev) {
  kiosk_3.getElement().classList.add("glow-3");
  wonderland_overlay.getElement().classList.add("glow-3");
});
kiosk_3.on('mouseout', function (e) {
  kiosk_3.getElement().classList.remove("glow-3");
  wonderland_overlay.getElement().classList.remove("glow-3");
});
var wonderland_popup = wonderland_overlay.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: orange;\">Welcome to Infra Wonderland </div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" href=\"/wonderland\">Enter Kiosk</a></div>").addTo(map);
wonderland_overlay.on('click', function (e) {
  zoomInOutClick(e, wonderland_popup);
});

// Columbus Ride Implementation
var kiosk_4 = new L.Marker([320, 442], { icon: columbusIcon }).addTo(map);
var kiosk_4_popup = kiosk_4.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: orange;\">Welcome to Together Nest </div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" href=\"/columbusRide\">Enter Kiosk</a></div>").addTo(map);
kiosk_4.on('click', function (e) {
  zoomInOutClick(e, kiosk_4_popup);
});
var columbus_overlay_bounds = [[286.297585, 457.969673], [540, 680]];
var columbus_overlay = L.imageOverlay('/static/ExpoSub/MapImages/Joker.png', columbus_overlay_bounds, {
  opacity: 1,
  interactive: true
});
columbus_overlay.addTo(map);
columbus_overlay.on('mouseover', function (ev) {
  kiosk_4.getElement().classList.add("glow-4");
  columbus_overlay.getElement().classList.add("glow-4");
});
columbus_overlay.on('mouseout', function (e) {
  columbus_overlay.getElement().classList.remove("glow-4");
  kiosk_4.getElement().classList.remove("glow-4");
});
kiosk_4.on('mouseover', function (ev) {
  kiosk_4.getElement().classList.add("glow-4");
  columbus_overlay.getElement().classList.add("glow-4");
});
kiosk_4.on('mouseout', function (e) {
  kiosk_4.getElement().classList.remove("glow-4");
  columbus_overlay.getElement().classList.remove("glow-4");
});
var columbus_popup = columbus_overlay.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: orange;\">Welcome to Together Nest </div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" href=\"/columbusRide\">Enter Kiosk</a></div>").addTo(map);
columbus_overlay.on('click', function (e) {
  zoomInOutClick(e, columbus_popup);
});

// Merry Go Round Implementation
var kiosk_5 = new L.Marker([520, 1450], { icon: merryGoRoundIcon }).addTo(map);
var kiosk_5_popup = kiosk_5.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: orange;\">Welcome to Magical Ride </div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" href=\"/merryGoRound\">Enter Kiosk</a></div>").addTo(map);
kiosk_5.on('click', function (e) {
  zoomInOutClick(e, kiosk_5_popup);
});
var merrygoround_overlay_bounds = [[490, 1440], [769.5, 1713]];
var merrygoround_overlay = L.imageOverlay('/static/ExpoSub/MapImages/Img 5.png', merrygoround_overlay_bounds, {
  opacity: 1,
  interactive: true
});
merrygoround_overlay.addTo(map);
merrygoround_overlay.on('mouseover', function (ev) {
  kiosk_5.getElement().classList.add("glow-10");
  merrygoround_overlay.getElement().classList.add("glow-10");
});
merrygoround_overlay.on('mouseout', function (e) {
  merrygoround_overlay.getElement().classList.remove("glow-10");
  kiosk_5.getElement().classList.remove("glow-10");
});
kiosk_5.on('mouseover', function (ev) {
  kiosk_5.getElement().classList.add("glow-10");
  merrygoround_overlay.getElement().classList.add("glow-10");
});
kiosk_5.on('mouseout', function (e) {
  kiosk_5.getElement().classList.remove("glow-10");
  merrygoround_overlay.getElement().classList.remove("glow-10");
});
var merrygoround_popup = merrygoround_overlay.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: orange;\">Welcome to Magical Ride </div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" href=\"/merryGoRound\">Enter Kiosk</a></div>").addTo(map);
merrygoround_overlay.on('click', function (e) {
  zoomInOutClick(e, merrygoround_popup);
});

// Dropzone Ride Implementation
var kiosk_6 = new L.Marker([520, 880], { icon: dropzoneIcon }).addTo(map);
var kiosk_6_popup = kiosk_6.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: orange;\">Welcome to Security Awareness </div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" href=\"/dropZone\">Enter Kiosk</a></div>").addTo(map);
kiosk_6.on('click', function (e) {
  zoomInOutClick(e, kiosk_6_popup);
});
var dropzone_overlay_bounds = [[494, 766], [911, 993]];
var dropzone_overlay = L.imageOverlay('/static/ExpoSub/MapImages/Img 6.png', dropzone_overlay_bounds, {
  opacity: 1,
  interactive: true
});
dropzone_overlay.addTo(map);
dropzone_overlay.on('mouseover', function (ev) {
  kiosk_6.getElement().classList.add("glow-6");
  dropzone_overlay.getElement().classList.add("glow-6");
});
dropzone_overlay.on('mouseout', function (e) {
  dropzone_overlay.getElement().classList.remove("glow-6");
  kiosk_6.getElement().classList.remove("glow-6");
});
kiosk_6.on('mouseover', function (ev) {
  kiosk_6.getElement().classList.add("glow-6");
  dropzone_overlay.getElement().classList.add("glow-6");
});
kiosk_6.on('mouseout', function (e) {
  kiosk_6.getElement().classList.remove("glow-6");
  dropzone_overlay.getElement().classList.remove("glow-6");
});
var drop_zone_popup = dropzone_overlay.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: orange;\">Welcome to Security Awareness </div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" href=\"/dropZone\">Enter Kiosk</a></div>").addTo(map);
dropzone_overlay.on('click', function (e) {
  zoomInOutClick(e, drop_zone_popup);
});

// Ride overlay implementation
// var kiosk_7 = new L.Marker([343.980145, 412]).addTo(map);
// var kiosk_7_popup = kiosk_7.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: red;\">Welcome to Seamless Data Streaming </div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" href=\"/magicRide\">Enter Kiosk</a></div>").addTo(map);
// kiosk_7.on('click', function (e) {
//   zoomInOutClick(e, kiosk_7_popup);
// });
// var magic_ride_overlay_bounds = [[286.297585, 437.969673], [489.220449, 559.962859]];
// var magic_ride_overlay = L.imageOverlay('/static/ExpoSub/MapImages/Img 7.png', magic_ride_overlay_bounds, {
//   opacity: 1,
//   interactive: true
// });
// magic_ride_overlay.addTo(map);
// magic_ride_overlay.on('mouseover', function (ev) {
//   kiosk_7.getElement().classList.add("glow-7");
//   magic_ride_overlay.getElement().classList.add("glow-7");
// });
// magic_ride_overlay.on('mouseout', function (e) {
//   magic_ride_overlay.getElement().classList.remove("glow-7");
//   kiosk_7.getElement().classList.remove("glow-7");
// });
// kiosk_7.on('mouseover', function (ev) {
//   kiosk_7.getElement().classList.add("glow-7");
//   magic_ride_overlay.getElement().classList.add("glow-7");
// });
// kiosk_7.on('mouseout', function (e) {
//   kiosk_7.getElement().classList.remove("glow-7");
//   magic_ride_overlay.getElement().classList.remove("glow-7");
// });
// var magic_ride_popup = magic_ride_overlay.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: red;\">Welcome to Seamless Data Streaming </div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" href=\"/magicRide\">Enter Kiosk</a></div>").addTo(map);
// magic_ride_overlay.on('click', function (e) {
//   zoomInOutClick(e, magic_ride_popup);
// });

// Giant wheel Implementation
var kiosk_8 = new L.Marker([88, 844], { icon: giantwheelIcon }).addTo(map);
var kiosk_8_popup = kiosk_8.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: orange;\">Welcome to Data On Wheels </div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" href=\"/giantWheel\">Enter Kiosk</a></div>").addTo(map);
kiosk_8.on('click', function (e) {
  zoomInOutClick(e, kiosk_8_popup);
});
var giant_wheel_overlay_bounds = [[80, 689], [460, 994]];
var giant_wheel_overlay = L.imageOverlay('/static/ExpoSub/MapImages/Img 8.png', giant_wheel_overlay_bounds, {
  opacity: 1,
  interactive: true
});
giant_wheel_overlay.addTo(map);
giant_wheel_overlay.on('mouseover', function (ev) {
  kiosk_8.getElement().classList.add("glow-8");
  giant_wheel_overlay.getElement().classList.add("glow-8");
});
giant_wheel_overlay.on('mouseout', function (e) {
  giant_wheel_overlay.getElement().classList.remove("glow-8");
  kiosk_8.getElement().classList.remove("glow-8");
});
kiosk_8.on('mouseover', function (ev) {
  kiosk_8.getElement().classList.add("glow-8");
  giant_wheel_overlay.getElement().classList.add("glow-8");
});
kiosk_8.on('mouseout', function (e) {
  kiosk_8.getElement().classList.remove("glow-8"); 
  giant_wheel_overlay.getElement().classList.remove("glow-8");
});
var giant_wheel_popup = giant_wheel_overlay.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: orange;\">Welcome to Data On Wheels </div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" href=\"/giantWheel\">Enter Kiosk</a></div>").addTo(map);
giant_wheel_overlay.on('click', function (e) {
  zoomInOutClick(e, giant_wheel_popup);
});

// Shooting Range Implementation
var kiosk_9 = new L.Marker([300, 1152], { icon: shootingIcon }).addTo(map);
var kiosk_9_popup = kiosk_9.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: orange;\">Welcome to Enhancing Sales   Operations & Decisions   </div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" href=\"/shootingGame\">Enter Kiosk</a></div>").addTo(map);
kiosk_9.on('click', function (e) {
  zoomInOutClick(e, kiosk_9_popup);
});
var shooting_range_overlay_bounds = [[320, 1100], [520, 1300]];
var shooting_range_overlay = L.imageOverlay('/static/ExpoSub/MapImages/Img 9.png', shooting_range_overlay_bounds, {
  opacity: 1,
  interactive: true
});
shooting_range_overlay.addTo(map);
shooting_range_overlay.on('mouseover', function (ev) {
  kiosk_9.getElement().classList.add("glow-9");
  shooting_range_overlay.getElement().classList.add("glow-9");
});
shooting_range_overlay.on('mouseout', function (e) {
  shooting_range_overlay.getElement().classList.remove("glow-9");
  kiosk_9.getElement().classList.remove("glow-9");
});
kiosk_9.on('mouseover', function (ev) {
  kiosk_9.getElement().classList.add("glow-9");
  shooting_range_overlay.getElement().classList.add("glow-9");
});
kiosk_9.on('mouseout', function (e) {
  kiosk_9.getElement().classList.remove("glow-9");
  shooting_range_overlay.getElement().classList.remove("glow-9");
});
var shooting_range_popup = shooting_range_overlay.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: orange;\">Welcome to Enhancing Sales   Operations & Decisions   </div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" href=\"/shootingGame\">Enter Kiosk</a></div>").addTo(map);
shooting_range_overlay.on('click', function (e) {
  zoomInOutClick(e, shooting_range_popup);
});

// Bouncy House Implementation
var kiosk_10 = new L.Marker([220, 1550], { icon: bouncyIcon }).addTo(map);
var kiosk_10_popup = kiosk_10.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: orange;\">Welcome to Magic of Innovation </div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" href=\"/magicShow\">Enter Kiosk</a></div>").addTo(map);
kiosk_10.on('click', function (e) {
  zoomInOutClick(e, kiosk_10_popup);
});
var bouncy_house_overlay_bounds = [[220, 1540], [450, 1730]];
var bouncy_house_overlay = L.imageOverlay('/static/ExpoSub/MapImages/Img 10.png', bouncy_house_overlay_bounds, {
  opacity: 1,
  interactive: true
});
bouncy_house_overlay.addTo(map);
bouncy_house_overlay.on('mouseover', function (ev) {
  kiosk_10.getElement().classList.add("glow-10");
  bouncy_house_overlay.getElement().classList.add("glow-10");
});
bouncy_house_overlay.on('mouseout', function (e) {
  bouncy_house_overlay.getElement().classList.remove("glow-10");
  kiosk_10.getElement().classList.remove("glow-10");
});
kiosk_10.on('mouseover', function (ev) {
  kiosk_10.getElement().classList.add("glow-10");
  bouncy_house_overlay.getElement().classList.add("glow-10");
});
kiosk_10.on('mouseout', function (e) {
  kiosk_10.getElement().classList.remove("glow-10");
  bouncy_house_overlay.getElement().classList.remove("glow-10");
});
var bouncy_house_popup = bouncy_house_overlay.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: orange;\">Welcome to Magic of Innovation </div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" href=\"/magicShow\">Enter Kiosk</a></div>").addTo(map);
bouncy_house_overlay.on('click', function (e) {
  zoomInOutClick(e, bouncy_house_popup);
});


// Info Center Implementation
var kiosk_11 = new L.Marker([83, 1228], { icon: infoIcon }).addTo(map);
var kiosk_11_popup = kiosk_11.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: orange;\">Welcome to Experience Center </div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" href=\"/solgallery\">Enter Kiosk</a></div>").addTo(map);
kiosk_11.on('click', function (e) {
  zoomInOutClick(e, kiosk_11);
});
var info_center_overlay_bounds = [[64, 1290], [290, 1470]];
var info_center_overlay = L.imageOverlay('/static/ExpoSub/MapImages/infocenter.png', info_center_overlay_bounds, {
  opacity: 1,
  interactive: true
});
info_center_overlay.addTo(map);
info_center_overlay.on('mouseover', function (ev) {
  kiosk_11.getElement().classList.add("glow-11");
  info_center_overlay.getElement().classList.add("glow-11");
});
info_center_overlay.on('mouseout', function (e) {
  info_center_overlay.getElement().classList.remove("glow-11");
  kiosk_11.getElement().classList.remove("glow-11");
});
kiosk_11.on('mouseover', function (ev) {
  kiosk_11.getElement().classList.add("glow-11");
  info_center_overlay.getElement().classList.add("glow-11");
});
kiosk_11.on('mouseout', function (e) {
  kiosk_11.getElement().classList.remove("glow-11");
  info_center_overlay.getElement().classList.remove("glow-11");
});
var info_center_popup = info_center_overlay.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: orange;\">Welcome to Experience Center </div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" href=\"/solgallery\">Enter Kiosk</a></div>").addTo(map);
info_center_overlay.on('click', function (e) {
  zoomInOutClick(e, info_center_popup);
});

// Help Desk Implementation
var kiosk_12 = new L.Marker([217, 287], { icon: helpdeskIcon }).addTo(map);
var kiosk_12_popup = kiosk_12.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: orange;\">Help Desk </div></div><br><div style=\"margin-left:6vw;\"><a id=\"helpdesklink\" class=\"neon\" onclick=\"redirectHelpDeskTeamsChannel()\">Click to Enter</a></div>").addTo(map);
kiosk_12.on('click', function (e) {
  zoomInOutClick(e, kiosk_12);
});
var help_desk_overlay_bounds = [[92.08101, 107], [255.684024, 274.602045]];
var help_desk_overlay = L.imageOverlay('/static/ExpoSub/MapImages/Waterfalls.png', help_desk_overlay_bounds, {
  opacity: 1,
  interactive: true
});
help_desk_overlay.addTo(map);
help_desk_overlay.on('mouseover', function (ev) {
  kiosk_12.getElement().classList.add("glow-11");
  help_desk_overlay.getElement().classList.add("glow-11");
});
help_desk_overlay.on('mouseout', function (e) {
  help_desk_overlay.getElement().classList.remove("glow-11");
  kiosk_12.getElement().classList.remove("glow-11");
});
kiosk_12.on('mouseover', function (ev) {
  kiosk_12.getElement().classList.add("glow-11");
  help_desk_overlay.getElement().classList.add("glow-11");
});
kiosk_12.on('mouseout', function (e) {
  kiosk_12.getElement().classList.remove("glow-11");
  help_desk_overlay.getElement().classList.remove("glow-11");
});
var help_desk_popup = help_desk_overlay.bindPopup("<div class=\"text-container\"><div class=\"flux\" style=\"color: orange;\">Help Desk </div></div><br><div style=\"margin-left:6vw;\"><a class=\"neon\" onclick=\"redirectHelpDeskTeamsChannel()\">Click to Enter</a></div>").addTo(map);
help_desk_overlay.on('click', function (e) {
  zoomInOutClick(e, help_desk_popup);
});

function resetMap(){
    map.fitBounds(bounds);
}

function zoomInOutClick(e, popup) {
  var currZoom = map.getZoom();
  var diff = prevZoom - currZoom;
  if (diff > 0) {
    map.flyTo(e.latlng, 1.2);
    popup.openPopup();
  } else if (diff < 0) {
    map.fitBounds(bounds);
    popup.closePopup();
  } else {
    map.flyTo(e.latlng, 1.2);
    popup.openPopup();
  }
}


var visited_merry_go_round = new L.Marker([530, 1671], { icon: visitedIcon });
var visited_wave_swinger_round = new L.Marker([810.478586, 350.314079], { icon: visitedIcon });
var visited_shooting_game = new L.Marker([314, 1300], { icon: visitedIcon });
var visited_rollercoaster = new L.Marker([670, 760], { icon: visitedIcon });
var visited_magicshow = new L.Marker([250.08627, 1737], { icon: visitedIcon });
var visited_columbus = new L.Marker([330.980145, 345], { icon: visitedIcon });
var visited_wonderland = new L.Marker([716, 1339], { icon: visitedIcon });
var visited_giantwheel = new L.Marker([94, 995], { icon: visitedIcon });
var visited_magicride = new L.Marker([90.08627, 1337], { icon: visitedIcon });
var visited_dropzone = new L.Marker([519, 995], { icon: visitedIcon });

// var visited_kiosk = visited_merry_go_round.bindPopup("<div class=\"text-container\"><img src=\"/static/ExpoSub/MapImages/visitedkiosk.gif\" alt=\"Kiosk Visited\"></div>");


function fetchVisitedKioskList(user_id) {
  $.ajax({
    type: 'GET',
    url: `${HostURL}/api/v1/user_visited_kiosks/${user_id}`,
    async: false,
    success: function (kioskList) {
      console.log(kioskList);
      setVisitedKioskIcon(kioskList)
    }
  });
}
function setVisitedKioskIcon(kioskList) {
  merrygoround_overlay
  kioskList.forEach(function (obj) {
    switch (obj.Kiosk_room_name) {
      case 'merryGoRound': if (obj.visited) {
        addToolTipForVisitedKiosk(merrygoround_overlay, kiosk_5, visited_merry_go_round);
      }
        break;
      case 'waveSwinger':
        if (obj.visited) {
          addToolTipForVisitedKiosk(water_park_overlay, kiosk_1, visited_wave_swinger_round);
        }
        break;
      case 'shootingGame':
        if (obj.visited) {
          addToolTipForVisitedKiosk(shooting_range_overlay, kiosk_9, visited_shooting_game);
        }
        break; 
      case 'rollercoaster': 
      if (obj.visited) {
        addToolTipForVisitedKiosk(roller_coaster_overlay, kiosk_2, visited_rollercoaster);
      }
        break;
      case 'magicShow':
        if (obj.visited) {
          addToolTipForVisitedKiosk(bouncy_house_overlay, kiosk_10, visited_magicshow);
        }
        break;
      case 'columbusRide': 
      if (obj.visited) {
        addToolTipForVisitedKiosk(columbus_overlay, kiosk_4, visited_columbus);
      }
        break;
      case 'wonderland':
        if (obj.visited) {
          addToolTipForVisitedKiosk(wonderland_overlay, kiosk_3, visited_wonderland);
        }
        break;
      case 'giantWheel':
        if (obj.visited) {
          addToolTipForVisitedKiosk(giant_wheel_overlay, kiosk_8, visited_giantwheel);
        }
        break;
      // case 'magicRide':
      //   if (obj.visited) {
      //     addToolTipForVisitedKiosk(magic_ride_overlay, kiosk_7, visited_magicride);
      //   }
      //   break;
      case 'dropZone':
        if (obj.visited) {
          addToolTipForVisitedKiosk(dropzone_overlay, kiosk_6, visited_dropzone);
        }
        break;

    }
  });
}

function addToolTipForVisitedKiosk(overlay, kiosk, marker) {
  marker.addTo(map);
  marker.bindTooltip("<div class=\"text-container\"><img class=\"visited-gif\" src=\"/static/ExpoSub/MapImages/visited-logo.gif\" alt=\"Kiosk Visited\"></div>", { className: 'visited-tooltip', opacity: 1, direction: 'top' }).addTo(map);
  overlay.on('mouseover', function (ev) {
    marker.openTooltip();
  });
  overlay.on('mouseout', function (ev) {
    marker.closeTooltip();
  });
  kiosk.on('mouseover', function (ev) {
    marker.openTooltip();
  });
  kiosk.on('mouseout', function (ev) {
    marker.closeTooltip();
  });
}

function redirectWhiteBoard(){
  location.href="/whiteboard";
}
function redirectHelpDeskTeamsChannel(){
  window.open(HelpDeskURL);
}

// function onMapClick(e) {
//   var marker = L.marker(e.latlng, {
//     title: "Transamerica Pyramid"
//   }).addTo(map);
//   marker.bindPopup("You clicked the map at " + e.latlng.toString()).addTo(map);
// }
// map.on('click', onMapClick);


