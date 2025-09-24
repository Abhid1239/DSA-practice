function rateLimiter(count, time) {
    this.count = count;
    this.time = time;
    this.queue = [];
    this.timerStarted = false;
    this.used = 0;

    this.addTask = (task) => {
        return new Promise((res, rej) => {
            this.queue.push({
                task,
                res,
                rej,
            });
            this.startTask();
        });
    };
    this.startTime = () => {
        this.timerStarted = true;
        setTimeout(() => {
            this.used = 0;
            this.startTask();
            this.timerStarted = false;
        }, this.time);
    };
    this.startTask = () => {
        if (!this.timerStarted) this.startTime();
        while (this.used < this.count && this.queue.length) {
            let { task, res, rej } = this.queue.shift();
            this.used++;
            task()
                .then((d) => res(d))
                .catch((e) => rej(e))
                .finally(() => {
                    this.startTask();
                });
        }
    };
}

let limit = new rateLimiter(5, 1000);
