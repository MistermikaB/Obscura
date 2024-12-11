(function(){
    var script = {
 "mouseWheelEnabled": true,
 "buttonToggleMute": "this.IconButton_A306F9F6_B281_82B8_41CA_40F4A784BD4E",
 "paddingBottom": 0,
 "children": [
  "this.MainViewer",
  "this.ThumbnailList_A358219B_B283_8368_41C1_5C4D7D22973D",
  "this.Image_A361B309_B283_8768_41B1_D36253A75FF9",
  "this.IconButton_A39FA660_B280_81D8_41D6_FE152FB74B0F",
  "this.IconButton_A306F9F6_B281_82B8_41CA_40F4A784BD4E",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "desktopMipmappingEnabled": false,
 "width": "100%",
 "minHeight": 20,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_A39FA660_B280_81D8_41D6_FE152FB74B0F], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_A358219B_B283_8368_41C1_5C4D7D22973D_playlist,this.mainPlayList])",
 "scrollBarWidth": 10,
 "definitions": [{
 "items": [
  {
   "media": "this.panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A358219B_B283_8368_41C1_5C4D7D22973D_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_camera"
  },
  {
   "media": "this.panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A358219B_B283_8368_41C1_5C4D7D22973D_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_camera"
  },
  {
   "media": "this.panorama_BB645BE3_B030_8062_41C4_77529B57D0AB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A358219B_B283_8368_41C1_5C4D7D22973D_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_camera"
  },
  {
   "media": "this.panorama_BB65386A_B030_8062_41DF_9C9189AA1B45",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A358219B_B283_8368_41C1_5C4D7D22973D_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A358219B_B283_8368_41C1_5C4D7D22973D_playlist, 4, 0)",
   "media": "this.album_BD921F04_B28F_7F5F_41C4_C618DDE93E60",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "ThumbnailList_A358219B_B283_8368_41C1_5C4D7D22973D_playlist",
 "class": "PlayList"
},
{
 "hfovMax": 130,
 "label": "Bathroom",
 "id": "panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_BCDF5AAE_B030_80E5_41D6_1454881814CF",
  "this.overlay_BC4FC00B_B281_8169_41D7_6818867F4646"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "distance": 1,
   "yaw": 160.93,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9",
   "backwardYaw": -110.33
  }
 ],
 "hfov": 360,
 "hfovMin": "120%",
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -19.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_A05955F8_B280_82A8_41D9_B02E9DF7751D",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -176.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_A02F35EE_B280_82A8_41D2_CF08E3391074",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_camera"
  },
  {
   "media": "this.panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_camera"
  },
  {
   "media": "this.panorama_BB645BE3_B030_8062_41C4_77529B57D0AB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_camera"
  },
  {
   "media": "this.panorama_BB65386A_B030_8062_41DF_9C9189AA1B45",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_camera"
  },
  {
   "media": "this.album_BD921F04_B28F_7F5F_41C4_C618DDE93E60",
   "end": "this.trigger('tourEnded')",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MainViewer"
},
{
 "levels": [
  {
   "url": "media/popup_BDA17DE9_B280_82A9_41C9_73E443F869F7_0_0.png",
   "width": 3840,
   "class": "ImageResourceLevel",
   "height": 2160
  },
  {
   "url": "media/popup_BDA17DE9_B280_82A9_41C9_73E443F869F7_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1152
  },
  {
   "url": "media/popup_BDA17DE9_B280_82A9_41C9_73E443F869F7_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_BDA17DE9_B280_82A9_41C9_73E443F869F7_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_A7F7A63B_B280_81A8_41D7_B6E3078A614F",
 "class": "ImageResource"
},
{
 "class": "PhotoAlbum",
 "label": "Plans",
 "id": "album_BD921F04_B28F_7F5F_41C4_C618DDE93E60",
 "thumbnailUrl": "media/album_BD921F04_B28F_7F5F_41C4_C618DDE93E60_t.png",
 "playList": "this.album_BD921F04_B28F_7F5F_41C4_C618DDE93E60_AlbumPlayList"
},
{
 "rotationY": 0,
 "showDuration": 500,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "id": "popup_BDA17DE9_B280_82A9_41C9_73E443F869F7",
 "rotationX": 0,
 "showEasing": "cubic_in",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_BDA17DE9_B280_82A9_41C9_73E443F869F7_0_2.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "pitch": 3.26,
 "popupMaxHeight": "95%",
 "yaw": 76.24,
 "hideDuration": 500,
 "hfov": 4.33,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -73.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_A00545D1_B280_82F8_41CB_804C4806A51D",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "Bedroom",
 "id": "panorama_BB645BE3_B030_8062_41C4_77529B57D0AB",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_BC629A0F_B283_8168_41C2_6C37F647328C",
  "this.overlay_BD035138_B280_83A8_41DB_A8FB3EF9D08F",
  "this.popup_BDF23116_B280_8378_41C8_D2FC0B272379"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "distance": 1,
   "yaw": -12.39,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9",
   "backwardYaw": 106.57
  }
 ],
 "hfov": 360,
 "hfovMin": "120%",
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "Living Room",
 "id": "panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_BCD6D3DB_B030_80A2_41B3_71FEF0372E38",
  "this.overlay_BE831CD3_B030_80A2_41DA_ABE0B121AF3B",
  "this.overlay_BC584A0A_B280_8168_41E4_8F4FFB86F85F",
  "this.overlay_BC54B993_B287_8379_41E3_B01A5FD664A1",
  "this.popup_BDA17DE9_B280_82A9_41C9_73E443F869F7",
  "this.overlay_BDC4DF48_B281_9FE8_41D0_27D27EF93177"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "distance": 1,
   "yaw": 106.57,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BB645BE3_B030_8062_41C4_77529B57D0AB",
   "backwardYaw": -12.39
  },
  {
   "distance": 1,
   "yaw": -167.7,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BB65386A_B030_8062_41DF_9C9189AA1B45",
   "backwardYaw": 3.96
  },
  {
   "distance": 1,
   "yaw": -110.33,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10",
   "backwardYaw": 160.93
  }
 ],
 "hfov": 360,
 "hfovMin": "120%",
 "partial": false
},
{
 "mouseControlMode": "drag_acceleration",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": "this.IconButton_A39FA660_B280_81D8_41D6_FE152FB74B0F",
 "viewerArea": "this.MainViewer"
},
{
 "class": "Photo",
 "label": "PalaisTokyo_Chambre_SectionPlan",
 "id": "album_BD921F04_B28F_7F5F_41C4_C618DDE93E60_1",
 "duration": 5000,
 "width": 4963,
 "thumbnailUrl": "media/album_BD921F04_B28F_7F5F_41C4_C618DDE93E60_1_t.jpg",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_BD921F04_B28F_7F5F_41C4_C618DDE93E60_1.jpg"
   }
  ]
 },
 "height": 3508
},
{
 "class": "Photo",
 "label": "PalaisTokyo_Chambre_FloorPlan_dimmed",
 "id": "album_BD921F04_B28F_7F5F_41C4_C618DDE93E60_0",
 "duration": 5000,
 "width": 4963,
 "thumbnailUrl": "media/album_BD921F04_B28F_7F5F_41C4_C618DDE93E60_0_t.jpg",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_BD921F04_B28F_7F5F_41C4_C618DDE93E60_0.jpg"
   }
  ]
 },
 "height": 3508
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 69.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_A04B0602_B280_8158_41DE_905AB2F5C481",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 167.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_A03D85E4_B280_82D8_41CC_71850BED5551",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "label": "Palais de Tokyo",
 "id": "panorama_BB65386A_B030_8062_41DF_9C9189AA1B45",
 "vfov": 180,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072,
      "colCount": 6
     },
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536,
      "colCount": 3
     },
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512,
      "colCount": 1
     }
    ]
   }
  }
 ],
 "thumbnailUrl": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_BCCDECC0_B031_809E_41B5_8A5775C25B66",
  "this.overlay_BDE8C6E3_B281_8ED9_41DE_DFB20A850893",
  "this.overlay_BDF1899A_B280_8368_41C2_F26ED9C87135"
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "distance": 1,
   "yaw": 3.96,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9",
   "backwardYaw": -167.7
  }
 ],
 "hfov": 360,
 "hfovMin": "120%",
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 12.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_A03245DB_B280_82E8_41AE_3C477AAAC5C8",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "showDuration": 500,
 "class": "PopupPanoramaOverlay",
 "rotationZ": 0,
 "popupMaxWidth": "95%",
 "hideEasing": "cubic_out",
 "id": "popup_BDF23116_B280_8378_41C8_D2FC0B272379",
 "rotationX": 0,
 "showEasing": "cubic_in",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_BDF23116_B280_8378_41C8_D2FC0B272379_0_0.png"
   }
  ]
 },
 "pitch": -27.4,
 "popupMaxHeight": "95%",
 "yaw": 80.14,
 "hideDuration": 500,
 "hfov": 4.93,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_camera",
 "automaticZoomSpeed": 10
},
{
 "paddingBottom": 0,
 "id": "IconButton_A306F9F6_B281_82B8_41CA_40F4A784BD4E",
 "width": 40,
 "minHeight": 0,
 "backgroundOpacity": 0,
 "pressedIconURL": "skin/IconButton_A306F9F6_B281_82B8_41CA_40F4A784BD4E_pressed.png",
 "verticalAlign": "middle",
 "right": "0.35%",
 "paddingLeft": 0,
 "class": "IconButton",
 "minWidth": 0,
 "shadow": false,
 "bottom": "1.26%",
 "mode": "toggle",
 "borderSize": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "height": 40,
 "data": {
  "name": "Button37509"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_A306F9F6_B281_82B8_41CA_40F4A784BD4E.png",
 "cursor": "hand",
 "transparencyActive": true
},
{
 "paddingBottom": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarHeadShadow": true,
 "transitionMode": "blending",
 "progressBorderColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadHeight": 15,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingLeft": 0,
 "vrPointerSelectionTime": 2000,
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "progressBackgroundOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "progressHeight": 10,
 "progressBottom": 0,
 "borderSize": 0,
 "toolTipOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipTextShadowOpacity": 0,
 "height": "100%",
 "progressBarOpacity": 1,
 "paddingRight": 0,
 "progressBorderSize": 0,
 "toolTipFontColor": "#606060",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "progressLeft": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderRadius": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeight": 10,
 "progressBarBorderColor": "#000000",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "minWidth": 100,
 "shadow": false,
 "toolTipBorderColor": "#767676",
 "progressBarBorderRadius": 0,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontWeight": "normal",
 "paddingTop": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontStyle": "normal",
 "borderRadius": 0,
 "progressRight": 0,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBottom": 5,
 "toolTipShadowVerticalLength": 0,
 "propagateClick": false,
 "playbackBarBorderRadius": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "transitionDuration": 500,
 "toolTipPaddingLeft": 6,
 "toolTipBorderSize": 1,
 "toolTipDisplayTime": 600,
 "progressBackgroundColorRatios": [
  0
 ],
 "progressOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 },
 "toolTipPaddingTop": 4
},
{
 "itemLabelFontFamily": "Arial",
 "paddingBottom": 10,
 "itemBackgroundColor": [],
 "id": "ThumbnailList_A358219B_B283_8368_41C1_5C4D7D22973D",
 "left": "0%",
 "width": "37.333%",
 "itemThumbnailOpacity": 1,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "itemBackgroundColorDirection": "vertical",
 "rollOverItemLabelFontWeight": "bold",
 "selectedItemLabelFontColor": "#FFCC00",
 "verticalAlign": "top",
 "itemThumbnailShadowColor": "#000000",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "itemBorderRadius": 0,
 "paddingLeft": 20,
 "itemThumbnailHeight": 75,
 "itemLabelGap": 8,
 "itemThumbnailWidth": 100,
 "scrollBarOpacity": 0.5,
 "itemThumbnailShadow": true,
 "class": "ThumbnailList",
 "scrollBarVisible": "rollOver",
 "itemLabelPosition": "bottom",
 "shadow": false,
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "minWidth": 1,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemOpacity": 1,
 "bottom": "0%",
 "itemThumbnailShadowOpacity": 0.57,
 "itemPaddingRight": 3,
 "itemPaddingLeft": 3,
 "borderRadius": 5,
 "itemLabelFontStyle": "normal",
 "itemThumbnailBorderRadius": 5,
 "borderSize": 0,
 "paddingTop": 10,
 "itemLabelFontWeight": "normal",
 "itemLabelFontSize": 14,
 "itemThumbnailShadowBlurRadius": 8,
 "itemThumbnailShadowSpread": 1,
 "itemVerticalAlign": "middle",
 "paddingRight": 20,
 "propagateClick": false,
 "itemThumbnailShadowVerticalLength": 3,
 "itemThumbnailScaleMode": "fit_outside",
 "scrollBarColor": "#FFFFFF",
 "itemLabelTextDecoration": "none",
 "itemBackgroundColorRatios": [],
 "data": {
  "name": "ThumbnailList35762"
 },
 "selectedItemLabelFontWeight": "bold",
 "itemHorizontalAlign": "center",
 "playList": "this.ThumbnailList_A358219B_B283_8368_41C1_5C4D7D22973D_playlist",
 "itemLabelFontColor": "#FFFFFF",
 "layout": "horizontal",
 "itemPaddingBottom": 3,
 "gap": 13,
 "itemPaddingTop": 3,
 "itemBackgroundOpacity": 0,
 "horizontalAlign": "left"
},
{
 "paddingBottom": 0,
 "id": "Image_A361B309_B283_8768_41B1_D36253A75FF9",
 "width": "13.49%",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "right": "0%",
 "url": "skin/Image_A361B309_B283_8768_41B1_D36253A75FF9.png",
 "paddingLeft": 0,
 "class": "Image",
 "shadow": false,
 "minWidth": 1,
 "top": "0%",
 "borderSize": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "height": "8.051%",
 "paddingRight": 0,
 "propagateClick": false,
 "maxWidth": 310,
 "data": {
  "name": "Image13006"
 },
 "maxHeight": 102,
 "scaleMode": "fit_inside",
 "horizontalAlign": "center"
},
{
 "paddingBottom": 0,
 "id": "IconButton_A39FA660_B280_81D8_41D6_FE152FB74B0F",
 "width": 56,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "right": "0%",
 "paddingLeft": 0,
 "class": "IconButton",
 "shadow": false,
 "minWidth": 1,
 "bottom": "4.74%",
 "mode": "push",
 "borderSize": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "height": 56,
 "paddingRight": 0,
 "propagateClick": false,
 "maxWidth": 56,
 "data": {
  "name": "IconButton14318"
 },
 "maxHeight": 56,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_A39FA660_B280_81D8_41D6_FE152FB74B0F.png",
 "cursor": "hand",
 "transparencyActive": false
},
{
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "id": "veilPopupPanorama",
 "left": 0,
 "minHeight": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "paddingLeft": 0,
 "class": "UIComponent",
 "shadow": false,
 "minWidth": 0,
 "top": 0,
 "bottom": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingRight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "UIComponent17773"
 },
 "visible": false
},
{
 "paddingBottom": 0,
 "backgroundColorDirection": "vertical",
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "minHeight": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "paddingLeft": 0,
 "class": "ZoomImage",
 "shadow": false,
 "minWidth": 0,
 "top": 0,
 "bottom": 0,
 "borderSize": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "backgroundColor": [],
 "paddingRight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage17774"
 },
 "visible": false
},
{
 "textDecoration": "none",
 "iconLineWidth": 5,
 "paddingBottom": 5,
 "backgroundColorDirection": "vertical",
 "id": "closeButtonPopupPanorama",
 "minHeight": 0,
 "fontFamily": "Arial",
 "layout": "horizontal",
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "right": 10,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "paddingLeft": 5,
 "fontSize": "1.29vmin",
 "shadowBlurRadius": 6,
 "class": "CloseButton",
 "borderColor": "#000000",
 "shadowSpread": 1,
 "shadow": false,
 "pressedIconColor": "#888888",
 "minWidth": 0,
 "top": 10,
 "rollOverIconColor": "#666666",
 "mode": "push",
 "borderSize": 0,
 "borderRadius": 0,
 "paddingTop": 5,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "paddingRight": 5,
 "propagateClick": false,
 "iconHeight": 20,
 "fontStyle": "normal",
 "label": "",
 "fontColor": "#FFFFFF",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "iconColor": "#000000",
 "iconBeforeLabel": true,
 "visible": false,
 "data": {
  "name": "CloseButton17775"
 },
 "horizontalAlign": "center",
 "iconWidth": 20,
 "cursor": "hand",
 "gap": 5,
 "fontWeight": "normal"
},
{
 "id": "overlay_BCDF5AAE_B030_80E5_41D6_1454881814CF",
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 40.85,
 "yaw": -18.15,
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A7C47631_B280_81B8_41D7_EBFA1CF46D82",
   "yaw": 160.93,
   "pitch": -43.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 160.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -43.89,
   "hfov": 8.55
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9, this.camera_A04B0602_B280_8158_41DE_905AB2F5C481); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_BC4FC00B_B281_8169_41D7_6818867F4646",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "items": [
  {
   "media": "this.album_BD921F04_B28F_7F5F_41C4_C618DDE93E60_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_outside"
   }
  },
  {
   "media": "this.album_BD921F04_B28F_7F5F_41C4_C618DDE93E60_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_outside"
   }
  }
 ],
 "id": "album_BD921F04_B28F_7F5F_41C4_C618DDE93E60_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A7C4C631_B280_81B8_41E1_50A40B0380D8",
   "yaw": -12.39,
   "pitch": -40.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -12.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.76,
   "hfov": 8.99
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9, this.camera_A00545D1_B280_82F8_41CB_804C4806A51D); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_BC629A0F_B283_8168_41C2_6C37F647328C",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A7C70631_B280_81B8_41B7_CF2B3E155059",
   "yaw": 80.14,
   "pitch": -27.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 80.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.4,
   "hfov": 4.93
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_BDF23116_B280_8378_41C8_D2FC0B272379, {'backgroundColorDirection':'vertical','paddingBottom':5,'borderSize':0,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','rollOverIconWidth':20,'rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'backgroundOpacity':0.3,'rollOverIconHeight':20,'paddingLeft':5,'paddingRight':5,'pressedIconWidth':20,'pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','rollOverBorderColor':'#000000','pressedIconHeight':20,'iconColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverIconColor':'#666666','iconWidth':20,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_BD035138_B280_83A8_41DB_A8FB3EF9D08F",
 "data": {
  "label": "Info 02"
 }
},
{
 "id": "overlay_BCD6D3DB_B030_80A2_41B3_71FEF0372E38",
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 48.67,
 "yaw": 142.49,
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A7C2A630_B280_81B8_41C7_DB479B2B4A4E",
   "yaw": -167.7,
   "pitch": -17.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 12.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -167.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.72,
   "hfov": 12.18
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BB65386A_B030_8062_41DF_9C9189AA1B45, this.camera_A02F35EE_B280_82A8_41D2_CF08E3391074); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_BE831CD3_B030_80A2_41DA_ABE0B121AF3B",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A7C53631_B280_81B8_41E1_DE14937354E7",
   "yaw": -110.33,
   "pitch": -25.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 10.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -110.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.65,
   "hfov": 10.7
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10, this.camera_A05955F8_B280_82A8_41D9_B02E9DF7751D); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_BC584A0A_B280_8168_41E4_8F4FFB86F85F",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A7C58631_B280_81B8_41C0_813DE9240712",
   "yaw": 76.24,
   "pitch": 3.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 76.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.26,
   "hfov": 4.33
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_BDA17DE9_B280_82A9_41C9_73E443F869F7, {'backgroundColorDirection':'vertical','paddingBottom':5,'borderSize':0,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','rollOverIconWidth':20,'rollOverIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'backgroundOpacity':0.3,'rollOverIconHeight':20,'paddingLeft':5,'paddingRight':5,'pressedIconWidth':20,'pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','rollOverBorderColor':'#000000','pressedIconHeight':20,'iconColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','rollOverIconColor':'#666666','iconWidth':20,'iconLineWidth':5,'iconHeight':20,'rollOverBorderSize':0,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'borderColor':'#000000'}, this.ImageResource_A7F7A63B_B280_81A8_41D7_B6E3078A614F, null, null, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_BC54B993_B287_8379_41E3_B01A5FD664A1",
 "data": {
  "label": "Info 02"
 }
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A7C42631_B280_81B8_41C8_52E55D20CC28",
   "yaw": 106.57,
   "pitch": -5.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 11.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 106.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.51,
   "hfov": 11.81
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BB645BE3_B030_8062_41C4_77529B57D0AB, this.camera_A03D85E4_B280_82D8_41CC_71850BED5551); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_BDC4DF48_B281_9FE8_41D0_27D27EF93177",
 "data": {
  "label": "Circle Arrow 02a"
 }
},
{
 "id": "overlay_BCCDECC0_B031_809E_41B5_8A5775C25B66",
 "class": "LensFlarePanoramaOverlay",
 "bleaching": 0.7,
 "pitch": 56.83,
 "yaw": -71.29,
 "bleachingDistance": 0.4
},
{
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_A7C76631_B280_81B8_41DC_7793C504598E",
   "yaw": 3.96,
   "pitch": -1.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": 3.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.75,
   "hfov": 5.31
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9, this.camera_A03245DB_B280_82E8_41AE_3C477AAAC5C8); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_BDE8C6E3_B281_8ED9_41DE_DFB20A850893",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "items": [
  {
   "image": "this.AnimatedImageResource_A7C7C632_B280_81B8_41E4_1A3281479C26",
   "yaw": -8.25,
   "pitch": 8.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 3.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "yaw": -8.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 8.55,
   "hfov": 3.78
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4); if(this.AnimatedImageResource_A7C7C632_B280_81B8_41E4_1A3281479C26.get('state') != 'playing'){ this.AnimatedImageResource_A7C7C632_B280_81B8_41E4_1A3281479C26.play(); } else { this.AnimatedImageResource_A7C7C632_B280_81B8_41E4_1A3281479C26.stop(); }",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_BDF1899A_B280_8368_41C2_F26ED9C87135",
 "data": {
  "label": "Info 02"
 }
},
{
 "levels": [
  {
   "url": "media/panorama_BB34545B_B030_87A2_41E2_CA13A3F5BA10_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 50,
 "rowCount": 6,
 "id": "AnimatedImageResource_A7C47631_B280_81B8_41D7_EBFA1CF46D82",
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 50,
 "rowCount": 6,
 "id": "AnimatedImageResource_A7C4C631_B280_81B8_41E1_50A40B0380D8",
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_BB645BE3_B030_8062_41C4_77529B57D0AB_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_A7C70631_B280_81B8_41B7_CF2B3E155059",
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_A7C2A630_B280_81B8_41C7_DB479B2B4A4E",
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 50,
 "rowCount": 6,
 "id": "AnimatedImageResource_A7C53631_B280_81B8_41E1_DE14937354E7",
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_1_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_A7C58631_B280_81B8_41C0_813DE9240712",
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_BABD9792_B030_80A2_41E5_4609D22E7BE9_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 50,
 "rowCount": 6,
 "id": "AnimatedImageResource_A7C42631_B280_81B8_41C8_52E55D20CC28",
 "frameCount": 24,
 "colCount": 4
},
{
 "levels": [
  {
   "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "id": "AnimatedImageResource_A7C76631_B280_81B8_41DC_7793C504598E",
 "frameCount": 24,
 "colCount": 4
},
{
 "repeat": 1,
 "levels": [
  {
   "url": "media/panorama_BB65386A_B030_8062_41DF_9C9189AA1B45_1_HS_1_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 6,
 "autoplay": false,
 "finalFrame": "first",
 "id": "AnimatedImageResource_A7C7C632_B280_81B8_41E4_1A3281479C26",
 "frameCount": 24,
 "colCount": 4
}],
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 0.5,
 "shadow": false,
 "minWidth": 20,
 "overflow": "visible",
 "borderSize": 0,
 "borderRadius": 0,
 "paddingTop": 0,
 "mobileMipmappingEnabled": false,
 "scrollBarColor": "#000000",
 "defaultVRPointer": "laser",
 "paddingRight": 0,
 "propagateClick": false,
 "contentOpaque": false,
 "scripts": {
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "registerKey": function(key, value){  window[key] = value; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "existsKey": function(key){  return key in window; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getKey": function(key){  return window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } }
 },
 "data": {
  "name": "Player683"
 },
 "downloadEnabled": false,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
