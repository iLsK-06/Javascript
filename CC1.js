//Q1
function afficherClients() {
    for (let i = 0; i < clients.length; i++) {
        console.log(clients[i].nom, clients[i].prenom, clients[i].id);
    }
}
//Q2
function afficherCommandesClient(idClient) {
    for (let i = 0; i < clients.length; i++) {
        if (clients[i].id == idClient) {
            return clients[i].commandes;
        }
    }
}
//Q3
function afficherProduitsCommande(idCommande) {
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].commandes.length; j++) {
            if (clients[i].commandes[j].id == idCommande) {
                return clients[i].commandes[j].produits;
            }
        }
    }
}
//Q4
function afficherProduitsCommande(idCommande) {
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].commandes.length; j++) {
            if (clients[i].commandes[j].id == idCommande) {
                // return or console.log the products
            }
        }
    }
}
//Q5
let total = 0;

for (let k = 0; k < clients[i].commandes[j].produits.length; k++) {
    let vprix = clients[i].commandes[j].produits[k].prix;
    let vqte = clients[i].commandes[j].produits[k].quantite;
    total += vprix * vqte;
}

return total;
//Q6
function afficherCommandesNonPayees() {
    let vCmdNonP = [];

    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].commandes.length; j++) {
            if (clients[i].commandes[j].payee == false) {
                vCmdNonP.push(clients[i].commandes[j]);
            }
        }
    }
    return vCmdNonP;
}
//Q7
function ajouterCommande(idClient, nouvelleCommande) {
    for (let i = 0; i < clients.length; i++) {
        if (clients[i].id == idClient) {
            clients[i].commandes.push(nouvelleCommande);
        }
    }
}
//Q8
function modifierQuantite(idCommande, idProduit, nouvelleQuantite) {
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].commandes.length; j++) {
            if (clients[i].commandes[j].id == idCommande) {
                for (let k = 0; k < clients[i].commandes[j].produits.length; k++) {
                    if (clients[i].commandes[j].produits[k].id == idProduit) {
                        clients[i].commandes[j].produits[k].quantite = nouvelleQuantite;
                        return; // or break
                    }
                }
            }
        }
    }
}
//Q9
function supprimerCommande(idCommande) {
    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].commandes.length; j++) {
            if (clients[i].commandes[j].id == idCommande) {
                clients[i].commandes.splice(j, 1);
            }
        }
    }
}
//Q10
function clientPlusGrosMontant() {
    let MTNmax = 0;

    for (let i = 0; i < clients.length; i++) {
        for (let j = 0; j < clients[i].commandes.length; j++) {
            for (let k = 0; k < clients[i].commandes[j].produits.length; k++) {
                let vprix = clients[i].commandes[j].produits[k].prix;
                let vqte = clients[i].commandes[j].produits[k].quantite;
                let vMTN = vprix * vqte;

                if (vMTN > MTNmax) {
                    MTNmax = vMTN;
                }
            }
        }
    }
    
}
//Q11
function verifier(code) {
    let regex = /CMD_2026-\d{3}/;
    return regex.test(code);
}