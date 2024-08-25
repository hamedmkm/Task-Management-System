import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

// تابع برای دریافت داده‌ها از API
const fetcher = (url) => fetch(url).then((res) => res.json());

function TaskDetail() {
  const { id } = useParams(); // دریافت پارامتر id از URL
  const { data, error } = useSWR(`http://localhost:5000/tasks/${id}`, fetcher);

  if (error) return <div>Error loading task: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export default TaskDetail;
