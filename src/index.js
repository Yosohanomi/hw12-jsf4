class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.timerRef = document.querySelector(this.selector);

    this.daysRef = this.timerRef.querySelector('[data-value="days"]');
    this.hoursRef = this.timerRef.querySelector('[data-value="hours"]');
    this.minsRef = this.timerRef.querySelector('[data-value="mins"]');
    this.secsRef = this.timerRef.querySelector('[data-value="secs"]');

    this.updateTimer();
    this.start();
  }

  start() {
    setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  updateTimer() {
    const currentTime = new Date();
    const time = this.targetDate - currentTime;

    if (time <= 0) {
      this.daysRef.textContent = "0";
      this.hoursRef.textContent = "00";
      this.minsRef.textContent = "00";
      this.secsRef.textContent = "00";
      document.body.style.backgroundImage = "url('./images/newyear.gif')";
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      return;
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.daysRef.textContent = days;
    this.hoursRef.textContent = hours < 10 ? "0" + hours : hours;
    this.minsRef.textContent = mins < 10 ? "0" + mins : mins;
    this.secsRef.textContent = secs < 10 ? "0" + secs : secs;
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 1, 2026"),
});


