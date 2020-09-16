class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, fn, id) {
    if (!id) {
      throw new Error("There is no id");
    }

    for (const val of Object.values(this.alarmCollection)) {
      if (val.id === id) {
        console.error("id already exists");
        return;
      }
    }

    this.alarmCollection.push({
      id,
      time,
      fn,
    });
  }

  removeClock(id) {
    this.alarmCollection = Object.values(this.alarmCollection).filter(
      (val) => val.id !== id
    );
    return this.alarmCollection;
  }

  getCurrentFormattedTime() {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    return `${hour}:${minutes}`;
  }
  start() {}
  stop() {}

  printAlarms() {
    this.alarmCollection.forEach((alarm) => {
      console.log(alarm.id + " " + alarm.time);
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }

  checkClock(call) {
    Object.values(call).forEach((time) => {
      if (time.time === call) {
        this.stop();
      }
    });
  }
}
