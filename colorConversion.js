const toHexBtn = document.querySelector('#toHexBtn')
const inputRgb = document.querySelector('#inputRgb')
const hex = document.querySelector('#hex')
const resetToHex = document.querySelector('#resetToHex')


  toHexBtn.addEventListener('click', () => {
    toHexBtn.style.opacity = 0.5
      setTimeout(() => {toHexBtn.style.opacity = 1}, 50)

          if (convertRgbToHexa(inputRgb.value) === null) {
            hex.textContent = 'Invalid'
          }
          else {
            hex.textContent = convertRgbToHexa(inputRgb.value)
          }
    })

  resetToHex.addEventListener('click', () => {
    inputRgb.value = ''
    hex.textContent = 'H E X'
  })

      function convertRgbToHexa(rgb) {
        rgb = rgb.split(',');
        let r = rgb[0];
          r = computation(r);
        let g = rgb[1];
          g = computation(g);
        let b = rgb[2];
          b = computation(b);

          if (r === 'NaNNaN' || g === 'NaNNaN' || b === 'NaNNaN' ) {
            return null
          }

        return `#${r}${g}${b}`;
      }

      function convert(color) {
        if (color == 10) {
          color = 'A';
        }
        else if (color == 11) {
          color = 'B';
        }
        else if (color == 12) {
          color = 'C';
        }
        else if (color == 13) {
          color = 'D';
        }
        else if (color == 14) {
          color = 'E';
        }
        else if (color == 15) {
          color = 'F';
        }
        return color;
      }

      function computation (color) {
        color = color / 16;
        let r1 = Math.floor(color);
        let r2 = color - r1;
        r2 = r2 * 16;
        r1 = convert(r1);
        r2 = convert(r2);
        color = `${r1}${r2}`;
        return color;
      }

const toRgbBtn = document.querySelector('#toRgbBtn')
const inputHex = document.querySelector('#inputHex')
const rgb = document.querySelector('#rgb')
const resetToRgb = document.querySelector('#resetToRgb')

  toRgbBtn.addEventListener('click', () => {
    toRgbBtn.style.opacity = 0.5
      setTimeout(() => {toRgbBtn.style.opacity = 1}, 50)
          if (convertHexaToRgb(inputHex.value) === null) {
            rgb.textContent = 'Invalid'
          }
          else {
            rgb.textContent = convertHexaToRgb(inputHex.value)
          }
    })

    resetToRgb.addEventListener('click', () => {
      inputHex.value = ''
      rgb.textContent = 'H E X'
    })

      function convertHexaToRgb(hex) {
        hex = hex.toUpperCase();
        let r1 = hex.slice(0, 1);
        let r2 = hex.slice(1, 2);
          r1 = converts(r1);
          r2 = converts(r2);
        let g1 = hex.slice(2, 3);
        let g2 = hex.slice(3, 4);
          g1 = converts(g1);
          g2 = converts(g2);
        let b1 = hex.slice(4, 5);
        let b2 = hex.slice(5, 6);
          b1 = converts(b1);
          b2 = converts(b2);

        let hexR = Number(r1) * 16 + Number(r2);
        let hexG = Number(g1) * 16 + Number(g2);
        let hexB = Number(b1) * 16 + Number(b2);

        let h = `(${hexR}, ${hexG}, ${hexB})`;  
        if (h.includes('NaN')) {
          return null
        }
        else {
          return h
        }
      }
      function converts (position) {
        if(position.includes('A')) {
          position  = position.replaceAll('A', 10);
        }
        else if(position.includes('B')) {
          position  = position.replaceAll('B', 11);
        }
        else if(position.includes('C')) {
          position  = position.replaceAll('C', 12);
        }
        else if(position.includes('D')) {
          position  = position.replaceAll('D', 13);
        }
        else if(position.includes('E')) {
          position  = position.replaceAll('E', 14);
        }
        else if(position.includes('F')) {
          position  = position.replaceAll('F', 15);
        }
        return position;
      }