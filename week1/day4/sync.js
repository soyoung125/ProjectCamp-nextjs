function task1() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("task1");
      resolve();
    }, 1000)
  );
}

function task2() {
  return new Promise((resolve) => {
    console.log("task2");
    resolve();
  });
}

function task3() {
  return new Promise((resolve) => {
    console.log("task3");
    resolve();
  });
}

function task4() {
  return new Promise((resolve) => {
    console.log("task4");
    resolve();
  });
}

task1() //
  .then(() => task2())
  .then(() => task3())
  .then(() => task4)
  .then(() => console.log("모든 작업 끝"));

//promise
const promise = new Promise((resolve, reject) => {
  const isSuccess = true;
  setTimeout(() => {
    isSuccess ? resolve("success") : reject(new Error("fail"));
  }, 3000);
});

promise
  .then((value) => console.log(value))
  .catch((err) => console.error(err))
  .finally(() => console.log("finally"));
console.log("hello");

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber //
  .then(
    (num) =>
      new Promise((_, reject) => {
        reject(num);
      })
  )
  .catch((num) => num)
  .then((num) => num * 3)
  .catch((num) => num)
  .then((num) => console.log(num)); // 6

// async/await
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getSunIcon = async () => {
  await delay(1000);
  return "☀️"; // resolve(☀️)
};

const getWaveIcon = async () => {
  await delay(1000);
  throw new Error("error");
  return "🌊";
};

const getCloudIcon = async () => {
  await delay(1000);
  return "☁️";
};

const getAllIcon = async () => {
  // return getSunIcon() //
  //   .then((sun) => {
  //     return getWaveIcon().then((wave) => {
  //       return getCloudIcon().then((cloud) => {
  //         console.log(sun, wave, cloud);
  //       });
  //     });
  //   });
  // 콜백 지옥이랑 똑같아.. 결국 프로미스 지옥을 만난다

  //해결 방법
  // const sun = await getSunIcon();
  // const wave = await getWaveIcon();
  // const cloud = await getCloudIcon();

  const icons = await Promise.allSettled([
    getSunIcon(),
    getWaveIcon(),
    getCloudIcon(),
  ]);
  console.log(icons);

  console.log(
    icons
      .filter((i) => i.status === "fulfilled")
      .map((icon) => icon.value)
      .join(",")
  );

  // console.log(sun, wave, cloud);
};

getAllIcon();

getSunIcon() //
  .then((sun) => console.log(sun));
