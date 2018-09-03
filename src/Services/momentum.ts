export class Momentum {
  howMuch = 40; // change this for greater or lesser momentum
  minDrift = 1; // minimum drift after a drag move
  dXa = 0;
  dYa = 0;
  dTa = 0;
  start = (Xa, Ya, Ta) => {
    this.dXa = Xa;
    this.dYa = Ya;
    this.dTa = Ta;
  }
  end = (Xb, Yb, Tb) => {
    const Xa = this.dXa;
    const Ya = this.dYa;
    const Ta = this.dTa;
    var dDist = Math.sqrt(Math.pow(Xa - Xb, 2) + Math.pow(Ya - Yb, 2));
    var dTime = Tb - Ta;
    var dSpeed = dDist / dTime;
    dSpeed = Math.round(dSpeed * 100) / 100;
    var distX = Math.abs(Xa - Xb);
    var directionX = (Xa - Xb) > 0 ? 1 : -1;
    var directionY = (Ya - Yb) > 0 ? -1 : 1;
    var distY = Math.abs(Ya - Yb);
    var dVelX = (this.minDrift + (Math.round(distX * dSpeed * this.howMuch / (distX + distY))));
    var dVelY = (this.minDrift + (Math.round(distY * dSpeed * this.howMuch / (distX + distY))));
    return {
      x: dVelX * directionX,
      y: dVelY * directionY
    };
  };
}