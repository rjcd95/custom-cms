const getInitialData = () => {
  const authors = ["René Cortez", "John Smith", "Jane Doe", "Bob Johnson", "Maria Rodriguez"];
  const now = new Date();
  const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);

  const data = [];

  for (let i = 0; i < 20; i++) {
    const id = i + 1;
    const title = `Title ${id}`;
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis nulla vel est porttitor suscipit in et lorem. Vivamus eget pharetra tellus. Sed vitae tellus eget turpis sodales hendrerit in et dolor. Sed malesuada, ipsum eu lacinia blandit, elit elit congue elit, eu faucibus lorem enim a justo. Nullam rutrum mi in purus suscipit, vel elementum odio convallis. Sed nec ipsum vel mauris tempor iaculis. Praesent pulvinar turpis sed lectus bibendum, eget vulputate metus tincidunt. Donec malesuada eleifend nulla non scelerisque.';
    const author = authors[Math.floor(Math.random() * authors.length)];
    const date = new Date(Math.random() * (tomorrow.getTime() - yesterday.getTime()) + yesterday.getTime());

    data.push({ id, title, content, author, date });
  }

  return data;
};
  
export default getInitialData;
