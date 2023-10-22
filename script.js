const emojis = ['😄', '😃', '😁', '😆', '😅'];
        const voteCounts = Array(emojis.length).fill(0);

        const votingResultsDiv = document.getElementById('votingResults');

        function displayResults() {
            votingResultsDiv.innerHTML = '';
            emojis.forEach((emoji, index) => {
                const emojiDiv = document.createElement('div');
                emojiDiv.classList.add('emoji');
                emojiDiv.textContent = emoji;
                emojiDiv.addEventListener('click', () => {
                    voteCounts[index]++;
                    displayResults();
                });
                votingResultsDiv.appendChild(emojiDiv);
                votingResultsDiv.insertAdjacentHTML('beforeend', `${voteCounts[index]}`);
            });
        }

        displayResults();