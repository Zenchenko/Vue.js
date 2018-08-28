new VueW3CValid({
    el: '.sample',
});



new Vue({
	el: '.sample',
	data: {
		layers:[],
		layersTypes: {
			biscuit: {
				price1sm: 50,
				ladel: 'Бисквит'
			},
			beze: {
				price1sm: 100,
				ladel: 'Безе'
			},
			curd: {
				price1sm: 60,
				ladel: 'Творожный'
			}
		},
		defaultLayerType: 'biscuit',
		defaultHeight: 4
	},

	computed: {
		price(){  // сумирует цену
			let sum = 0;

			this.layers.forEach((layer) => { 
				sum += layer.height * this.layersTypes[layer.type].price1sm;
			});

			return sum;
		},
 		hasLayers(){ // скривает блок до поевления слаёв
 			return this.layers.length > 0;
 		}
	},

	methods: { 
		addLayer(){  // дабавляет слой
			this.layers.push({
				type: this.defaultLayerType,
				height: this.defaultHeight
			});
		},

		changeHeight(i, dh){  // увеличивает размер слоя кликам мыши
			this.layers[i].height += dh;
		},

		deleteLayer(i){ // удоляет слой
			this.layers.splice(i, 1);
		}
	}
});