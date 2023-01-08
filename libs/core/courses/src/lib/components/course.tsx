import styles from './core-courses.module.scss';

import { Button, Checkbox, Form, Input, Radio, Space, Switch, Table } from 'antd';
import type { RadioChangeEvent } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import type { ExpandableConfig, TableRowSelection } from 'antd/es/table/interface';
import CoursesList  from './coursesList/coursesList';
import Addcourse from './addcourse/addcourse';

interface DataType {
  key: number;
  Coursename: string;
  price: number;
  duration: string;
  author: string;
}



export function Course() {
  return (
    <div>
      <div>
        <CoursesList />
      </div>
     
    </div>
  );
}

export default Course;
