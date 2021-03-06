export interface ChartOptions {
  responsive: boolean;
  maintainAspectRatio: boolean;
  legend: Legend;
  scales: Scales;
}

export interface Scales {
  yAxes: Axes[];
  xAxes: Axes[];
}

export interface Ticks {
  fontColor: string;
  beginAtZero?: boolean;
  stepSize?: number;
  callback?: (n: number) => void;
}

export interface Axes {
  ticks: Ticks;
}

export interface Legend {
  labels?: Labels;
  id?: string;
  display?: boolean;
}

export interface Labels {
  fontColor: string;
  fontSize: number;
}
