Vue.createApp({
    data() {
      return {
        map : L.map('map',{zoomAnimation: false}).setView([42.70089753241175, 3.347071849162483], 10),
        marker : L.marker([42.69193509203, 2.8972979683846556]),
        perpignan : false,
      };
    },

    computed :{
    },

    mounted () {

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
             maxZoom: 19,
             attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);

        L.tileLayer.wms("https://wxs.ofb.fr/geoserver/habitat/ows?", {
            service: "WMS",
            version: "1.1.1",  // Essayez 1.1.1 si 1.3.0 ne fonctionne pas
            layers: "habitat:bio_atl_bzhnd_maerl_2021_ofb_pol_3857",
            format: "image/png",
            attribution: "Données OFB",
            transparent: true,
            tiled: true,
        
        }).addTo(this.map);
        
        
    },

    methods : {
        cocher(){
            if(this.perpignan){
                this.marker.addTo(this.map);
            }else{
              this.map.removeLayer(this.marker);
            }
          },
    },

  }).mount('#app');