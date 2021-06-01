$ (document).ready(function() {

	$( "#InputTASK" ).keypress(function(e){
		if((e.keyCode == 13) && ($("#InputTASK").val().trim() != '')){
			$('#TaskLIST').prepend('<li class="itemElement">'+
				'<i class="check fas fa-check-circle"></i>'+
				'<span class="listItems">'+$('#InputTASK').val()+'</span>'+
				'<i class="remove far fa-trash-alt"></i></li>');
			$("#InputTASK").val('');
			$('#Vacio').addClass('display-none');
		}
	});
	$('#TaskLIST').on('click','.remove', function(e){
		$(this).parent().remove();
		displaymessage();
	});

	$('#TaskLIST').on('click','.listItems', function(e){
		$(this).toggleClass('subrayado');
	});

	$('#TaskLIST').on('click','.check', function(e){
		$(this).toggleClass('verde');
	});

	$('#SelectAll').click(function(e){
		$('.check').addClass('verde');
	});

	$('#DeleteAll').click(function(e){
		$('.verde').parent().remove();
		displaymessage();
	});

	$('#unSelectAll').click(function(e){
		$('.check').removeClass('verde');
	});

	$('#noFilter').click(function(e){
		$('.listItems').parent().removeClass('display-none');
		displaymessage();
	});

	$('#selectedFilter').click(function(e){
		filterElement('.verde');
	});

	$('#doneFilter').click(function(e){
		filterElement('.subrayado');
	});

	$('#hideContainer').click(function(e){
		slideContent();
	})

	$('#showContainer').click(function(e){
		slideContent();
	})


	function slideContent(){
			$('.container').slideToggle();
			$('#hideContainer, #showContainer').toggleClass('display-none');
	}

	function displaymessage(){
		if ($('.itemElement').length == 0){
			$('#Vacio').removeClass('display-none');
		}else{
			$('#Vacio').addClass('display-none');
		}
	}

	function filterElement(className){
		let existenElementos = false;
		$('.itemElement').removeClass('display-none');
		$('#Vacio').addClass('display-none'); 
		$('.itemElement').each(function(elementIndex){ 
			if($(this).find(className).length == 0){ 
				$(this).addClass('display-none'); 
			}else{
				existenElementos =true;
			}
		})
		if (existenElementos === false){
			$('#Vacio').removeClass('display-none');
		}
	}


});