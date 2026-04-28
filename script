// ── Array with initial students ──
let stagiaires = [
  { code: 2, nom: "Mohimi",  note: 8,  filiere: "tdm", groupe: "DD105", matiere: ["POO"] },
  { code: 3, nom: "Mohimi2", note: 17, filiere: "tdm", groupe: "DD104", matiere: ["JAVASCRIPT","POO"] },
  { code: 4, nom: "Mohimi3", note: 6,  filiere: "tdi", groupe: "DD105", matiere: ["PHP","POO","JAVASCRIPT"] },
  { code: 5, nom: "Mohimi4", note: 18, filiere: "tri", groupe: "DD106", matiere: ["POO"] }
]

// ── DOM References ──
const code   = document.getElementById("id")
const nom    = document.getElementById("nom")
const note   = document.getElementById("note")
const groupe = document.getElementById("groupe")

let indice_stagiaire_selectionner

// ── Events ──
document.getElementById("ajouter").addEventListener("click", ajouter)
document.getElementById("save").addEventListener("click", enregistrer)

// ════════════════════════════════
// AJOUTER
// ════════════════════════════════
function ajouter(e) {
  e.preventDefault()

  if (!validation()) return

  let filiere = document.querySelector("input[name='filiere']:checked")

  let matieres = []
  let matiere = document.querySelectorAll("input[name='matiere']:checked")
  for (let i = 0; i < matiere.length; i++) {
    matieres.push(matiere[i].value)
  }

  // Plain object instead of new Stagiaire()
  let stagiaire = {
    code:    code.value,
    nom:     nom.value,
    note:    note.value,
    filiere: filiere.value,
    groupe:  groupe.value,
    matiere: matieres
  }

  stagiaires.push(stagiaire)
  afficher_data()
}

// ════════════════════════════════
// VALIDATION
// ════════════════════════════════
function validation() {
  let valid = true

  if (code.value.trim() === "") {
    document.getElementById("id-error").textContent = "Le champ ID est obligatoire !"
    valid = false
  } else {
    document.getElementById("id-error").textContent = ""
  }

  if (nom.value.trim() === "") {
    document.getElementById("nom-error").textContent = "Le champ NOM est obligatoire !"
    valid = false
  } else {
    document.getElementById("nom-error").textContent = ""
  }

  if (note.value.trim() === "") {
    document.getElementById("note-error").textContent = "Le champ NOTE est obligatoire !"
    valid = false
  } else {
    document.getElementById("note-error").textContent = ""
  }

  return valid
}

// ════════════════════════════════
// AFFICHER
// ════════════════════════════════
function afficher_data() {
  let content = ""

  for (let i = 0; i < stagiaires.length; i++) {
    let decision = ""
    let redoublant_class = ""

    if (stagiaires[i].note >= 14) {
      decision = "Admis (Bien)"
      redoublant_class = "admis-bien"
    } else if (stagiaires[i].note > 10 && stagiaires[i].note < 14) {
      decision = "Admis"
    } else if (stagiaires[i].note < 10) {
      decision = "Redoublant"
      redoublant_class = "redoublant"
    }

    content += `<tr>
      <td>${stagiaires[i].code}</td>
      <td class="${redoublant_class}">${stagiaires[i].nom}</td>
      <td>${stagiaires[i].note}</td>
      <td>${stagiaires[i].filiere}</td>
      <td>${stagiaires[i].groupe}</td>
      <td>${stagiaires[i].matiere.length} matières</td>
      <td>${decision}</td>
      <td>
        <button class="btn-supprimer" onclick="supprimer_stagiaire(event)" id="${i}">Supprimer</button>
        <button class="btn-modifier"  onclick="modifier_stagiaire(event)"  id="${i}">Modifier</button>
      </td>
    </tr>`
  }

  document.getElementById("tdata").innerHTML = content

  // Meilleure note
  let liste_note = []
  for (let i = 0; i < stagiaires.length; i++) {
    liste_note.push(stagiaires[i].note)
  }
  let best_note = Math.max(...liste_note)
  document.getElementById("best-note").textContent = best_note
}

// ════════════════════════════════
// SUPPRIMER
// ════════════════════════════════
function supprimer_stagiaire(event) {
  event.preventDefault()
  let codeSelectionner = stagiaires[event.currentTarget.id].code

  if (confirm("Voulez-vous vraiment supprimer ce stagiaire ?")) {
    let nouveau = []
    for (let i = 0; i < stagiaires.length; i++) {
      if (stagiaires[i].code !== codeSelectionner) {
        nouveau.push(stagiaires[i])
      }
    }
    stagiaires = nouveau
    afficher_data()
  } else {
    alert("Suppression annulée.")
  }
}

// ════════════════════════════════
// MODIFIER (remplir le formulaire)
// ════════════════════════════════
function modifier_stagiaire(event) {
  event.preventDefault()
  indice_stagiaire_selectionner = event.currentTarget.id

  let s = stagiaires[indice_stagiaire_selectionner]

  code.value   = s.code
  nom.value    = s.nom
  note.value   = s.note
  groupe.value = s.groupe

  // Radio filiere
  let rd_filiere = document.querySelectorAll("input[name='filiere']")
  for (let i = 0; i < rd_filiere.length; i++) {
    if (rd_filiere[i].value == s.filiere) {
      rd_filiere[i].checked = true
    }
  }

  // Checkboxes matieres
  let cb_matiere = document.querySelectorAll("input[name='matiere']")
  for (let i = 0; i < cb_matiere.length; i++) {
    cb_matiere[i].checked = false
    for (let j = 0; j < s.matiere.length; j++) {
      if (cb_matiere[i].value == s.matiere[j]) {
        cb_matiere[i].checked = true
      }
    }
  }
}

// ════════════════════════════════
// ENREGISTRER (after modifier)
// ════════════════════════════════
function enregistrer(event) {
  event.preventDefault()

  let filiere = document.querySelector("input[name='filiere']:checked")

  let matieres = []
  let matiere = document.querySelectorAll("input[name='matiere']:checked")
  for (let i = 0; i < matiere.length; i++) {
    matieres.push(matiere[i].value)
  }

  stagiaires[indice_stagiaire_selectionner].code    = code.value
  stagiaires[indice_stagiaire_selectionner].nom     = nom.value
  stagiaires[indice_stagiaire_selectionner].note    = note.value
  stagiaires[indice_stagiaire_selectionner].groupe  = groupe.value
  stagiaires[indice_stagiaire_selectionner].filiere = filiere.value
  stagiaires[indice_stagiaire_selectionner].matiere = matieres

  afficher_data()
}

// ── Display on page load ──
afficher_data()