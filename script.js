const container = document.querySelector('.container');
const hexagonPattern = [4, 3, 2, 1];




for (let i = 0; i < hexagonPattern.length; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
     for (let j = 0; j < hexagonPattern[i]; j++) {
          const hexagon = document.createElement('div');
          hexagon.classList.add('hexagon');
          row.appendChild(hexagon);
      }
      container.appendChild(row);
}