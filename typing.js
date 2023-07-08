const mot = document.getElementById("mot");
      let index = 0;
      let textes = ["HTML", "CSS", "WEB"];
      
      setInterval(function() {
        let texte = textes[index];
        index++;
      
        if (index >= textes.length) {
          index = 0;
        }
      
        mot.classList.add("anim");
        ecrireLettreParLettre(texte);
      }, 3000);
      
      function ecrireLettreParLettre(texte) {
        mot.innerText = "";
      
        function ecrireLettre() {
          if (mot.innerText.length < texte.length) {
            mot.innerText += texte.charAt(mot.innerText.length);
            setTimeout(ecrireLettre, 100);
          } else {
            mot.classList.remove("anim");
          }
        }
      
        ecrireLettre();
      }