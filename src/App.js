import React from 'react';
import './App.css';
import { Select, Space, Typography } from 'antd';
import { useState } from 'react';

function App() {

const [salaryFrom, setSalaryFrom] = useState(null)
const [salaryTo, setSalaryTo] = useState(null)

const SALARY_RANGE = [
  1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000
];
  return (
  <div className="App">
  <Typography.Title style={{ marginTop: 100}}>Cari gaji yang diinginkan!</Typography.Title>
    <Space direction="horizontal" size={12}>
    <Typography.Text>Dari</Typography.Text>
      <Select 
      value={salaryFrom}
      onChange={(value) =>{
        setSalaryFrom(value);
      if (value > salaryTo) {
        setSalaryTo(null);
        }
      }}
      placeholder="Gaji dari " 
      options={SALARY_RANGE.map((salary) => {
        return {
          label: `$${salary}`,
          value: salary,
        };
      })}/>
      <Typography.Text>Ke</Typography.Text>
      <Select 
      value={salaryTo}
      onChange={(value) =>
      {setSalaryTo(value)}}
      placeholder="Gaji ke " 
      options={SALARY_RANGE.map((salary) => {
        return {
          label: `$${salary}`,
          value: salary,
        };
      }).filter(salary=>salary.value>=salaryFrom)}

      />
    </Space>
  </div>
  );
};
export default App;