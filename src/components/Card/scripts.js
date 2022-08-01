import $ from 'blingblingjs'                // es6 module

const card = {
  init: () => {
    const [card] = $(".card");
    console.log("card", card)
    let count = 1;
    let message = `clicked, ${count}`;

    card.on('click', (e)=> { count++; alert(`clicked, ${message}`)})
  }
}

export default card;