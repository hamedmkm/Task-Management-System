import React from 'react';
import useSWR from 'swr';

// تابع برای دریافت داده‌ها از API
const fetcher = (url) => fetch(url)
  .then((res) => res.text()) // دریافت پاسخ به صورت متن
  .then((text) => {
    try {
      return JSON.parse(text); // تلاش برای تبدیل متن به JSON
    } catch (error) {
      throw new Error('Error parsing JSON: ' + error.message);
    }
  });
function TaskList() {
  const { data, error } = useSWR('http://localhost:5000/tasks', fetcher);

  if (error) return <div>Error loading tasks: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ul>
      {data.map(task => (
        <li key={task.id}>{task.title}  {task.description}</li>
        
      ))}
    </ul>
  );
}

export default TaskList;
