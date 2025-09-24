
// Okh, got it i'll try to code it then:
function TaskManager(count) {
    this.count = count;
    this.queue = [];
    this.running = 0;

    this.addTask = (task) => {
        return new Promise((res, rej) => {
            this.queue.push({ task, res, rej });
            this.executeTask();
        });
    };

    this.executeTask = () => {
        if (this.length) {
            for (let i = 0; i < this.count - this.running; i++) {
                if (this.queue.length) {
                    this.running++;
                    let { task, res, rej } = this.queue.shift();
                    task()
                        .then((data) => res(data))
                        .catch((err) => rej(err))
                        .finally(() => {
                            this.running--;
                            this.executeTask();
                        });
                }
            }
        }
    };
}
const manager = new TaskManager(4);
// max 4 workers manager.addTask(taskFn);

function TaskManager2(count) {
    this.count = count;
    this.queue = [];
    this.running = 0;

    this.addTask = (task) => {
        return new Promise((res, rej) => {
            this.queue.push({
                task,
                res,
                rej,
            });
            this._execute();
        });
    };

    this._execute = () => {
        while (this.count > this.running && this.queue.length > 0) {
            this.running++;
            let { task, res, rej } = this.queue.shift();
            task()
                .then((v) => res(v))
                .catch((v) => rej(v))
                .finally(() => {
                    this.running--;
                    this._execute();
                });
        }
    };
}

let tasker = new TaskManager2(5);

let work = (time, value) => () =>
    new Promise((res, rej) => {
        setTimeout(() => {
            res(value);
        }, time);
    });

tasker.addTask(work(500, "hey")).then((v) => console.log(v));
tasker.addTask(work(2500, "how")).then((v) => console.log(v));
tasker.addTask(work(100, "are")).then((v) => console.log(v));
tasker.addTask(work(300, "you")).then((v) => console.log(v));
tasker.addTask(work(900, "bor")).then((v) => console.log(v));
tasker.addTask(work(1200, "?")).then((v) => console.log(v));
