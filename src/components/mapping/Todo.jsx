import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
  const todos = [
    {
      id: uuidv4(),
      title: 'Todo App 1',
      description: "This is todo app 1",
      phone: [
        { home: '094054454' },
        { office: '543543503' }
      ]
    },
    {
      id: uuidv4(),
      title: 'Todo App 2',
      description: "This is todo app 2",
      phone: [
        { home: '523489034' },
        { office: '697650978' }
      ]
    },
    {
      id: uuidv4(),
      title: 'Todo App 3',
      description: "This is todo app 3",
      phone: [
        { home: '7786788769' },
        { office: '45352355' }
      ]
    }
  ];

  return (
    <div>
      {todos.map((item) => (
        <div key={item.id} className="bg-blue-400 text-center my-4 p-4 rounded-lg">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div>
            {
              item.phone.map((phone, index) => {
                const key = Object.keys(phone)[0];
                return <p key={index}>{`${key}: ${phone[key]}`}</p>
              })
            }
          </div>
        </div>
      ))
      }
    </div >
  );
}

export default Todo;