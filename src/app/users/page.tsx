type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UserPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
  const response = await fetch('https://jsonplaceholder.typicode.com/users12');
  const users = await response.json();
  console.log(users);

  return (
    <>
      {users.map((user: User) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ))}
    </>
  );
};