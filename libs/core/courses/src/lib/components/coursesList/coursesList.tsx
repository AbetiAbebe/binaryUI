import styles from '../.././core-courses.module.scss';
import React from 'react';
import { Space, Table, Tag, Image } from 'antd';

const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  courseName: string;
  courseDescription: string;
  courseDuration: string;
  //   address: string;
  tags: string[];
  price: string;
  imageUrl: string;
}

const data: DataType[] = [
  {
    key: '1',
    courseName: 'Artificial Intelligence (AI)',
    courseDescription: 'AI Simplified for everyone',
    courseDuration: '14 weeks',
    // address: 'New York No. 1 Lake Park',
    tags: ['Artificial Intelligence (AI)', 'Machine Learning', 'Management'],
    price: '$43',
    imageUrl:
      'https://cdn.pixabay.com/photo/2013/07/12/17/47/shopping-cart-152462_1280.png',
  },
  {
    key: '2',
    courseName: 'Deep Learning Specialization',
    courseDescription:
      'Become a Machine Learning expert. Master the fundamentals of deep learning and break into AI',
    courseDuration: '42 weeks',
    // address: 'London No. 1 Lake Park',
    tags: ['Artificial Neural Network', 'Tensorflow', 'Python Programming'],
    price: '$530',
    imageUrl:
      'https://cdn.pixabay.com/photo/2019/03/21/15/49/work-4071264_1280.png',
  },
  {
    key: '3',
    courseName: 'AI For Business Specialization',
    courseDescription: 'Learn the Fundamentals of AI and Machine Learning.',
    courseDuration: '32 weeks',
    // address: 'Sidney No. 1 Lake Park',
    tags: ['Analytics', 'teacher', 'Fraud Prevention'],
    price: '$24',
    imageUrl:
      'https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_1280.jpg',
  },
];

const CourseList: React.FC = () => (
  <Table className={styles['course-item']} dataSource={data}>
    <Column
      title=""
      key="action"
      render={(_: any, record: DataType) => (
        <Space size="middle">
          <Image
            preview={false}
            width={100}
            height={100}
            src={record.imageUrl}
            key="imageUrl"
          />
        </Space>
      )}
    />

    <Column
      title="Course Name"
      className={styles['course-name']}
      dataIndex="courseName"
      key="courseName"
    />
    <Column
      className={styles['course-description']}
      title="Course Description"
      dataIndex="courseDescription"
      key="courseDescription"
    />

    <Column
      title="Course Duration"
      dataIndex="courseDuration"
      key="courseDuration"
    />

    <Column
      title="Skills you will gain"
      dataIndex="tags"
      key="tags"
      render={(tags: string[]) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />

    <Column
      className={styles['price']}
      title=""
      dataIndex="price"
      key="price"
    />

    <Column
      title="Action"
      key="action"
      render={(_: any, record: DataType) => (
        <Space size="middle">
          <a>Update</a>
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
);

export default CourseList;