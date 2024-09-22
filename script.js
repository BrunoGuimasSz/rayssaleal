function validar() {
    var nome = form1.nome.value;
    var email = form1.gmail.value;
    var nota = form1.nota.value;
    var data = form1.data.value;

    if (nome == "") {
            alert("Preencha com o seu nome");
            form1.nome.focus();
            return false;
    }

    if (email == "") {
            alert("Coloque o seu Email");
            form1.gmail.focus();
            return false;
    }

    if (form1.nota.value == "") {
            alert("Deixe sua nota");
            form1.nota.focus();
            return false;
    }

        if (data == "") {
            alert("Coloque a data");
            form1.data.focus();
            return false;
    }
}