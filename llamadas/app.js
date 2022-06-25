const app = new Vue({
	el: '#llamadas',
	data: {
		dev: false,
		segmento: '',
		seComunica: '',
		cuenta: '',
		descripcion: '',
		folio: '',
		notas: '',
		listaDeLlamadas: [],
		listaMasivas: []
	},
	
	computed:{
	
	},
	
	created: function(){
		this.interval = setInterval(() => this.guardadoAutomatico(), 1000);
		if(this.dev) {
			if(localStorage.getItem('listaLlamadasDEV')){
			  this.listaDeLlamadas = JSON.parse(localStorage.getItem('listaLlamadasDEV'));
			}
			
			if(localStorage.getItem('itemNotasDEV')){
			  this.notas = localStorage.getItem('itemNotasDEV');
			}
			
			if(localStorage.getItem('listaMasivasDEV')){
				this.listaMasivas = JSON.parse(localStorage.getItem('listaMasivasDEV'));
			}
			
			if(localStorage.getItem('guardadoAutomaticoDEV')) {
				var datos = JSON.parse(localStorage.getItem('guardadoAutomaticoDEV'));
				
				this.seComunica = datos.seComunica;
				this.cuenta = datos.cuenta;
				this.segmento = datos.segmento;
				this.descripcion = datos.descripcion;
				this.folio = datos.folio;
				this.notas = datos.notas;
			}
		}
		else {
			if(localStorage.getItem('listaLlamadas')){
			  this.listaDeLlamadas = JSON.parse(localStorage.getItem('listaLlamadas'));
			}
			
			if(localStorage.getItem('itemNotas')) {
				this.notas = localStorage.getItem('itemNotas');
			}
			
			if(localStorage.getItem('guardadoAutomatico')) {
				var datos = JSON.parse(localStorage.getItem('guardadoAutomatico'));
				
				this.seComunica = datos.seComunica;
				this.cuenta = datos.cuenta;
				this.segmento = datos.segmento;
				this.descripcion = datos.descripcion;
				this.folio = datos.folio;
				this.notas = datos.notas;
			}
		}
		
	},
	
	methods:{
		
		guardadoAutomatico: function() {
			var datos = {};
			datos.seComunica = this.seComunica;
			datos.cuenta = this.cuenta;
			datos.segmento = this.segmento;
			datos.descripcion = this.descripcion;
			datos.folio = this.folio;
			datos.notas = this.notas;
			
			if(this.dev){
				localStorage.setItem('guardadoAutomaticoDEV',JSON.stringify(datos));
			}
			else {
				localStorage.setItem('guardadoAutomatico',JSON.stringify(datos));
			}
		},
		
		plantillaInformativa: function() {
			var info = '';
			
			info += 'Segmento: ' + this.segmento + '<br>';
			info += 'Se comunica: ' + this.seComunica + '<br>';
			info += 'Cuenta: ' + this.cuenta + '<br>';
			info += 'Descripcion: ' + this.descripcion + '<br>';
			
			Swal.fire({
				title: 'Plantilla informativa',
				html: info
			});
			
			info2 = '';
			
			info2 += 'Segmento: ' + this.segmento + '\n';
			info2 += 'Se comunica: ' + this.seComunica + '\n';
			info2 += 'Cuenta: ' + this.cuenta + '\n';
			info2 += 'Descripcion: ' + this.descripcion + '\n';
			
			navigator.clipboard.writeText(info2)
			.then(() => {
			console.log("Texto copiado a portapapeles...")
			});
		},
		
		plantillaReubicacionONT: function() {
			var info = '';
			
			info += 'Segmento: ' + this.segmento + '\n';
			info += 'Nombre de quien se comunica: ' + this.seComunica + '\n';
			info += 'Nombre del responsable del seguimiento: ' + '\n';
			info += 'Telefono fijo: ' + '\n';
			info += 'Telefono celular: ' + '\n';
			info += 'Correo electronico: ' + '\n';
			info += 'Horario de atencion: ' + '\n';
			info += 'Descripcion: Cliente solicita reubicacion de su ONT/CPE en su mismo domicilio' + '\n';
			info += 'Direccion de instalacion: ' + '\n';
			info += 'Distancia aproximada de la reubicacion (m): ' + '\n';
			
			this.descripcion += '\n' + info;
		},
		
		plantillaCambioDomic: function() {
			var info = '';
			
			info += 'Segmento: ' + this.segmento + '\n';
			info += 'Nombre de quien se comunica: ' + this.seComunica + '\n';
			info += 'Nombre del responsable del seguimiento: ' + '\n';
			info += 'Telefono fijo: ' + '\n';
			info += 'Telefono celular: ' + '\n';
			info += 'Correo electronico: ' + '\n';
			info += 'Horario de atencion: ' + '\n';
			info += 'Descripcion: Cliente solicita cambio de domicilio de instalacion de su servicio' + '\n';
			info += 'Direccion de instalacion: ' + '\n';
			info += 'Direccion de cambio: ' + '\n';
			info += 'Entre calles del nuevo domicilio/Referencias fisicas: ' + '\n';
			info += 'Cuenta con las adecuaciones correspondientes: ' + '\n';
			
			this.descripcion += '\n' + info;
		},
		
		plantillaEnvioFactura: function() {
			var info = 'Cliente solicita se reenvie su factura, se envia a correo registrado <CORREO>, cliente confirma de recibido';
			
			this.descripcion += '\n' + info;
		},
		
		limpiarForm: function() {
			this.seComunica = '';
			this.cuenta = '';
			this.segmento = '';
			this.descripcion = '';
			this.folio = '';
		},
		
		limpiarTodo: function() {
			this.seComunica = '';
			this.cuenta = '';
			this.segmento = '';
			this.descripcion = '';
			this.folio = '';
			this.notas = '';
		},
		
		plantillaMesaDeAyuda: function() {
			var info = '';
			
			info += 'Quien se comunica: ' + this.seComunica +'\n';
			info += 'Descripcion del incidente: ' + this.descripcion + '\n';
			info += 'Numero de la cuenta y/o Folio Tracker: ' + this.cuenta +'\n';
			info += 'Nombre del cliente: ' + '\n';
			info += 'Segmento: ' + this.segmento +'\n';
			info += 'Numero de serie de la ONT: ' + '\n';
			info += 'Posicion (F/S/P/ONT ID): ' + '\n';
			info += 'Plan: ' + '\n';
			info += 'Modelo de Equipo: ' + '\n';
			info += 'Megas de subida/bajada: ' + '\n';
			info += 'Modo de la ONT (Router o Bridge): ' + '\n';
			info += 'Tipo de telefonia (Analoga o Digital): ' + '\n';
			info += 'DNS (Si incluye añadirlos a 10 digitos): ' + '\n';
			info += 'Servicio de Internet (Especificar si es DHCP publico, privado o fijo): ' + '\n';
			info += 'Si el cliente adquirio una IP Fija, proporcionar los siguientes datos:' + '\n';
			info += 'IP Fija: ' + '\n';
			info += 'Mascara: ' + '\n';
			info += 'Gateway: ' + '\n';
			info += ' '+'\n';
			info += 'VLANs de Servicio Datos: ' + '\n';
			info += 'VLANs de Usuario Datos: ' + '\n';
			info += 'VLANs de Servicio Voz: ' + '\n';
			info += 'VLANs de Usuario Voz: ' + '\n';
			info += 'Nota: Especificar si las VLAN van en TAG o UNTAG: ' + '\n';
			info += 'Nombre de contacto: ' + '\n';
			info += 'Telefono Celular:' + '\n';
			info += 'Telefono Fijo: ' + '\n';
			info += 'Horarios de atencion (telefono): ' + '\n';
			info += 'Horarios de atencion en sitio:' + '\n';
			
			this.descripcion += '\n' + info;
		}, 
		
		plantillaGeneralDatos: function() {
			var info = '';
			
			info += 'Cuenta: ' + this.cuenta + '\n';
			info += 'Razon Social | Titular de la cuenta: ' + '\n';
			info += 'Segmento: ' + this.segmento + '\n';
			info += 'Direccion de instalacion: ' + '\n';
			info += 'Referencias del domicilio: ' + '\n';
			info += '\n';
			info += 'Plan contratado: ' + '\n';
			info += 'DNs Facturando: ' + '\n';
			info += 'Balance en General: ' + '\n';
			info += '\n';
			info += '\n';
			info += 'Topologia: ' + '\n';
			info += 'Marca y modelo: ' + '\n';
			info += 'SN: ' + '\n';
			info += 'Modelo de la ONT: ' + '\n';
			info += 'Modo de operacion de ONT: ' + '\n';
			info += 'VLAN DATOS: ' + '\n';
			info += 'IP fija o dinamica: ' + '\n';
			info += 'Parametros de IP fija: ' + '\n';
			info += '\n';
			info += 'OLT: ' + '\n';
			info += 'Posicion de la ONT: ' + '\n';
			info += 'Ticket Reincidente: ' + '\n';
			info += 'Valores de potencia en FO: ' + '\n';
			info += 'Estado de los LEDs: ' + '\n';
			info += '\n';
			info += '\n';
			info += 'Falla exacta | Ayuda tecnica: ' + '\n';
			info += 'Folio FPE: ' + '\n';
			info += '\n';
			info += 'Descripcion: ' + '\n';
			info += '\n';
			info += '\n';
			info += 'Persona que reporto el servicio: ' + this.seComunica + '\n';
			info += 'Contacto para seguimiento: ' + '\n';
			info += 'Numeros de contacto: ' + '\n';
			info += 'Celular: ' + '\n';
			info += 'Fijo: ' + '\n';
			info += '\n';
			info += 'Horario de atencion para seguimiento via telefonica: ' + '\n';
			info += 'Horario de atencion para seguimiento en sitio: ' + '\n';
			
			this.descripcion += '\n' + info;
		},
		
		plantillaGeneralDatosNavLenta: function() {
			var info = '';
			
			info += 'Cuenta: ' + this.cuenta + '\n';
			info += 'Razon Social | Titular de la cuenta: ' + '\n';
			info += 'Segmento: ' + this.segmento + '\n';
			info += 'Direccion de instalacion: ' + '\n';
			info += 'Referencias del domicilio: ' + '\n';
			info += '\n';
			info += 'Plan contratado: ' + '\n';
			info += 'DNs Facturando: ' + '\n';
			info += 'Balance en General: ' + '\n';
			info += '\n';
			info += '\n';
			info += 'Topologia: ' + '\n';
			info += 'Marca y modelo: ' + '\n';
			info += 'SN: ' + '\n';
			info += 'Modelo de la ONT: ' + '\n';
			info += 'Modo de operacion de ONT: ' + '\n';
			info += 'VLAN DATOS: ' + '\n';
			info += 'IP fija o dinamica: ' + '\n';
			info += 'Parametros de IP fija: ' + '\n';
			info += '\n';
			info += 'OLT: ' + '\n';
			info += 'Posicion de la ONT: ' + '\n';
			info += 'Ticket Reincidente: ' + '\n';
			info += 'Valores de potencia en FO: ' + '\n';
			info += 'Estado de los LEDs: ' + '\n';
			info += '\n';
			info += '\n';
			info += 'Falla exacta | Ayuda tecnica: Navegacion Lenta' + '\n';
			info += 'Folio FPE: ' + '\n';
			info += '\n';
			info += 'Descripcion: Cliente reporta tener navegacion lenta en su servicio, se monitorea ONT y se detectan parametros correctos, potencia en rango, se le solicita aislar la red para realizar las siguientes pruebas' + '\n';
			info += '\n';
			info += 'Sondeo' + '\n';
			info += 'Pregunta qué conecta después de la ONT (Topología habitual): ' + '\n';
			info += 'Revisión de conexiones físicas: ' + '\n';
			info += 'Cambio de cable de red. (Cuando aplique) ' + '\n';
			info += 'Aislar la red: ' + '\n';
			info += 'Configurar parámetros de IP Fija (cuando aplique). ' + '\n';
			info += 'Configuración tarjeta de red (ipconfig /all). ' + '\n';
			info += 'Multiping ' + '\n';
			info += 'SpeedTest al servidor que corresponda: ' + '\n';
			info += '\n';
			info += '\n';
			info += 'Persona que reporto el servicio: ' + this.seComunica + '\n';
			info += 'Contacto para seguimiento: ' + '\n';
			info += 'Numeros de contacto: ' + '\n';
			info += 'Celular: ' + '\n';
			info += 'Fijo: ' + '\n';
			info += '\n';
			info += 'Horario de atencion para seguimiento via telefonica: ' + '\n';
			info += 'Horario de atencion para seguimiento en sitio: ' + '\n';
			
			this.descripcion += '\n' + info;
		},
		
		plantillaGeneralDatosInterm: function() {
			var info = '';
			
			info += 'Cuenta: ' + this.cuenta + '\n';
			info += 'Razon Social | Titular de la cuenta: ' + '\n';
			info += 'Segmento: ' + this.segmento + '\n';
			info += 'Direccion de instalacion: ' + '\n';
			info += 'Referencias del domicilio: ' + '\n';
			info += '\n';
			info += 'Plan contratado: ' + '\n';
			info += 'DNs Facturando: ' + '\n';
			info += 'Balance en General: ' + '\n';
			info += '\n';
			info += '\n';
			info += 'Topologia: ' + '\n';
			info += 'Marca y modelo: ' + '\n';
			info += 'SN: ' + '\n';
			info += 'Modelo de la ONT: ' + '\n';
			info += 'Modo de operacion de ONT: ' + '\n';
			info += 'VLAN DATOS: ' + '\n';
			info += 'IP fija o dinamica: ' + '\n';
			info += 'Parametros de IP fija: ' + '\n';
			info += '\n';
			info += 'OLT: ' + '\n';
			info += 'Posicion de la ONT: ' + '\n';
			info += 'Ticket Reincidente: ' + '\n';
			info += 'Valores de potencia en FO: ' + '\n';
			info += 'Estado de los LEDs: ' + '\n';
			info += '\n';
			info += '\n';
			info += 'Falla exacta | Ayuda tecnica: Navegacion Intermitente' + '\n';
			info += 'Folio FPE: ' + '\n';
			info += '\n';
			info += 'Descripcion: Cliente reporta tener navegacion intermitente en su servicio, se monitorea ONT y se detectan parametros correctos, potencia en rango, se le solicita aislar la red para realizar las siguientes pruebas' + '\n';
			info += '\n';
			info += 'Sondeo' + '\n';
			info += 'Pregunta qué conecta después de la ONT (Topología habitual): ' + '\n';
			info += 'Revisión de conexiones físicas: ' + '\n';
			info += 'Cambio de cable de red. (Cuando aplique) ' + '\n';
			info += 'Aislar la red: ' + '\n';
			info += 'Revisión de PC del cliente (reiniciar o cambiar según aplique). ' + '\n';
			info += 'Ping a IP de loopback 127.0.0.1: ' + '\n';
			info += 'Configurar parámetros de IP Fija (cuando aplique). ' + '\n';
			info += 'Configuración tarjeta de red (ipconfig /all). ' + '\n';
			info += 'Multiping ' + '\n';
			info += '\n';
			info += '\n';
			info += 'Persona que reporto el servicio: ' + this.seComunica + '\n';
			info += 'Contacto para seguimiento: ' + '\n';
			info += 'Numeros de contacto: ' + '\n';
			info += 'Celular: ' + '\n';
			info += 'Fijo: ' + '\n';
			info += '\n';
			info += 'Horario de atencion para seguimiento via telefonica: ' + '\n';
			info += 'Horario de atencion para seguimiento en sitio: ' + '\n';
			
			this.descripcion += '\n' + info;
		},
		
		plantillaGeneralDatosSinNav: function() {
			var info = '';
			
			info += 'Cuenta: ' + this.cuenta + '\n';
			info += 'Razon Social | Titular de la cuenta: ' + '\n';
			info += 'Segmento: ' + this.segmento + '\n';
			info += 'Direccion de instalacion: ' + '\n';
			info += 'Referencias del domicilio: ' + '\n';
			info += '\n';
			info += 'Plan contratado: ' + '\n';
			info += 'DNs Facturando: ' + '\n';
			info += 'Balance en General: ' + '\n';
			info += '\n';
			info += '\n';
			info += 'Topologia: ' + '\n';
			info += 'Marca y modelo: ' + '\n';
			info += 'SN: ' + '\n';
			info += 'Modelo de la ONT: ' + '\n';
			info += 'Modo de operacion de ONT: ' + '\n';
			info += 'VLAN DATOS: ' + '\n';
			info += 'IP fija o dinamica: ' + '\n';
			info += 'Parametros de IP fija: ' + '\n';
			info += '\n';
			info += 'OLT: ' + '\n';
			info += 'Posicion de la ONT: ' + '\n';
			info += 'Ticket Reincidente: ' + '\n';
			info += 'Valores de potencia en FO: ' + '\n';
			info += 'Estado de los LEDs: ' + '\n';
			info += '\n';
			info += '\n';
			info += 'Falla exacta | Ayuda tecnica: Sin navegacion' + '\n';
			info += 'Folio FPE: ' + '\n';
			info += '\n';
			info += 'Descripcion: Cliente reporta no tener navegacion en su servicio, se monitorea ONT y se detectan parametros correctos, potencia en rango, se le solicita aislar la red para realizar las siguientes pruebas' + '\n';
			info += '\n';
			info += 'Sondeo' + '\n';
			info += 'Pregunta qué conecta después de la ONT (Topología habitual): ' + '\n';
			info += 'Mensaje que muestra el navegador: ' + '\n';
			info += 'Revisión de conexiones físicas: ' + '\n';
			info += 'Aislar la red: ' + '\n';
			info += 'Configurar parámetros de IP Fija (cuando aplique). ' + '\n';
			info += 'Cambio de cable de red. (Cuando aplique): ' + '\n';
			info += 'Revisión de PC del cliente (reiniciar o cambiar según aplique). ' + '\n';
			info += 'Configuración tarjeta de red (ipconfig /all). ' + '\n';
			info += 'Ping a IP de loopback 127.0.0.1: ' + '\n';
			info += '\n';
			info += '\n';
			info += 'Persona que reporto el servicio: ' + this.seComunica + '\n';
			info += 'Contacto para seguimiento: ' + '\n';
			info += 'Numeros de contacto: ' + '\n';
			info += 'Celular: ' + '\n';
			info += 'Fijo: ' + '\n';
			info += '\n';
			info += 'Horario de atencion para seguimiento via telefonica: ' + '\n';
			info += 'Horario de atencion para seguimiento en sitio: ' + '\n';
			
			this.descripcion += '\n' + info;
		},
		
		plantillaDatosFOSM: function() {
			var info = '';
			
			info += this.cuenta +'/Folio ID o paquetizada/ Top o no Top 5k/ Sucursal/Segmento ' + this.segmento + '/ RS/Falla' + '\n';
			info += '\n';
			info += 'DATOS DE LA CUENTA' + '\n';
			info += 'Cuenta: ' + this.cuenta + '\n';
			info += 'Folio TFE: ' + '\n';
			info += 'Razon social/Titular: ' + '\n';
			info += 'Segmento: ' + this.segmento + '\n';
			info += 'Plan contratado: ' + '\n';
			info += 'Sucursal: ' + '\n';
			info += 'Direccion de instalacion: ' + '\n';
			info += '\n';
			info += 'DATOS DEL REQUERIMIENTO' + '\n';
			info += 'Falla / Solicitud: ' + '\n';
			info += 'Descripcion detallada: ' + '\n';
			info += 'Observaciones: '+ '\n';
			info += '\n';
			info += 'DATOS DE CONTACTO' + '\n';
			info += 'Nombre de quien se comunica: ' + this.seComunica + '\n'; 
			info += 'Contacto para seguimiento: ' + '\n';
			info += 'Telefono celular: ' + '\n';
			info += 'Telefono fijo: ' + '\n';
			info += 'Correo electronico: ' + '\n';
			info += 'Horario de atencion via telefonica: ' + '\n';
			info += 'Horario de atencion en sitio: ' + '\n';
			info += '\n';
			info += 'DATOS TECNICOS' + '\n';
			info += 'OLT: ' + '\n';
			info += 'Posicion (F/S/P/ONT ID): ' + '\n';
			info += 'Valores de potencia en FO: ' + '\n'; 
			info += 'Modelo de ONT/CPE: ' + '\n';
			info += 'S/N: ' + '\n';
			info += 'Tecnologia: FO' + '\n';
			info += 'IP HSU: --' + '\n';
			info += 'IP HBS: --' + '\n';
			info += 'CMS / Sector / RB: --' + '\n';
			info += 'Topologia: CPE + LAN' + '\n';
			info += 'IP de gestion / Tenant: ' + '\n';
			info += 'IP de Interconexion: ' + '\n';
			
			this.descripcion += '\n' + info;

		},
		
		plantillaDatosFOSMINTERM: function() {
			var info = '';
			
			info += this.cuenta +'/Folio ID o paquetizada/ Top o no Top 5k/ Sucursal/Segmento ' + this.segmento + '/ RS/Falla' + '\n';
			info += '\n';
			info += 'DATOS DE LA CUENTA' + '\n';
			info += 'Cuenta: ' + this.cuenta + '\n';
			info += 'Folio TFE: ' + '\n';
			info += 'Razon social/Titular: ' + '\n';
			info += 'Segmento: ' + this.segmento + '\n';
			info += 'Plan contratado: ' + '\n';
			info += 'Sucursal: ' + '\n';
			info += 'Direccion de instalacion: ' + '\n';
			info += '\n';
			info += 'DATOS DEL REQUERIMIENTO' + '\n';
			info += 'Falla / Solicitud: ' + '\n';
			info += 'Descripcion detallada: Cliente reporta <lentitud/intermitencia>, se monitorea <CPE/ONT> con parametros correctos, potencia en rango, se le solicita aislar la red, cliente lo hace , se realiza IPConfig y nos arroja los siguientes datos' + '\n';
			info += 'IP: ' + '\n';
			info += 'MSK: ' + '\n';
			info += 'GTW: ' + '\n';
			info += 'Se realiza prueba multiping y se detectan <ENVIADOS> paquetes enviados, <RECIBIDOS> recibidos y <PERDIDOS> perdidos. se detecta <INTERMITENCIA/LATENCIA>' + '\n';
			info += 'Se realiza traceroute a cisco.com se adjunta evidencia' + '\n';
			info += 'Se realiza test de velocidad y detectamos <VELOCIDAD DE BAJADA>' + '\n';
			info += 'Se genera folio en atencion a cliente' + '\n';
			info += 'Observaciones: '+ '\n';
			info += '\n';
			info += 'DATOS DE CONTACTO' + '\n';
			info += 'Nombre de quien se comunica: ' + this.seComunica + '\n'; 
			info += 'Contacto para seguimiento: ' + '\n';
			info += 'Telefono celular: ' + '\n';
			info += 'Telefono fijo: ' + '\n';
			info += 'Correo electronico: ' + '\n';
			info += 'Horario de atencion via telefonica: ' + '\n';
			info += 'Horario de atencion en sitio: ' + '\n';
			info += '\n';
			info += 'DATOS TECNICOS' + '\n';
			info += 'OLT: ' + '\n';
			info += 'Posicion (F/S/P/ONT ID): ' + '\n';
			info += 'Valores de potencia en FO: ' + '\n'; 
			info += 'Modelo de ONT/CPE: ' + '\n';
			info += 'S/N: ' + '\n';
			info += 'Tecnologia: FO' + '\n';
			info += 'IP HSU: --' + '\n';
			info += 'IP HBS: --' + '\n';
			info += 'CMS / Sector / RB: --' + '\n';
			info += 'Topologia: CPE + LAN' + '\n';
			info += 'IP de gestion / Tenant: ' + '\n';
			info += 'IP de Interconexion: ' + '\n';
			
			this.descripcion += '\n' + info;

		},
		
		plantillaDatosFOSMSINNAV: function() {
			var info = '';
			
			info += this.cuenta +'/Folio ID o paquetizada/ Top o no Top 5k/ Sucursal/Segmento ' + this.segmento + '/ RS/Falla' + '\n';
			info += '\n';
			info += 'DATOS DE LA CUENTA' + '\n';
			info += 'Cuenta: ' + this.cuenta + '\n';
			info += 'Folio TFE: ' + '\n';
			info += 'Razon social/Titular: ' + '\n';
			info += 'Segmento: ' + this.segmento + '\n';
			info += 'Plan contratado: ' + '\n';
			info += 'Sucursal: ' + '\n';
			info += 'Direccion de instalacion: ' + '\n';
			info += '\n';
			info += 'DATOS DEL REQUERIMIENTO' + '\n';
			info += 'Falla / Solicitud: ' + '\n';
			info += 'Descripcion detallada: Cliente reporta no tener navegacion, se monitorea <CPE/ONT> con parametros correctos, potencia en rango, se le solicita aislar la red, cliente lo hace , se realiza IPConfig y nos arroja los siguientes datos' + '\n';
			info += 'IP: ' + '\n';
			info += 'MSK: ' + '\n';
			info += 'GTW: ' + '\n';
			info += 'Se realiza ping a loopback y nos arroja <ENVIADOS> paquetes enviados, <RECIBIDOS> recibidos y <PERDIDOS> perdidos.' + '\n';
			info += 'Se realiza ping a cisco.com y nos indica que no encuentra el host, se adjunta evidencia' + '\n';
			info += 'Se genera folio en atencion a cliente' + '\n';
			info += 'Observaciones: '+ '\n';
			info += '\n';
			info += 'DATOS DE CONTACTO' + '\n';
			info += 'Nombre de quien se comunica: ' + this.seComunica + '\n'; 
			info += 'Contacto para seguimiento: ' + '\n';
			info += 'Telefono celular: ' + '\n';
			info += 'Telefono fijo: ' + '\n';
			info += 'Correo electronico: ' + '\n';
			info += 'Horario de atencion via telefonica: ' + '\n';
			info += 'Horario de atencion en sitio: ' + '\n';
			info += '\n';
			info += 'DATOS TECNICOS' + '\n';
			info += 'OLT: ' + '\n';
			info += 'Posicion (F/S/P/ONT ID): ' + '\n';
			info += 'Valores de potencia en FO: ' + '\n'; 
			info += 'Modelo de ONT/CPE: ' + '\n';
			info += 'S/N: ' + '\n';
			info += 'Tecnologia: FO' + '\n';
			info += 'IP HSU: --' + '\n';
			info += 'IP HBS: --' + '\n';
			info += 'CMS / Sector / RB: --' + '\n';
			info += 'Topologia: CPE + LAN' + '\n';
			info += 'IP de gestion / Tenant: ' + '\n';
			info += 'IP de Interconexion: ' + '\n';
			
			this.descripcion += '\n' + info;

		},
		
		plantillaOfertaHotelera: function() {
			var info = '';
			info += this.cuenta + '// Folio TFE o paquetizada // Sucursal // Segmento ' + this.segmento +'// Razon Social // IPTV // Falla de TV reportada' + '\n';
			info += '\n';
			info += 'Cuenta: ' + this.cuenta + '\n';
			info += 'Folio TFE: ' + '\n';
			info += 'Razon social/Titular: ' + '\n';
			info += 'Segmento: ' + this.segmento + '\n';
			info += 'Sucursal: ' + '\n';
			info += 'GPV: ' + '\n';
			info += 'Domicilio de instalacion: ' + '\n';
			info += 'Revision de los folios reincidentes: ' + '\n';
			info += 'Falla/Solicitud: ' + '\n';
			info += 'Descripcion: ' + '\n';
			info += 'Persona que reporta: ' + this.seComunica + '\n';
			info += 'Contacto en sitio: ' + '\n';
			info += 'Cel.   Tel.   Ext. ' + '\n';
			info += 'Horario: ' + '\n';
			info += 'Correo electronico: ' + '\n';
			info += '\n';
			info += '\n';
			info += '**Datos técnicos**' + '\n';
			info += 'OLT: ' + '\n';
			info += 'F/S/P/ONTID: ' + '\n';
			info += 'NS: ' + '\n';
			info += 'VLAN TV: ' + '\n';
			info += 'Bandwidth: Mbps' + '\n';
			info += 'Tecnologia: FO' + '\n';
			info += 'Servicio Contratado: ' + '\n';
			info += 'Modelo de ONT y CPE: ' + '\n';
			info += 'NS Chasis: ' + '\n';
			info += 'Parametros de IP Fija: ' + '\n';
			info += 'IP de Gestion: ' + '\n';  

			this.descripcion += '\n' + info;
		},
		
		plantillaDatosMWSM: function() {
			var info = '';
			
			info += this.cuenta +'/Folio ID o paquetizada/ Top o no Top 5k/ Sucursal/Segmento ' + this.segmento + '/ RS/Falla MW' + '\n';
			info += '\n';
			info += 'DATOS DE LA CUENTA' + '\n';
			info += 'Cuenta: ' + this.cuenta + '\n';
			info += 'Folio TFE: ' + '\n';
			info += 'Razon social/Titular: ' + '\n';
			info += 'Segmento: ' + this.segmento + '\n';
			info += 'Plan contratado: ' + '\n';
			info += 'Sucursal: ' + '\n';
			info += 'Direccion de instalacion: ' + '\n';
			info += '\n';
			info += 'DATOS DEL REQUERIMIENTO' + '\n';
			info += 'Falla / Solicitud: ' + '\n';
			info += 'Descripcion detallada: ' + '\n';
			info += 'Observaciones: '+ '\n';
			info += '\n';
			info += 'DATOS DE CONTACTO' + '\n';
			info += 'Nombre de quien se comunica: ' + this.seComunica + '\n'; 
			info += 'Contacto para seguimiento: ' + '\n';
			info += 'Telefono celular: ' + '\n';
			info += 'Telefono fijo: ' + '\n';
			info += 'Correo electronico: ' + '\n';
			info += 'Horario de atencion via telefonica: ' + '\n';
			info += 'Horario de atencion en sitio: ' + '\n';
			info += '\n';
			info += 'DATOS TECNICOS' + '\n';
			info += 'OLT: --' + '\n';
			info += 'Posicion (F/S/P/ONT ID): --' + '\n';
			info += 'Valores de potencia en FO: --' + '\n'; 
			info += 'Modelo de ONT/CPE: ' + '\n';
			info += 'S/N: ' + '\n';
			info += 'Tecnologia: MW' + '\n';
			info += 'IP HSU: ' + '\n';
			info += 'IP HBS: ' + '\n';
			info += 'CMS / Sector / RB: ' + '\n';
			info += 'Topologia: CPE + LAN' + '\n';
			info += 'IP de gestion / Tenant: ' + '\n';
			info += 'IP de Interconexion: ' + '\n';
			
			this.descripcion += '\n' + info;

		},
		
		plantillaDatosMWSMSINNAV: function() {
			var info = '';
			
			info += this.cuenta +'/Folio ID o paquetizada/ Top o no Top 5k/ Sucursal/Segmento ' + this.segmento + '/ RS/Falla MW' + '\n';
			info += '\n';
			info += 'DATOS DE LA CUENTA' + '\n';
			info += 'Cuenta: ' + this.cuenta + '\n';
			info += 'Folio TFE: ' + '\n';
			info += 'Razon social/Titular: ' + '\n';
			info += 'Segmento: ' + this.segmento + '\n';
			info += 'Plan contratado: ' + '\n';
			info += 'Sucursal: ' + '\n';
			info += 'Direccion de instalacion: ' + '\n';
			info += '\n';
			info += 'DATOS DEL REQUERIMIENTO' + '\n';
			info += 'Falla / Solicitud: ' + '\n';
			info += 'Descripcion detallada: Cliente reporta no tener servicio, se monitorea <CPE/ONT> con parametros correctos, en iMaster se ve Online, se le solicita aislar la red, cliente lo hace , se realiza IPConfig y nos arroja los siguientes datos' + '\n';
			info += 'IP: ' + '\n';
			info += 'MSK: ' + '\n';
			info += 'GTW: ' + '\n';
			info += 'Se realiza ping a loopback y nos arroja <ENVIADOS> paquetes enviados, <RECIBIDOS> recibidos y <PERDIDOS> perdidos.' + '\n';
			info += 'Se realiza ping a cisco.com y nos indica que no encuentra el host, se adjunta evidencia' + '\n';
			info += 'Se genera folio en atencion a cliente' + '\n';
			info += 'Observaciones: '+ '\n';
			info += '\n';
			info += 'DATOS DE CONTACTO' + '\n';
			info += 'Nombre de quien se comunica: ' + this.seComunica + '\n'; 
			info += 'Contacto para seguimiento: ' + '\n';
			info += 'Telefono celular: ' + '\n';
			info += 'Telefono fijo: ' + '\n';
			info += 'Correo electronico: ' + '\n';
			info += 'Horario de atencion via telefonica: ' + '\n';
			info += 'Horario de atencion en sitio: ' + '\n';
			info += '\n';
			info += 'DATOS TECNICOS' + '\n';
			info += 'OLT: --' + '\n';
			info += 'Posicion (F/S/P/ONT ID): --' + '\n';
			info += 'Valores de potencia en FO: --' + '\n'; 
			info += 'Modelo de ONT/CPE: ' + '\n';
			info += 'S/N: ' + '\n';
			info += 'Tecnologia: MW' + '\n';
			info += 'IP HSU: ' + '\n';
			info += 'IP HBS: ' + '\n';
			info += 'CMS / Sector / RB: ' + '\n';
			info += 'Topologia: CPE + LAN' + '\n';
			info += 'IP de gestion / Tenant: ' + '\n';
			info += 'IP de Interconexion: ' + '\n';
			
			this.descripcion += '\n' + info;

		},
		
		plantillaDatosMWSMCPEOFFLINE: function() {
			var info = '';
			
			info += this.cuenta +'/Folio ID o paquetizada/ Top o no Top 5k/ Sucursal/Segmento ' + this.segmento + '/ RS/Falla MW' + '\n';
			info += '\n';
			info += 'DATOS DE LA CUENTA' + '\n';
			info += 'Cuenta: ' + this.cuenta + '\n';
			info += 'Folio TFE: ' + '\n';
			info += 'Razon social/Titular: ' + '\n';
			info += 'Segmento: ' + this.segmento + '\n';
			info += 'Plan contratado: ' + '\n';
			info += 'Sucursal: ' + '\n';
			info += 'Direccion de instalacion: ' + '\n';
			info += '\n';
			info += 'DATOS DEL REQUERIMIENTO' + '\n';
			info += 'Falla / Solicitud: ' + '\n';
			info += 'Descripcion detallada: Cliente reporta no tener servicio, se monitorea <CPE/ONT> con parametros correctos, en iMaster se ve Offline, se le solicita reiniciar PoE, cliente lo hace pero seguimos viendo CPE Offline' + '\n';
			info += 'Se genera folio en atencion a cliente' + '\n';
			info += 'Observaciones: '+ '\n';
			info += '\n';
			info += 'DATOS DE CONTACTO' + '\n';
			info += 'Nombre de quien se comunica: ' + this.seComunica + '\n'; 
			info += 'Contacto para seguimiento: ' + '\n';
			info += 'Telefono celular: ' + '\n';
			info += 'Telefono fijo: ' + '\n';
			info += 'Correo electronico: ' + '\n';
			info += 'Horario de atencion via telefonica: ' + '\n';
			info += 'Horario de atencion en sitio: ' + '\n';
			info += '\n';
			info += 'DATOS TECNICOS' + '\n';
			info += 'OLT: --' + '\n';
			info += 'Posicion (F/S/P/ONT ID): --' + '\n';
			info += 'Valores de potencia en FO: --' + '\n'; 
			info += 'Modelo de ONT/CPE: ' + '\n';
			info += 'S/N: ' + '\n';
			info += 'Tecnologia: MW' + '\n';
			info += 'IP HSU: ' + '\n';
			info += 'IP HBS: ' + '\n';
			info += 'CMS / Sector / RB: ' + '\n';
			info += 'Topologia: CPE + LAN' + '\n';
			info += 'IP de gestion / Tenant: ' + '\n';
			info += 'IP de Interconexion: ' + '\n';
			
			this.descripcion += '\n' + info;

		},
		
		plantillaDatosMWSMINTERM: function() {
			var info = '';
			
			info += this.cuenta +'/Folio ID o paquetizada/ Top o no Top 5k/ Sucursal/Segmento ' + this.segmento + '/ RS/Falla MW' + '\n';
			info += '\n';
			info += 'DATOS DE LA CUENTA' + '\n';
			info += 'Cuenta: ' + this.cuenta + '\n';
			info += 'Folio TFE: ' + '\n';
			info += 'Razon social/Titular: ' + '\n';
			info += 'Segmento: ' + this.segmento + '\n';
			info += 'Plan contratado: ' + '\n';
			info += 'Sucursal: ' + '\n';
			info += 'Direccion de instalacion: ' + '\n';
			info += '\n';
			info += 'DATOS DEL REQUERIMIENTO' + '\n';
			info += 'Falla / Solicitud: ' + '\n';
			info += 'Descripcion detallada: Cliente reporta <lentitud/intermitencia>, se monitorea <CPE/ONT> con parametros correctos, en iMaster se ve Online, se le solicita aislar la red, cliente lo hace , se realiza IPConfig y nos arroja los siguientes datos' + '\n';
			info += 'IP: ' + '\n';
			info += 'MSK: ' + '\n';
			info += 'GTW: ' + '\n';
			info += 'Se realiza prueba multiping y se detectan <ENVIADOS> paquetes enviados, <RECIBIDOS> recibidos y <PERDIDOS> perdidos. se detecta <INTERMITENCIA/LATENCIA>' + '\n';
			info += 'Se realiza traceroute a cisco.com se adjunta evidencia' + '\n';
			info += 'Se realiza test de velocidad y detectamos <VELOCIDAD DE BAJADA>' + '\n';
			info += 'Se genera folio en atencion a cliente' + '\n';
			info += 'Observaciones: '+ '\n';
			info += '\n';
			info += 'DATOS DE CONTACTO' + '\n';
			info += 'Nombre de quien se comunica: ' + this.seComunica + '\n'; 
			info += 'Contacto para seguimiento: ' + '\n';
			info += 'Telefono celular: ' + '\n';
			info += 'Telefono fijo: ' + '\n';
			info += 'Correo electronico: ' + '\n';
			info += 'Horario de atencion via telefonica: ' + '\n';
			info += 'Horario de atencion en sitio: ' + '\n';
			info += '\n';
			info += 'DATOS TECNICOS' + '\n';
			info += 'OLT: --' + '\n';
			info += 'Posicion (F/S/P/ONT ID): --' + '\n';
			info += 'Valores de potencia en FO: --' + '\n'; 
			info += 'Modelo de ONT/CPE: ' + '\n';
			info += 'S/N: ' + '\n';
			info += 'Tecnologia: MW' + '\n';
			info += 'IP HSU: ' + '\n';
			info += 'IP HBS: ' + '\n';
			info += 'CMS / Sector / RB: ' + '\n';
			info += 'Topologia: CPE + LAN' + '\n';
			info += 'IP de gestion / Tenant: ' + '\n';
			info += 'IP de Interconexion: ' + '\n';
			
			this.descripcion += '\n' + info;

		},
		
		plantillaFortinet: function() {
			var info = '';
			info += 'Numero de cuenta: ' + this.cuenta + '\n';
			info += 'Razon Social: ' + '\n';
			info += 'Segmento: ' + this.segmento + '\n';
			info += '\n';
			info += 'Si el cliente cuenta con mas de un equipo FW o TotalSec: ' + '\n';
			info += 'IP publica del equipo: ' + '\n';
			info += 'Tipo: problema /Bloqueo/ Configuracion' + '\n';
			info += 'Descripcion: ' + '\n';
			info += 'IP de origen: ' + '\n';
			info += 'IP de destino: ' + '\n';
			info += 'Servicio: (puerto y servicios)' + '\n';
			info += 'Aplicacion: (En caso de ser un aplicativo cual es)' + '\n';
			info +='url: (url del sitio web o dominio de ser el caso)' + '\n';
			info += 'Ruteo / Segmentos / VLAN: (gw de ruta, segmento de IP con mascara, ID de VLAN, datos relevantes a configurar)' + '\n';
			info += 'No. de serie de equipo FW: ' + '\n'; 
			info += '\n';
			info += 'Persona que reporto el servicio: ' + this.seComunica +'\n';
			info += 'Contacto para seguimiento: ' + '\n';
			info += 'Numeros de contacto: ' + '\n';
			info += 'Celular: ' + '\n';
			info += 'Fijo: ' + '\n';
			info += 'Correo electronico: ' + '\n';
			info += 'Horario de atencion para seguimiento via telefonica: ' + '\n';
			info += 'Horario de atencion para seguimiento en sitio: ' + '\n';
			
			this.descripcion += '\n' + info;
		},
		
		formatearTexto: function(cadena) {
			if(cadena.trim() == ''){
				Swal.fire('Texto vacio','Escribe la plantilla a formatear', 'warning');
			}
			else {
				
				cadena = cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
				return cadena;
			}
		},
		
		plantillaPiloto2: function() {
			var info = '';
			if(this.folio.trim() == ''){
				Swal.fire('Sin folio','No se ha ingresado folio', 'warning');
			}
			else {
				var cadena = this.descripcion;
				cadena = this.formatearTexto(cadena);
				var arr1 = cadena.split('\n');
				//console.log(arr1);
				
				arrRazonSoc = arr1.filter(each => each.includes('Razon social/Titular :'));
				arrFalla = arr1.filter(each => each.includes('Falla / Solicitud  :'));
				//console.log(arrRazonSoc);
				
				var razonSocial = arrRazonSoc[0].substring(22);
				//console.log(razonSocial);
				
				var falla = arrFalla[0].substring(20);
				//console.log(falla);
				var scriptPiloto = '<h3>Sr(a). ' + this.seComunica + ', le comento que escalaré su caso al área de Soporte Avanzado para la revisión de su servicio, en caso de que sea necesario realizar pruebas en línea se estarán comunicando con usted.</h3>';
				//info += 'CUENTA: ' + this.cuenta + '\n';
				//info += 'RS: ' + razonSocial + '\n';
				info += 'FOLIO: ' + this.folio + '\n';
				info += 'FALLA: ' + falla + '\n';	
				
				Swal.fire({
					html: scriptPiloto,
					confirmButtonText: 'Aceptar'
				}).then((result) => {
							
					navigator.clipboard.writeText(info)
					.then(() => {
							Swal.fire(info.trim());
						});
					})
			}
		},
		
		plantillaPiloto: function() {
			var info = '';
			if(this.folio.trim() == ''){
				Swal.fire('Sin folio','No se ha ingresado folio', 'warning');
			}
			else {
							
				Swal.fire({
				  title: 'Datos adicionales',
				  html: `<input type="text" id="rs" class="swal2-input" placeholder="Razon social">
				  <input type="text" id="falla" class="swal2-input" placeholder="Falla">`,
				  confirmButtonText: 'Crear Plantilla',
				  focusConfirm: false,
				  preConfirm: () => {
					const rasoc = Swal.getPopup().querySelector('#rs').value
					const falla = Swal.getPopup().querySelector('#falla').value
					if (!rasoc || !falla) {
					  Swal.showValidationMessage('Llena los datos solicitados')
					}
					return { rasoc: rasoc, falla: falla }
				  }
				}).then((result) => {
					info += 'CUENTA: ' + this.cuenta + '\n';
					info += 'RS: ' + result.value.rasoc + '\n';
					info += 'FOLIO: ' + this.folio + '\n';
					info += 'FALLA: ' + result.value.falla + '\n';
					
					navigator.clipboard.writeText(info)
					.then(() => {
						Swal.fire(info.trim())
					});
					
					this.notas += '\n' + 'Sr(a). ' + this.seComunica + ', le comento que escalaré su caso al área de Soporte Avanzado para la revisión de su servicio, en caso de que sea necesario realizar pruebas en línea se estarán comunicando con usted.';
					
					
				})
			}
			
		},
		
		plantillaLOS: function() {
			var info = 'Cliente reporta no tener servicio, confirma led LOS en rojo, cableado en buen estado, posible corte de fibra optica';
			
			Swal.fire({
				title: 'Plantilla LOS',
				html: info
			});
			
			navigator.clipboard.writeText(info)
			.then(() => {
			console.log("Texto copiado a portapapeles...")
			});
		},
		
		scriptDeCalidad: function(){
			var info = '<h3>Por motivos de calidad, esta llamada no puede continuar en línea, por lo que será transferida a extensión de supervisor para ser finalizada. Gracias por haberse comunicado a Totalplay Empresarial, le atendió Alberto Cahuiche, que tenga un excelente día</h3>';
			
			Swal.fire({
				title: 'Script de Calidad',
				icon: 'success',
				html: info
			});
		},
		
		scriptDeMasiva: function(){
			var info = '<h3>Le informo que tenemos una afectacion en su zona y esta siendo atendido por nuestras areas de ingenieria quienes estaran implementando acciones correctivas en el transcurso del día, le brindo el folio xxxxxx para su seguimiento. Totalplay Empresarial le ofrece una disculpa</h3>';
			
			Swal.fire({
				title: 'Script de Masiva',
				icon: 'success',
				html: info
			});
		},
		
		plantillaU2000: function() {
			var info = 'Cliente reporta no tener servicio, se monitorea equipo en U2000 y se detecta alarma de posible corte de fibra optica';
			
			Swal.fire({
				title: 'Plantilla U2000',
				html: info
			});
			
			navigator.clipboard.writeText(info)
			.then(() => {
			console.log("Texto copiado a portapapeles...")
			});
		},
		
		plantillaMasivaSM: async function() {
			const { value: text } = await Swal.fire({
			  input: 'textarea',
			  inputLabel: 'Masiva',
			  inputPlaceholder: 'Introduce el folio de la masiva',
			  showCancelButton: true
		  });

			if (text) {
				var info = '';
				info += this.cuenta + '/Top o no Top 5k /Folio ID o paquetizada/ Sucursal/Segmento ' +  this.segmento + '/ RS/Falla Masiva' + '\n\n';
				info += 'Folio Falla Masiva: '+ text +'\n';
				info += 'Sr. ' + this.seComunica + '\n';
				info +=  'Descripcion: Cliente reporta no tener servicio, se detecta afectacion en la zona\n';
				info += 'Persona que se comunica: ' + this.seComunica + '\n';
				info += 'Contacto en sitio: \n';
				info += 'Cel: \n';
				info += 'Tel. ext: \n';
				info += 'Horario: \n';
				info += 'Correo electronico: \n';
				
				this.descripcion += '\n' + info;
			}			
		},
		
		plantillaMasiva: async function() {
			const { value: text } = await Swal.fire({
			  input: 'textarea',
			  inputLabel: 'Masiva',
			  inputPlaceholder: 'Introduce el folio de la masiva',
			  showCancelButton: true
		  });

			if (text) {
				var info = '';

				info += 'Folio padre: '+ text +'\n';
				info += 'Titulo de problematica: Masiva\n';
				info += 'Cuenta: ' + this.cuenta + '\n';
				info += 'Razon Social: \n';
				info += 'Segmento: ' + this.segmento + '\n';
				info += 'Nombre de la persona que reporta: ' + this.seComunica + '\n';
				info += 'Descripcion: Cliente reporta no tener servicio, se detecta afectacion en la zona. \n';
				info += 'Persona para contacto: \n';
				info += 'Tel: \n';
				info += 'Horario de atencion: \n';
				info += 'Dias de atencion: \n';
				
				this.descripcion += '\n' + info;
			}	
			
		},
		
		plantillaMasivaV2: async function() {
			Swal.fire({
				title: 'Seleccione la opcion que requiera',
				showDenyButton: true,
				showCancelButton: true,
				showConfirmButton: true,
				confirmButtonText: 'Introducir masiva manualmente',
				denyButtonText: 'Seleccionar masiva de la lista'
			}).then((result) => {
				if(result.isConfirmed){
					this.agregarMasivaManual();
				}
				
				if(result.isDenied){
					Swal.fire('En desarrollo','masiva de la lista','info');
				}
				
			})	
			
		},
		
		plantillaTransferencia: function() {
			var info = 'Cliente reporta <REPORTE>, se transfiere a area correcta por segmento con <EJECUTIVO>, cliente confirma numero de contacto <NUMERO>';
			
			this.descripcion += '\n' + info;
			
		},
		
		plantillaIncidenciaNoEscalada: function() {
			var info = '';
			
			info += 'Folio: '+this.folio+'\n';
			info += 'Estatus: \n';
			info += 'Cuenta: '+ this.cuenta + '\n';
			info += 'Razón Social: \n';
			info += 'Segmento: ' + this.segmento + '\n';
			info += 'Paquete o TFE: \n';
			info += 'Top 5k Si/No: \n';
			info += 'Descripción de la incidencia: \n';
			info +=  '\n';
			info += 'Tipificación: FALLA / ATENCIÓN Care Empresarial / DATOS \n';
			info += 'Diagnostico : Se realiza llamada con Sr./Srita. '+this.seComunica+' solicitando realizar pruebas con red aislada y ';
			
			this.descripcion += '\n' + info;
			
		},
		
		plantillaIncidenciaEscalada: function() {
			var info = '';
			
			info += 'Folio: '+this.folio+'\n';
			info +=  '\n';
			info += 'Estatus: \n';
			info += 'Cuenta: '+ this.cuenta + '\n';
			info += 'Razón Social: \n';
			info += 'Segmento: ' + this.segmento + '\n';
			info += 'Paquete o TFE: \n';
			info += 'Top 5k Si/No: \n';
			info += 'Descripción de la incidencia: \n';
			info +=  '\n';
			info += 'Se escala a: \n';
			info +=  '\n';
			info += 'Tipificación: FALLA / ATENCIÓN Care Empresarial / DATOS \n';
			info += 'Diagnostico : Se realiza llamada con Sr./Srita. '+this.seComunica+' solicitando realizar pruebas con red aislada y ';
			
			this.descripcion += '\n' + info;
			
		},
		
		plantillaLlenadoPiloto: function() {
			var info = 'Cliente reporta <REPORTE>, se monitorea la ONT, se ve activa, con parámetros correctos, potencia en rango<POTENCIA>, sin VLAN de morosidad<VLANs>, se genera folio en atención a cliente';
			
			this.descripcion += '\n' + info;
			
		},
		
		guardarLlamada: function() {
			if(this.folio.trim() == '') {
				Swal.fire('Falta informacion','Captura el folio generado', 'warning');
			}
			else {
				var hoy = new Date();
				var hora, minuto, segundo;
				if(hoy.getHours() < 10) {
					hora = '0'+ hoy.getHours();
				}
				else {
					hora = hoy.getHours();
				}
				if(hoy.getMinutes() < 10) {
					minuto = '0'+ hoy.getMinutes();
				}
				else {
					minuto = hoy.getMinutes();
				}
				if(hoy.getSeconds() < 10) {
					segundo = '0'+ hoy.getSeconds();
				}
				else {
					segundo = hoy.getSeconds();
				}
				var horaCompleta = hora + ':' + minuto + ':' + segundo;
				var llamada = {};
				llamada.separador = "==========================================="
				llamada.segmento = this.segmento.trim();
				llamada.seComunica = this.seComunica.trim();
				llamada.cuenta = this.cuenta.trim();
				llamada.descripcion = this.descripcion.trim();
				llamada.folio = this.folio.trim();
				llamada.hora = horaCompleta;
				
				this.listaDeLlamadas.push(llamada);
				
				this.actualizarLocalStorage(this.listaDeLlamadas);
				
				this.segmento = '';
				this.seComunica = '';
				this.cuenta = '';
				this.descripcion = '';
				this.folio = '';
				
				Swal.fire('Llamada guardada','','success');
			}
		},
		
		correosSolicitud: function(areaT) {
			var info = '';
			info += 'jillescas@tkmcsc.com; kpreciat@tkmcsc.com; ftequipanecatl@tkmcsc.com; carlos.rueda@nachnac.com; jarteagaa@nachnac.com; angel.moraleslop@tkmcsc.com; rene.cedillo@tkmcsc.com; cesar.rosales@totalplay.com.mx; julian.hernandez@totalplay.com.mx;khernandezm@totalplay.com.mx; dperezy@totalplay.com.mx; sandra.martinezm@totalplay.com.mx; ichavez@totalplay.com.mx; rarias@totalplay.com.mx';
			
			if(areaT == 1){
				info += '; soc@totalsec.com.mx'
			}
			
			if(areaT == 2){
				info += '; soporte-voip@onuriscp.com'
			}
			
			if(areaT == 3){
				info += '; Optimizacion_Soporte_RC@onuriscp.com'
			}
			
			if(areaT == 4){
				info += '; soportegpon@onuriscp.com'
			}
			
			if(areaT == 5){
				info += '; soportednsfw@totalplay.com.mx'
			}
			
			navigator.clipboard.writeText(info)
			.then(() => {
				Swal.fire('Copiado a portapapeles', info, 'success');
			});
			
			
		},
		
		recupUltimaInterac: function() {
			var ultimaLlamada = this.listaDeLlamadas[this.listaDeLlamadas.length - 1];
			this.seComunica = ultimaLlamada.seComunica;
			this.cuenta = ultimaLlamada.cuenta;
			this.segmento = ultimaLlamada.segmento;
			this.descripcion = ultimaLlamada.descripcion;
		},
		
		agregarMasiva: async function() {
			
			const { value: datosMasiva } = await Swal.fire({
				  input: 'textarea',
				  inputLabel: 'Datos de la masiva',
				  inputPlaceholder: 'Informacion sobre la falla masiva proporcionada por supervision',
				  showCancelButton: true
			});
			
			if (datosMasiva) {
				var masiva = {};
				masiva.datos = datosMasiva;
				
				this.listaMasivas.push(masiva);
				this.actualizarLocalStorage(this.listaDeLlamadas,this.listaMasivas);
				Swal.fire('Guardado','Informacion de Masiva guardada con exito', 'success');
			}
			
			
		},
		
		agregarMasiva2: async function() {
			
			Swal.fire({
				  title: 'Agregar Falla masiva',
				  html: `<input type="text" id="fsd" class="swal2-input" placeholder="Folio SD">
				  <input type="text" id="fsf" class="swal2-input" placeholder="Folio SF">
				  <input type="text" id="ciudad" class="swal2-input" placeholder="Ciudad o Estado de la Masiva">
				  <select name="tipoMasiva" id="tipoMasiva" class="swal2-input">
					  <option value="Corte de Fibra">Corte de Fibra</option>
					  <option value="Intermitencia">Intermitencia</option>
					  <option value="IPTV">IPTV</option>
					  <option value="Navegacion Lenta">Navegacion Lenta</option>
					  <option value="Perdida de Gestion">Perdida de Gestion</option>
					  <option value="Sin navegacion">Sin navegacion</option>
					  <option value="Sin servicio de voz">Sin servicio de voz</option>
				  </select>`,
				  confirmButtonText: 'Agregar',
				  focusConfirm: false,
				  preConfirm: () => {
					var fsd = Swal.getPopup().querySelector('#fsd').value
					var fsf = Swal.getPopup().querySelector('#fsf').value
					const tipo = Swal.getPopup().querySelector('#tipoMasiva').value
					const ciudad = Swal.getPopup().querySelector('#ciudad').value
					if (!fsd && !fsf) {
					  Swal.showValidationMessage('Debes introducir al menos un folio')
					}
					
					if (!fsd) {
					  fsd = 'N/A';
					}
					
					if (!fsf) {
					  fsf = 'N/A';
					}
					
					if(!tipo) {
						Swal.showValidationMessage('Agrega que tipo de masiva es');
					}
					
					if(!ciudad) {
						Swal.showValidationMessage('Agrega a que estado o ciudad pertenece la masiva');
					}
					
					return { fsd: fsd, fsf: fsf, tipo: tipo, ciudad: ciudad }
				  }
				}).then((result) => {
					var masiva = {};
					masiva.folioSd = result.value.fsd;
					masiva.folioSf = result.value.fsf;
					masiva.tipo = result.value.tipo;
					masiva.ciudad = result.value.ciudad;
					
					this.listaMasivas.push(masiva);
					
					this.actualizarLocalStorage(this.listaDeLlamadas,this.listaMasivas);
					Swal.fire('Guardado','Informacion de Masiva guardada con exito', 'success');
				})
			
			
		},
		
		agregarMasivaManual: async function() {
			
			Swal.fire({
				  title: 'Agregar Falla masiva',
				  html: `<input type="text" id="fsd" class="swal2-input" placeholder="Salesforce = XXXX Service Desk: xxxx">
				  
				  `,
				  confirmButtonText: 'Agregar',
				  focusConfirm: false,
				  preConfirm: () => {
					const fsd = Swal.getPopup().querySelector('#fsd').value
					
					
					if (!fsd) {
					  Swal.showValidationMessage('Introduce la masiva obtenida UXNOC')
					}
				
					
					return { fsd: fsd,}
				  }
				}).then((result) => {
					var info = '';

					info += 'Folio padre: '+ result.value.fsd +'\n';
					info += 'Titulo de problematica: Masiva\n';
					info += 'Cuenta: ' + this.cuenta + '\n';
					info += 'Razon Social: \n';
					info += 'Segmento: ' + this.segmento + '\n';
					info += 'Nombre de la persona que reporta: ' + this.seComunica + '\n';
					info += 'Descripcion: Cliente reporta no tener servicio, se detecta afectacion en la zona. \n';
					info += 'Persona para contacto: \n';
					info += 'Tel: \n';
					info += 'Horario de atencion: \n';
					info += 'Dias de atencion: \n';
					
					this.descripcion += '\n' + info;
					
				})
			
			
		},
		
		verMasivas: function() {
			if(this.listaMasivas.length < 1){
				Swal.fire('Sin informacion','No hay masivas registradas','error');
			}
			else {
				info = '';
				for(masiva of this.listaMasivas){
					info += 'Folio SF: ' + masiva.folioSf + ' FolioSD: '+ masiva.folioSd + ' - ' + masiva.ciudad +'('+masiva.tipo+')' +'<br><hr>';
				}
				
				Swal.fire({
					title: 'Masivas activas',
					width: '80%',
					html: info,
				});
			}
			
			
		},
		
		borrarMasivas: function() {
			Swal.fire({
				title: 'Deseas eliminar la informacion de las fallas masivas registradas?',
				icon: 'info',
				showDenyButton: false,
				showCancelButton: true,
				showConfirmButton: true,
				confirmButtonText: `Aceptar`,
			}).then((result) => {
				if(result.isConfirmed){
					
					if(this.dev){
						this.listaMasivas = [];
						localStorage.removeItem('listaMasivasDEV');
					}
					else {
						this.listaMasivas = [];
						localStorage.removeItem('listaMasivas');
					}
					
					Swal.fire('Borradas','Informacion de masivas eliminada','success');
				}
				
			});
		},
		
		
		cerrarDia: function() {
			Swal.fire({
				title: 'Deseas cerrar el dia? Se va a borrar la lista de llamadas de hoy',
				icon: 'question',
				showDenyButton: false,
				showCancelButton: true,
				showConfirmButton: true,
				confirmButtonText: `Aceptar`,
			}).then((result) => {
				if (result.isConfirmed) {
					  
					if(this.dev){
						localStorage.removeItem("listaLlamadasDEV");
					}
					else {
						localStorage.removeItem("listaLlamadas");
					}
					
					location.reload();
				} 
			});
		},
		
		actualizarLocalStorage: function(listaLlamadas,listaMasivas) {
			if(this.dev) {
				localStorage.setItem("listaLlamadasDEV", JSON.stringify(listaLlamadas));
				localStorage.setItem("listaMasivasDEV", JSON.stringify(listaMasivas));
			}
			else {
				localStorage.setItem("listaLlamadas", JSON.stringify(listaLlamadas));
				localStorage.setItem("listaMasivas", JSON.stringify(listaMasivas));
			}
			
		}
		
	}
});