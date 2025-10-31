let collaborators = [];
let userStories = [];
let boardStories = [];
let storyIdCounter = 1;

/**
 * Fonction pour ajouter un nouveau collaborateur à l'équipe
 * TODO:
 * - Récupérer la valeur du champ input avec l'id 'collaboratorName'
 * - Vérifier que le nom n'est pas vide et n'existe pas déjà dans le tableau 'collaborators'
 * - Ajouter le collaborateur au tableau 'collaborators'
 * - Vider le champ input
 * - Appeler updateCollaboratorsList() pour afficher la liste
 * - Appeler updateAssigneeSelect() pour mettre à jour le select d'assignation
 */
function addCollaborator() {
  const valeurInput = document.getElementById("collaboratorName");

  if (valeurInput.value === "" || collaborators.includes(valeurInput.value))
    return;

  collaborators.push(valeurInput.value);
  valeurInput.value = "";

  updateCollaboratorsList();
  updateAssigneeSelect();
}

/**
 * Fonction pour afficher la liste des collaborateurs dans l'interface
 * TODO:
 * - Récupérer l'élément DOM avec l'id 'collaboratorsList'
 * - Générer du HTML pour chaque collaborateur (badges avec leur nom)
 * - Utiliser un style inline: background #667eea, color white, padding 8px 15px, border-radius 20px
 * - Injecter le HTML dans l'élément avec innerHTML
 */
function updateCollaboratorsList() {
  const collaboratorsList = document.getElementById("collaboratorsList");

  const span = document.createElement("span");
  collaborators.forEach((value) => {
    collaboratorsList.appendChild(span);
    collaboratorsList.style = `display:flex; flex-wrap:wrap; gap:0.2rem;`;
    span.style = `background: #667eea; color: white; padding: 8px 15px; border-radius: 20px;`;
    span.innerHTML = value;
  });
}

/**
 * Fonction pour mettre à jour la liste déroulante des assignés
 * TODO:
 * - Récupérer l'élément select avec l'id 'storyAssignee'
 * - Générer les options: une option "Non assigné" + une option par collaborateur
 * - Mettre à jour le select avec innerHTML
 */
function updateAssigneeSelect() {
  const assigne = document.getElementById("storyAssignee");
  const optionn = document.createElement("option");
  collaborators.forEach((element) => {
    assigne.appendChild(optionn);
    optionn.innerHTML = element;
  });
}

/**
 * Fonction pour créer une nouvelle User Storyg
 * TODO:
 * - Récupérer les valeurs des champs: storyTitle, storyDescription, storySprint, storyAssignee
 * - Vérifier que le titre et la description ne sont pas vides
 * - Créer un objet story avec: id (utiliser storyIdCounter++), title, description, sprint (parseInt), assignee, status: 'backlog'
 * - Ajouter la story au tableau 'userStories' * TODO: 

 * - Vider les champs titre et description
 * - Appeler renderSprintBacklog() pour actualiser l'affichage
 */
function addUserStory() {
  const storyTitle = document.getElementById("storyTitle");
  const storyDescription = document.getElementById("storyDescription");

  if (storyTitle.value === "" || userStories.includes(storyTitle.value)) return;

  let stories = {
    title: storyTitle.value,
    descreption: storyDescription.value,
  };

  userStories.push(stories);
  console.log(userStories);
}

/**
 * Fonction pour afficher le Sprint Backlog avec toutes les stories par sprint
 * TODO:
 * - Récupérer le conteneur avec l'id 'sprintBacklog'
 * - Pour chaque sprint (1, 2, 3):
 *   - Filtrer les stories du sprint avec status 'backlog'
 *   - Générer le HTML: conteneur sprint avec header (titre + bouton Start)
 *   - Pour chaque story: afficher titre, description, assigné
 *   - Si aucune story: afficher "Aucune story dans ce sprint"
 * - Injecter tout le HTML généré dans le conteneur
 */
function renderSprintBacklog() {
  // À IMPLÉMENTER
}

/**
 * Fonction appelée lors du clic sur "Démarrer Sprint"
 * TODO:
 * - Filtrer toutes les stories du sprint demandé avec status 'backlog'
 * - Pour chaque story trouvée:
 *   - Changer son status à 'todo'
 *   - Ajouter la story au tableau 'boardStories'
 * - Retirer ces stories du tableau 'userStories'
 * - Appeler renderSprintBacklog() et renderBoard() pour mettre à jour l'affichage
 */
function startSprint(sprintNum) {
  // À IMPLÉMENTER
}

/**
 * Fonction pour afficher toutes les cartes sur le SCRUM Board
 * TODO:
 * - Pour chaque colonne ('todo', 'in-progress', 'testing', 'done'):
 *   - Récupérer le conteneur de la colonne
 *   - Filtrer les stories avec le status correspondant depuis 'boardStories'
 *   - Si aucune story: afficher "Aucune carte"
 *   - Sinon générer une carte pour chaque story avec:
 *     - Titre, description, badge assigné
 *     - Boutons "Suivant" (sauf pour done), "Précédent" (sauf pour todo), "Supprimer"
 *   - Injecter le HTML dans le conteneur
 */
function renderBoard() {
  // À IMPLÉMENTER
}

/**
 * Fonction utilitaire pour obtenir le status suivant dans le workflow
 * TODO:
 * - Créer un objet avec les transitions: todo→in-progress, in-progress→testing, testing→done
 * - Retourner le status suivant selon le status actuel
 */
function getNextStatus(current) {
  // À IMPLÉMENTER
}

/**
 * Fonction utilitaire pour obtenir le status précédent dans le workflow
 * TODO:
 * - Créer un objet avec les transitions: in-progress→todo, testing→in-progress, done→testing
 * - Retourner le status précédent selon le status actuel
 */
function getPrevStatus(current) {
  // À IMPLÉMENTER
}

/**
 * Fonction pour déplacer une carte d'une colonne à une autre
 * TODO
 * - Trouver la story dans 'boardStories' avec l'id donné
 * - Modifier son status avec newStatus
 * - Appeler renderBoard() pour actualiser l'affichage
 */
function moveCard(id, newStatus) {
  // À IMPLÉMENTER
}

/**
 * Fonction pour supprimer une carte du board
 * TODO:
 * - Filtrer 'boardStories' pour retirer la story avec l'id donné
 * - Appeler renderBoard() pour actualiser l'affichage
 */
function deleteCard(id) {
  // À IMPLÉMENTER
}

// Initialisation
renderSprintBacklog();
renderBoard();
