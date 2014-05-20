/*
Plugin PopBox
Data: 28/04/2013
Autor: Renalcio Carlos
Email: r.carlos@live.com
Versão: 1.0
Opções:
-- funcao:
Cria caixas de Popup, modal e dialogo

*/
(function($) {
    var metodos = {
        init : function(options) {
            var config = {
  			autoOpen: false,
  			xhtml: true,
  			movel: false, // Em caso de 'true' é obrigatório o uso do jquery UI
            fundo: true,
            fecharNoFundo:true,
            corFundo: null,
            botaoFechar: true
  		    };
            options = $.extend(config, options);
            //Define Pai
            var $this = $(this);
            
            //Abrir automaticamente
            if (options.autoOpen == true) {
  				$this.show();
  			}
            
            //Utilizar XHTML
            if (options.xhtml == true) {
  				var popboxDiv = "popbox";
  			} else {
 				$this.addClass("popbox");
  			}
            
            //FUNDO
            if(options.fundo==true){
                var janelaWidth = $(window).width();
                var janelaHeight = $(window).height();
                $("body .popboxFundo").remove();
                $("body").append("<div class='popboxFundo'></div>");
                $(".popboxFundo").css({
                    "min-height": janelaHeight+"px",
                    "min-width": janelaWidth+"px",
                });
                $this.addClass("popboxFundoOn");
            }else{
                options.fecharNoFundo=false;
            }
            
            //Fechar ao clicar no fundo
            if(options.fecharNoFundo==true){
                $(".popboxFundo").click(function(){
                    $this.hide();
                    $(this).hide();
                });
            }
            
            //Título
            if($this.attr("title")){
                var titulo = $this.attr("title");
                $this.prepend("<h1 class='titulo'>"+titulo+"</h1>");
            }
            
            if($this.attr("titulo")){
                var titulo = $this.attr("titulo");
                $this.prepend("<h1 class='titulo'>"+titulo+"</h1>");
            }
            
            
            //Móvel
            if(options.movel==true){
                if($this.attr("title") || $this.attr("titulo")){
                   $this.draggable({ handle: "h1" });
                   $("h1.titulo", this).addClass("movel");
                }else{
                    $this.draggable().addClass("movel");
                }
            }
            
            
            
            
            var width = $this.width();
            var height = $this.height();
            $this.css({
                "left": "50%",
                "top": "50%",
                "margin-left": "-"+(width/2)+"px",
                "margin-top": "-"+(height/2)+"px"
            });
        },
        Abrir : function() { 
            if($(this).hasClass("popboxFundoOn")){
                $(".popboxFundo").show();
                console.log("Fundo alterado");
            }
            $(this).show();
        },// IS
        Fechar : function() {
            if($(this).hasClass("popboxFundoOn")){
                $(".popboxFundo").hide();
                console.log("Fundo alterado");
            }
            $(this).hide();
            },
        Toggle : function() { 
            if($(this).hasClass("popboxFundoOn")){
                $(".popboxFundo").toggle();
                console.log("Fundo alterado");
            }
            $(this).toggle(); 
            }
    };
    $.fn.popbox = function( metodo ) {
    
    if ( metodos[metodo] ) {
      return metodos[metodo].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof metodo === 'object' || ! metodo ) {
      return metodos.init.apply( this, arguments );
    } else {
      $.error( 'Método ' +  metodo + 'não pertence ao jQuery.popbox' );
    }    
  
  };
  })(jQuery); 