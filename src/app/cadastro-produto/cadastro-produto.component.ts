import { Component, untracked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Array } from '../array';


interface Alert {
	type: string;
	message: string;
}

const ALERTS: Alert[] = [
	{
		type: 'success',
		message: 'This is an success alert',
	},

	{
		type: 'danger',
		message: 'This is a danger alert',
	},

];





@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.css'
})
export class CadastroProdutoComponent {

  Forms : FormGroup; 
  Array: Array[] = []; 
  Array2:string[] = [];
  alerts: Alert[]; // como inicializar aqui 
  togglar = false

  /*

  Elemento:string[] = []
  ID: string = ''
  nome:string = ''
  descricao:string = '' 
  preco: string = ''  
  quantidade: string = ''


  
  */





  constructor(private formBuilder: FormBuilder){
    this.Forms  = formBuilder.group({
      ID:[],
      nome:[],
      descricao:[],
      preco:[], 
      quantidade:[]
    })
    let novoArray: any[] = []

    
    this.Forms.valueChanges.subscribe(() => {
      Object.values(this.Forms.value).forEach(item => {
        if(item !== null && item !== undefined && item !== '' ){
          // colocar mais condições aqui 
          novoArray.push(item)
        }
      })
      this.Array2 = novoArray.map(item => item.toString()) 
      novoArray = []
      
    })
    
    console.log(this.Array2)
    this.reset();


  }



  

  close(alert: Alert) {
		this.alerts.splice(this.alerts.indexOf(alert), 1); // esta dando erro qui 
	}

  reset() {
		this.alerts = Array.from(ALERTS);
	}





  botao(){
    /*
    this.Array.push(this.Forms.value)
    console.log(this.Array)
    */
  
    console.log(this.Array2)
    console.log(this.Array2.length)
    this.togglar = !this.togglar

    

  }

  fechar(){
    this.togglar = !this.togglar
  }


}
