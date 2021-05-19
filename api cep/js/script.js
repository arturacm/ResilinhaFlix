
$("#cep").focusout(function(){
			//Início do Comando AJAX
			$.ajax({
				//O campo URL diz o caminho de onde virá os dados
				//É importante concatenar o valor digitado no CEP
				url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/unicode/',
				
				dataType: 'json',
				
				success: function(resposta){
					$("#logradouro").val(resposta.logradouro);
					$("#complemento").val(resposta.complemento);
					$("#bairro").val(resposta.bairro);
					$("#cidade").val(resposta.localidade);
					$("#uf").val(resposta.uf);
					//melhorando a experiência do usuário
					$("#numero").focus();
				}
			});
            });

			
			function validarSenha() {
				var senha1 = document.getElementById("senha");
				var senha2 = document.getElementById("senhaTmp");
				var s1 = senha1.value;
				var s2 = senha2.value;
				if (s1 == s2) {
				  alert("Dados Cadastrados");
				  return true;
				} else {
				  alert("Senhas diferentes.");
				  return false;
				}
			  }
		  
			function insereTexto()
			{document.getElementById('divTeste').innerHTML = alert('Cadrastrado com Sucesso!!.');}
			
			