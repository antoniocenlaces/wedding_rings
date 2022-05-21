export class Ring {
  public profile: RingProfile;
  public dimensions: RingDimensions;
  public preciousMetal: RingPreciousMetal;
  public grooves: RingGrooves;

  constructor() {
    this.profile = new RingProfile();
    this.dimensions = new RingDimensions();
    this.preciousMetal = new RingPreciousMetal();
    this.grooves = new RingGrooves();
  }
}

export class RingProfile {
  public index: number;

  constructor() {
    this.index = 1;
  }
}

export class RingDimensions {
  public width: number;
  public height: number;
  public intDiameter: number;

  constructor() {
    this.width = 8;
    this.height = 1.5;
    this.intDiameter = 20;
  }
}

export class RingPreciousMetal {
  public partitionMode: number;

  public ringPreciousMetalSingleColoured: RingPreciousMetalSingleColoured;
  public ringPreciousMetalBiColoured: RingPreciousMetalBiColoured;

  constructor() {
    this.partitionMode = 1;
    this.ringPreciousMetalSingleColoured =
      new RingPreciousMetalSingleColoured();
    this.ringPreciousMetalBiColoured = new RingPreciousMetalBiColoured();
  }
}

export class RingPreciousMetalSingleColoured {
  public partitionUnit: RingPreciousMetalPartitionUnit;

  constructor() {
    this.partitionUnit = new RingPreciousMetalPartitionUnit();
  }
}

export class RingPreciousMetalBiColoured {
  public partitionUnit1: RingPreciousMetalPartitionUnit;
  public partitionUnit2: RingPreciousMetalPartitionUnit;

  public divisionMode: string; // "LINEAL", "WAVE", "DIAGONAL";

  public partitionUnitPercentage1 = 0.5;
  public partitionUnitPercentage2 = 0.5;

  public wavesNum = 2;
  public waveHeight = 0.3;

  constructor() {
    this.partitionUnit1 = new RingPreciousMetalPartitionUnit();
    this.partitionUnit2 = new RingPreciousMetalPartitionUnit();
    this.divisionMode = 'LINEAL';
  }
}

export class RingPreciousMetalPartitionUnit {
  public colour: string;
  public surface: string;
  public purity: string;

  constructor() {
    this.colour = 'YELLOW_GOLD';
    this.surface = 'POLISHED';
    this.purity = '14CT';
  }
}

export class RingGrooves {
  public grooveShape: number;

  public ringGroovesWithout: RingGroovesWithout;
  public ringGroovesVShape: RingGroovesVShape;
  public ringGroovesUShape: RingGroovesUShape;
  public ringGroovesSquareShape: RingGroovesSquareShape;

  constructor() {
    this.grooveShape = 1;
    this.ringGroovesWithout = new RingGroovesWithout();
    this.ringGroovesVShape = new RingGroovesVShape();
    this.ringGroovesUShape = new RingGroovesUShape();
    this.ringGroovesSquareShape = new RingGroovesSquareShape();
  }
}

export class RingGroovesWithout {}

export class RingGroovesVShape {
  public width: string;
  public depth: string;
  public surface: string;

  constructor() {
    this.width = '0.20 mm';
    this.depth = '0.10 mm';
    this.surface = 'Polished';
  }
}

export class RingGroovesUShape {
  public width: string;
  public depth: string;
  public surface: string;

  constructor() {
    this.width = '0.50 mm';
    this.depth = '0.25 mm';
    this.surface = 'Polished';
  }
}

export class RingGroovesSquareShape {
  public width: string;
  public depth: string;
  public surface: string;

  constructor() {
    this.width = '0.50 mm';
    this.depth = '0.10 mm';
    this.surface = 'Polished';
  }
}

/*
export class RingGrooveShape {
    public width: string;
    public depth: string;
    public surface: string;

    constructor() {
        this.width = "";
        this.depth = "";
        this.surface = "";
    }
}
*/
