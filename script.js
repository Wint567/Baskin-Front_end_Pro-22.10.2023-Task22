const emojis = ['😄', '😃', '😁', '😆', '😅'];
const voteCounts = Array(emojis.length).fill(0);

const votingResultsDiv = document.getElementById('votingResults');

function displayResults() {
    votingResultsDiv.innerHTML = '';
    emojis.forEach((emoji, index) => {
        const emojiDiv = document.createElement('div');
        emojiDiv.classList.add('emoji');
        emojiDiv.textContent = emoji;
        votingResultsDiv.appendChild(emojiDiv);
        votingResultsDiv.insertAdjacentHTML('beforeend', `${voteCounts[index]}`);
    });
}

votingResultsDiv.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('emoji')) {
        const emojiIndex = emojis.indexOf(target.textContent);
        if (emojiIndex !== -1) {
            voteCounts[emojiIndex]++;
            displayResults();
        }
    }
});

displayResults();