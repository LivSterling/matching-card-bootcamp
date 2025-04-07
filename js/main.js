// 1. Setup
// - Create an array of 5 card values duplicated once to make 10 total cards
const deck = ['🍓','🍓','🍋','🍋','🍉','🍉','🍇','🍇','🍍','🍍']
// - Shuffle the array to randomize card positions
cards 
// - Render 10 cards face down on the page (can use a "hidden" or "face-down" class)

// Example array: 

// 2. Game State
// - Track two selected cards (selectedCards array)
// - Track matched cards (matchedCards array or using a "matched" class on DOM)
// - Prevent clicking more than 2 cards at a time or clicking the same card twice
// - Optional: lock board during checking

// 3. User Interaction
// // On card click:
// - Check if the card is already matched or flipped (skip if yes)
// - Flip the card (change class to show front/value)
// - Add it to selectedCards

// - If selectedCards has two cards:
//     - Disable clicks briefly (lock board)
//     - Check if values match:
//         - If match:
//             - Leave them flipped and mark them as matched
//         - If not match:
//             - Wait a second or so, then flip both back (change class to hide again)
//     - Reset selectedCards to empty
//     - Unlock board

// 4. Win Condition
// - If matchedCards length === total number of cards (10):
// - Show a message like "You Win!" or restart option

// 5. Reset (Optional)
// - Button to restart game: reshuffle cards, reset state, re-render cards

































// the page will have 10 cards flipped over or "hidden"

// On page load cards will randomize in differenvt spots[array?]

//player will click on a card and that card will turn over (be unhidden)if it is "playable"(maybe like a class or a property?).

//player will then click on another card. If that card matches they will stay flipped over and become "unplayable"(prabably a forEach event listener or a e.currentTarget)

//If they dont match the will flip back over and remain "playable"

//when all cards match the game will be over and no cards will be "playable."




