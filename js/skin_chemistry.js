window.requestAnimationFrame(function () {
  var game = new GameManager(8, KeyboardInputManager, HTMLActuator, LocalScoreManager);
  game.actuator.addTile = function (tile) {
    var self = this;
    var wrapper   = document.createElement("div");
    var inner     = document.createElement("div");
    var position  = tile.previousPosition || { x: tile.x, y: tile.y };
    positionClass = this.positionClass(position);
    var classes = ["tile", "tile-" + tile.value, positionClass];
    this.applyClasses(wrapper, classes);
    inner.classList.add("tile-inner");
    switch (tile.value) {
    case 2:
      inner.textContent = "H";
      break;
    case 4:
      inner.textContent = "He";
      break;
    case 8:
      inner.textContent = "Li";
      break;
    case 16:
      inner.textContent = "Be";
      break;
    case 32:
      inner.textContent = "B";
      break;
    case 64:
      inner.textContent = "C";
      break;
    case 128:
      inner.textContent = "N";
      break;
    case 256:
      inner.textContent = "O";
      break;
    case 512:
      inner.textContent = "F";
      break;
    case 1024:
      inner.textContent = "Ne";
      break;
    case 2048:
      inner.textContent = "Na";
      break;
    case 4096:
      inner.textContent = "Mg";
      break;
    case 8192:
      inner.textContent = "Al";
      break;
    case 16384:
      inner.textContent = "Si";
      break;
    case 32768:
      inner.textContent = "P";
      break;
    case 65536:
      inner.textContent = "S";
      break;
    case 131072:
      inner.textContent = "Cl";
      break;
    case 262144:
      inner.textContent = "Ar";
      break;
    case 524288:
      inner.textContent = "K";
      break;
    case 1048576:
      inner.textContent = "Ca";
      break;
    case 2079152:
      inner.textContent = "Sc";
      break;
    case 4194304:
      inner.textContent = "Ti";
      break;
    case 8388608:
      inner.textContent = "V";
      break;
    case 16777216:
      inner.textContent = "Cr";
      break;
    case 33554432:
      inner.textContent = "Mn";
      break;
    case 67108864:
      inner.textContent = "Fe";
      break;
    case 134217728:
      inner.textContent = "Co";
      break;
    case 268435456:
      inner.textContent = "Ni";
      break;
    case 536870912:
      inner.textContent = "Cu";
      break;
    case 1073741824:
      inner.textContent = "Zn";
      break;
    case 2147483648:
      inner.textContent = "Ga";
      break;
    case 4294967296:
      inner.textContent = "Ge";
      break;
    case 8589934592:
      inner.textContent = "As";
      break;
    case 17179869184:
      inner.textContent = "Se";
      break;
    case 34359738368:
      inner.textContent = "Br";
      break;
    case 68719476736:
      inner.textContent = "Kr";
      break;
    case 137438953472:
      inner.textContent = "Rb";
      break;
    case 274877906944:
      inner.textContent = "Sr";
      break;
    case 549755813888:
      inner.textContent = "Y";
      break;
    case 1099511627776:
      inner.textContent = "Zr";
      break;
    }
    if (tile.previousPosition) {
      window.requestAnimationFrame(function () {
        classes[2] = self.positionClass({ x: tile.x, y: tile.y });
        self.applyClasses(wrapper, classes);
      });
    } else if (tile.mergedFrom) {
      classes.push("tile-merged");
      this.applyClasses(wrapper, classes);
      tile.mergedFrom.forEach(function (merged) {
        self.addTile(merged);
      });
    } else {
      classes.push("tile-new");
      this.applyClasses(wrapper, classes);
    }
    wrapper.appendChild(inner);
    this.tileContainer.appendChild(wrapper);
    };
    game.restart();
});
