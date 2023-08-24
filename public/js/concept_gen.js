




window.addEventListener('load', function(event) {


var complexEmotions = ["onism", "Mal de Coucou", "Sonder", "Chrysalism", "Altschmerz", "Occhiolism", "Ambedo", "Nodus Tollens", "Liberosis", "Vemödalen", "Kairosclerosis", "Vellichor", "Rückkehrunruhe", "Nighthawk", "Dead Reckoning", "Pâro", "Midsummer", "Adronitis", "Rigor Samsa", "Silience",
"Fitzcarraldo", "Keyframe", "Gnossienne", "Anecdoche", "Catoptric Tristesse", "Anemoia", "Mimeomia", "Monachopsis", "Semaphorism", "Énouement", "Daguerreologue", "Fata Organa", "Avenoir", "Kenopsia", "The Tilt Shift", "Jouska", "Ecstatic Shock", "Heartworm", "Xeno"];

var philosophers = ["Immanuel Kant", "Plato", "Aristotle", "Friedrich Nietzsche", "Martin Heidegger", "Michel Foucault", "G. W. F. Hegel", "Karl Marx", "Ludwig Wittgenstein", "Edmund Husserl", "Thomas Aquinas","David Hume", "Gilles Deleuze", "Jacques Derrida", "Sigmund Freud", "Saint Augustine",
"Gottfried Leibniz", "Benedict Spinoza", "John Locke", "Jean-Paul Sartre", "Thomas Hobbes", "John Dewey", "Soren Kierkegaard", "Bertrand Russell", "Jean-Jacques Rousseau", "Maurice Merleau-Ponty", "Rene Descartes", "Emmanuel Levinas", "William James", "Hannah Arendt", "Jurgen Habermas",
"John Stuart Mill", "Jacques Lacan", "Walter Benjamin", "Charles Sanders Peirce", "Hans-Georg Gadamer", "John B. Rawls", "Gottlob Frege", "Henri Bergson", "Ralph Waldo Emerson", "Niccolo Machiavelli", "Arthur Schopenhauer"];

var scientificTheories = ["adaptation", "atoms", "bioaccumulation", "electromagnetic spectrum", "force and movement", "nambu mechanics", "conformal gravity", "migration", "nanoscience", "Newton's laws", "symbiosis", "relativistic chaos", "venom optimization hypothesis", "Elliott formula", "hexatic phase",
"actor–network theory", "frog pond effect", "dark matter", "Cage effect", "Darwinism", "string theory", "axial current", "theories of cloaking", "theory of relativity", "Lamarckism", "Holonomic brain theory", "Mafia hypothesis", "performativity", "linguistic intergroup bias",
"critical juncture theory", "double hermeneutic"];

var flipped = false;

function getChallengeCombo() {
    var randomEmotionIndex = Math.floor(Math.random() * complexEmotions.length);
    var emotion = complexEmotions[randomEmotionIndex];

    var philosophersIndex = Math.floor(Math.random() * philosophers.length);
    var philosopher = philosophers[philosophersIndex];

    var scientificTheoriesIndex = Math.floor(Math.random() * scientificTheories.length);
    var scientificTheory = scientificTheories[scientificTheoriesIndex];

    return `<div>emotion: ${emotion}</div>
    <div>philosopher: ${philosopher}</div>
    <div>scientific theory: ${scientificTheory}</div>`;
}

    const cardInner = document.getElementById('cardInner');

    document.getElementById('cardInner').addEventListener('click', () => {
        if (!flipped) {
            var newCombo = getChallengeCombo();
            var conceptElement = document.getElementById('concept');
            conceptElement.innerHTML = newCombo;
            cardInner.classList.remove('flipback');
            cardInner.classList.add('flip');

            flipped = true;
        } else {
            cardInner.classList.remove('flip');
            cardInner.classList.add('flipback');
            flipped = false;
        }

    });

    /* const rightPanel = document.getElementById('right-content');

    document.getElementById('right-content').addEventListener('click', () => {
        rightPanel.classList.add('selected');
    });


  // I'm using "click" but it works with any event
  document.addEventListener('click', event => {
    const isClickInsideLeft = leftPanel.contains(event.target)
  
    if (!isClickInsideLeft) {
        leftPanel.classList.remove('selected');
    }

    const isClickInsideRight = rightPanel.contains(event.target)
  
    if (!isClickInsideRight) {
        rightPanel.classList.remove('selected');
    }
  }) */
});




