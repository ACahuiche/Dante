const app = new Vue({
	el: '#app',
	data: {
		plantilla: '',
		plantillaAux: '',
		plantillaFormateada: '',
	},
	
	computed:{
		
	},
	
	created: function(){
		this.plantilla = '';
		this.plantillaAux = '';
		this.plantillaFormateada = '';
	},
	
	methods:{
		formatearPlantillaTelefonica: function() {
			if(this.plantilla.trim() == ''){
				Swal.fire('Texto vacio','Escribe la plantilla a formatear', 'warning');
			}
			else {
				this.plantillaAux = this.plantilla;
				this.plantilla = this.plantilla.replace(/(\r\n|\n|\r)/gm, " ");
				this.plantilla = this.plantilla.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
				this.plantilla = this.plantilla.replaceAll("Troncales: Telefono	 DN:",",");
				this.plantilla = this.plantilla.replaceAll(" ,",",");
				this.plantilla = this.plantilla.replaceAll(" Troncales:","");
				this.plantillaFormateada = this.plantilla;
				this.plantilla = this.plantillaAux;
			}
		},
		
		formatearTexto: function() {
			if(this.plantilla.trim() == ''){
				Swal.fire('Texto vacio','Escribe la plantilla a formatear', 'warning');
			}
			else {
				this.plantillaAux = this.plantilla;
				this.plantilla = this.plantilla.replace(/(\r\n|\n|\r)/gm, " ");
				this.plantillaFormateada = this.plantilla;
				this.plantilla = this.plantillaAux;
			}
		},
		
		copiarTextoFormateado: function() {
			navigator.clipboard.writeText(this.plantillaFormateada)
			.then(() => {
			console.log('Copiado');
		})
		}
	}
});