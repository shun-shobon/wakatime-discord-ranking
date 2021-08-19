const SECS_PER_HOUR = 3600;
const SECS_PER_MINUTE = 60;

class Duration {
  private _secs: number;

  constructor(secs: number) {
    this._secs = secs;
  }

  get hours(): number {
    return Math.floor(this._secs / SECS_PER_HOUR);
  }

  get minutes(): number {
    return Math.floor((this._secs % SECS_PER_HOUR) / SECS_PER_MINUTE);
  }

  get secs(): number {
    return (this._secs % SECS_PER_HOUR) % SECS_PER_MINUTE;
  }

  add(duration: Duration): Duration {
    return new Duration(this._secs + duration._secs);
  }
}

export default Duration;
